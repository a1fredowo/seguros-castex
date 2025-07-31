export default function InsuranceTypes() {
  return (
    <section id="nuestros-seguros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">NUESTROS SEGUROS</h2>
        
        {/* Seguros para Personas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-slate-800">Personas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🚗",
                title: "Seguros de Auto",
                description: "Terceros, pérdida total, todo riesgo"
              },
              {
                icon: "🏠",
                title: "Seguros de Hogar",
                description: "Incendio, sismo, robo"
              },
              {
                icon: "❤️",
                title: "Seguros de Salud",
                description: "Complementario, hospitalario"
              },
              {
                icon: "🛡️",
                title: "Responsabilidad Civil",
                description: "Para personas y empresas"
              }
            ].map((insurance, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{insurance.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-slate-800">{insurance.title}</h4>
                <p className="text-gray-600 text-sm">{insurance.description}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Seguros para Empresas */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-slate-800">Empresas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🏢",
                title: "Protección Patrimonial",
                subtitle: "Oficinas, bodegas y locales",
                details: "Protección integral para tu patrimonio empresarial contra incendios, robos, daños por agua y fenómenos naturales.",
                coverage: ["Incendio y explosión", "Robo y hurto", "Daños por agua", "Fenómenos naturales"]
              },
              {
                icon: "🚛",
                title: "Seguros de Transporte",
                subtitle: "Nacional e internacional",
                details: "Cobertura completa para mercancías en tránsito terrestre, con opciones de todo riesgo y averías particulares.",
                coverage: ["Transporte terrestre", "Carga internacional", "Todo riesgo", "Averías particulares"]
              },
              {
                icon: "⚙️",
                title: "Maquinarias y Equipos",
                subtitle: "Industrial y agrícola",
                details: "Protección especializada para maquinaria pesada, equipos industriales y maquinaria agrícola.",
                coverage: ["Maquinaria pesada", "Equipos industriales", "Maquinaria agrícola", "Daños accidentales"]
              },
              {
                icon: "🛡️",
                title: "Responsabilidad Civil",
                subtitle: "Protección comercial",
                details: "Cobertura por daños causados a terceros durante las operaciones comerciales de tu empresa.",
                coverage: ["Daños a terceros", "Responsabilidad profesional", "Productos defectuosos", "Operaciones comerciales"]
              }
            ].map((insurance, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 bg-gradient-to-r from-teal-50 to-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">{insurance.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800">{insurance.title}</h4>
                      <p className="text-sm text-gray-600">{insurance.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{insurance.details}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-slate-700 text-sm">Coberturas incluidas:</h5>
                    <div className="grid grid-cols-2 gap-1">
                      {insurance.coverage.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                          <span className="text-xs text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}