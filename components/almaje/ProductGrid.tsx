"use client"

import { useState } from "react"
import ProductCard, { Product } from "./ProductCard"

// ==========================================
// PRODUCTOS - Modifica los precios aqui
// ==========================================
const products: Product[] = [
  {
    id: 1,
    name: "Arreglo Congratulations",
    description: "Elegante arreglo en caja redonda con tulipanes rosas, flores crema y margaritas. Incluye tarjeta de felicitaciones.",
    price: 95000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.34%20PM-vfnSl3XHomFvMi9p31JFaZE076KVBN.jpeg",
    category: "Arreglos",
    colors: ["#F8C8DC", "#FFFDD0", "#FFFFFF"]
  },
  {
    id: 2,
    name: "Lirios Rojos Pasion",
    description: "Impresionante ramo de lirios rojos intensos con margaritas blancas y tulipanes. Envuelto en papel blanco elegante.",
    price: 85000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.35%20PM%20%284%29-7omVtWQ13sbCZG4H769ba29DzDlfGN.jpeg",
    category: "Ramos",
    colors: ["#8B0000", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 3,
    name: "Ramo Cumpleanos Rosa",
    description: "Gran ramo de cumpleanos con tulipanes, lirios y gerberas en tonos rosa. Incluye tarjeta personalizada y foto.",
    price: 120000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.36%20PM-3UJjYcMMOX9kRukajZ8mg2GtARrIY6.jpeg",
    category: "Ramos",
    colors: ["#F8C8DC", "#C71585", "#4A5D23"]
  },
  {
    id: 4,
    name: "Canasta Just For You Rosa",
    description: "Hermosa canasta blanca con flores rosas variadas: lirios, tulipanes, margaritas y flores de cerezo.",
    price: 75000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.35%20PM-np59d8IS37JCHrs42NVmpXPlqg7v3A.jpeg",
    category: "Canastas",
    colors: ["#F8C8DC", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 5,
    name: "Girasol con Mariposas",
    description: "Radiante girasol grande con margaritas y mariposas doradas decorativas. Envuelto en papel rosa y lavanda.",
    price: 70000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.35%20PM%20%282%29-U8w4CLKImGIHcQlXjQJRGqsQ8JjHKm.jpeg",
    category: "Ramos",
    colors: ["#FFB703", "#FFFFFF", "#C9A227"]
  },
  {
    id: 6,
    name: "Canasta Girasoles Azul",
    description: "Alegre canasta con girasoles, flores azules y margaritas. Incluye cinta azul personalizada.",
    price: 85000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.35%20PM%20%281%29-EOBT6BKyJBCPIT8V1DXBWfRwOfQNJa.jpeg",
    category: "Canastas",
    colors: ["#FFB703", "#87CEEB", "#FFFFFF"]
  },
  {
    id: 7,
    name: "Anturio Rosa Delicado",
    description: "Pequeno ramo con anturio rosa, margaritas y helecho. Perfecto para ocasiones especiales.",
    price: 35000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.35%20PM%20%283%29-AP73CJi5vLuCQh8zGOnvkKKaCpklXY.jpeg",
    category: "Individuales",
    colors: ["#F8C8DC", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 8,
    name: "Ramo Rosa Dorado",
    description: "Majestuoso ramo con lirios rosas, tulipanes, margaritas y detalles en papel dorado. Con perlas decorativas.",
    price: 110000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.34%20PM%20%286%29-1xZvmhKf7PyRQQ5h9xmMOXraWjcE3R.jpeg",
    category: "Ramos",
    colors: ["#F8C8DC", "#C9A227", "#FFFFFF"]
  },
  {
    id: 9,
    name: "Rosas Satinadas con Mariposas",
    description: "Elegante ramo de rosas de satin en tonos rosa y crema con mariposas doradas decorativas.",
    price: 75000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.34%20PM%20%282%29-tksyhnens15Q9xEM7OATEDr2JqvbdS.jpeg",
    category: "Ramos",
    colors: ["#F8C8DC", "#FFFDD0", "#C9A227"]
  },
  {
    id: 10,
    name: "Happy Birthday Rosa",
    description: "Ramo de cumpleanos con tulipanes rosas vibrantes, margaritas blancas y topper de Happy Birthday.",
    price: 90000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.33%20PM%20%282%29-GEgJEnLV8JoO6rIfcPWsTmIOW5eEEI.jpeg",
    category: "Ramos",
    colors: ["#FF69B4", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 11,
    name: "Lirios Rosa con Luces",
    description: "Hermoso ramo de lirios rosas con borde blanco y luces LED calidas. Magico para momentos especiales.",
    price: 105000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.33%20PM%20%283%29-F3mS3uhKRq4UPBw0KiaKpc37lmijyi.jpeg",
    category: "Especiales",
    colors: ["#F8C8DC", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 12,
    name: "Rosas Coral con Perlas",
    description: "Delicado ramo de rosas coral de satin decoradas con perlas y cinta. Envuelto en papel dorado y blanco.",
    price: 80000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.34%20PM%20%283%29-cJaBeoJmydTFsNdrjc9YHZUjACqKO5.jpeg",
    category: "Ramos",
    colors: ["#E9967A", "#FFFFFF", "#C9A227"]
  },
  {
    id: 13,
    name: "Lirios y Tulipanes Elegante",
    description: "Sofisticado ramo con lirios rosas y tulipanes envuelto en papel blanco con lazo rosa delicado.",
    price: 70000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.33%20PM%20%284%29-L0dj0tQH3jCeHwOB2TfjJxQnfOC9tl.jpeg",
    category: "Ramos",
    colors: ["#F8C8DC", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 14,
    name: "Girasoles Individuales Surtidos",
    description: "Set de girasoles individuales con margaritas en soportes de colores: verde, amarillo, lavanda y rosa.",
    price: 28000, // COP - precio por unidad
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.33%20PM-WYLnNKllFTQsiN7soBADxcHMPsSYCf.jpeg",
    category: "Individuales",
    colors: ["#FFB703", "#98FB98", "#E6E6FA"]
  },
  {
    id: 15,
    name: "Flores Amarillas Everyday",
    description: "Colorido ramo con flores amarillas y naranjas en soporte Everyday. Incluye girasol y margaritas.",
    price: 35000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.33%20PM%20%281%29-NPVE07vMQrSFCewujhsdKWsNewLKwz.jpeg",
    category: "Individuales",
    colors: ["#FFB703", "#FFA500", "#FFFFFF"]
  },
  {
    id: 16,
    name: "Girasoles con Luces LED",
    description: "Espectacular ramo de girasoles con margaritas y luces LED. Perfecto para fotos al atardecer.",
    price: 115000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.34%20PM%20%284%29-QBW7S154YeWejja61rDTIIUjuhWgDL.jpeg",
    category: "Especiales",
    colors: ["#FFB703", "#FFFFFF", "#F8C8DC"]
  },
  {
    id: 17,
    name: "Girasol Individual Elegante",
    description: "Girasol individual de satin con lazo amarillo brillante. Envuelto en papel blanco moderno.",
    price: 32000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%2012.37.34%20PM%20%281%29-J9A1HE0bv9awaG6vrDaqlb7JGQsvPH.jpeg",
    category: "Individuales",
    colors: ["#FFB703", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 18,
    name: "Girasoles con Kuromi",
    description: "Adorable ramo de girasoles con peluche de Kuromi en envoltorio de lunares. Perfecto para fans de Sanrio.",
    price: 105000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-07%20at%202.47.33%20PM%20%282%29-KV7NvqW18zKGxQY4bKNDjqRaYcgIvb.jpeg",
    category: "Especiales",
    colors: ["#FFB703", "#1A1A1A", "#8B5CF6"]
  },
  {
    id: 19,
    name: "Florero Grande Colorido",
    description: "Espectacular florero grande con gerberas, tulipanes, lirios basicos, amapolas, margaritas y follage en tonos rosa, amarillo y azul. Incluye tarjeta personalizada.",
    price: 110000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%203.14.40%20PM%20%284%29-pckY7jxdXmUOZ8ait0n6htC4R8n0IZ.jpeg",
    category: "Arreglos",
    colors: ["#F8C8DC", "#FFB703", "#87CEEB"]
  },
  {
    id: 20,
    name: "Jardin de Hadas con Luces",
    description: "Magico ramo jardin de hadas con tulipanes, margaritas, lirios basicos, lirio realista, follage y luces LED calidas. Perfecto para momentos romanticos.",
    price: 90000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%203.14.39%20PM%20%282%29-jZkRCEeIT3UymjFBYlod99P6oQwkjC.jpeg",
    category: "Especiales",
    colors: ["#F8C8DC", "#FFFFFF", "#FFD700"]
  },
  {
    id: 21,
    name: "Mini Girasoles en Maceta",
    description: "Adorables mini girasoles en maceta artesanal cafe. Perfectos para decorar escritorios y espacios pequenos.",
    price: 8000, // COP - precio por unidad
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%203.14.40%20PM%20%281%29-HGnGlu5bYSdqdUbzvJmMJODg7t2rXB.jpeg",
    category: "Individuales",
    colors: ["#FFB703", "#4A2C2A", "#4A5D23"]
  },
  {
    id: 22,
    name: "Orquidea Realista",
    description: "Sofisticada orquidea realista rosa y blanca en maceta ceramica blanca. Una pieza de arte floral de larga duracion.",
    price: 60000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%203.14.39%20PM%20%281%29-pAcEFjyZcJzcbnRd1bH9oc61DRRpwe.jpeg",
    category: "Arreglos",
    colors: ["#F8C8DC", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 23,
    name: "Lirios Carmesi en Maceta",
    description: "Hermosos lirios realistas rosa con capullos en maceta blanca elegante. Ideal para regalo y decoracion del hogar.",
    price: 45000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%203.14.38%20PM-aqRAhzD2iwY1B6rzUb4kDZHWZaC7Gj.jpeg",
    category: "Arreglos",
    colors: ["#F8C8DC", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 24,
    name: "Ramo Lily Azul",
    description: "Impresionante ramo lily con tulipanes, lirios basicos y lirio realista azules envuelto en papel azul.",
    price: 60000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%203.14.38%20PM%20%281%29-U6rrraG8R4KkxsX5xHzqGjQ7uhLMfJ.jpeg",
    category: "Ramos",
    colors: ["#87CEEB", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 25,
    name: "Bouquet 1 Dia de la Madre",
    description: "Delicado bouquet con tulipanes, rosa, amapolas, hortensia, anturio, lirio basico y follage. Incluye tarjeta de Feliz Dia de la Madre.",
    price: 80000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%203.14.40%20PM%20%282%29-Y10IsVbLiD198eTTsNUnnqRfsOMbyS.jpeg",
    category: "Ramos",
    colors: ["#F8C8DC", "#FFDAB9", "#E6E6FA"]
  },
  {
    id: 26,
    name: "Individual Tulipan Realista",
    description: "Pequeno y romantico bouquet individual con tulipan realista y flores rosa, decorado con encaje y tarjeta personalizada.",
    price: 20000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%203.14.39%20PM-IZsaQuLi8hMXGmXlQezKitBncLxYTo.jpeg",
    category: "Individuales",
    colors: ["#F8C8DC", "#FFFFFF", "#C0C0C0"]
  },
  {
    id: 27,
    name: "Ramo Lirios Estrella con Luces",
    description: "Lujoso ramo con lirios realistas stargazer, follage y luces LED. Envuelto elegantemente con lazo rosa.",
    price: 55000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%203.14.37%20PM-FtAX4G59TN14oK9gbHOzuupoqAhpz3.jpeg",
    category: "Ramos",
    colors: ["#F8C8DC", "#FFFFFF", "#4A5D23"]
  },
  {
    id: 28,
    name: "Rosa Azul Lindo Dia",
    description: "Hermosa rosa azul individual con tarjeta de Lindo Dia y Snoopy. Envuelta en tul blanco con lazo azul.",
    price: 20000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%203.14.40%20PM%20%283%29-mDZRoYIgaCU87GE369Cmq3tP2aLbZ1.jpeg",
    category: "Individuales",
    colors: ["#87CEEB", "#FFFDD0", "#FFFFFF"]
  },
  {
    id: 29,
    name: "Ramo Girasol con Mariposas",
    description: "Colorido ramo con girasol, margaritas moradas y azules, decorado con mariposas. Envuelto en papel lila.",
    price: 30000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%203.14.41%20PM-4Dprvea6QsOA648mgKuZ7xjoqhrqKt.jpeg",
    category: "Ramos",
    colors: ["#FFB703", "#9370DB", "#87CEEB"]
  },
  {
    id: 30,
    name: "Ramo Rose Elegante",
    description: "Ramo rose con tulipanes, gerberas, rosa y follage. Envuelto en papel rosa con lazo y mariposa.",
    price: 55000, // COP
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-12%20at%203.14.40%20PM-lmRo9giM5JO6As2I3ZYAR5JeR7la2O.jpeg",
    category: "Ramos",
    colors: ["#F8C8DC", "#FFFFFF", "#4A5D23"]
  }
]
// ==========================================

const categories = ["Todos", "Ramos", "Arreglos", "Canastas", "Individuales", "Especiales"]

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
