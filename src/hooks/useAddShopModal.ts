import { create } from "zustand";

interface IAddShopModalStore {
  data: string;
  isOpen: boolean;
  setData: (data: string) => void;
  close: () => void;
  open: () => void;
  toggle: () => void;
}

export const useAddShopModal = create<IAddShopModalStore>((set) => ({
  data: "",
  isOpen: false,
  setData: (data) => set(() => ({ data })),
  close: () => set(() => ({ isOpen: false })),
  open: () => set(() => ({ isOpen: true })),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
