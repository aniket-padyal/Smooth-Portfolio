import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Marquee = ({
  text,
  className = "",
  duration = 30,
  reverse = false,
  repeat = 8,
}) => {
  const wrapper = useRef(null);
  const track = useRef(null);

  useGSAP(
    () => {
      // fromTo makes the "reverse" version loop the opposite way
      const loop = gsap.fromTo(
        track.current,
        { xPercent: reverse ? -50 : 0 },
        { xPercent: reverse ? 0 : -50, repeat: -1, duration, ease: "none" }
      );

      ScrollTrigger.create({
        trigger: wrapper.current,
        start: "top bottom",
        end: "max", // works even when the footer is the last thing on the page
        onUpdate: (self) => {
          gsap.to(loop, {
            timeScale: self.direction * 3,
            duration: 0.2,
            overwrite: true,
            onComplete: () =>
              gsap.to(loop, { timeScale: self.direction, duration: 1 }),
          });
        },
      });
    },
    { scope: wrapper }
  );

  return (
    <div ref={wrapper} className="overflow-hidden">
      <div ref={track} className="flex w-max whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0" aria-hidden={half === 1}>
            {Array.from({ length: repeat }).map((_, i) => (
              <span key={i} className={`px-6 ${className}`}>
                {text} 
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;