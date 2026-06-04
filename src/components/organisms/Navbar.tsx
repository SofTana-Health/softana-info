"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "../atoms/Button";
import Image from "next/image";
import { Typography } from "../atoms/Typography";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Si bajamos del pixel 50, activamos el fondo blur, si no, es totalmente transparente
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Ocultar al hacer scroll hacia abajo, mostrar al subir (solo si hemos pasado los 150px)
    if (latest > 150 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-2xl border-b border-gray-200/50 shadow-sm" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-8">
        
        {/* Brand: Logo Cuadrado + Texto */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
            {/* Isotipo (Logo Cuadrado) */}
            <div className="relative w-8 h-8 md:w-10 md:h-10 group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logo-cuadrado.svg" 
                alt="SofTana Isotipo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Logotipo (Texto) */}
            <Typography variant="h4" className="mb-0 text-primary tracking-tight font-bold hidden sm:block">
              SofTana
            </Typography>
          </a>
        </div>

        {/* Navigation - Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a href="#features" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">
            El Sistema
          </a>
          <a href="#pricing" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">
            Planes
          </a>
        </nav>

        {/* CTA - Right */}
        <div className="flex items-center">
          <Button variant="default" className="rounded-full px-5 py-2 md:px-7 md:py-2.5 h-auto text-xs md:text-sm font-bold shadow-[0_4px_14px_rgba(39,24,126,0.15)] hover:shadow-[0_6px_20px_rgba(39,24,126,0.25)] active:scale-[0.98] transition-haptic">
            Agendar Demo
          </Button>
        </div>

      </div>
    </motion.header>
  );
}
