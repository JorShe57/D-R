"use client"

import { motion, useScroll } from "framer-motion"
import { cn } from "@/lib/utils"

interface ScrollProgressProps {
  className?: string
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-gradient-to-r from-brand-yellow via-yellow-400 to-brand-yellow",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
    />
  )
}

