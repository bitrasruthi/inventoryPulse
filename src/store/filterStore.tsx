import { DateRange } from "@mui/lab";
import { create } from "zustand";
import { persist } from "zustand/middleware";

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
  selectedFilterItemList: [];
  dateRangeFilter: [Date | null, Date | null];
  updateFilters: (filterItem: { id: number; name: string }) => void;
  setDateRangeFilter: (dateRangeFilter: DateRange<Date>) => void;
  removeDateRangeFilter: () => void;
};

const useFiltersStore = create<State>()(
  persist(
    (set) => ({
      selectedFilterItemList: [],
      dateRangeFilter: [null, null],
      setDateRangeFilter: (dateRangeFilter: DateRange<Date>) => {
        set({
          dateRangeFilter,
        });
      },
      removeDateRangeFilter: () => {
        set({ dateRangeFilter: [null, null] });
      },
      // getChipListWithDateRange: () => {
      //   set((state: any) => {
      //     if (
      //       state.dateRangeFilter[0] !== null &&
      //       state.dateRangeFilter[1] !== null
      //     ) {
      //       const dateRange = {
      //         id: -1,
      //         name: `from: ${momentDateFormatUtil(
      //           state.dateRangeFilter[0]
      //         )} - to: ${momentDateFormatUtil(state.dateRangeFilter[1])}`,
      //       };

      //       return [...state.selectedFilterItemList, dateRange] as [
      //         { id: number; name: string }
      //       ];
      //     } else {
      //       return state.selectedFilterItemList;
      //     }
      //   });
      // },
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
      storage: customStorage(localStorage),
    }
  )
);

export default useFiltersStore;
