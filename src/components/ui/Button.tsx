import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-brand-accent text-white hover:bg-brand-accent/90 shadow-[0_0_15px_rgba(59,130,246,0.4)]",
    secondary: "bg-white/10 text-white backdrop-blur-md hover:bg-white/20 border border-white/10",
    ghost: "text-brand-textSecondary hover:text-white transition-colors"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3 text-lg font-semibold"
  };

  return (
    <button
      className={cn(
        "rounded-full transition-all active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};
