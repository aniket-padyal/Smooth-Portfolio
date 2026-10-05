
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const TextReveal = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useLayoutEffect(() => {
    let split

    const ctx = gsap.context(() => {
      split = new SplitText(textRef.current, { type: "words" })

      gsap.fromTo(
        split.words,
        { opacity: 0.15 }, // faded white
        {
          opacity: 1,      // solid white
          ease: "none",
          stagger: 0.1,    // words light up one after another
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",   // starts as the text enters the screen
            end: "bottom 50%",  // finished when the text's bottom hits the middle
            scrub: true,
          },
        }
      )
    }, sectionRef)

    return () => {
      ctx.revert()
      split?.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="flex min-h-screen w-full items-center bg-bg px-6 py-32 text-white md:px-16"
    >
      <p
        ref={textRef}
        className="text-[8vw] font-semibold leading-[1.05] tracking-tight md:text-[3.5vw] text-center"
      >
      Designs and builds performance-driven digital experiences. Combining a strong background in visual design with modern frontend development, wireframes are converted into clean, interactive, and responsive web products.
      </p>
      
    </section>
    
  )
  
}

export default TextReveal