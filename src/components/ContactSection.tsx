'use client'

import { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
}

function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative animate-pulse">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
        >
          ×
        </button>
        
        <div className="p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✅</span>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            ¡Formulario Enviado!
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Tu solicitud de cotización ha sido enviada correctamente. 
            Te contactaremos en las próximas 24 horas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Cerrar
            </button>
            <a
              href="https://wa.me/56982287133"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    insuranceType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Verificar que el captcha esté completado
    if (!captchaValue) {
      alert('Por favor, completa la verificación de seguridad.')
      return
    }

    setIsSubmitting(true)

    try {
      console.log('Enviando datos:', formData)
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captcha: captchaValue
        }),
      })

      console.log('Response status:', response.status)
      
      if (response.ok) {
        const result = await response.json()
        console.log('Respuesta exitosa:', result)
        
        // Mostrar popup de éxito
        setShowSuccessPopup(true)

        // Limpiar formulario
        setFormData({
          name: '',
          phone: '',
          email: '',
          insuranceType: '',
          message: ''
        })

        // Resetear captcha
        setCaptchaValue(null)
        if (recaptchaRef.current) {
          recaptchaRef.current.reset()
        }
      } else {
        const errorData = await response.json()
        console.error('Error del servidor:', errorData)
        alert(`Error: ${errorData.details || 'Error del servidor'}`)
      }

    } catch (error) {
      console.error('Error de red o parsing:', error)
      alert('Error de conexión. Verifica tu internet e inténtalo nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false)
  }

  return (
    <>
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-slate-800">¿Listo para proteger lo que más valoras?</h2>
              <p className="text-xl text-gray-600">Contáctanos y recibe una cotización personalizada</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cards de contacto */}
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">Llámanos</h3>
                <p className="text-gray-700 mb-4 font-medium">+56 9 8228 7133</p>
                <a 
                  href="tel:+56982287133"
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                >
                  Llamar ahora
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">WhatsApp</h3>
                <p className="text-gray-700 mb-4 font-medium">Respuesta inmediata</p>
                <a 
                  href="https://wa.me/56982287133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                >
                  Escribir
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">Email</h3>
                <p className="text-gray-700 mb-4 font-medium">contactocastex@gmail.com</p>
                <a 
                  href="mailto:contactocastex@gmail.com"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
                >
                  Escribir
                </a>
              </div>
            </div>
            
            {/* Formulario compacto */}
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800">Solicita tu cotización</h3>
                  <p className="text-gray-700">Completa el formulario y te contactaremos en 24 horas</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none text-slate-800 placeholder-gray-500" 
                      placeholder="Nombre completo"
                      required
                    />
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none text-slate-800 placeholder-gray-500" 
                      placeholder="Teléfono"
                      required
                    />
                  </div>
                  
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none text-slate-800 placeholder-gray-500" 
                    placeholder="Correo electrónico"
                    required
                  />
                  
                  <select 
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none bg-white text-slate-800"
                    required
                  >
                    <option value="">¿Qué seguro necesitas?</option>
                    <option value="auto">🚗 Auto</option>
                    <option value="hogar">🏠 Hogar</option>
                    <option value="salud">❤️ Salud</option>
                    <option value="empresa">🏢 Empresa</option>
                    <option value="otro">📋 Otro</option>
                  </select>
                  
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3} 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none transition-all outline-none text-slate-800 placeholder-gray-500" 
                    placeholder="Cuéntanos más detalles (opcional)"
                  />
                  
                  {/* reCAPTCHA */}
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                      onChange={handleCaptchaChange}
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting || !captchaValue}
                      className="flex-1 bg-slate-800 hover:bg-slate-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        'Solicitar cotización'
                      )}
                    </button>
                    <a 
                      href="https://wa.me/56982287133"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors text-center cursor-pointer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup de éxito */}
      <SuccessPopup isOpen={showSuccessPopup} onClose={closeSuccessPopup} />
    </>
  )
}