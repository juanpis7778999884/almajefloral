"use client"

import { useState } from "react"
import Image from "next/image"

const PipecleanerBasketIcon = () => (
  <svg 
    viewBox="0 0 32 32" 
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    {/* Cesta de mimbre estilizada */}
    <path d="M6 14 C6 14 4 22 8 26 C12 30 20 30 24 26 C28 22 26 14 26 14" className="stroke-[var(--antique-gold)]" />
    <path d="M6 14 Q16 12 26 14" className="stroke-[var(--antique-gold)]" />
    <path d="M8 18 Q16 16 24 18" className="stroke-[var(--antique-gold)]" strokeWidth="1.5" />
    <path d="M9 22 Q16 20 23 22" className="stroke-[var(--antique-gold)]" strokeWidth="1.5" />
    {/* Asa */}
    <path d="M10 14 Q16 4 22 14" className="stroke-[var(--moss-green)]" strokeWidth="2.5" />
    {/* Flores asomando */}
    <circle cx="13" cy="10" r="2" className="fill-[var(--deep-fuchsia)] stroke-none" />
    <circle cx="19" cy="9" r="2" className="fill-[var(--sunflower-yellow)] stroke-none" />
    <circle cx="16" cy="7" r="1.5" className="fill-[var(--soft-pink)] stroke-none" />
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M4 6 C4 6 8 5 12 6 C16 7 20 6 20 6" />
    <path d="M4 12 C4 12 8 13 12 12 C16 11 20 12 20 12" />
    <path d="M4 18 C4 18 8 17 12 18 C16 19 20 18 20 18" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M6 6 C6 6 12 12 18 18" />
    <path d="M18 6 C18 6 12 12 6 18" />
  </svg>
)

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartCount] = useState(0)

  const navItems = [
    { name: "Tienda", href: "#tienda" },
    { name: "Personalizar", href: "#personalizar" },
    { name: "Sobre Nosotros", href: "#nosotros" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[var(--card)]/95 backdrop-blur-sm border-b-2 border-dashed border-[var(--accent)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 transition-transform group-hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-20%20at%209.36.30%20AM-zEN1aMWlpa7I3ecZc9SMcH9nyiFNAt.jpeg"
                alt="AlMaje Floral Logo"
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-3xl text-[var(--primary)] tracking-wide">AlMaje</h1>
              <p className="text-xs text-[var(--muted-foreground)] tracking-[0.2em] uppercase -mt-1">Floral</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-display text-xl text-[var(--foreground)] hover:text-[var(--primary)] transition-all duration-300 relative group"
              >
                <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-0.5">{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all duration-500 ease-out group-hover:w-full" 
                  style={{ borderRadius: "50% 20% 50% 20%" }} 
                />
              </a>
            ))}
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button 
              className="relative p-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors hover-wobble"
              aria-label="Carrito de compras"
            >
              <PipecleanerBasketIcon />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--deep-fuchsia)] text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t-2 border-dashed border-[var(--accent)] ribbon-enter">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl text-[var(--foreground)] hover:text-[var(--primary)] transition-colors py-2 px-4 rounded-lg hover:bg-[var(--secondary)]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* Decorative thread line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,1.5 Q50,0 100,1.5 T200,1.5 T300,1.5 T400,1.5 T500,1.5 T600,1.5 T700,1.5 T800,1.5 T900,1.5 T1000,1.5 T1100,1.5 T1200,1.5 T1300,1.5 T1400,1.5 T1500,1.5 T1600,1.5 T1700,1.5 T1800,1.5 T1900,1.5 T2000,1.5"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
        </svg>
      </div>
    </header>
  )
}
