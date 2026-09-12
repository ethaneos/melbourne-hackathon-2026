"use client"
import React, { createContext, useContext, useState } from 'react';

// This is our temporary "Database" that lives in the app's memory
const AppContext = createContext<any>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  // 1. Global Offers
  const [offers, setOffers] = useState([
    { id: '1', restaurant: "Luigi's Trattoria", category: "Italian", discount: 20, time: "3:00 PM - 5:00 PM", emoji: "🍕", originalPrice: 100 },
    { id: '2', restaurant: "Tokyo Sushi Bar", category: "Japanese", discount: 30, time: "2:00 PM - 4:30 PM", emoji: "🍣", originalPrice: 100 }
  ]);

  // 2. Global Admin Applications
  const [applications, setApplications] = useState([
    { id: 1, name: "The Spicy Koala", type: "Thai", status: "Pending" },
    { id: 2, name: "Melbourne Brews", type: "Cafe", status: "Pending" }
  ]);

  // 3. Global Loyalty Points
  const [points, setPoints] = useState(0);

  // Functions to update the data
  const addOffer = (offer: any) => setOffers([...offers, offer]);
  const approveApp = (id: number) => setApplications(apps => apps.filter(a => a.id !== id));
  const addPoints = (amount: number) => setPoints(p => p + amount);

  return (
    <AppContext.Provider value={{ offers, addOffer, applications, approveApp, points, addPoints }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);