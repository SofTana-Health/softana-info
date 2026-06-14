"use client";

import * as React from "react";
import { Typography } from "../ui/Typography";
import { WhatsAppCTA } from "../ui/WhatsAppCTA";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

function PricingCard({ name, price, description, features, isPopular, buttonText }: PricingPlanProps) {
  return (
    <Card className={cn(
      "relative flex flex-col h-full bg-gray-900/40 backdrop-blur-md transition-haptic",
      isPopular ? "border-primary shadow-2xl shadow-primary/20 scale-100 md:scale-105 z-10" : "border-white/10"
    )}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-gradient-to-r from-primary to-secondary text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
            Más Popular
          </span>
        </div>
      )}
      
      <CardHeader className="p-6 md:p-8 pb-0">
        <Typography variant="h3" className={cn("mb-2 font-black tracking-tight", isPopular ? "text-soft" : "text-white")}>
          {name}
        </Typography>
        <Typography variant="p" className="text-white/60 mt-0 text-sm h-auto md:h-10 leading-snug">
          {description}
        </Typography>
      </CardHeader>

      <CardContent className="p-6 md:p-8 flex-1">
        <div className="mb-8 flex items-baseline gap-1">
          <Typography variant="h1" className="text-white mb-0 text-4xl md:text-5xl font-black">
            {price}
          </Typography>
          <Typography variant="p" className="text-white/40 mt-0 font-bold">
            /mes
          </Typography>
        </div>

        <ul className="flex flex-col gap-4 mb-0">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={cn(
                "mt-0.5 rounded-full p-0.5",
                isPopular ? "bg-primary/20 text-soft" : "bg-white/10 text-white/50"
              )}>
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </div>
              <span className="text-white/80 text-sm font-medium leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="p-6 md:p-8 pt-0 mt-auto">
        <WhatsAppCTA 
          message={`Hola, quiero más información sobre el plan ${name} de SofTana.`}
          className={cn(
            "w-full rounded-xl py-3.5 text-sm font-black uppercase tracking-wider transition-all duration-300",
            isPopular 
              ? "bg-white text-primary border-2 border-white hover:bg-primary hover:text-white" 
              : "bg-transparent text-white border-2 border-white/20 hover:border-white/50 hover:bg-white/5"
          )}
        >
          {buttonText}
        </WhatsAppCTA>
      </CardFooter>
    </Card>
  );
}

export function PricingSection() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const standardCardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Auto-center the "Standard" card on mobile devices on initial load
    if (window.innerWidth < 768 && standardCardRef.current) {
      setTimeout(() => {
        standardCardRef.current?.scrollIntoView({ behavior: "instant", block: "nearest", inline: "center" });
      }, 100);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.85; // Move by roughly one card width
      scrollContainerRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="w-full bg-gray-950 py-20 md:py-32 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-10 md:mb-24">
          <div className="inline-flex items-center gap-2 text-soft text-[10px] font-black uppercase tracking-[0.5em] mb-4">
            Inversión Inteligente
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-white mb-6 max-w-3xl leading-none uppercase">
            PLANES DISEÑADOS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-soft via-white to-soft bg-[size:200%] animate-gradient">
              PARA TU REALIDAD
            </span>
          </h2>
          <Typography variant="lead" className="text-white/60 text-base md:text-xl max-w-2xl font-medium">
            Sin costos ocultos ni contratos amarrados. Paga una suscripción mensual justa por una tecnología que asegura tus ventas.
          </Typography>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex md:grid md:grid-cols-3 flex-nowrap overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-8 max-w-6xl mx-auto items-stretch pb-4 md:pb-0 px-4 md:px-0 hide-scrollbar -mx-4 md:mx-auto scroll-smooth"
        >
          
          <div className="w-[85vw] sm:w-[320px] md:w-auto shrink-0 snap-center first:ml-4 md:first:ml-0 last:mr-4 md:last:mr-0">
            <PricingCard
              name="Starter"
              price="S/ 50"
              description="Ideal para boticas independientes de una sola sede."
              features={[
                "1 Sede / Establecimiento",
                "Operación Offline-First",
                "Gestión de inventario básico",
                "Catálogo estándar incluido",
                "Soporte por email"
              ]}
              buttonText="Comenzar ahora"
            />
          </div>

          <div ref={standardCardRef} className="w-[85vw] sm:w-[320px] md:w-auto shrink-0 snap-center last:mr-4 md:last:mr-0">
            <PricingCard
              name="Standard"
              price="S/ 80"
              description="Para farmacias en crecimiento que necesitan gestión rápida."
              isPopular={true}
              features={[
                "1 Sede / Establecimiento",
                "Todo lo de Starter",
                "Módulo de Pedidos a Proveedores",
                "Acceso colaborativo al catálogo",
                "Soporte prioritario WhatsApp"
              ]}
              buttonText="Prueba Gratuita"
            />
          </div>

          <div className="w-[85vw] sm:w-[320px] md:w-auto shrink-0 snap-center last:mr-4 md:last:mr-0">
            <PricingCard
              name="Professional"
              price="S/ 120"
              description="Control avanzado y reportería gerencial completa."
              features={[
                "1 Sede / Establecimiento",
                "Todo lo de Standard",
                "Análisis de consumo avanzado",
                "Proyecciones de stock",
                "Reportes personalizados",
                "Soporte telefónico 24/7"
              ]}
              buttonText="Contactar Ventas"
            />
          </div>

        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center justify-center gap-6 mt-4 mb-8">
          <button 
            onClick={() => scroll("left")} 
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-95 transition-all"
            aria-label="Ver plan anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">
            Desliza para explorar
          </span>
          <button 
            onClick={() => scroll("right")} 
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-95 transition-all"
            aria-label="Ver siguiente plan"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mt-8 md:mt-16 text-center">
          <Typography variant="muted" className="text-white/50 text-sm md:text-base">
            ¿Tienes una cadena de boticas (2 a 10 sedes)?{" "}
            <WhatsAppCTA message="Hola, busco cotizar el Plan Chain para mi cadena de boticas." className="text-soft font-bold hover:text-white transition-colors underline underline-offset-4">
              Consulta nuestros planes Chain
            </WhatsAppCTA>
          </Typography>
        </div>

      </div>
    </section>
  );
}
