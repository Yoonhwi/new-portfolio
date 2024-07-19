import { SectionName } from "@/constants";
import { useScrollStore } from "@/store";
import { useEffect, useState } from "react";

const useCurrentSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentSection, setCurrentSection] = useState<SectionName>("INTRO");
  const { sections } = useScrollStore(["sections"]);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const clientHeight = window.innerHeight;

    const determineCurrentSection = () => {
      const sectionEntries = Object.entries(sections);
      let maxVisibleHeight = 0;
      let mostVisibleSection = sectionEntries[0][0];

      console.log("sectionEntries", sectionEntries);

      sectionEntries.forEach(([sectionName, sectionOffset], index) => {
        const nextSectionOffset =
          index < sectionEntries.length - 1
            ? sectionEntries[index + 1][1]
            : Infinity;

        const sectionStart = Math.max(sectionOffset - scrollPosition, 0);
        const sectionEnd = Math.min(
          nextSectionOffset - scrollPosition,
          clientHeight
        );
        const visibleHeight = Math.max(0, sectionEnd - sectionStart);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          mostVisibleSection = sectionName;
        }
      });

      setCurrentSection(mostVisibleSection as SectionName);
    };

    determineCurrentSection();
  }, [scrollPosition, sections]);

  return currentSection;
};

export default useCurrentSection;
