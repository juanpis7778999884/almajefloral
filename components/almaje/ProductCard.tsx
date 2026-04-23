"use client"

import Image from "next/image"
import { useState } from "react"

export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  colors: string[]
}

interface ProductCardProps {
  product: Product
  onCustomize: (product: Product) => void
}

export default function ProductCard({ product, onCustomize }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <article
      className="relative organic-card p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with hand-drawn border effect */}
      <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-lg">
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            border: "3px solid transparent",
            borderImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect x='2' y='2' width='96' height='96' fill='none' stroke='%235b3a7a' stroke-width='2' stroke-dasharray='8,4' rx='8'/%3E%3C/svg%3E") 30 round`,
          }}
        />
        
        {!imageLoaded && (
          <div className="absolute inset-0 bg-[var(--secondary)] animate-pulse flex items-center justify-center">
            <svg className="w-12 h-12 text-[var(--muted-foreground)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 16l4-4 4 4 8-8M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-700 ease-out ${isHovered ? "scale-110" : "scale-100"} ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-20">
          <span 
            className="inline-block px-3 py-1 bg-[var(--card)]/90 text-[var(--primary)] font-body text-xs font-medium backdrop-blur-sm"
            style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
          >
            {product.category}
          </span>
        </div>

        {/* Floating butterfly on hover */}
        {isHovered && (
          <div className="absolute top-4 right-4 z-20 butterfly-animate">
            <svg viewBox="0 0 30 24" className="w-8 h-6">
              <path d="M13 12 Q5 4 3 8 Q1 12 7 14 Q11 15 13 12" fill="var(--sunflower-yellow)" opacity="0.9" />
              <path d="M12 13 Q6 18 4 16 Q2 14 8 17 Q11 18 12 13" fill="var(--sunflower-yellow)" opacity="0.9" />
              <path d="M17 12 Q25 4 27 8 Q29 12 23 14 Q19 15 17 12" fill="var(--sunflower-yellow)" opacity="0.9" />
              <path d="M18 13 Q24 18 26 16 Q28 14 22 17 Q19 18 18 13" fill="var(--sunflower-yellow)" opacity="0.9" />
              <ellipse cx="15" cy="13" rx="1.5" ry="4" fill="var(--foreground)" />
            </svg>
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="space-y-3">
        <h3 className="font-display text-2xl text-[var(--foreground)] leading-tight">
          {product.name}
        </h3>
        
        <p className="font-body text-sm text-[var(--muted-foreground)] line-clamp-2">
          {product.description}
        </p>

        {/* Color dots */}
        <div className="flex items-center gap-2">
          <span className="font-body text-xs text-[var(--muted-foreground)]">Colores:</span>
          <div className="flex gap-1">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="w-4 h-4 rounded-full border-2 border-[var(--card)] shadow-sm"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="font-body text-xs text-[var(--muted-foreground)]">Desde</span>
            <p className="font-display text-2xl text-[var(--primary)]">
              ${product.price.toLocaleString('es-CO')} <span className="text-sm font-body font-normal">COP</span>
            </p>
          </div>

          <button
            onClick={() => onCustomize(product)}
            className="relative px-5 py-2.5 bg-[var(--soft-pink)] text-[var(--foreground)] font-body font-medium text-sm transition-all duration-400 ease-out hover:scale-110 hover:shadow-lg hover:bg-[var(--deep-fuchsia)] hover:text-white group overflow-hidden"
            style={{ 
              borderRadius: "15px 255px 15px 225px/225px 15px 255px 15px",
              boxShadow: "2px 2px 0 rgba(91,58,122,0.1)"
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Personalizar
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M7 4l6 6-6 6" />
              </svg>
            </span>
            {/* Ribbon tail effect */}
            <span 
              className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--soft-pink)] rotate-45 -z-10"
              style={{ boxShadow: "-1px 1px 0 rgba(91,58,122,0.1)" }}
            />
            <span 
              className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--soft-pink)] rotate-45 -z-10"
              style={{ boxShadow: "1px -1px 0 rgba(91,58,122,0.1)" }}
            />
          </button>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute -top-1 -left-1 w-6 h-6">
        <svg viewBox="0 0 24 24" className="w-full h-full text-[var(--accent)]">
          <path d="M4 4 Q12 4 12 12 Q4 12 4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="absolute -bottom-1 -right-1 w-6 h-6 rotate-180">
        <svg viewBox="0 0 24 24" className="w-full h-full text-[var(--accent)]">
          <path d="M4 4 Q12 4 12 12 Q4 12 4 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </article>
  )
}
