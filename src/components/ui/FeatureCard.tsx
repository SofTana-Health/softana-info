import * as React from "react";
import { LucideIcon } from "lucide-react";
import { Typography } from "./Typography";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "./Card";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "group p-2",
        className
      )}
      {...props}
    >
      <CardContent className="p-8">
        <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-soft/10 p-4 text-primary group-hover:bg-primary group-hover:text-white transition-haptic">
          <Icon className="h-8 w-8" strokeWidth={1.5} />
        </div>
        <Typography variant="h3" className="mb-3 tracking-tight">
          {title}
        </Typography>
        <Typography variant="p" className="text-muted-foreground mt-0 leading-relaxed">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
