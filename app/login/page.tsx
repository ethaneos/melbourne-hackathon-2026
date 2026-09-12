"use client"
import { useState } from 'react'

export default function Login() {
  const [step, setStep] = useState(1)
  const [phone, setPhone] = useState('')

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault()
    if (phone.length > 5) setStep(2)
  }

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Simulated Login Successful!")
    window.location.href = "/"
  }

  return (
    <div className="flex items-center justify-center p-12">
      <div className="bg-white p-8 rounded-xl shadow-md w-96 border border-gray-100">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Diner Login</h1>
        
        {step === 1 ? (
          <form onSubmit={handleSendCode}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input 
              type="tel" 
              placeholder="0400 000 000" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            />
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition">
              Send SMS Code
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify}>
            <p className="text-sm text-gray-600 mb-4 text-center">Code sent to {phone}</p>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Verification Code</label>
            <input 
              type="text" 
              placeholder="123456" 
              className="w-full border p-3 rounded-lg mb-4 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-center tracking-widest text-lg" 
              required
            />
            <button type="submit" className="w-full bg-green-600 text-white font-semibold p-3 rounded-lg hover:bg-green-700 transition">
              Verify & Login
            </button>
          </form>
        )}
      </div>
    </div>
  )
}