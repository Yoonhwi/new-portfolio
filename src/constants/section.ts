export type SectionName = "INTRO" | "ABOUT" | "PROJECTS" | "CONTACT";

export interface Section {
  [name: string]: number;
}
