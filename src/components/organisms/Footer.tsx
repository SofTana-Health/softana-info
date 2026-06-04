import * as React from "react";
import Image from "next/image";
import { Typography } from "../atoms/Typography";
import { ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white pt-24 pb-12 flex flex-col items-center">
      
      {/* Pre-Footer CTA (The Final Push) */}
      <div className="container mx-auto px-4 md:px-6 mb-24 w-full">
        <div className="w-full bg-primary rounded-[2.5rem] p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          
          {/* Subtle background graphics inside the CTA */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/60 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/40 blur-[120px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3" />

          {/* Eyebrow */}
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold text-white mb-8 tracking-wider backdrop-blur-md shadow-sm">
            Implementación en 24 horas
          </div>
          
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white mb-6 max-w-3xl leading-[1.1] relative z-10">
            ¿Listo para modernizar tu farmacia?
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl font-medium mb-10 max-w-xl text-white/80 relative z-10">
            Únete a las boticas de Huancayo que ya operan sin preocuparse por los cortes de internet.
          </p>
          
          {/* Button */}
          <button className="group relative z-10 flex items-center justify-between gap-4 bg-white text-primary rounded-full pl-8 pr-2 py-2 text-base font-bold shadow-xl active:scale-[0.98] transition-haptic">
            <span>Solicitar mi cuenta</span>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:translate-x-0.5 group-hover:-translate-y-[1px] transition-haptic">
              <ArrowRight className="w-4 h-4 text-primary" strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>

      {/* Actual Footer Architecture */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start justify-between gap-12 w-full">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-3">
             <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image src="/logo-cuadrado.svg" alt="SofTana Isotipo" fill className="object-contain" />
             </div>
             <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">SofTana.</span>
          </div>
          <Typography variant="p" className="text-gray-500 text-sm leading-relaxed mt-0 font-medium">
            El sistema de gestión creado para empoderar a las farmacias independientes, dándoles tecnología robusta y confiable.
          </Typography>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Producto
            </span>
            <a href="#features" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">Características</a>
            <a href="#pricing" className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors">Planes</a>
          </div>
          
          <div className="flex flex-col gap-5">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Compañía
            </span>
            <span className="text-sm font-semibold text-gray-600">Desarrollado por Sudolabs</span>
            <span className="text-sm font-semibold text-gray-600">Huancayo, Perú</span>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="container mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <span className="text-sm font-medium text-gray-400">
          © {currentYear} Sudolabs. Todos los derechos reservados.
        </span>
        <div className="flex gap-6">
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">Privacidad</a>
          <a href="#" className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
}
