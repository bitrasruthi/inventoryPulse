import create from "zustand";
import { persist } from "zustand/middleware";

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
