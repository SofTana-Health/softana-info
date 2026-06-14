import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary",
      h2: "scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-primary",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight text-primary",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight text-primary",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, ...props }, ref) => {
    // Determine the default tag based on the variant
    const defaultTag = variant && ["h1", "h2", "h3", "h4"].includes(variant)
      ? (variant as React.ElementType)
      : "p";
    const Tag = as || defaultTag;

    return (
      <Tag
        ref={ref}
        className={cn(typographyVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
