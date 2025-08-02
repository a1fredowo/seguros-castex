'use client'

export default function WhyChooseUs() {
  const reasons = [
    "Asesoría personalizada e independiente",
    "Representamos tus intereses",
    "Atención rápida y clara en caso de siniestros", 
    "Gestión integral de tus pólizas y renovaciones",
    "Cobertura para personas, empresas y activos estratégicos"
  ]

  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="bg-slate-800 text-white py-20 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-teal-600 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-600 rounded-full opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6">¿Por qué elegirnos?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Somos más que corredores de seguros, somos tus aliados estratégicos 
              en la protección de lo que más valoras.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              {reasons.slice(0, 3).map((reason, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-teal-400 transition-colors duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-left text-lg text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              {reasons.slice(3).map((reason, index) => (
                <div key={index + 3} className="flex items-start gap-4 group">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-teal-400 transition-colors duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-left text-lg text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">
                ¿Listo para una asesoría personalizada?
              </h3>
              <p className="text-gray-300 mb-6">
                Contáctanos y descubre cómo podemos proteger mejor tu patrimonio
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToContact}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer"
                >
                  Solicitar cotización
                </button>
                <button 
                  onClick={scrollToContact}
                  className="border-2 border-white hover:bg-white hover:text-slate-800 text-white px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer"
                >
                  Hablar con asesor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}