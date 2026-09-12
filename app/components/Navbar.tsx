
import Link from 'next/link'
import { Utensils } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b p-4 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
        <Utensils className="w-6 h-6" />
        DineDiscount
      </Link>
      <div className="flex gap-4 font-medium">
        <Link href="/login" className="text-gray-600 hover:text-black">Diner Login</Link>
        <Link href="/restaurant" className="text-gray-600 hover:text-black">Restaurant Portal</Link>
        <Link href="/admin" className="text-gray-600 hover:text-black">Admin</Link>
      </div>
    </nav>
  )
}