import { SectionContext } from "@/hooks/useSection";
import { useCallback, useEffect, useRef, useState } from "react";
import DefaultLayoutDotnav from "./default-layout-dotnav";
import DefaultLayoutHeader from "./default-layout-header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const sectionsRef = useRef<{ [key: string]: HTMLElement }>({});
  const [currentSection, setCurrentSection] = useState<string>("INTRO");
  const [sectionOffsets, setSectionOffsets] = useState<Record<string, number>>(
    {}
  );

  // 윈도우가 리사이즈될 때마다 각 섹션의 offsetTop을 계산하여 저장합니다.
  useEffect(() => {
    const handleResize = () => {
      const newSections = Object.entries(sectionsRef.current).reduce(
        (acc, [k, v]) => {
          if (!v) return acc;
          return { ...acc, [k]: v.offsetTop };
        },
        {} as Record<string, number>
      );
      setSectionOffsets(newSections);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 윈도우에 스크롤 이벤트를 등록합니다.
  // 스크롤 이벤트가 발생할 때마다 현재 보이는 섹션을 계산하여 저장합니다.
  useEffect(() => {
    const determineCurrentSection = () => {
      const clientHeight = window.innerHeight;

      const scrollPosition = window.scrollY;

      const sectionEntries = Object.entries(sectionOffsets);

      if (sectionEntries.length === 0) return;

      let maxVisibleHeight = 0;
      let mostVisibleSection = sectionEntries[0][0];

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

      setCurrentSection(mostVisibleSection);
    };

    window.addEventListener("scroll", determineCurrentSection);

    return () => window.removeEventListener("scroll", determineCurrentSection);
  }, [sectionOffsets]);

  const registerSection = useCallback(
    (name: string, elem: HTMLElement) => {
      sectionsRef.current = { ...sectionsRef.current, [name]: elem };
    },
    [sectionsRef]
  );

  const scrollToSection = useCallback(
    (name: string) => {
      window.scrollTo({ top: sectionOffsets[name], behavior: "smooth" });
    },
    [sectionOffsets]
  );

  return (
    <SectionContext.Provider
      value={{ currentSection, registerSection, scrollToSection }}
    >
      <DefaultLayoutHeader />
      <DefaultLayoutDotnav />
      {children}
    </SectionContext.Provider>
  );
};

export default DefaultLayout;
