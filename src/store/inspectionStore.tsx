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
  currentStep: number;
};

type Actions = {
  setCurrentStep: (currentStep: number) => void;
};

const useInspectionStore = create<State & Actions>()(
  persist(
    (set) => ({
      currentStep: 0,
      setCurrentStep: (currentStep: number) => {
        set({
          currentStep,
        });
      },
    }),
    {
      name: "inspections",
      storage: customStorage(sessionStorage),
    }
  )
);

export default useInspectionStore;
