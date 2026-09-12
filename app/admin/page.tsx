"use client"
import { ShieldAlert, Check, X } from 'lucide-react'
import { useAppContext } from '../store'

export default function AdminPortal() {
  const { applications, approveApp } = useAppContext(); // <-- Connected to Global Brain!

  const handleAction = (id: number, action: string) => {
    approveApp(id);
    alert(`Restaurant ${action}d successfully!`);
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-6">
      <div className="flex items-center gap-3 mb-8 border-b pb-4">
        <ShieldAlert className="w-8 h-8 text-red-600" />
        <h1 className="text-3xl font-bold text-gray-900">Platform Admin</h1>
      </div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Pending Restaurant Applications</h2>
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        {applications.length === 0 ? (
          <p className="p-6 text-gray-500 text-center">No pending applications.</p>
        ) : (
          <ul className="divide-y">
            {applications.map((app: any) => (
              <li key={app.id} className="p-6 flex justify-between items-center hover:bg-gray-50 transition">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{app.name}</h3>
                  <p className="text-sm text-gray-500">{app.type} Restaurant</p>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => handleAction(app.id, 'Approve')} className="flex items-center gap-1 bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold hover:bg-green-200"><Check className="w-4 h-4"/> Approve</button>
                  <button onClick={() => handleAction(app.id, 'Reject')} className="flex items-center gap-1 bg-red-100 text-red-700 px-4 py-2 rounded-lg font-bold hover:bg-red-200"><X className="w-4 h-4"/> Reject</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}