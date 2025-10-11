import { Shield } from "lucide-react";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
}

export default function Logo({ variant = "full", className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Shield className="w-8 h-8 text-primary" strokeWidth={2} />
      </div>
      {variant === "full" && (
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight leading-none text-foreground">
            ADAM ROSZKOP
          </span>
          <span className="text-xs font-semibold tracking-wider text-muted-foreground">
            SECURITY
          </span>
        </div>
      )}
    </div>
  );
}
