"use client"
import { useState, use } from 'react'
import Link from 'next/link'

// We use the same mock data so the transition is seamless
const OFFERS = [
  { id: '1', restaurant: "Luigi's Trattoria", discount: 20, originalPrice: 100 },
  { id: '2', restaurant: "Tokyo Sushi Bar", discount: 30, originalPrice: 100 },
  { id: '3', restaurant: "Melbourne Smash Burgers", discount: 15, originalPrice: 100 },
]

export default function Checkout({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the params using React.use()
  const resolvedParams = use(params);
  const [paid, setPaid] = useState(false)
  
  const offer = OFFERS.find(o => o.id === resolvedParams.id) || OFFERS[0]
  
  // Hackathon Business Model Math
  const discountAmount = (offer.originalPrice * offer.discount) / 100
  const finalBill = offer.originalPrice - discountAmount
  const platformFee = finalBill * 0.10 // 10% commission
  const restaurantReceives = finalBill - platformFee
  const loyaltyPoints = finalBill // $1 = 1 point

  if (paid) {
    return (
      <div className="max-w-2xl mx-auto p-6 mt-12 bg-white rounded-2xl shadow-sm border text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful! 🎉</h1>
        <p className="text-lg text-gray-700 mb-8">You earned <span className="font-bold text-blue-600">{loyaltyPoints}</span> loyalty points!</p>
        
        {/* We show the math explicitly for the judges */}
        <div className="bg-gray-50 border p-6 rounded-xl text-left mb-8 text-gray-700">
          <h3 className="font-bold mb-4 text-gray-900 border-b pb-2">Hackathon Business Model Demo:</h3>
          <ul className="space-y-3">
            <li className="flex justify-between"><span>Total Paid by Diner:</span> <strong>${finalBill.toFixed(2)}</strong></li>
            <li className="flex justify-between text-blue-600"><span>Platform Commission (10%):</span> <strong>${platformFee.toFixed(2)}</strong></li>
            <li className="flex justify-between text-green-600"><span>Restaurant Receives (90%):</span> <strong>${restaurantReceives.toFixed(2)}</strong></li>
          </ul>
        </div>

        <Link href="/" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6 mt-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Checkout: {offer.restaurant}</h1>
      
      <div className="bg-white rounded-2xl shadow-sm border p-8 mb-8">
        <h2 className="font-bold text-xl mb-6 border-b pb-4 text-gray-800">Order Summary</h2>
        <div className="flex justify-between mb-4 text-lg text-gray-600">
          <span>Original Bill (Simulated):</span>
          <span>${offer.originalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4 text-lg text-green-600 font-medium">
          <span>Off-Peak Discount ({offer.discount}%):</span>
          <span>-${discountAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-2xl mt-6 pt-6 border-t text-gray-900">
          <span>Total to Pay:</span>
          <span>${finalBill.toFixed(2)}</span>
        </div>
      </div>

      <button 
        onClick={() => setPaid(true)}
        className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition text-xl shadow-md"
      >
        Simulate Payment (${finalBill.toFixed(2)})
      </button>
    </div>
  )
}