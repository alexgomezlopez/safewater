export default function Sectores() {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Sectores de Aplicación</h1>
  
        <p className="text-lg text-gray-600 mb-8">
          SafeWater está diseñado especialmente para cubrir las necesidades de monitoreo y cumplimiento en sectores como:
        </p>
  
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Hoteles</h3>
            <p className="mt-2 text-gray-600">Prevención y control efectivo contra Legionella en instalaciones hoteleras.</p>
          </div>
  
          <div className="border rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Edificios Públicos</h3>
            <p className="mt-2 text-gray-600">Seguridad sanitaria en grandes edificios e instituciones públicas.</p>
          </div>
  
          <div className="border rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-blue-600">Industria</h3>
            <p className="mt-2 text-gray-600">Optimización del uso del agua y reducción de riesgos operativos.</p>
          </div>
        </div>
      </div>
    )
  }
  