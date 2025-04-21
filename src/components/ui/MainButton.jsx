import React from "react";

const MainButton = ({
    className = "",
    variant = "default",
    size = "default",
    text,
    onClick,
    iconVisibility = false,
    iconButton: Icon,
    label = "",
    type,
}) => {
    const buttonVariant = {
        default:
            "bg-primary text-white hover:bg-primary shadow-md shadow-primary/40 hover:shadow-[0_2px_8px] hover:shadow-primary/40",
        secondary:
            "bg-secondary text-tertiary hover:bg-primary shadow-md shadow-primary/40 hover:shadow-[0_2px_8px] hover:shadow-primary/40",
        destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive",
        outline:
            "border-2 border-input bg-transparent hover:bg-primary hover:border-transparent hover:text-primary-foreground",
        ghost:
            "hover:bg-primary hover:text-primary-foreground",
        link:
            "text-primary underline-offset-4 hover:underline",
    };

    const buttonSize = {
        default: "h-12 px-6",
        none: "p-0",
        sm: "w-12 h-9 px-3 text-xs",
        md: "h-12 px-6",
        lg: "h-14 px-8",
    };


    return (
        <button
            type={type}
            className={`inline-flex items-center justify-center rounded-2xl py-2 text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${buttonVariant[variant]} ${buttonSize[size]} ${className}`}
            onClick={onClick}
            aria-label={label}
        >
            {text}
            {iconVisibility && Icon && (
                <Icon className="ml-2 w-4 h-4" />
            )}
        </button>
    );
};

export default MainButton;
