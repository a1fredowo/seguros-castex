'use client'

export default function HeroSection() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20 pt-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Protege lo que más valoras, con el respaldo que mereces
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              En Seguros Castex te asesoramos para elegir la cobertura perfecta para ti, tu familia o tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contacto"
                onClick={scrollToContact}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-colors text-center"
              >
                Cotiza tu seguro ahora
              </a>
              <a 
                href="#contacto"
                onClick={scrollToContact}
                className="border-2 border-white hover:bg-white hover:text-slate-800 text-white px-8 py-4 rounded-full font-semibold transition-colors text-center"
              >
                Habla con un asesor
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-20 absolute -top-10 -right-10"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl font-bold text-teal-300">500+</div>
                    <p className="text-sm">Clientes satisfechos</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl font-bold text-teal-300">24/7</div>
                    <p className="text-sm">Atención disponible</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl font-bold text-teal-300">20+</div>
                    <p className="text-sm">Años de experiencia</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                    <div className="text-3xl font-bold text-teal-300">100%</div>
                    <p className="text-sm">Compromiso</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}