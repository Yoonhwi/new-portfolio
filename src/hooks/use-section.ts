import { createContext, useContext } from "react";

export type Section = Record<string, number>;

export const SectionContext = createContext<{
  currentSection: string;
  registerSection: (name: string, elem: HTMLElement) => void;
  scrollToSection: (section: string) => void;
} | null>(null);

const useSection = () => {
  const value = useContext(SectionContext);

  if (!value) {
    throw new Error("useSection must be used within a SectionProvider");
  }

  return value;
};

export default useSection;
