export default function Home(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Bienvenido a <span className="text-blue-500">SafeWater</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Solución IoT para monitorizar, controlar y optimizar la calidad del agua, previniendo riesgos y asegurando el cumplimiento normativo.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors">
        Contacta con Nosotros
      </button>
    </div>
  )
}
