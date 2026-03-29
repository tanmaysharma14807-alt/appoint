import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

// Read all bookings
export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { date: 'asc' },
    });
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Failed to fetch bookings:', error);
    return NextResponse.json({ error: 'Failed to read bookings' }, { status: 500 });
  }
}

// Create new booking
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newBooking = await prisma.booking.create({
      data: {
        clientName: body.clientName,
        phone: body.phone,
        services: body.services || [],
        stylist: body.stylist,
        stylistImg: body.stylistImg || null,
        time: body.time,
        date: body.date,
        status: 'active',
      },
    });
    
    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    console.error('Failed to create booking:', error);
    return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 });
  }
}

// Update booking
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    
    const updatedBooking = await prisma.booking.update({
      where: { id: Number(body.id) },
      data: {
        clientName: body.clientName,
        phone: body.phone,
        services: body.services,
        stylist: body.stylist,
        stylistImg: body.stylistImg,
        time: body.time,
        date: body.date,
        status: body.status,
      },
    });

    return NextResponse.json({ success: true, booking: updatedBooking });
  } catch (error) {
    console.error('Failed to update booking:', error);
    return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
  }
}

// Delete booking
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    
    await prisma.booking.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete booking:', error);
    return NextResponse.json({ error: 'Failed to delete booking' }, { status: 500 });
  }
}
