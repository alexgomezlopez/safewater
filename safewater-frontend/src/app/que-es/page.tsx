export default function QueEs(): JSX.Element {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">¿Qué es SafeWater?</h1>
  
        <p className="text-lg text-gray-600 mb-4">
          SafeWater es una solución IoT que permite monitorear en tiempo real parámetros esenciales del agua (temperatura, pH, cloro) con especial énfasis en la prevención y control de la Legionella.
        </p>
  
        <p className="text-lg text-gray-600 mb-4">
          La plataforma permite gestionar múltiples ubicaciones, optimizar el consumo energético e hídrico, y asegurar el cumplimiento con normativas sanitarias de forma automática.
        </p>
  
        <ul className="list-disc ml-6 text-gray-600 space-y-2">
          <li>Compatible con sensores existentes (4-20mA).</li>
          <li>Alertas inteligentes y predictivas.</li>
          <li>Rápida instalación y fácil integración.</li>
        </ul>
      </div>
    )
  }
  