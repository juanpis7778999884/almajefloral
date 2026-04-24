"use client"

import { useState, useEffect } from "react"
import { Product } from "./ProductCard"

interface CustomizationFormProps {
  selectedProduct: Product | null
  isOpen: boolean
  onClose: () => void
}

const flowerTypes = [
  { id: "girasol", name: "Girasol", emoji: "🌻" },
  { id: "rosa", name: "Rosa", emoji: "🌹" },
  { id: "lirio", name: "Lirio", emoji: "🌸" },
  { id: "margarita", name: "Margarita", emoji: "🌼" },
  { id: "tulipan", name: "Tulipán", emoji: "🌷" },
  { id: "orquidea", name: "Orquídea", emoji: "🪻" },
]

const colorPalettes = [
  { id: "calido", name: "Cálidos", colors: ["#FFB703", "#C44536", "#C71585"] },
  { id: "frio", name: "Fríos", colors: ["#0047AB", "#E6E6FA", "#FFFFFF"] },
  { id: "pastel", name: "Pasteles", colors: ["#F8C8DC", "#E6E6FA", "#FFFACD"] },
  { id: "elegante", name: "Elegantes", colors: ["#1A1A1A", "#C9A227", "#FFFFFF"] },
  { id: "natural", name: "Naturales", colors: ["#4A5D23", "#F8C8DC", "#FFB703"] },
]

const ribbonStyles = [
  { id: "satin", name: "Satín Liso" },
  { id: "organza", name: "Organza Transparente" },
  { id: "encaje", name: "Encaje Vintage" },
  { id: "terciopelo", name: "Terciopelo" },
]

const wrapStyles = [
  { id: "kraft", name: "Papel Kraft" },
  { id: "blanco", name: "Papel Blanco Elegante" },
  { id: "negro", name: "Papel Negro Sofisticado" },
  { id: "lunares", name: "Papel con Lunares" },
  { id: "colores", name: "Papel de Colores" },
]

const characters = [
  { id: "ninguno", name: "Sin personaje" },
  { id: "hellokitty", name: "Hello Kitty" },
  { id: "kuromi", name: "Kuromi" },
  { id: "cinnamoroll", name: "Cinnamoroll" },
  { id: "mymelody", name: "My Melody" },
]

const accessories = [
  { id: "mariposas", name: "Mariposas Doradas", icon: "🦋" },
  { id: "perlas", name: "Perlas Decorativas", icon: "⚪" },
  { id: "brillos", name: "Toques de Brillo", icon: "✨" },
  { id: "hojas", name: "Hojas Verdes Extra", icon: "🌿" },
  { id: "tarjeta", name: "Tarjeta Personalizada", icon: "💌" },
]

const occasions = [
  "Cumpleaños",
  "Aniversario", 
  "Graduación",
  "Día de las Madres",
  "San Valentín",
  "Agradecimiento",
  "Solo porque sí",
  "Otro"
]

export default function CustomizationForm({ selectedProduct, isOpen, onClose }: CustomizationFormProps) {
  const [formData, setFormData] = useState({
    productName: "",
    flowerType: "",
    colorPalette: "",
    ribbonStyle: "",
    wrapStyle: "",
    character: "ninguno",
    accessories: [] as string[],
    quantity: 1,
    recipientName: "",
    occasion: "",
    deliveryDate: "",
    notes: "",
  })

  const [dateWarning, setDateWarning] = useState(false)

  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        productName: selectedProduct.name
      }))
    }
  }, [selectedProduct])

  useEffect(() => {
    if (formData.deliveryDate) {
      const selected = new Date(formData.deliveryDate)
      const today = new Date()
      const diffTime = selected.getTime() - today.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      setDateWarning(diffDays < 2 && diffDays >= 0)
    } else {
      setDateWarning(false)
    }
  }, [formData.deliveryDate])

  const handleAccessoryToggle = (accessoryId: string) => {
    setFormData(prev => ({
      ...prev,
      accessories: prev.accessories.includes(accessoryId)
        ? prev.accessories.filter(a => a !== accessoryId)
        : [...prev.accessories, accessoryId]
    }))
  }

  const getTodayString = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const handleSubmitToWhatsApp = () => {
    const flowerName = flowerTypes.find(f => f.id === formData.flowerType)?.name || "No especificado"
    const paletteName = colorPalettes.find(p => p.id === formData.colorPalette)?.name || "No especificado"
    const ribbonName = ribbonStyles.find(r => r.id === formData.ribbonStyle)?.name || "No especificado"
    const wrapName = wrapStyles.find(w => w.id === formData.wrapStyle)?.name || "No especificado"
    const characterName = characters.find(c => c.id === formData.character)?.name || "Sin personaje"
    const accessoriesList = formData.accessories
      .map(a => accessories.find(acc => acc.id === a)?.name)
      .filter(Boolean)
      .join(", ") || "Ninguno"

    const message = `
🌸✨ *NUEVO PEDIDO - ALMAJE FLORAL* ✨🌸

📦 *Producto Base:* ${formData.productName || "Pedido personalizado"}

🌺 *Detalles de Personalización:*
• Flor principal: ${flowerName}
• Paleta de colores: ${paletteName}
• Estilo de cinta: ${ribbonName}
• Papel de regalo: ${wrapName}
• Personaje: ${characterName}
• Accesorios: ${accessoriesList}

📋 *Información del Pedido:*
• Cantidad: ${formData.quantity}
• Para: ${formData.recipientName || "No especificado"}
• Ocasión: ${formData.occasion || "No especificada"}
• Fecha de entrega: ${formData.deliveryDate || "Por definir"}

💬 *Notas especiales:*
${formData.notes || "Sin notas adicionales"}

🦋 ¡Gracias por elegir AlMaje Floral! 🦋
    `.trim()

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/573115510169?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 backdrop-blur-sm p-4 sm:p-8"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        className="relative w-full max-w-2xl my-8 ribbon-enter"
      >
        {/* Decorative ribbon top */}
        <div className="flex justify-center mb-[-2px]">
          <svg width="120" height="30" viewBox="0 0 120 30">
            <path
              d="M0,30 L20,30 Q30,30 35,20 L40,10 Q45,0 60,0 Q75,0 80,10 L85,20 Q90,30 100,30 L120,30"
              fill="var(--soft-pink)"
            />
            <path
              d="M35,20 L40,10 Q45,0 60,0 Q75,0 80,10 L85,20"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1"
              strokeDasharray="4 2"
            />
          </svg>
        </div>

        {/* Form container */}
        <div 
          className="bg-[var(--card)] p-6 sm:p-8 relative"
          style={{ 
            borderRadius: "20px",
            border: "3px solid var(--soft-pink)",
            boxShadow: "8px 8px 0 rgba(91, 58, 122, 0.1)"
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors hover-wobble"
            aria-label="Cerrar formulario"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6 L18 18 M18 6 L6 18" />
            </svg>
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <span className="inline-block font-body text-xs text-[var(--accent)] tracking-[0.3em] uppercase mb-1">
              Diseña tu regalo perfecto
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[var(--primary)]">
              Personaliza tu Pedido
            </h2>
            {selectedProduct && (
              <p className="font-body text-sm text-[var(--muted-foreground)] mt-2">
                Basado en: <span className="font-medium text-[var(--foreground)]">{selectedProduct.name}</span>
              </p>
            )}
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSubmitToWhatsApp(); }}>
            {/* Flower Type */}
            <div>
              <label className="block font-body font-medium text-[var(--foreground)] mb-3">
                Flor Principal
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {flowerTypes.map((flower) => (
                  <button
                    key={flower.id}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, flowerType: flower.id }))}
                    className={`p-3 text-center transition-all hover-wobble ${
                      formData.flowerType === flower.id
                        ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                        : "bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--muted)]"
                    }`}
                    style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
                  >
                    <span className="text-2xl block mb-1">{flower.emoji}</span>
                    <span className="text-xs font-medium">{flower.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <label className="block font-body font-medium text-[var(--foreground)] mb-3">
                Paleta de Colores
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {colorPalettes.map((palette) => (
                  <button
                    key={palette.id}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, colorPalette: palette.id }))}
                    className={`p-3 transition-all ${
                      formData.colorPalette === palette.id
                        ? "ring-2 ring-[var(--primary)] ring-offset-2"
                        : ""
                    }`}
                    style={{ 
                      borderRadius: "15px",
                      border: "2px dashed var(--border)",
                      background: formData.colorPalette === palette.id ? "var(--secondary)" : "var(--card)"
                    }}
                  >
                    <div className="flex justify-center gap-1 mb-2">
                      {palette.colors.map((color, i) => (
                        <span
                          key={i}
                          className="w-5 h-5 rounded-full border border-gray-200"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-medium text-[var(--foreground)]">{palette.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Ribbon & Wrap Styles */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-body font-medium text-[var(--foreground)] mb-2">
                  Estilo de Cinta
                </label>
                <select
                  value={formData.ribbonStyle}
                  onChange={(e) => setFormData(prev => ({ ...prev, ribbonStyle: e.target.value }))}
                  className="w-full px-4 py-3 font-body organic-input"
                >
                  <option value="">Seleccionar...</option>
                  {ribbonStyles.map((style) => (
                    <option key={style.id} value={style.id}>{style.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-body font-medium text-[var(--foreground)] mb-2">
                  Papel de Regalo
                </label>
                <select
                  value={formData.wrapStyle}
                  onChange={(e) => setFormData(prev => ({ ...prev, wrapStyle: e.target.value }))}
                  className="w-full px-4 py-3 font-body organic-input"
                >
                  <option value="">Seleccionar...</option>
                  {wrapStyles.map((style) => (
                    <option key={style.id} value={style.id}>{style.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Character Selection */}
            <div>
              <label className="block font-body font-medium text-[var(--foreground)] mb-2">
                Personaje Adicional
              </label>
              <select
                value={formData.character}
                onChange={(e) => setFormData(prev => ({ ...prev, character: e.target.value }))}
                className="w-full px-4 py-3 font-body organic-input"
              >
                {characters.map((char) => (
                  <option key={char.id} value={char.id}>{char.name}</option>
                ))}
              </select>
            </div>

            {/* Accessories */}
            <div>
              <label className="block font-body font-medium text-[var(--foreground)] mb-3">
                Accesorios Extras
              </label>
              <div className="flex flex-wrap gap-2">
                {accessories.map((acc) => (
                  <button
                    key={acc.id}
                    type="button"
                    onClick={() => handleAccessoryToggle(acc.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all ${
                      formData.accessories.includes(acc.id)
                        ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                        : "bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--muted)]"
                    }`}
                    style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
                  >
                    <span>{acc.icon}</span>
                    <span>{acc.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-body font-medium text-[var(--foreground)] mb-2">
                  Cantidad
                </label>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}
                    className="w-12 h-12 flex items-center justify-center bg-[var(--secondary)] text-[var(--foreground)] font-bold text-xl hover:bg-[var(--muted)] transition-colors"
                    style={{ borderRadius: "255px 15px 15px 255px/15px 255px 255px 15px" }}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={formData.quantity}
                    onChange={(e) => setFormData(prev => ({ ...prev, quantity: Math.max(1, parseInt(e.target.value) || 1) }))}
                    className="w-20 h-12 text-center font-body font-bold text-lg bg-[var(--card)] border-y-2 border-[var(--border)]"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }))}
                    className="w-12 h-12 flex items-center justify-center bg-[var(--secondary)] text-[var(--foreground)] font-bold text-xl hover:bg-[var(--muted)] transition-colors"
                    style={{ borderRadius: "15px 255px 255px 15px/255px 15px 15px 255px" }}
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-body font-medium text-[var(--foreground)] mb-2">
                  Ocasión
                </label>
                <select
                  value={formData.occasion}
                  onChange={(e) => setFormData(prev => ({ ...prev, occasion: e.target.value }))}
                  className="w-full px-4 py-3 font-body organic-input"
                >
                  <option value="">Seleccionar...</option>
                  {occasions.map((occ) => (
                    <option key={occ} value={occ}>{occ}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Recipient & Date */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-body font-medium text-[var(--foreground)] mb-2">
                  Nombre del Destinatario
                </label>
                <input
                  type="text"
                  placeholder="¿Para quién es?"
                  value={formData.recipientName}
                  onChange={(e) => setFormData(prev => ({ ...prev, recipientName: e.target.value }))}
                  className="w-full px-4 py-3 font-body organic-input"
                />
              </div>

              <div>
                <label className="block font-body font-medium text-[var(--foreground)] mb-2">
                  Fecha de Entrega
                </label>
                <input
                  type="date"
                  min={getTodayString()}
                  value={formData.deliveryDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, deliveryDate: e.target.value }))}
                  className="w-full px-4 py-3 font-body organic-input"
                />
                {dateWarning && (
                  <p className="mt-2 text-sm text-[var(--sunflower-yellow)] bg-[var(--sunflower-yellow)]/10 px-3 py-2 rounded-lg border border-[var(--sunflower-yellow)]/30">
                    ⚠️ Para pedidos urgentes ({'<'}2 días), contáctanos directo por WhatsApp para disponibilidad.
                  </p>
                )}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block font-body font-medium text-[var(--foreground)] mb-2">
                Notas Especiales
              </label>
              <textarea
                placeholder="Cuéntanos cualquier detalle adicional, mensaje para la tarjeta, instrucciones especiales..."
                value={formData.notes}
                onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 font-body organic-input resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="relative w-full py-4 px-8 bg-[var(--moss-green)] text-white font-body font-bold text-lg transition-all hover:scale-[1.02] hover:shadow-lg group overflow-hidden warm-glow"
                style={{ borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px" }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Enviar Pedido por WhatsApp
                </span>
                
                {/* Animated butterfly */}
                <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity butterfly-animate">
                  <svg viewBox="0 0 24 18" className="w-6 h-5">
                    <path d="M10 9 Q4 3 2 6 Q0 9 5 11 Q8 12 10 9" fill="var(--sunflower-yellow)" />
                    <path d="M9 10 Q5 14 3 12 Q1 10 6 13 Q8 14 9 10" fill="var(--sunflower-yellow)" />
                    <path d="M14 9 Q20 3 22 6 Q24 9 19 11 Q16 12 14 9" fill="var(--sunflower-yellow)" />
                    <path d="M15 10 Q19 14 21 12 Q23 10 18 13 Q16 14 15 10" fill="var(--sunflower-yellow)" />
                    <ellipse cx="12" cy="10" rx="1" ry="3" fill="white" />
                  </svg>
                </span>
              </button>
            </div>
          </form>

          {/* Decorative corners */}
          <svg className="absolute top-2 left-2 w-8 h-8 text-[var(--accent)]" viewBox="0 0 32 32">
            <path d="M4 20 Q4 4 20 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2" />
          </svg>
          <svg className="absolute top-2 right-2 w-8 h-8 text-[var(--accent)]" viewBox="0 0 32 32">
            <path d="M28 20 Q28 4 12 4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2" />
          </svg>
          <svg className="absolute bottom-2 left-2 w-8 h-8 text-[var(--accent)]" viewBox="0 0 32 32">
            <path d="M4 12 Q4 28 20 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2" />
          </svg>
          <svg className="absolute bottom-2 right-2 w-8 h-8 text-[var(--accent)]" viewBox="0 0 32 32">
            <path d="M28 12 Q28 28 12 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2" />
          </svg>
        </div>

        {/* Decorative ribbon bottom */}
        <div className="flex justify-center mt-[-2px]">
          <svg width="80" height="40" viewBox="0 0 80 40">
            <path
              d="M0,0 L30,0 Q35,0 38,8 L40,20 L42,8 Q45,0 50,0 L80,0"
              fill="var(--soft-pink)"
            />
            <path
              d="M38,8 L40,20 L42,8"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
