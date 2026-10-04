
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const ScrollMarquee = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useLayoutEffect(() => {
    let split

    const ctx = gsap.context(() => {
      split = new SplitText(textRef.current, { type: "chars" })

      const startX = () => window.innerWidth
      const endX = () => -textRef.current.offsetWidth
      const distance = () => startX() - endX()

      // 1. the main horizontal tween, saved so the chars can follow it
      const scrollTween = gsap.fromTo(
        textRef.current,
        { x: startX },
        {
          x: endX,
          ease: "none", // required for containerAnimation
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => "+=" + distance(),
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      )

      // 2. per-letter animation driven by horizontal position
      split.chars.forEach((char) => {
        gsap.from(char, {
          yPercent: "random(-200, 200)",
          rotation: "random(-20, 20)",
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: "left 100%", // char's left edge enters the right side of the screen
            end: "left 30%",    // char has settled by 30% from the left
            scrub: 1,
          },
        })
      })
    }, sectionRef)

    return () => {
      ctx.revert()
      split?.revert() // restores the original text
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="flex h-screen w-full items-center overflow-hidden"
    >
      <p
        ref={textRef}
        className="w-max whitespace-nowrap text-[10vw] font-bold uppercase leading-none will-change-transform"
      >
        Creative Frontend Developer - Creating Experiences
      </p>
    </section>
  )
}

export default ScrollMarquee