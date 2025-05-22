import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className = '', ...props }: InputProps) => {
  return (
    <input
      className={`w-full bg-transparent text-input-text placeholder:text-input-placeholder focus:outline-none ${className}`}
      {...props}
    />
  );
}; 