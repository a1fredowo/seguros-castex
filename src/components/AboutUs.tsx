export default function AboutUs() {
  return (
    <section id="quienes-somos" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">¿Quiénes Somos?</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-teal-600 to-blue-600 p-8 rounded-lg shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-6xl font-bold text-center mb-4">20+</h3>
                <p className="text-center text-lg">Años de experiencia</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-teal-400">Somos Seguros Castex</h3>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                Corredores de seguros generales comprometidos con tu tranquilidad y el cuidado 
                de tu patrimonio personal y empresarial.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="text-teal-400 font-semibold">No vendemos seguros, te ayudamos a elegir el mejor.</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-6 rounded-lg text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group border border-slate-600 hover:border-teal-500">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h4 className="text-xl font-bold mb-3 text-teal-400 group-hover:text-teal-300 transition-colors">Nuestra Misión</h4>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Brindarte asesoría honesta, cobertura adecuada y respaldo real cuando más lo necesitas.
              </p>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group border border-slate-600 hover:border-teal-500">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
              <h4 className="text-xl font-bold mb-3 text-teal-400 group-hover:text-teal-300 transition-colors">Nuestro Compromiso</h4>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Independencia total trabajando con múltiples aseguradoras para encontrar tu mejor opción.
              </p>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg text-center shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group border border-slate-600 hover:border-teal-500">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">⭐</div>
              <h4 className="text-xl font-bold mb-3 text-teal-400 group-hover:text-teal-300 transition-colors">Nuestra Diferencia</h4>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                Atención personalizada, profesional y comprometida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}