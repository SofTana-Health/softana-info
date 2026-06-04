import * as React from "react";
import { LucideIcon } from "lucide-react";
import { Typography } from "../atoms/Typography";
import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "group flex flex-col items-start p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-200",
        className
      )}
      {...props}
    >
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-soft/20 p-3 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-200">
        <Icon className="h-6 w-6" />
      </div>
      <Typography variant="h4" className="mb-2">
        {title}
      </Typography>
      <Typography variant="p" className="text-gray-600 mt-0">
        {description}
      </Typography>
    </div>
  );
}
