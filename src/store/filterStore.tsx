import { DateRange } from "@mui/lab";
import create from "zustand";
import { persist } from "zustand/middleware";
import { momentDateFormatUtil } from "../helpers/Util";

const createCustomStorage = (storage: Storage) => {
  return {
    getItem: (name: string) => storage.getItem(name),
    setItem: (name: string, value: string) => storage.setItem(name, value),
    removeItem: (name: string) => storage.removeItem(name),
  };
};

const FiltersStore = create<any>(
  persist(
    (set) => ({
      selectedFilterItemList: [],
      dateRangeFilter: [null, null],
      setDateRangeFilter: (dateRangeFilter: DateRange<unknown>) => {
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
      getStorage: () => createCustomStorage(localStorage),
    }
  )
);

export default FiltersStore;
