// SmoothScroll.jsx
import { useEffect } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis()

    // tell ScrollTrigger whenever Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update)

    // drive Lenis from GSAP's ticker (time is in seconds, Lenis wants ms)
    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return children
}

export default SmoothScroll