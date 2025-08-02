'use client'

import { useState, useEffect } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      text: "Contratar con Seguros Castex fue lo mejor. Me explicaron todo y me ayudaron cuando tuve un siniestro. 100% recomendados.",
      author: "Marcela Soto",
      role: "Cliente desde 2021",
      rating: 5
    },
    {
      text: "Excelente atención al cliente. Cuando choqué mi auto, el proceso fue súper rápido y sin complicaciones. Muy profesionales.",
      author: "Carlos Mendoza",
      role: "Cliente desde 2019",
      rating: 5
    },
    {
      text: "Mi casa se inundó y Seguros Castex me ayudó con todo. El equipo fue muy empático y resolvieron todo rápidamente.",
      author: "Ana María González",
      role: "Cliente desde 2020",
      rating: 5
    },
    {
      text: "Los seguros de salud que contraté han sido una tranquilidad para mi familia. Cobertura amplia y buenos precios.",
      author: "Roberto Silva",
      role: "Cliente desde 2018",
      rating: 5
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [testimonials.length])

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, i) => (
      <span key={i} className="text-yellow-400 text-lg">★</span>
    ))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">TESTIMONIOS DE CLIENTES</h2>
        
        {/* Testimonio Principal */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-lg shadow-lg text-center">
            <div className="mb-4">
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>
            <p className="text-xl italic text-gray-700 mb-6">
              &quot;{testimonials[currentTestimonial].text}&quot;
            </p>
            <p className="font-semibold text-slate-800">
              – {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].role}
            </p>
          </div>
          
          {/* Indicadores */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-teal-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid de Testimonios */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                index === currentTestimonial ? 'ring-2 ring-teal-500 bg-teal-50' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="border-t border-gray-100 pt-3">
                <p className="font-semibold text-slate-800 text-sm">{testimonial.author}</p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}