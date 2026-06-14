"use client";

import * as React from "react";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/lib/utils";

interface WhatsAppCTAProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  message?: string;
  children: React.ReactNode;
}

export const WhatsAppCTA = React.forwardRef<HTMLAnchorElement, WhatsAppCTAProps>(
  ({ message = "Hola, me interesa el sistema SofTana para mi farmacia. Quisiera agendar una demostración.", children, className, ...props }, ref) => {
    // Limpiar el número de teléfono para la URL (eliminar espacios y símbolos)
    const phoneNumber = siteConfig.contact.phone.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
      <a
        ref={ref}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("inline-flex items-center justify-center cursor-pointer", className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

WhatsAppCTA.displayName = "WhatsAppCTA";
