import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useTextAnimation = (stagger = 0.05) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.innerText;
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      newText += "<span style='display: inline-block;'>";
      newText += text[i] === " " ? "&nbsp;" : text[i];
      newText += "</span>";
    }
    el.innerHTML = newText;

    const spans = el.querySelectorAll("span");

    const animation = gsap.from(spans, {
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "circ.out",
      stagger,

      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [stagger]);

  return ref;
};

export default useTextAnimation;
