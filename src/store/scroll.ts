import { Section, SectionName } from "@/constants";
import { create } from "zustand";
import { useShallow } from "./hooks";

interface T {
  sections: Section;
  registerSection: (section: SectionName, offsetTop: number) => void;
}

export const scrollStore = create<T>((set) => ({
  sections: {
    About: 0,
    Projects: 0,
    Contact: 0,
  },

  registerSection: (section: SectionName, offsetTop: number) => {
    set((state) => ({
      sections: { ...state.sections, [section]: offsetTop },
    }));
  },
}));

export const useScrollStore = <K extends keyof T>(keys: K[]) => {
  return useShallow(scrollStore, keys);
};
