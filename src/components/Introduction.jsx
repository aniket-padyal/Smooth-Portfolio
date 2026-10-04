import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"

const skills = [
  { label: "Next", style: "bg-white text-black" },
  { label: "React", style: "bg-neutral-800 text-white" },
  { label: "Tailwind", style: "text-white" },
  { label: "GSAP", style: "bg-neutral-800 text-white" },
]

const Introduction = () => {
  const cardRef = useRef(null)
  const shadowRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // floating: up/down + slight sway
      gsap.to(cardRef.current, {
        y: -18,
        rotation: 1.2,
        duration: 2.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      })

      // shadow shrinks and fades as the card rises
      gsap.to(shadowRef.current, {
        scaleX: 0.75,
        opacity: 0.15,
        duration: 2.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div
        ref={cardRef}
        className="w-60 sm:w-80 overflow-hidden rounded-xl border border-neutral-800 bg-surface px-5 pb-6 pt-4 text-white will-change-transform"
      >
        {/* photo with selection handles */}
        <div className="relative border border-violet-500 m-2 sm:m-8">
          <img
            className="aspect-square w-full object-cover"
            src="https://4kwallpapers.com/images/wallpapers/lionel-messi-soccer-1920x1200-9789.jpeg"
            alt="Aniket's profile photo"
          />
          {["-left-1 -top-1", "-right-1 -top-1", "-left-1 -bottom-1", "-right-1 -bottom-1"].map((pos) => (
            <span
              key={pos}
              className={`absolute ${pos} h-2 w-2 border border-violet-500 bg-white`}
            />
          ))}
        </div>

        {/* name + role */}
        <h1 className="mt-6 text-center text-4xl font-light tracking-wide">Aniket Padyal</h1>
        <p className="mt-3 text-center font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
          [Frontend Developer]
        </p>

        {/* skill chips */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {skills.map((s) => (
            <span key={s.label} className={`rounded-full px-4 py-1 text-[8px] sm:text-xs ${s.style}`}>
              {s.label}
            </span>
          ))}
        </div>

        {/* tear line with side notches */}
        <div className="relative my-6">
          <div className="border-t border-dashed border-neutral-600" />
          <span className="absolute -left-8 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-neutral-900" />
          <span className="absolute -right-8 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-neutral-900" />
        </div>

        {/* footer */}
        <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-widest text-neutral-500">
          <span>Code by Aniket©</span>
          <span>2026</span>
        </div>
      </div>

      {/* ground shadow */}
      <div
        ref={shadowRef}
        className="mt-10 h-4 w-48 rounded-full bg-black/60 blur-xl sm:w-64"
      />
    </div>
  )
}

export default Introduction