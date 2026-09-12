"use client"
import Link from 'next/link'
import { MapPin, Clock, Tag } from 'lucide-react'
import { useAppContext } from './store'

export default function Home() {
  const { offers } = useAppContext(); // <-- Reading from our Global Brain!

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-blue-600 text-white rounded-2xl p-8 mb-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Find Off-Peak Dining Discounts</h1>
        <p className="text-blue-100 mb-6">Claim offers, eat at quiet times, and earn loyalty points.</p>
        <div className="flex gap-4">
          <input type="text" placeholder="Search restaurants or cuisines..." className="px-4 py-3 rounded-lg text-black w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-300"/>
          <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition">Search</button>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Offers Near You</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer: any) => (
          <div key={offer.id} className="bg-white border rounded-xl overflow-hidden shadow-sm flex flex-col">
            <div className="h-32 bg-gray-100 flex items-center justify-center text-6xl">{offer.emoji}</div>
            <div className="p-5 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{offer.restaurant}</h3>
                  <p className="text-sm text-gray-500">{offer.category}</p>
                </div>
                <span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-sm flex items-center gap-1">
                  <Tag className="w-3 h-3" /> {offer.discount}% OFF
                </span>
              </div>
              <div className="mt-4 space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="font-medium">Valid: {offer.time}</span>
                </div>
              </div>
              <Link href={`/checkout/${offer.id}`} className="mt-auto w-full text-center bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition block">
                Claim Offer
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}