export default function Contacto(): JSX.Element {
    return (
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contáctanos</h1>
  
        <p className="text-lg text-gray-600 mb-4">
          ¿Tienes dudas o quieres empezar con SafeWater? Déjanos un mensaje:
        </p>
  
        <form className="space-y-4">
          <input type="text" placeholder="Tu nombre" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Correo electrónico" className="w-full border p-2 rounded" />
          <textarea placeholder="Escribe tu mensaje aquí" className="w-full border p-2 rounded h-32"></textarea>
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Enviar Mensaje
          </button>
        </form>
      </div>
    )
  }
  