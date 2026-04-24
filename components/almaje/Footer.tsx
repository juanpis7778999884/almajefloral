"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[var(--secondary)] pt-16 pb-8 px-4 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-4 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 1440 16" preserveAspectRatio="none">
          <path
            d="M0,8 Q90,0 180,8 T360,8 T540,8 T720,8 T900,8 T1080,8 T1260,8 T1440,8"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeDasharray="12 6"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-16 h-16">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-20%20at%209.36.30%20AM-zEN1aMWlpa7I3ecZc9SMcH9nyiFNAt.jpeg"
                  alt="AlMaje Floral Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="font-display text-3xl text-[var(--primary)]">AlMaje</h3>
                <p className="text-xs text-[var(--muted-foreground)] tracking-[0.2em] uppercase">Floral</p>
              </div>
            </div>
            <p className="font-body text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xs">
              Creando flores eternas con amor y dedicación. Cada pieza es una obra de arte única hecha a mano.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors hover-wobble"
                style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/573115510169"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--moss-green)] hover:text-white transition-colors hover-wobble"
                style={{ borderRadius: "15px 255px 15px 225px/225px 15px 255px 15px" }}
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--cobalt-blue)] hover:text-white transition-colors hover-wobble"
                style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-xl text-[var(--foreground)] mb-4">Enlaces Rápidos</h4>
            <nav className="space-y-3">
              <a href="#tienda" className="block font-body text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
                Tienda
              </a>
              <a href="#personalizar" className="block font-body text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
                Personalizar Pedido
              </a>
              <a href="#nosotros" className="block font-body text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
                Sobre Nosotros
              </a>
              <a href="https://wa.me/573115510169" target="_blank" rel="noopener noreferrer" className="block font-body text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-xl text-[var(--foreground)] mb-4">Contáctanos</h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/573115510169"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-[var(--muted-foreground)] hover:text-[var(--moss-green)] transition-colors group"
              >
                <span 
                  className="w-10 h-10 flex items-center justify-center bg-[var(--card)] group-hover:bg-[var(--moss-green)] group-hover:text-white transition-colors"
                  style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span>WhatsApp</span>
              </a>

              <div className="flex items-center gap-3 font-body text-[var(--muted-foreground)]">
                <span 
                  className="w-10 h-10 flex items-center justify-center bg-[var(--card)]"
                  style={{ borderRadius: "15px 255px 15px 225px/225px 15px 255px 15px" }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </span>
                <span>Pedidos personalizados</span>
              </div>

              <div className="flex items-center gap-3 font-body text-[var(--muted-foreground)]">
                <span 
                  className="w-10 h-10 flex items-center justify-center bg-[var(--card)]"
                  style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </span>
                <span>Hecho con amor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-dashed border-[var(--border)] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-[var(--muted-foreground)]">
              © 2026 AlMaje Floral. Todos los derechos reservados.
            </p>
            
            {/* Decorative element */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 18" className="w-6 h-5 text-[var(--sunflower-yellow)]">
                <path d="M10 9 Q4 3 2 6 Q0 9 5 11 Q8 12 10 9" fill="currentColor" />
                <path d="M9 10 Q5 14 3 12 Q1 10 6 13 Q8 14 9 10" fill="currentColor" />
                <path d="M14 9 Q20 3 22 6 Q24 9 19 11 Q16 12 14 9" fill="currentColor" />
                <path d="M15 10 Q19 14 21 12 Q23 10 18 13 Q16 14 15 10" fill="currentColor" />
                <ellipse cx="12" cy="10" rx="1" ry="3" fill="var(--foreground)" />
              </svg>
              <span className="font-body text-sm text-[var(--muted-foreground)]">
                Creado con amor
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute bottom-20 left-10 opacity-10">
        <svg viewBox="0 0 80 80" className="w-20 h-20">
          {[0, 72, 144, 216, 288].map((rotation, i) => (
            <ellipse
              key={i}
              cx="40"
              cy="15"
              rx="10"
              ry="15"
              fill="var(--primary)"
              transform={`rotate(${rotation} 40 40)`}
            />
          ))}
        </svg>
      </div>
      <div className="absolute top-32 right-20 opacity-10">
        <svg viewBox="0 0 60 60" className="w-16 h-16">
          {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
            <ellipse
              key={i}
              cx="30"
              cy="10"
              rx="8"
              ry="12"
              fill="var(--accent)"
              transform={`rotate(${rotation} 30 30)`}
            />
          ))}
        </svg>
      </div>
    </footer>
  )
}
