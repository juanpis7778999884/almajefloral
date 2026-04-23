"use client"

import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 px-4 bg-[var(--card)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Main image */}
            <div 
              className="relative aspect-square max-w-md mx-auto overflow-hidden"
              style={{ 
                borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
                border: "4px solid var(--soft-pink)"
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-20%20at%209.36.30%20AM-zEN1aMWlpa7I3ecZc9SMcH9nyiFNAt.jpeg"
                alt="AlMaje Floral - Logo y concepto"
                fill
                className="object-contain p-8 bg-white"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                {[0, 72, 144, 216, 288].map((rotation, i) => (
                  <ellipse
                    key={i}
                    cx="32"
                    cy="12"
                    rx="6"
                    ry="10"
                    fill="var(--soft-pink)"
                    transform={`rotate(${rotation} 32 32)`}
                  />
                ))}
                <circle cx="32" cy="32" r="8" fill="var(--antique-gold)" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 w-12 h-12">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                {[0, 72, 144, 216, 288].map((rotation, i) => (
                  <ellipse
                    key={i}
                    cx="24"
                    cy="8"
                    rx="5"
                    ry="8"
                    fill="var(--sunflower-yellow)"
                    transform={`rotate(${rotation} 24 24)`}
                  />
                ))}
                <circle cx="24" cy="24" r="6" fill="var(--foreground)" opacity="0.3" />
              </svg>
            </div>

            {/* Thread decoration */}
            <svg className="absolute -right-8 top-1/4 w-16 h-32" viewBox="0 0 64 128">
              <path
                d="M32,0 Q48,32 32,64 Q16,96 32,128"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              <circle cx="32" cy="32" r="4" fill="var(--deep-fuchsia)" />
              <circle cx="32" cy="96" r="4" fill="var(--moss-green)" />
            </svg>
          </div>

          {/* Text side */}
          <div>
            <span className="inline-block font-body text-sm text-[var(--accent)] tracking-[0.3em] uppercase mb-3">
              Nuestra Historia
            </span>
            
            <h2 className="font-display text-4xl sm:text-5xl text-[var(--foreground)] mb-6 leading-tight">
              Creando momentos{" "}
              <span className="relative inline-block text-[var(--primary)]">
                eternos
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,4 Q25,0 50,4 T100,4" fill="none" stroke="var(--accent)" strokeWidth="2" />
                </svg>
              </span>
            </h2>

            <div className="space-y-4 font-body text-[var(--muted-foreground)] leading-relaxed">
              <p>
                En <strong className="text-[var(--foreground)]">AlMaje Floral</strong>, cada flor 
                cuenta una historia. Somos un pequeño negocio artesanal dedicado a crear ramos y 
                arreglos florales únicos utilizando limpiapipas de la más alta calidad.
              </p>
              
              <p>
                Nuestras creaciones no son flores comunes: son obras de arte que duran para siempre. 
                Cada pétalo es moldeado a mano con amor y dedicación, creando piezas únicas que 
                capturan la belleza de la naturaleza sin marchitarse nunca.
              </p>

              <p>
                Desde ramos románticos hasta creaciones especiales con tus personajes favoritos, 
                trabajamos para hacer realidad tu visión perfecta para cualquier ocasión especial.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <div 
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[var(--soft-pink)]"
                  style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
                >
                  <svg className="w-6 h-6 text-[var(--primary)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-body font-bold text-[var(--foreground)]">Hecho con Amor</h4>
                  <p className="text-sm text-[var(--muted-foreground)]">Cada pieza es creada a mano con dedicación.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div 
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[var(--sunflower-yellow)]/30"
                  style={{ borderRadius: "15px 255px 15px 225px/225px 15px 255px 15px" }}
                >
                  <svg className="w-6 h-6 text-[var(--antique-gold)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18.5L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-body font-bold text-[var(--foreground)]">Duran para Siempre</h4>
                  <p className="text-sm text-[var(--muted-foreground)]">Sin agua, sin cuidados, belleza eterna.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div 
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[var(--moss-green)]/20"
                  style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
                >
                  <svg className="w-6 h-6 text-[var(--moss-green)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-body font-bold text-[var(--foreground)]">100% Personalizable</h4>
                  <p className="text-sm text-[var(--muted-foreground)]">Colores, tamaños y estilos a tu gusto.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div 
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[var(--deep-fuchsia)]/20"
                  style={{ borderRadius: "15px 255px 15px 225px/225px 15px 255px 15px" }}
                >
                  <svg className="w-6 h-6 text-[var(--deep-fuchsia)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-body font-bold text-[var(--foreground)]">Entrega Especial</h4>
                  <p className="text-sm text-[var(--muted-foreground)]">Empaque cuidadoso para momentos únicos.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#personalizar"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--primary)] text-[var(--primary-foreground)] font-body font-bold transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:shadow-[var(--primary)]/25"
                style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
              >
                <span>Crear Mi Ramo</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M7 4l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
