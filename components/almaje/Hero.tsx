"use client"

import { useEffect, useState } from "react"

const Butterfly = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <svg 
    viewBox="0 0 40 30" 
    className={`butterfly-animate ${className}`}
    style={{ animationDelay: `${delay}s` }}
    fill="none"
  >
    {/* Ala izquierda */}
    <path 
      d="M18 15 Q8 5 4 10 Q0 15 8 18 Q14 20 18 15" 
      fill="var(--sunflower-yellow)" 
      stroke="var(--antique-gold)" 
      strokeWidth="0.5"
    />
    <path 
      d="M17 16 Q10 22 6 20 Q2 18 10 22 Q15 24 17 16" 
      fill="var(--sunflower-yellow)" 
      stroke="var(--antique-gold)" 
      strokeWidth="0.5"
    />
    {/* Ala derecha */}
    <path 
      d="M22 15 Q32 5 36 10 Q40 15 32 18 Q26 20 22 15" 
      fill="var(--sunflower-yellow)" 
      stroke="var(--antique-gold)" 
      strokeWidth="0.5"
    />
    <path 
      d="M23 16 Q30 22 34 20 Q38 18 30 22 Q25 24 23 16" 
      fill="var(--sunflower-yellow)" 
      stroke="var(--antique-gold)" 
      strokeWidth="0.5"
    />
    {/* Cuerpo */}
    <ellipse cx="20" cy="16" rx="2" ry="6" fill="var(--foreground)" />
    {/* Antenas */}
    <path d="M19 10 Q17 6 15 5" stroke="var(--foreground)" strokeWidth="0.8" fill="none" />
    <path d="M21 10 Q23 6 25 5" stroke="var(--foreground)" strokeWidth="0.8" fill="none" />
    <circle cx="15" cy="5" r="1" fill="var(--foreground)" />
    <circle cx="25" cy="5" r="1" fill="var(--foreground)" />
  </svg>
)

const PipecleanerFlower = ({ color, size = 60, className }: { color: string; size?: number; className?: string }) => (
  <svg viewBox="0 0 60 60" width={size} height={size} className={className}>
    {/* Pétalos de limpiapipa */}
    {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
      <ellipse
        key={i}
        cx="30"
        cy="12"
        rx="8"
        ry="14"
        fill={color}
        transform={`rotate(${rotation} 30 30)`}
        style={{ filter: "url(#fuzzy)" }}
      />
    ))}
    {/* Centro */}
    <circle cx="30" cy="30" r="10" fill="var(--antique-gold)" />
    <circle cx="30" cy="30" r="6" fill="var(--foreground)" opacity="0.3" />
    <defs>
      <filter id="fuzzy">
        <feTurbulence baseFrequency="0.5" numOctaves="2" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
      </filter>
    </defs>
  </svg>
)

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 px-4">
      {/* Decorative elements */}
      {mounted && (
        <>
          <Butterfly className="absolute top-20 left-[10%] w-12 h-10 opacity-80" delay={0} />
          <Butterfly className="absolute top-40 right-[15%] w-10 h-8 opacity-70" delay={0.5} />
          <Butterfly className="absolute bottom-32 left-[20%] w-8 h-6 opacity-60" delay={1} />
          
          <PipecleanerFlower color="var(--soft-pink)" size={50} className="absolute top-32 right-[8%] opacity-40" />
          <PipecleanerFlower color="var(--sunflower-yellow)" size={40} className="absolute bottom-40 right-[25%] opacity-30" />
          <PipecleanerFlower color="var(--deep-fuchsia)" size={35} className="absolute top-1/2 left-[5%] opacity-30" />
        </>
      )}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Decorative thread above title */}
        <svg className="w-48 h-8 mx-auto mb-6" viewBox="0 0 200 30">
          <path
            d="M10,15 Q30,5 50,15 T90,15 T130,15 T170,15 Q180,15 190,10"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 2"
          />
          {/* Pequeñas perlas decorativas */}
          <circle cx="50" cy="15" r="3" fill="var(--soft-pink)" />
          <circle cx="100" cy="15" r="3" fill="var(--sunflower-yellow)" />
          <circle cx="150" cy="15" r="3" fill="var(--deep-fuchsia)" />
        </svg>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--primary)] mb-6 leading-tight">
          Flores que nacen{" "}
          <span className="relative inline-block">
            del corazón
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path
                d="M0,6 Q25,0 50,6 T100,6 T150,6 T200,6"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="font-body text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Cada pétalo está hecho a mano con amor y dedicación. Creamos ramos únicos de limpiapipas 
          que duran para siempre, perfectos para regalar momentos inolvidables.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#tienda"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] font-body font-semibold text-lg rounded-full overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:shadow-[var(--primary)]/20"
            style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
          >
            <span className="relative z-10">Ver Coleccion</span>
            <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 3l7 7-7 7M3 10h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
            {/* Shimmer effect mejorado */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </a>

          <a
            href="#personalizar"
            className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-dashed border-[var(--primary)] text-[var(--primary)] font-body font-semibold text-lg rounded-full transition-all duration-500 ease-out hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] hover:border-solid hover:scale-105 hover:shadow-lg"
            style={{ borderRadius: "15px 255px 15px 225px/225px 15px 255px 15px" }}
          >
            <span>Crear Pedido</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-[var(--muted-foreground)]">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-[var(--moss-green)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18.5L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />
            </svg>
            <span className="font-body text-sm">Hecho a mano</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-[var(--deep-fuchsia)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="font-body text-sm">Con amor</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-[var(--sunflower-yellow)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="font-body text-sm">Duran siempre</span>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <svg className="absolute bottom-0 left-0 right-0 w-full h-16" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path
          d="M0,30 Q180,0 360,30 T720,30 T1080,30 T1440,30 V60 H0 Z"
          fill="var(--secondary)"
        />
        <path
          d="M0,35 Q180,10 360,35 T720,35 T1080,35 T1440,35"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeDasharray="8 4"
        />
      </svg>
    </section>
  )
}
