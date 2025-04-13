import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const variantClasses = {
        default: "bg-primary text-white hover:bg-primary shadow-md shadow-primary/40 hover:shadow-[0_2px_8px] hover:shadow-primary/40",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive",
        outline: "border-2 border-input bg-transparent hover:bg-primary hover:border-transparent hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary",
        ghost: "hover:bg-primary hover:text-primary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
    };

    const sizeClasses = {
        default: "h-12 px-6",
        none: "p-0",
        sm: "h-9 px-3 text-xs",
        md: "h-12 px-6",
        lg: "h-14 px-8",
    };

    const variantClass = variantClasses[variant] || variantClasses.default;
    const sizeClass = sizeClasses[size] || sizeClasses.default;

    // Si `asChild` es true, usar `Slot` de Radix UI, si no, usar un `button`
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            className={`${variantClass} ${sizeClass} py-2 inline-flex items-center justify-center rounded-md text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
            ref={ref}
            {...props}
        />
    );
});

Button.displayName = "Button";

export { Button };
