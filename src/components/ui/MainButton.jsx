import React from "react";

const MainButton = ({
    className = "",
    variant = "default",
    size = "default",
    text,
    onClick,
    iconVisibility,
    iconButton = null,
    label = "",
    type = "button",
}) => {
    const buttonVariant = {
        default:
            "bg-primary text-white hover:bg-primary shadow-md shadow-primary/40 hover:shadow-[0_2px_8px] hover:shadow-primary/40",
        destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive",
        outline:
            "border-2 border-input bg-transparent hover:bg-primary hover:border-transparent hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary",
        ghost: "hover:bg-primary hover:text-primary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
    };

    const buttonSize = {
        default: "h-12 px-6",
        none: "p-0",
        sm: "h-9 px-3 text-xs",
        md: "h-12 px-6",
        lg: "h-14 px-8",
    };


    return (
        <button
            type={type}
            className={`inline-flex items-center justify-center rounded-md py-2 text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${buttonVariant[variant]} ${buttonSize[size]} ${className}`}
            onClick={onClick}
        >
            {text}
            {iconButton && (
                <img
                    className={`imgButtonStyle ${iconVisibility}`}
                    src={iconButton}
                    alt={label}
                />
            )}
        </button>
    );
};

export default MainButton;
