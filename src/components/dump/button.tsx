import { ButtonProps } from "@/types";
import React from "react";



export default function Button({
  label,
  variant = "primary",
  onClick,
  className = "",
  rightIcon
}: ButtonProps) {
  const base =
    "max-md:px-3 px-5 rounded font-medium transition-colors duration-200";

  const styles = {
    primary: "bg-[#F46600] text-white rounded-full hover:bg-orange-600",
    secondary: "bg-[#0E2437] text-white rounded-full",
    outline: "border border-white rounded-full text-white",
    secondary_outline: "border border-[#0E2437] rounded-full text-[#0E2437]"
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center max-md:text-xs text-sm  max-md:gap-1.5 gap-3 max-md:py-1.5 py-3 cursor-pointer ${base} ${styles[variant]} ${className}`}
    >
      {label} {rightIcon && rightIcon}
    </button>
  );
}
