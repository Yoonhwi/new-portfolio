export type SectionName = "INTRO" | "ABOUT" | "STACKS" | "PROJECTS" | "CONTACT";

export type Section = Record<SectionName, number>;

interface NavLinkProps {
  name: SectionName;
}

export const navLinks: NavLinkProps[] = [
  { name: "INTRO" },
  { name: "ABOUT" },
  { name: "STACKS" },
  { name: "PROJECTS" },
  { name: "CONTACT" },
];
