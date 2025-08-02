'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    
    if (window.location.pathname === '/') {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      router.push(`/#${targetId}`)
    }
  }

  return (
    <header className="bg-slate-800 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            SEGUROS CASTEX
          </Link>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a 
              href="#nuestros-seguros"
              onClick={(e) => handleSmoothScroll(e, 'nuestros-seguros')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              TIPOS DE SEGUROS
            </a>
          </li>
          <li>
            <a 
              href="#quienes-somos"
              onClick={(e) => handleSmoothScroll(e, 'quienes-somos')}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            >
              ¿QUIENES SOMOS?
            </a>
          </li>
        </ul>
        <a 
          href="#contacto"
          onClick={(e) => handleSmoothScroll(e, 'contacto')}
          className="bg-white text-slate-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center"
        >
          COTIZA TU SEGURO
        </a>
      </nav>
    </header>
  )
}