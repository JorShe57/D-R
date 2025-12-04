"use client"

import { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
}

export function ShimmerButton({
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(0, 0, 0, 1)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--shimmer-color": shimmerColor,
          "--shimmer-size": shimmerSize,
          "--shimmer-duration": shimmerDuration,
          "--border-radius": borderRadius,
          "--background": background,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--background)] [border-radius:var(--border-radius)] transition-colors duration-300 hover:border-white/20",
        "shadow-[0_0_40px_8px_rgba(0,0,0,0.6)_inset]",
        className
      )}
      {...props}
    >
      {/* spark container */}
      <div
        className={cn(
          "-z-30 blur-[2px]",
          "absolute inset-0 overflow-visible rounded-[inherit]"
        )}
      >
        {/* spark */}
        <div
          className={cn(
            "animate-shimmer-slide absolute -inset-full w-full rotate-12 [background:linear-gradient(var(--shimmer-size),transparent,var(--shimmer-color),transparent),transparent_50%)] [translate:var(--shimmer-size)_0]"
          )}
        />
      </div>

      {children}

      {/* Highlight */}
      <div
        className={cn(
          "insert-0 absolute size-full",
          "rounded-[inherit] [background:linear-gradient(var(--shimmer-size),transparent,40%,var(--shimmer-color)_50%,transparent_60%,transparent)]"
        )}
      />

      {/* backdrop */}
      <div
        className={cn(
          "absolute -z-20 [background:var(--background)] [border-radius:inherit] [inset:var(--shimmer-size)]"
        )}
      />
    </button>
  )
}

