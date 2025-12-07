import { cn } from "@/lib/utils/cn";
import React from "react";

const VARIANTS = {
  default: "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
  selected: "bg-cyan-600 text-white border-cyan-600",
};

const SIZES = {
  md: "px-2 py-1.5 text-sm",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
}

export const Button = ({
  variant = "default",
  size = "md",
  disabled,
  className,
  ...props
}: ButtonProps) => {
  const base = "rounded-md border transition-colors font-medium";

  const disabledStyles =
    "opacity-50 cursor-not-allowed hover:bg-inherit hover:text-inherit";

  return (
    <button
      className={cn(
        base,
        VARIANTS[variant],
        SIZES[size],
        disabled && disabledStyles,
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
};
