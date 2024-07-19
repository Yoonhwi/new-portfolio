import { SectionName } from "@/constants";
import { useScrollStore } from "@/store";
import { useCallback, useEffect } from "react";

interface useResizeOffsetTopProps {
  ref: React.MutableRefObject<HTMLElement | null>;
  name: SectionName;
}

// resize가 발생할 때마다 section의 offsetTop을 계산하여 store에 저장하는 훅입니다.

const useResizeOffsetTop = ({ ref, name }: useResizeOffsetTopProps) => {
  const { registerSection } = useScrollStore(["registerSection"]);

  const updateSection = useCallback(() => {
    if (!ref.current) return;
    registerSection(name, ref.current.offsetTop);
  }, [name, ref, registerSection]);

  useEffect(() => {
    updateSection();
    window.addEventListener("resize", updateSection);
    return () => window.removeEventListener("resize", updateSection);
  }, [ref, updateSection]);
};

export default useResizeOffsetTop;
