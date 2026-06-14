"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import { Typography } from "../ui/Typography";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

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
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? "bg-gray-950/40 backdrop-blur-xl border-b border-white/10 shadow-2xl" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 md:h-24 items-center justify-between px-6 md:px-12">
        
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-4 hover:opacity-90 transition-opacity group">
            {/* Isotipo (Icono) - Original Colors */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 group-hover:scale-105 transition-transform duration-500">
              <Image 
                src="/logo-cuadrado.svg" 
                alt="SofTana Icon" 
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Logotipo (Letras) - White filter */}
            <div className="relative w-32 h-8 md:w-40 md:h-10 hidden sm:block">
              <Image 
                src="/logo-letras.svg" 
                alt="SofTana" 
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <a href="#features" className="text-xs font-black text-white/60 hover:text-white uppercase tracking-[0.3em] transition-colors">
            El Sistema
          </a>
          <a href="#pricing" className="text-xs font-black text-white/60 hover:text-white uppercase tracking-[0.3em] transition-colors">
            Planes
          </a>
        </nav>

        <div className="flex items-center">
          <Button 
            className="rounded-full px-8 py-3 h-auto text-xs font-black uppercase tracking-[0.15em] bg-white text-primary border-2 border-white hover:bg-primary hover:text-white hover:border-primary shadow-[0_10px_30px_-5px_rgba(255,255,255,0.2)] transition-all duration-500"
          >
            Agendar Demo
          </Button>
        </div>

      </div>
    </motion.header>
  );
}
