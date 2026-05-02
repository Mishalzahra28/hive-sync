"use client"

interface DarkVeilProps {
  hueShift?: number
  noiseIntensity?: number
  scanlineIntensity?: number
  speed?: number
  scanlineFrequency?: number
  warpAmount?: number
  resolutionScale?: number
}

export default function DarkVeil(_: DarkVeilProps = {}) {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-background">
      <div className="absolute -top-[20%] -left-[10%] h-[70%] w-[70%] rounded-full bg-primary/15 blur-[140px] animate-pulse" />
      <div
        className="absolute -bottom-[20%] -right-[10%] h-[70%] w-[70%] rounded-full bg-secondary/15 blur-[140px] animate-pulse"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute top-1/4 right-1/4 h-[40%] w-[40%] rounded-full bg-accent/20 blur-[120px] animate-pulse"
        style={{ animationDelay: "2.4s" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/60" />
    </div>
  )
}
