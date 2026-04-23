"use client"

import { useState } from "react"
import Header from "@/components/almaje/Header"
import Hero from "@/components/almaje/Hero"
import ProductGrid from "@/components/almaje/ProductGrid"
import CustomizationForm from "@/components/almaje/CustomizationForm"
import AboutSection from "@/components/almaje/AboutSection"
import Footer from "@/components/almaje/Footer"
import { Product } from "@/components/almaje/ProductCard"

export default function AlMajeFloral() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleCustomize = (product: Product) => {
    setSelectedProduct(product)
    setIsFormOpen(true)
  }

  const handleOpenFormDirectly = () => {
    setSelectedProduct(null)
    setIsFormOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductGrid onCustomize={handleCustomize} />
      
      {/* CTA Section for custom orders */}
      <section id="personalizar" className="py-20 px-4 bg-[var(--card)] relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[5%] opacity-20">
            <svg viewBox="0 0 60 60" className="w-16 h-16">
              {[0, 72, 144, 216, 288].map((rotation, i) => (
                <ellipse
                  key={i}
                  cx="30"
                  cy="10"
                  rx="8"
                  ry="12"
                  fill="var(--soft-pink)"
                  transform={`rotate(${rotation} 30 30)`}
                />
              ))}
              <circle cx="30" cy="30" r="8" fill="var(--antique-gold)" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-[10%] opacity-20">
            <svg viewBox="0 0 60 60" className="w-20 h-20">
              {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
                <ellipse
                  key={i}
                  cx="30"
                  cy="8"
                  rx="6"
                  ry="10"
                  fill="var(--sunflower-yellow)"
                  transform={`rotate(${rotation} 30 30)`}
                />
              ))}
              <circle cx="30" cy="30" r="6" fill="var(--foreground)" opacity="0.3" />
            </svg>
          </div>
          <div className="absolute top-1/2 left-[15%] opacity-15 -translate-y-1/2">
            <svg viewBox="0 0 40 30" className="w-12 h-10 butterfly-animate">
              <path d="M18 15 Q8 5 4 10 Q0 15 8 18 Q14 20 18 15" fill="var(--sunflower-yellow)" />
              <path d="M17 16 Q10 22 6 20 Q2 18 10 22 Q15 24 17 16" fill="var(--sunflower-yellow)" />
              <path d="M22 15 Q32 5 36 10 Q40 15 32 18 Q26 20 22 15" fill="var(--sunflower-yellow)" />
              <path d="M23 16 Q30 22 34 20 Q38 18 30 22 Q25 24 23 16" fill="var(--sunflower-yellow)" />
              <ellipse cx="20" cy="16" rx="2" ry="5" fill="var(--foreground)" />
            </svg>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Decorative top element */}
          <div className="flex justify-center mb-6">
            <svg width="200" height="40" viewBox="0 0 200 40">
              <path
                d="M20,20 Q50,10 100,20 T180,20"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="8 4"
              />
              {/* Pequeñas perlas */}
              <circle cx="60" cy="17" r="4" fill="var(--soft-pink)" />
              <circle cx="100" cy="20" r="5" fill="var(--primary)" />
              <circle cx="140" cy="17" r="4" fill="var(--sunflower-yellow)" />
            </svg>
          </div>

          <span className="inline-block font-body text-sm text-[var(--accent)] tracking-[0.3em] uppercase mb-3">
            ¿Tienes algo especial en mente?
          </span>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[var(--foreground)] mb-6 leading-tight">
            Crea tu{" "}
            <span className="relative inline-block text-[var(--primary)]">
              ramo perfecto
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path
                  d="M0,6 Q50,0 100,6 T200,6"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="font-body text-lg text-[var(--muted-foreground)] max-w-xl mx-auto mb-10 leading-relaxed">
            Diseña un arreglo completamente único. Elige los colores, flores, accesorios y 
            personajes que más te gusten. ¡Nosotros lo hacemos realidad!
          </p>

          <button
            onClick={handleOpenFormDirectly}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[var(--primary)] text-[var(--primary-foreground)] font-body font-bold text-lg transition-all hover:scale-105 hover:shadow-xl overflow-hidden warm-glow"
            style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
          >
            <span className="relative z-10">Comenzar a Personalizar</span>
            <svg className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            {/* Butterfly on hover */}
            <span className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-2 group-hover:translate-x-2 butterfly-animate">
              <svg viewBox="0 0 24 18" className="w-8 h-6">
                <path d="M10 9 Q4 3 2 6 Q0 9 5 11 Q8 12 10 9" fill="var(--sunflower-yellow)" />
                <path d="M9 10 Q5 14 3 12 Q1 10 6 13 Q8 14 9 10" fill="var(--sunflower-yellow)" />
                <path d="M14 9 Q20 3 22 6 Q24 9 19 11 Q16 12 14 9" fill="var(--sunflower-yellow)" />
                <path d="M15 10 Q19 14 21 12 Q23 10 18 13 Q16 14 15 10" fill="var(--sunflower-yellow)" />
                <ellipse cx="12" cy="10" rx="1" ry="3" fill="white" />
              </svg>
            </span>
          </button>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-[var(--muted-foreground)]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--moss-green)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="font-body text-sm">Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--deep-fuchsia)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.13-1.35A9.935 9.935 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
              <span className="font-body text-sm">Respuesta rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--sunflower-yellow)]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18.5L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />
              </svg>
              <span className="font-body text-sm">Calidad garantizada</span>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <Footer />

      {/* Customization Modal */}
      <CustomizationForm
        selectedProduct={selectedProduct}
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false)
          setSelectedProduct(null)
        }}
      />
    </main>
  )
}
