export default function ContactSection() {
  return (
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
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
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
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Escribir
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">Email</h3>
              <p className="text-gray-700 mb-4 font-medium">contacto@seguroscastex.cl</p>
              <a 
                href="mailto:contacto@seguroscastex.cl"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
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
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none text-slate-800 placeholder-gray-500" 
                    placeholder="Nombre completo"
                    required
                  />
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none text-slate-800 placeholder-gray-500" 
                    placeholder="Teléfono"
                    required
                  />
                </div>
                
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none text-slate-800 placeholder-gray-500" 
                  placeholder="Correo electrónico"
                  required
                />
                
                <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all outline-none bg-white text-slate-800">
                  <option value="" className="text-gray-500">¿Qué seguro necesitas?</option>
                  <option value="auto" className="text-slate-800">🚗 Auto</option>
                  <option value="hogar" className="text-slate-800">🏠 Hogar</option>
                  <option value="salud" className="text-slate-800">❤️ Salud</option>
                  <option value="empresa" className="text-slate-800">🏢 Empresa</option>
                  <option value="otro" className="text-slate-800">📋 Otro</option>
                </select>
                
                <textarea 
                  rows={3} 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none transition-all outline-none text-slate-800 placeholder-gray-500" 
                  placeholder="Cuéntanos más detalles (opcional)"
                ></textarea>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    type="submit" 
                    className="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Solicitar cotización
                  </button>
                  <a 
                    href="https://wa.me/56982287133"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors text-center"
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
  )
}