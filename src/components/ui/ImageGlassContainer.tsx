"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ImageGlassContainerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  aspectRatio?: "video" | "square" | "auto";
  withReflection?: boolean;
}

export function ImageGlassContainer({
  children,
  aspectRatio = "video",
  withReflection = true,
  className,
  ...props
}: ImageGlassContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      className={cn(
        "relative w-full overflow-hidden rounded-[2.5rem] border border-white/20 bg-gray-900/5 shadow-2xl backdrop-blur-sm p-3 md:p-4",
        className
      )}
      {...props}
    >
      {/* Internal "Screen" border */}
      <div className={cn(
        "relative w-full overflow-hidden rounded-[calc(2.5rem-0.75rem)] bg-gray-100 shadow-inner",
        aspectRatio === "video" && "aspect-video",
        aspectRatio === "square" && "aspect-square",
        aspectRatio === "auto" && "h-full"
      )}>
        {children}
        
        {/* Glossy Reflection Overlay */}
        {withReflection && (
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-40" />
        )}
      </div>

      {/* Decorative Hardware Bezels */}
      <div className="absolute top-1/2 -left-px -translate-y-1/2 w-0.5 h-12 bg-white/20 rounded-full" />
      <div className="absolute top-1/2 -right-px -translate-y-1/2 w-0.5 h-12 bg-white/20 rounded-full" />
    </motion.div>
  );
}
