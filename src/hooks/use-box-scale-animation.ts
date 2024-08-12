import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useBoxScaleAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, {
      opacity: 0,
      scale: 1.1,
      transform: "scale(1.1)",
    });

    const animation = gsap.to(el, {
      opacity: 1,
      scale: 1,
      duration: 1,

      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 80%" },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return ref;
};

export default useBoxScaleAnimation;
