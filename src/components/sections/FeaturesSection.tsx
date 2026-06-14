import * as React from "react";
import { WifiOff, Database, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent } from "../ui/Card";

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
  span?: "1" | "2" | "3" | "full";
  bgImage?: string;
}

function BentoCard({ title, description, icon: Icon, className, span = "1", bgImage }: BentoCardProps) {
  return (
    <Card className={cn(
      "relative group overflow-hidden border-white/10 bg-gray-900/40 backdrop-blur-md transition-haptic",
      span === "2" && "md:col-span-2",
      span === "3" && "md:col-span-3",
      span === "full" && "md:col-span-full",
      className
    )}>
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image src={bgImage} alt={title} fill className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
        </div>
      )}
      
      <CardContent className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[280px]">
        <div className="flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:bg-primary group-hover:scale-110 transition-haptic shadow-xl">
            <Icon strokeWidth={1.5} className="w-6 h-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none mt-2">
            {title}
          </h3>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="w-full bg-gray-950 py-20 md:py-24 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Narrative Header - Compact */}
        <div className="flex flex-col mb-10 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4 leading-none uppercase">
            DE LA TRINCHERA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-soft via-white to-soft bg-[size:200%] animate-gradient">
              AL CENTRO DE MANDO
            </span>
          </h2>
        </div>

        {/* Compact Narrative Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          
          {/* Card 1: The Resistance (Immersive) */}
          <BentoCard 
            span="full"
            bgImage="/images/Eficiencia Operativa en el Almacén 1920x1080.webp"
            icon={WifiOff}
            title="Soberanía Offline"
            description="Cuando el mundo digital cae, tu botica resiste. Arquitectura local redundante que procesa ventas y protege tu inventario sin necesidad de un solo bit de internet. La sincronización es silenciosa; el control es absoluto."
          />
          
          {/* Card 2: The Flow */}
          <BentoCard 
            span="1"
            icon={Layers}
            title="Fricción Cero"
            description="Construido para la velocidad del despacho real. Una interfaz táctil optimizada para que tu personal venda más rápido de lo que el cliente parpadea."
          />

          {/* Card 3: The Genome */}
          <BentoCard 
            span="2"
            icon={Database}
            title="ADN Maestro"
            description="Olvida la carga manual. Accede a un catálogo estandarizado con más de 30,000 SKUs médicos precargados. Empieza a vender hoy con la inteligencia de datos de los laboratorios líderes ya integrada."
          />

        </div>

      </div>
    </section>
  );
}
