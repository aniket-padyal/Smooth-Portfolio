import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Marquee from "../scrollEffects/Marquee";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    id: "01",
    title: "Imitation Jewellery Store",
    tag: "E-commerce · React",
    image: "https://cdn.prod.website-files.com/6990c09b4ef3c1f153c551d9/6998821457b696838c612146_Mockup%2021.avif",
    link: "https://your-live-link.com",
  },
  {
    id: "02",
    title: "Habit Tracker",
    tag: "React · Tailwind",
    image: "/projects/habit.jpg",
    link: "https://your-live-link.com",
  },
  {
    id: "03",
    title: "Another Project",
    tag: "React · GSAP",
    image: "/projects/third.jpg",
    link: "https://your-live-link.com",
  },
];

const Projects = () => {
  const root = useRef(null);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      /* Only the horizontal gallery lives here now */
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current;
        const getDistance = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-pin",
            start: "top top",
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            snap: {
              snapTo: 1 / (projects.length - 1),
              duration: { min: 0.2, max: 0.6 },
              ease: "power1.inOut",
            },
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root}>
      {/* Marquee */}
      <div>
        <Marquee
          text="Work — Projects"
          className="py-2 text-lg font-semibold uppercase"
          repeat={12}
        />
      </div>

      {/* Gallery (unchanged) */}
      <div className="gallery-pin overflow-hidden md:h-screen">
       <div
          ref={trackRef}
          className="flex flex-col md:h-full md:w-max md:flex-row"
        >
          {projects.map(({ id, title, tag, image, link }) => (
            <div
              key={id}
              className="relative flex items-center justify-center overflow-hidden px-6 py-16 md:h-screen md:w-screen md:shrink-0 md:py-0"
            >
              {/* Blurred full-bleed backdrop */}
              <img
                src={image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl brightness-50 "
              />

              {/* Centered project card */}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative z-10 block w-full max-w-lg text-white"
              >
                <div className="aspect-4/3 overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <span className="text-sm opacity-70">{id}</span>
                </div>
                <p className="text-sm opacity-70">{tag}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;