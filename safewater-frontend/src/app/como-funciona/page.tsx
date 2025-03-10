export default function ComoFunciona(){
    return (
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">¿Cómo Funciona?</h1>
  
        <p className="text-lg text-gray-600 mb-6">
          SafeWater integra sensores ya existentes en tu instalación mediante un sencillo proceso:
        </p>
  
        <ol className="list-decimal list-inside text-gray-600 space-y-4">
          <li>📟 Los sensores capturan información sobre temperatura, pH, y cloro.</li>
          <li>📡 Un gateway IoT digitaliza y envía estos datos a la nube.</li>
          <li className="mt-1">🖥️ Nuestra plataforma procesa automáticamente la información recibida.</li>
          <li className="mt-1">📊 Visualización inmediata y alertas en caso de desviaciones.</li>
        </ol>
      </div>
    )
  }
  