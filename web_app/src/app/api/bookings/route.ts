import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data/bookings.json');

// Read bookings
export async function GET() {
  try {
    if (!fs.existsSync(dataFilePath)) {
      return NextResponse.json([]);
    }
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const bookings = JSON.parse(fileContents);
    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read bookings' }, { status: 500 });
  }
}

// Create new booking
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Read current
    let bookings = [];
    if (fs.existsSync(dataFilePath)) {
      const fileContents = fs.readFileSync(dataFilePath, 'utf8');
      bookings = JSON.parse(fileContents);
    }
    
    // Add new
    const newBooking = {
      id: Date.now(),
      ...body,
      status: 'active'
    };
    
    bookings.push(newBooking);
    
    // Write back
    fs.writeFileSync(dataFilePath, JSON.stringify(bookings, null, 2), 'utf8');
    
    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    let bookings = [];
    if (fs.existsSync(dataFilePath)) {
      bookings = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    }
    bookings = bookings.map((b: any) => b.id === body.id ? { ...b, ...body } : b);
    fs.writeFileSync(dataFilePath, JSON.stringify(bookings, null, 2), 'utf8');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    let bookings = [];
    if (fs.existsSync(dataFilePath)) {
      bookings = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    }
    bookings = bookings.filter((b: any) => b.id !== id);
    fs.writeFileSync(dataFilePath, JSON.stringify(bookings, null, 2), 'utf8');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete booking' }, { status: 500 });
  }
}
