// store/loadingStore.ts
import create from "zustand";

type LoadingStore = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  modelLoaded: boolean;
  setModelLoaded: (value: boolean) => void;
};

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: true,
  setIsLoading: (value) => set({ isLoading: value }),
  modelLoaded: false,
  setModelLoaded: (value) => set({ modelLoaded: value }),
}));
