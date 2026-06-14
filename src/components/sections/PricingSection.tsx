import * as React from "react";
import { Typography } from "../ui/Typography";
import { Button } from "../ui/Button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant?: "default" | "outline" | "secondary";
}

function PricingCard({ name, price, description, features, isPopular, buttonText, buttonVariant = "outline" }: PricingPlanProps) {
  return (
    <Card className={cn(
      "relative flex flex-col h-full",
      isPopular ? "border-primary shadow-haptic-hover scale-105 z-10" : "border-gray-200"
    )}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
            Más Popular
          </span>
        </div>
      )}
      
      <CardHeader className="p-8 pb-0">
        <Typography variant="h3" className={cn("mb-2", isPopular ? "text-primary" : "text-gray-900")}>
          {name}
        </Typography>
        <Typography variant="p" className="text-muted-foreground mt-0 text-sm h-10 leading-snug">
          {description}
        </Typography>
      </CardHeader>

      <CardContent className="p-8">
        <div className="mb-8 flex items-baseline gap-1">
          <Typography variant="h1" className="text-gray-900 mb-0 text-5xl">
            {price}
          </Typography>
          <Typography variant="p" className="text-muted-foreground mt-0 font-bold">
            /mes
          </Typography>
        </div>

        <ul className="flex flex-col gap-4 mb-0 flex-1">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={cn(
                "mt-0.5 rounded-full p-0.5",
                isPopular ? "bg-secondary/10 text-secondary" : "bg-gray-100 text-gray-400"
              )}>
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </div>
              <span className="text-gray-600 text-sm font-medium leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="p-8 pt-0">
        <Button variant={buttonVariant} className="w-full" size="lg">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="w-full bg-gray-50 py-32 md:py-40">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col items-center text-center mb-20">
          <Typography variant="h2" className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 max-w-3xl">
            Planes diseñados para tu realidad
          </Typography>
          <Typography variant="lead" className="text-gray-500 text-lg md:text-xl max-w-2xl">
            Sin costos ocultos ni contratos amarrados. Paga una suscripción mensual justa por una tecnología que multiplica tus ventas.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          
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
            buttonVariant="outline"
          />

          <PricingCard
            name="Standard"
            price="S/ 80"
            description="Para farmacias en crecimiento que necesitan gestión de proveedores."
            isPopular={true}
            features={[
              "1 Sede / Establecimiento",
              "Todo lo de Starter",
              "Módulo de Pedidos a Proveedores",
              "Acceso colaborativo al catálogo global",
              "Soporte prioritario WhatsApp"
            ]}
            buttonText="Prueba Gratuita"
            buttonVariant="default"
          />

          <PricingCard
            name="Professional"
            price="S/ 120"
            description="Control avanzado y reportería completa."
            features={[
              "1 Sede / Establecimiento",
              "Todo lo de Standard",
              "Análisis de consumo avanzado",
              "Proyecciones de stock",
              "Reportes personalizados",
              "Soporte telefónico 24/7"
            ]}
            buttonText="Contactar Ventas"
            buttonVariant="outline"
          />

        </div>
        
        <div className="mt-16 text-center">
          <Typography variant="muted" className="text-gray-500">
            ¿Tienes una cadena de boticas (2 a 10 sedes)? <a href="#" className="text-primary font-medium hover:underline transition-all">Consulta nuestros planes Chain</a>
          </Typography>
        </div>

      </div>
    </section>
  );
}
