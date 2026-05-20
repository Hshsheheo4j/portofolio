import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const GlassPanel = ({ className, ...props }: GlassPanelProps) => {
  return (
    <div
      className={cn(
        "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl",
        className
      )}
      {...props}
    />
  );
};
