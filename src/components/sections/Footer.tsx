"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";
import { SdlFooter } from "../ui/SdlFooter";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <>
      <footer className="w-full bg-gray-950 pt-24 pb-20 flex flex-col items-center border-t border-white/5">
        
        {/* Pre-Footer CTA (Immersive & Cinematic) */}
        <div className="container mx-auto px-6 md:px-12 mb-24 w-full">
          <div className="relative w-full min-h-[500px] rounded-[3rem] overflow-hidden group shadow-2xl">
            {/* Background Image */}
            <Image 
              src="/images/Colaboración Global Sin Fisuras 1920x1080.webp" 
              alt="SofTana Conectividad Global" 
              fill 
              className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" 
            />
            {/* Overlay Layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gray-900/20 backdrop-blur-[2px] z-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-8 md:p-24">
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 md:mb-8 max-w-4xl leading-[0.9] uppercase"
              >
                ¿LISTO PARA CONECTAR <br className="hidden md:block" /> TU FARMACIA AL FUTURO?
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-xl font-medium mb-10 md:mb-12 max-w-2xl text-white/70"
              >
                Únete a las boticas que ya operan con tecnología de clase mundial. Implementación rápida, soporte real y control absoluto.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="w-full sm:w-auto px-4 sm:px-0"
              >
                <WhatsAppCTA className="inline-flex w-full sm:w-auto rounded-full h-14 md:h-16 px-8 md:px-12 text-base md:text-lg font-black uppercase tracking-widest bg-white text-primary border-2 border-white hover:bg-primary hover:text-white hover:border-primary shadow-2xl transition-all duration-500 items-center justify-center group">
                  <span>Solicitar mi cuenta</span>
                  <ArrowRight className="ml-3 md:ml-4 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                </WhatsAppCTA>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Brand & Links Grid */}
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 w-full">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              {/* Isotipo original */}
               <div className="relative w-12 h-12">
                <Image src="/logo-cuadrado.svg" alt="SofTana" fill className="object-contain" />
               </div>
               {/* Wordmark blanco */}
               <div className="relative w-40 h-10">
                <Image src="/logo-letras.svg" alt="SofTana" fill className="object-contain brightness-0 invert" />
               </div>
            </div>
            <p className="text-white/50 text-base leading-relaxed max-w-sm font-medium">
              El sistema de gestión de farmacias más avanzado de la región. Diseñado para operar en la realidad del mercado peruano con tecnología de estándar global.
            </p>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Producto</span>
              <ul className="flex flex-col gap-4">
                <li><a href="#features" className="text-sm font-bold text-white/60 hover:text-soft transition-colors">Sistema</a></li>
                <li><a href="#pricing" className="text-sm font-bold text-white/60 hover:text-soft transition-colors">Planes</a></li>
                <li><a href="#" className="text-sm font-bold text-white/60 hover:text-soft transition-colors">Manuales</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Soporte</span>
              <ul className="flex flex-col gap-4">
                <li><a href="#" className="text-sm font-bold text-white/60 hover:text-soft transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="text-sm font-bold text-white/60 hover:text-soft transition-colors">WhatsApp</a></li>
                <li><a href="#" className="text-sm font-bold text-white/60 hover:text-soft transition-colors">Ticket</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Contacto</span>
              <ul className="flex flex-col gap-4">
                <li className="text-sm font-bold text-white/60">Huancayo, Perú</li>
                <li className="text-sm font-bold text-white/60">ventas@softana.pe</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <SdlFooter />
    </>
  );
}
