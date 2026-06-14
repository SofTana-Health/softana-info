import * as React from "react";
import { Typography } from "../ui/Typography";
import { ArrowRight, CloudOff, CheckCircle2, ShieldCheck, Activity, ShieldPlus, Stethoscope, Pill } from "lucide-react";
import Image from "next/image";

import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden bg-background">
      
      {/* Structural Background Pattern - Solves the "Empty White Canvas" syndrome */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-20 opacity-40"></div>
      
      {/* Brand Color Anchors (Subtle glow instead of heavy shapes) */}
      <div className="absolute top-0 right-0 w-[50vw] h-[500px] bg-primary/5 blur-[120px] rounded-bl-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[400px] bg-secondary/5 blur-[100px] rounded-tr-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTA (Takes 5 columns) */}
          <div className="flex flex-col items-start text-left pt-10 lg:col-span-5 relative">
            
            {/* Decorative Icon Floating */}
            <div className="absolute -top-12 -left-12 text-soft/20 -z-10 rotate-[-15deg]">
               <ShieldPlus className="w-32 h-32" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-extrabold tracking-tighter text-gray-900 mb-6 leading-[1.05]">
              Control total. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Cero caídas.
              </span>
            </h1>

            {/* Subheadline */}
            <Typography variant="lead" className="mb-10 text-muted-foreground text-lg md:text-xl leading-relaxed font-medium">
              El sistema de inventario y caja que <strong className="text-gray-900 font-semibold">no depende de internet</strong>. Si la red falla, tú sigues despachando sin interrupciones.
            </Typography>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="group gap-3 rounded-2xl">
                <span>Agendar demostración</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Trust Anchor / Social Proof */}
            <div className="mt-12 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-4 w-full max-w-sm">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-primary"><Stethoscope className="w-4 h-4" /></div>
                <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-secondary"><Pill className="w-4 h-4" /></div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-900">Catálogo Médico</span>
                <span className="text-xs text-gray-500 font-medium">Miles de SKUs pre-cargados</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity UI Mockup (Takes 7 columns) */}
          <div className="w-full flex items-center justify-end relative mt-8 lg:mt-0 lg:col-span-7">
            
            {/* Backdrop "Hardware" Frame */}
            <div className="w-full max-w-2xl bg-gray-50/50 p-3 md:p-4 rounded-[2rem] border border-gray-200/50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] backdrop-blur-xl relative">
              
              {/* Actual UI Screen */}
              <div className="w-full bg-white rounded-[calc(2rem-0.75rem)] shadow-[inset_0_1px_1px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col relative z-10">
                
                {/* Mockup Header (Status Bar) */}
                <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-[#FAFAFA]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center bg-white shadow-sm overflow-hidden p-1.5">
                       <Image src="/logo-cuadrado.svg" alt="Logo" width={24} height={24} className="object-contain" />
                    </div>
                    <span className="font-bold text-sm text-gray-900 tracking-tight">Caja Principal</span>
                  </div>
                  
                  {/* Offline Pill Alert */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/60 text-amber-700 text-xs font-bold uppercase tracking-wider shadow-sm animate-pulse">
                    <CloudOff className="w-3.5 h-3.5" strokeWidth={2.5}/>
                    <span>Modo Offline Activo</span>
                  </div>
                </div>
                
                {/* Mockup Body (Split inside the mockup) */}
                <div className="flex flex-col md:flex-row bg-white h-[450px]">
                  
                  {/* Product List (Left side of mockup) */}
                  <div className="flex-1 border-r border-gray-100 flex flex-col">
                    <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                      <div className="h-10 w-full bg-white border border-gray-200 rounded-lg flex items-center px-3">
                         <span className="text-sm text-gray-400 font-medium">Buscar producto o código de barras...</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
                      {/* Item 1 */}
                      <div className="flex items-center justify-between p-3 rounded-xl border border-primary/20 bg-primary/5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary"><ShieldCheck className="w-5 h-5"/></div>
                          <div>
                            <div className="text-sm font-bold text-gray-900">Amoxicilina 500mg</div>
                            <div className="text-xs text-gray-500 font-medium">Genfar · Blíster x 10</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-gray-400">x2</span>
                          <span className="text-sm font-black text-primary">S/ 12.00</span>
                        </div>
                      </div>
                      
                      {/* Item 2 */}
                      <div className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400"><Activity className="w-5 h-5"/></div>
                          <div>
                            <div className="text-sm font-bold text-gray-900">Panadol Antigripal</div>
                            <div className="text-xs text-gray-500 font-medium">GSK · Caja x 100</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-gray-400">x1</span>
                          <span className="text-sm font-bold text-gray-900">S/ 33.50</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Checkout Panel (Right side of mockup) */}
                  <div className="w-[240px] bg-gray-50 p-6 flex flex-col justify-between hidden md:flex">
                    <div>
                      <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Resumen de Venta</h4>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Subtotal</span>
                        <span className="text-sm font-medium text-gray-900">S/ 38.56</span>
                      </div>
                      <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                        <span className="text-sm text-gray-500">IGV (18%)</span>
                        <span className="text-sm font-medium text-gray-900">S/ 6.94</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-base font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-black text-primary">S/ 45.50</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Sincronización en pausa</span>
                      </div>
                      <button className="w-full py-4 bg-primary text-white rounded-xl text-sm font-bold shadow-md shadow-primary/20 hover:bg-secondary transition-colors">
                        Emitir Boleta
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Decorative Element over the mockup */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-20">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900">Venta Registrada</span>
                  <span className="text-xs text-gray-500 font-medium">Guardada localmente</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
