import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { ExperienceCard } from "./ExperienceCard"

interface ParallaxExperienceCardProps {
  experience: any
  index: number
}

export function ParallaxExperienceCard({ experience, index }: ParallaxExperienceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Create different parallax effects based on index
  const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 50 : -50, index % 2 === 0 ? -50 : 50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.75, 1, 1, 0.75])

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
        scale,
      }}
      className="relative"
    >
      <ExperienceCard experience={experience} />
    </motion.div>
  )
}