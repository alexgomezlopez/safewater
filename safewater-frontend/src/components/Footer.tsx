export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        © {new Date().getFullYear()} SafeWater. Todos los derechos reservados.
      </div>
    </footer>
  )
}
