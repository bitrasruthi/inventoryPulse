import { DateRange } from "@mui/lab";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { momentDateFormatUtil } from "../helpers/Util";

const customStorage = (storage: Storage) => {
  return {
    getItem: (name: string) => {
      const value = storage.getItem(name);
      return value ? JSON.parse(value) : null;
    },
    setItem: (name: string, value: any) => {
      storage.setItem(name, JSON.stringify(value));
    },
    removeItem: (name: string) => {
      storage.removeItem(name);
    },
  };
};

type State = {
  chipList: [{ id: number; name: string }] | any;
  selectedFilterItemList: [];
  dateRangeFilter: [Date | null, Date | null];
};

type Actions = {
  updateFilters: (filterItem: { id: number; name: string }) => void;
  setDateRangeFilter: (dateRangeFilter: DateRange<Date>) => void;
  removeDateRangeFilter: () => void;
  getChipListWithDateRange: () => void;
};

const useFiltersStore = create<State & Actions>()(
  persist(
    (set) => ({
      selectedFilterItemList: [],
      dateRangeFilter: [null, null],
      chipList: [],
      setDateRangeFilter: (dateRangeFilter: DateRange<Date>) => {
        set({
          dateRangeFilter,
        });
      },
      removeDateRangeFilter: () => {
        set({ dateRangeFilter: [null, null] });
      },
      getChipListWithDateRange: () => {
        set((state: any) => {
          if (
            state.dateRangeFilter[0] !== null &&
            state.dateRangeFilter[1] !== null
          ) {
            const dateRange = {
              id: -1,
              name: `from: ${momentDateFormatUtil(
                state.dateRangeFilter[0]
              )} - to: ${momentDateFormatUtil(state.dateRangeFilter[1])}`,
            };

            return {
              ...state,
              chipList: [...state.selectedFilterItemList, dateRange],
            };
          } else {
            return {
              ...state,
              chipList: [...state.selectedFilterItemList],
            };
          }
        });
      },
      updateFilters: (filterItem: { id: number; name: string }) => {
        set((state: any) => {
          const itemExists = state.selectedFilterItemList?.some(
            (item: any) => item.id === filterItem?.id
          );

          if (itemExists) {
            return {
              ...state,
              selectedFilterItemList: state.selectedFilterItemList.filter(
                (item: any) => item.id !== filterItem?.id
              ),
            };
          } else {
            return {
              ...state,
              selectedFilterItemList: [
                ...state.selectedFilterItemList,
                filterItem,
              ],
            };
          }
        });
      },
    }),
    {
      name: "filters",
      storage: customStorage(sessionStorage),
    }
  )
);

export default useFiltersStore;
