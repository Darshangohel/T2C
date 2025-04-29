import React from 'react';
import { CustomClassName } from '../../utils/CustomClassName';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
}) => {
  const baseStyles = "font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 focus:ring-blue-500",
    secondary: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
  };
  
  const sizeStyles = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-2.5 px-5 text-lg"
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={CustomClassName(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyles,
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;