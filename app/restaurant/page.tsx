"use client"
import { useState } from 'react'
import { PlusCircle, Tag, Clock, Activity } from 'lucide-react'
import { useAppContext } from '../store'

export default function RestaurantPortal() {
  const { addOffer } = useAppContext(); // <-- Writing to our Global Brain!
  
  const [discount, setDiscount] = useState('50')
  const [startTime, setStartTime] = useState('14:00')
  const [endTime, setEndTime] = useState('17:00')

  const handleCreateOffer = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create a new offer object
    const newOffer = {
      id: Math.random().toString(), // Random ID
      restaurant: "Your Restaurant", // Mock name
      category: "New",
      discount: parseInt(discount),
      time: `${startTime} - ${endTime}`,
      emoji: "🍔",
      originalPrice: 100
    }

    addOffer(newOffer); // Save it globally!
    alert(`Success! Your offer is now live on the homepage.`);
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-6">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Restaurant Portal</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">
            <PlusCircle className="text-blue-600" /> Create Off-Peak Offer
          </h2>
          <form onSubmit={handleCreateOffer} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Discount Percentage (%)</label>
              <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} className="w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Valid From</label>
                <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Valid To</label>
                <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="w-full border p-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" required />
              </div>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition mt-4">Publish Offer</button>
          </form>
        </div>
      </div>
    </div>
  )
}