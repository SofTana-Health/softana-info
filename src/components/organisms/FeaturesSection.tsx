import * as React from "react";
import { Typography } from "../atoms/Typography";
import { WifiOff, Database, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  span?: "1" | "2" | "3";
}

function BentoCard({ title, description, icon: Icon, className, span = "1" }: BentoCardProps) {
  return (
    <div className={cn(
      "p-1.5 rounded-[2rem] bg-gray-50/50 border border-gray-200/50 transition-haptic hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
      span === "2" && "md:col-span-2",
      span === "3" && "md:col-span-3",
      className
    )}>
      <div className="w-full h-full bg-white rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(0,0,0,0.02)] border border-gray-50 p-8 flex flex-col justify-between group">
        <div>
          <div className="w-12 h-12 rounded-full bg-soft/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-haptic">
            <Icon strokeWidth={1.5} className="w-6 h-6" />
          </div>
          <Typography variant="h3" className="mb-3 text-gray-900 tracking-tight">
            {title}
          </Typography>
          <Typography variant="p" className="text-gray-500 mt-0 leading-relaxed text-base">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="w-full bg-white py-32 md:py-40">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col mb-20 max-w-3xl">
          <Typography variant="h2" className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            La botica no para. <br/> El sistema tampoco.
          </Typography>
          <Typography variant="lead" className="text-gray-500 text-lg md:text-xl">
            Arquitectura moderna pensada para resolver los cuellos de botella reales de la atención farmacéutica en la región.
          </Typography>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          
          <BentoCard 
            span="2"
            icon={WifiOff}
            title="Arquitectura Offline-First"
            description="Las caídas de red ya no significan dejar de vender. El punto de venta almacena tus transacciones de forma segura en tu equipo local y las sincroniza con la nube silenciosamente en cuanto la conexión se estabiliza."
          />
          
          <BentoCard 
            span="1"
            icon={Layers}
            title="Interfaz Sin Fricción"
            description="Construido para velocidad. Diseño minimalista que requiere cero horas de capacitación para que tu personal comience a despachar."
          />

          <BentoCard 
            span="3"
            icon={Database}
            title="Catálogo Estandarizado Integrado"
            description="Una de las mayores barreras al cambiar de sistema es ingresar productos. SoftAna incluye un catálogo precargado y estandarizado con miles de medicamentos listos para vender. Activa tu cuenta e inicia operaciones el mismo día."
            className="md:h-[350px]"
          />

        </div>

      </div>
    </section>
  );
}
