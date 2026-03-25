import { NextResponse } from 'next/server';

export async function GET() {
  // Simulated backend database call for Services
  const services = [
    { id: 1, name: 'Haircut', price: 95, duration: 60 },
    { id: 2, name: 'Hair Color', price: 180, duration: 120 },
    { id: 3, name: 'Beard Trim', price: 45, duration: 30 },
    { id: 4, name: 'Straightening', price: 250, duration: 180 },
    { id: 5, name: 'Perm', price: 150, duration: 150 },
  ];
  
  return NextResponse.json(services);
}
