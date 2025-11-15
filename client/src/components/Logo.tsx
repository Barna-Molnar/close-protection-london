import { Shield } from "lucide-react";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
  onClick?: () => void;
}

export default function Logo({ variant = "full", className = "", onClick }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 cursor-pointer ${className}`} onClick={onClick}>
      <div className="relative w-8 h-8">
        <Shield className="w-8 h-8 text-primary" strokeWidth={2} />
        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-primary leading-none">
          AB
        </span>
      </div>
      {variant === "full" && (
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight leading-none text-foreground">
            Risk Management
          </span>
        </div>
      )}
    </div>
  );
}
