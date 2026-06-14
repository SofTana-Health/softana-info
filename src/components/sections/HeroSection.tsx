"use client";

import * as React from "react";
import { Typography } from "../ui/Typography";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "../ui/Button";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";

export function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-gray-950">
      
      {/* Immersive Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/La Sala de Control Total 1920x1080.webp" 
          alt="SofTana Control Center" 
          fill
          className="object-cover object-center scale-110 animate-slow-zoom"
          priority
        />
        {/* Dynamic Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/40 to-background z-10" />
        <div className="absolute inset-0 bg-radial-vignette opacity-60 z-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center">
        
        {/* Cinematic Headline */}
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-[6.5rem] font-black tracking-tighter mb-6 md:mb-8 leading-[0.9] max-w-5xl text-transparent bg-clip-text bg-gradient-to-r from-soft via-white to-soft bg-[size:200%] animate-gradient uppercase"
        >
          Tu farmacia <br className="hidden sm:block" />
          siempre en línea
        </motion.h1>

        {/* High-Contrast Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography variant="lead" className="mb-10 md:mb-12 text-white text-base sm:text-lg md:text-2xl leading-relaxed font-medium max-w-3xl drop-shadow-lg px-4 md:px-0">
            Incluso cuando internet falla. SofTana es el <strong className="text-white font-black">cerebro operativo</strong> que garantiza ventas sin interrupciones y control absoluto.
          </Typography>
        </motion.div>

        {/* Premium CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <WhatsAppCTA className="group gap-4 rounded-full h-14 px-12 text-base font-bold bg-white text-primary border-2 border-white hover:bg-primary hover:text-white hover:border-primary shadow-[0_20px_50px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center justify-center">
            <span>Agendar Demostración</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </WhatsAppCTA>
          <Button variant="outline" size="lg" className="rounded-full px-12 text-base text-white border-white/40 backdrop-blur-md hover:bg-white/10 transition-haptic">
            Ver Características
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
