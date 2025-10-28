import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-red text-white font-bold shadow-[0_0_30px_rgba(214,0,28,0.6)] hover:bg-brand-red/90 hover:shadow-[0_0_40px_rgba(214,0,28,0.8)] active:scale-95 btn-fire border-2 border-brand-red/50",
        destructive:
          "bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 hover:shadow-xl",
        outline:
          "border-3 border-white/60 text-white bg-white/10 backdrop-blur-sm shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all font-bold",
        secondary:
          "bg-brand-orange text-white font-bold shadow-[0_0_30px_rgba(255,107,53,0.6)] hover:bg-brand-orange/90 hover:shadow-[0_0_40px_rgba(255,107,53,0.8)] btn-fire border-2 border-brand-orange/50",
        ghost: "text-gray-300 hover:bg-white/10 hover:text-white",
        link: "text-brand-orange underline-offset-4 hover:underline hover:text-brand-red font-semibold",
        gradient:
          "bg-gradient-to-r from-brand-red via-brand-orange to-brand-red bg-[length:200%_100%] animate-gradient text-white font-black shadow-[0_0_40px_rgba(214,0,28,0.7)] hover:shadow-[0_0_50px_rgba(214,0,28,0.9)] hover:scale-105 active:scale-95 btn-fire border-2 border-brand-orange/50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs font-semibold",
        lg: "h-12 rounded-md px-8 text-base font-semibold",
        xl: "h-14 rounded-lg px-10 text-lg font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
