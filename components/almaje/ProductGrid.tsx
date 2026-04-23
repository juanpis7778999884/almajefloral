"use client"

import { useState } from "react"
import ProductCard, { Product } from "./ProductCard"

const products: Product[] = [
  {
    id: 1,
    name: "Ramo Primavera Colorido",
    description: "Un hermoso ramo con girasoles, lirios rosados, margaritas y anturios rojos. Perfecto para alegrar cualquier espacio.",
    price: 85000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-07%20at%202.48.02%20PM%20%281%29-oiAqWGgk839CahGZZ2CE7cvVpknGQX.jpeg",
    category: "Ramos",
    colors: ["#FFB703", "#F8C8DC", "#C71585", "#C44536"]
  },
  {
    id: 2,
    name: "Rosas Azules y Doradas",
    description: "Elegante ramo de rosas en azul cobalto y dorado antiguo con mariposa decorativa. Ideal para ocasiones especiales.",
    price: 65000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-07%20at%202.48.03%20PM-rm0sClNWTSzs0H5GnhlQ2DCsjhXNZa.jpeg",
    category: "Ramos",
    colors: ["#0047AB", "#C9A227", "#FFFFFF"]
  },
  {
    id: 3,
    name: "Orquídeas en Maceta",
    description: "Delicadas orquídeas rosas con centro detallado en maceta de cartón kraft. Una pieza de decoración permanente.",
    price: 55000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-07%20at%202.47.33%20PM-GP0hdssLHTMLd8cQHXswkPSyXBxkPW.jpeg",
    category: "Macetas",
    colors: ["#F8C8DC", "#C71585", "#4A5D23"]
  },
  {
    id: 4,
    name: "Lirios Lavanda",
    description: "Ramo de lirios en tonos lavanda y rosa con detalles de mariposa y tarjeta personalizable.",
    price: 72000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-07%20at%202.47.33%20PM%20%281%29-sDNArPMva014IWJ9JrCRYr1A5ptERs.jpeg",
    category: "Ramos",
    colors: ["#E6E6FA", "#F8C8DC", "#4A5D23"]
  },
  {
    id: 5,
    name: "Rosas Rojas Elegantes",
    description: "Clásico ramo de rosas rojas intensas en envoltorio negro con lazo satinado. El regalo romántico perfecto.",
    price: 60000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-07%20at%202.47.32%20PM%20%281%29-SLAyK1nHzJy1riWZZSnhARMcxkdeAx.jpeg",
    category: "Ramos",
    colors: ["#C44536", "#1A1A1A", "#FFFFFF"]
  },
  {
    id: 6,
    name: "Girasoles con Kuromi",
    description: "Adorable ramo de girasoles con peluche de Kuromi en envoltorio de lunares. Perfecto para fans de Sanrio.",
    price: 120000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-07%20at%202.47.33%20PM%20%282%29-KV7NvqW18zKGxQY4bKNDjqRaYcgIvb.jpeg",
    category: "Especiales",
    colors: ["#FFB703", "#1A1A1A", "#8B5CF6"]
  },
  {
    id: 7,
    name: "Mix Tulipanes y Girasoles",
    description: "Ramo mixto con tulipanes rosados, girasoles y margaritas. Una explosión de color y alegría.",
    price: 78000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-07%20at%202.48.02%20PM-WytLJ4c1kscjNTZwY5HspS4V86EN5c.jpeg",
    category: "Ramos",
    colors: ["#F8C8DC", "#FFB703", "#FFFFFF", "#C71585"]
  },
  {
    id: 8,
    name: "Hello Kitty Graduación",
    description: "Ramo de graduación con Hello Kitty y flores en tonos rosa y blanco. Incluye birrete dorado.",
    price: 135000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-07%20at%202.47.32%20PM-E62BEMQPb5w5bfpAtNRLWJfroTOuRD.jpeg",
    category: "Especiales",
    colors: ["#F8C8DC", "#FFFFFF", "#C9A227"]
  },
  {
    id: 9,
    name: "Hello Kitty Elegante",
    description: "Sofisticado ramo con Hello Kitty en estilo gótico con flores blancas y mariposas doradas.",
    price: 145000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-07%20at%202.47.34%20PM-qro7XKUAmu3Xw8XXQZ1yreKpW0A2J0.jpeg",
    category: "Especiales",
    colors: ["#1A1A1A", "#FFFFFF", "#C9A227"]
  },
  {
    id: 10,
    name: "Tulipanes y Lirios Rosados",
    description: "Elegante ramo de tulipanes y lirios en tonos rosa con envoltorio blanco y lazo satinado. Delicadeza artesanal.",
    price: 88000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%209.34.11%20AM-guvCKIFQRBdjHeiuKHXOQoHQX1gkS9.jpeg",
    category: "Ramos",
    colors: ["#F8C8DC", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 11,
    name: "Lirios Rosa con Luces",
    description: "Hermoso ramo de lirios rosados con hojas verdes, envoltorio rosa y luces decorativas. Romantico y magico.",
    price: 95000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%209.34.10%20AM%20%283%29-vZK4NuxS7Pf7GLiGhj04lfTzFnnOJV.jpeg",
    category: "Ramos",
    colors: ["#F8C8DC", "#4A5D23", "#FFFFFF"]
  },
  {
    id: 12,
    name: "Girasoles Good Luck",
    description: "Adorables colgadores de puerta con girasoles y margaritas. Disponibles en verde, amarillo, lila y rosa.",
    price: 35000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%209.34.11%20AM%20%282%29-auP0WevQ04JhfhK6AC2ZUvqVjSWqNr.jpeg",
    category: "Especiales",
    colors: ["#FFB703", "#4A5D23", "#E6E6FA", "#F8C8DC"]
  },
  {
    id: 13,
    name: "Ramo Happy Birthday Rosa",
    description: "Espectacular ramo de cumpleanos con tulipanes, lirios y margaritas en tonos rosa intenso. Incluye topper.",
    price: 110000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%209.34.09%20AM-oJzY7JUJ0gpbiwQ1jmrE609wR2PvTP.jpeg",
    category: "Especiales",
    colors: ["#C71585", "#F8C8DC", "#FFFFFF"]
  },
  {
    id: 14,
    name: "Hello Kitty Lirios",
    description: "Tierno ramo con Hello Kitty, lirios rosados y tulipanes. Envoltorio en tonos durazno con encaje y perlas.",
    price: 140000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%209.34.09%20AM%20%282%29-ahD6d9j5tDQjwBcIW0v9ij6AyKH0TI.jpeg",
    category: "Especiales",
    colors: ["#F8C8DC", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 15,
    name: "Girasol Solitario Elegante",
    description: "Un hermoso girasol individual con envoltorio blanco y lazo amarillo satinado. Simple pero impactante.",
    price: 45000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%209.34.10%20AM%20%282%29-ZTRMdziPOJGNopOlxVEPmKVo6izvK3.jpeg",
    category: "Ramos",
    colors: ["#FFB703", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 16,
    name: "Girasoles Iluminados",
    description: "Bouquet magico de girasoles con luces LED, envoltorio rosa geometrico y margaritas decorativas.",
    price: 125000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%209.34.09%20AM%20%283%29-CSmmsWlEXEA13uh15J6I2VhrZXr1FY.jpeg",
    category: "Especiales",
    colors: ["#FFB703", "#F8C8DC", "#FFFFFF"]
  },
  {
    id: 17,
    name: "Flores Everyday Card",
    description: "Tarjeta colgante con tulipanes naranjas y margaritas. Perfecta para regalar en cualquier ocasion.",
    price: 38000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%209.34.11%20AM%20%281%29-Pv2yLOh9IIOIwerttzp2SOySkejcmA.jpeg",
    category: "Especiales",
    colors: ["#FFB703", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 18,
    name: "Rosas con Mariposas Doradas",
    description: "Elegante ramo de rosas en rosa y blanco con mariposas doradas decorativas. Un clasico renovado.",
    price: 98000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%209.34.10%20AM%20%281%29-KqSY1P3qPvsYuGijZkF4wUUAZqYZ4O.jpeg",
    category: "Ramos",
    colors: ["#F8C8DC", "#FFFFFF", "#C9A227"]
  },
  {
    id: 19,
    name: "Rosas Coral con Perlas",
    description: "Sofisticado ramo de rosas coral con detalles de perlas, envoltorio dorado y blanco con lazo satinado.",
    price: 105000,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-23%20at%209.34.10%20AM-v7IOSK1LuBHPbJeEt5Z98vkfY6IswY.jpeg",
    category: "Ramos",
    colors: ["#E8998D", "#C9A227", "#FFFFFF"]
  }
]

const categories = ["Todos", "Ramos", "Macetas", "Especiales"]

interface ProductGridProps {
  onCustomize: (product: Product) => void
}

export default function ProductGrid({ onCustomize }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProducts = activeCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="tienda" className="py-20 px-4 bg-[var(--secondary)]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block font-body text-sm text-[var(--accent)] tracking-[0.3em] uppercase mb-2">
            Nuestra Colección
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[var(--foreground)] mb-4">
            Galería de Arte Floral
          </h2>
          <p className="font-body text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Cada pieza es una obra de arte única, creada con dedicación y los mejores materiales artesanales.
          </p>

          {/* Decorative line */}
          <svg className="w-40 h-6 mx-auto mt-6" viewBox="0 0 160 24">
            <path
              d="M10,12 Q40,4 80,12 T150,12"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 4"
            />
            <circle cx="80" cy="12" r="4" fill="var(--primary)" />
          </svg>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 font-body font-medium text-sm transition-all hover-wobble ${
                activeCategory === category
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--muted)]"
              }`}
              style={{ 
                borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
                border: activeCategory === category ? "none" : "2px dashed var(--border)"
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                animation: `fadeInUp 0.5s ease-out ${index * 100}ms forwards`
              }}
            >
              <ProductCard product={product} onCustomize={onCustomize} />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-24 h-24 mx-auto text-[var(--muted-foreground)] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18.5L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />
            </svg>
            <p className="font-body text-[var(--muted-foreground)]">No hay productos en esta categoría aún.</p>
          </div>
        )}

        {/* Decorative bottom element */}
        <div className="flex justify-center mt-16">
          <svg className="w-64 h-8" viewBox="0 0 256 32">
            <path
              d="M0,16 Q32,8 64,16 T128,16 T192,16 T256,16"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeDasharray="8 4"
            />
            {/* Pequeñas flores decorativas */}
            <circle cx="64" cy="16" r="6" fill="var(--soft-pink)" />
            <circle cx="128" cy="16" r="6" fill="var(--sunflower-yellow)" />
            <circle cx="192" cy="16" r="6" fill="var(--deep-fuchsia)" />
            <circle cx="64" cy="16" r="3" fill="var(--antique-gold)" />
            <circle cx="128" cy="16" r="3" fill="var(--foreground)" opacity="0.3" />
            <circle cx="192" cy="16" r="3" fill="var(--antique-gold)" />
          </svg>
        </div>
      </div>
    </section>
  )
}
