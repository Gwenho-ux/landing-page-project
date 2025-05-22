import { ButtonProps } from '@/types/button';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export const NeonButton = ({ 
  children, 
  onClick, 
  className,
  type = 'button',
  disabled = false,
  href,
  target,
  rel,
}: ButtonProps) => {
  const buttonClasses = cn(
    "neon-button",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <Link 
        href={href}
        className={buttonClasses}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={buttonClasses}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}; 