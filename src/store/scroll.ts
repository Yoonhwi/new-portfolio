import { Section, SectionName } from "@/constants";
import { create } from "zustand";
import { useShallow } from "./hooks";

interface T {
  sections: Section;
  registerSection: (section: SectionName, offsetTop: number) => void;
}

export const scrollStore = create<T>((set) => ({
  sections: {
    INTRO: 0,
    ABOUT: 0,
    PROJECTS: 0,
    CONTACT: 0,
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
