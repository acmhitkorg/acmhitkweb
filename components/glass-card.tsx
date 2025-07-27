import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

export function GlassCard({ children, className, hover = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative backdrop-blur-xl bg-card/50 border border-border/50 rounded-xl shadow-lg",
        hover && "hover:bg-card/70 hover:border-border/70 hover:shadow-xl hover:-translate-y-1",
        "transition-all duration-300 ease-out",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl pointer-events-none" />
      {children}
    </div>
  )
}