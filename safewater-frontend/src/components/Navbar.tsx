'use client'
import Link from 'next/link'

export default function Navbar(): JSX.Element {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-blue-500">
          SafeWater
        </div>
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
          <Link href="/que-es" className="hover:text-blue-600 transition-colors">Qué es SafeWater</Link>
          <Link href="/como-funciona" className="hover:text-blue-600 transition-colors">Cómo Funciona</Link>
          <Link href="/sectores" className="hover:text-blue-600 transition-colors">Sectores</Link>
          <Link href="/contacto" className="hover:text-blue-600 transition-colors">Contacto</Link>
        </div>
      </div>
    </nav>
  )
}
