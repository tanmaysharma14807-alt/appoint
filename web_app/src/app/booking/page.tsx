'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const SERVICES = [
  {
    id: 'haircut',
    name: 'Haircut',
    price: 95,
    duration: '60 Minutes',
    desc: 'Structural precision meets fluid movement. Includes luxury wash and style.',
    img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hair-color',
    name: 'Hair Color',
    price: 180,
    duration: '120 Minutes',
    desc: 'Bespoke coloring service tailored to your skin tone and hair texture.',
    img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    price: 45,
    duration: '30 Minutes',
    desc: 'Precision grooming and hot towel treatment for a refined look.',
    img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'straightening',
    name: 'Straightening',
    price: 250,
    duration: '180 Minutes',
    desc: 'Long-lasting silkiness and frizz control with premium keratin treatment.',
    img: 'https://images.unsplash.com/photo-1521590832167-7bfc17474920?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'perm',
    name: 'Perm',
    price: 150,
    duration: '150 Minutes',
    desc: 'Modern texture and volume tailored to your desired curl pattern.',
    img: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=800'
  }
];

const ARTISANS = [
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    title: 'Senior Creative Director',
    availability: 'Today',
    img: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'elena-moretti',
    name: 'Elena Moretti',
    title: 'Master Colorist',
    availability: 'Tomorrow',
    img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'julian-thorne',
    name: 'Julian Thorne',
    title: 'Precision Specialist',
    availability: 'Friday',
    img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=400'
  }
];

const TIMES = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

const DATES = Array.from({ length: 14 }).map((_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  return {
    id: d.toISOString().split('T')[0],
    month: d.toLocaleDateString('en-US', { month: 'short' }),
    date: d.getDate(),
    day: d.toLocaleDateString('en-US', { weekday: 'short' })
  };
});

export default function BookingFlow() {
  const [selectedServices, setSelectedServices] = useState<typeof SERVICES[0][]>([]);
  const [selectedArtisan, setSelectedArtisan] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(DATES[0].id);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (service: typeof SERVICES[0]) => {
    setSelectedServices(prev =>
      prev.some(s => s.id === service.id)
        ? prev.filter(s => s.id !== service.id)
        : [...prev, service]
    );
  };

  const totalPrice = selectedServices.reduce((acc, curr) => acc + curr.price, 0);

  const handleConfirmBooking = async () => {
    const missing = [];
    if (selectedServices.length === 0) missing.push('Services');
    if (!selectedArtisan) missing.push('Artisan/Stylist');
    if (!selectedDate) missing.push('Date');
    if (!selectedTime) missing.push('Time');
    if (!clientName.trim()) missing.push('Full Name');
    if (!phone.trim()) missing.push('Phone Number');

    if (missing.length > 0) {
      alert(`Please complete the following steps before booking:\n- ${missing.join('\n- ')}`);
      return;
    }

    setIsSubmitting(true);
    const artisanDetails = ARTISANS.find(a => a.id === selectedArtisan);

    const payload = {
      clientName,
      phone,
      services: selectedServices.map(s => s.name),
      stylist: artisanDetails?.name,
      stylistImg: artisanDetails?.img,
      time: selectedTime,
      date: selectedDate
    };

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert("Booking Confirmed Successfully!");
        setClientName('');
        setPhone('');
        setSelectedServices([]);
        setSelectedArtisan(null);
        setSelectedDate(DATES[0].id);
        setSelectedTime(null);
      } else {
        alert("Failed to create booking.");
      }
    } catch (e) {
      alert("Error confirming booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />
      <main className="pt-24 pb-40 px-4 md:px-8 max-w-5xl mx-auto">
        {/* Booking Flow Header */}
        <header className="mb-12 text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-primary mb-2 block">Step 1 of 5</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-4">Select Services</h1>
          <p className="text-on-surface-variant max-w-md mx-auto">Curation is at the heart of our craft. Choose the experiences that speak to you. You may select multiple.</p>
        </header>

        {/* Step 1: Service Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service) => {
            const isSelected = selectedServices.some(s => s.id === service.id);
            return (
              <label key={service.id} className="relative cursor-pointer">
                <input
                  className="service-checkbox hidden"
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleService(service)}
                />
                <div className="service-card group h-full flex flex-col overflow-hidden rounded-lg bg-surface-container-lowest border-2 border-transparent transition-all hover:border-primary/20">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={service.img} />
                    <div className="check-indicator absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-primary/20 bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all opacity-0">
                      <span className="material-symbols-outlined text-xl">check</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{service.name}</h3>
                      <span className="text-primary font-bold">${service.price}+</span>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-4 line-clamp-2">{service.desc}</p>
                    <div className="mt-auto flex items-center gap-2 text-primary">
                      <span className="material-symbols-outlined text-sm">schedule</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider">{service.duration}</span>
                    </div>
                  </div>
                </div>
              </label>
            );
          })}
        </div>

        {/* Step 2: Stylist Selection */}
        <section className="mb-20">
          <header className="mb-8 flex justify-between items-end">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-primary mb-2 block">Step 2 of 5</span>
              <h2 className="text-3xl font-bold tracking-tight">Choose Your Artisan</h2>
            </div>
            <a className="text-primary text-sm font-bold border-b border-primary/20 pb-1" href="#">View All Stylists</a>
          </header>
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
            {ARTISANS.map((artisan) => {
              const isSelected = selectedArtisan === artisan.id;
              const hasSelection = selectedArtisan !== null;

              const imgClass = `w-full h-full object-cover transition-all duration-700 ${isSelected
                  ? 'grayscale-0'
                  : hasSelection
                    ? 'grayscale opacity-60'
                    : 'grayscale group-hover:grayscale-0'
                }`;

              const containerClass = `flex-shrink-0 w-64 snap-start group cursor-pointer transition-transform duration-300 ${isSelected ? 'scale-105' : hasSelection ? 'scale-95 opacity-80 hover:opacity-100' : ''
                }`;

              return (
                <div
                  key={artisan.id}
                  className={containerClass}
                  onClick={() => setSelectedArtisan(artisan.id)}
                >
                  <div className={`relative mb-4 rounded-lg overflow-hidden aspect-[4/5] ${isSelected ? 'ring-4 ring-primary ring-offset-4 ring-offset-background' : ''}`}>
                    <img alt={artisan.name} className={imgClass} src={artisan.img} />
                    <div className={`absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-DEFAULT transition-all duration-300 ${isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0'}`}>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-primary">Next available: {artisan.availability}</p>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold">{artisan.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant font-medium">{artisan.title}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Step 3: Date & Time Picker */}
        <section className="mb-20">
          <header className="mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-2 block">Step 3 of 5</span>
            <h2 className="text-3xl font-bold tracking-tight">Select Availability</h2>
          </header>
          <div className="bg-surface-container-low rounded-lg p-8">
            <div className="flex gap-4 overflow-x-auto no-scrollbar mb-10 pb-2">
              {DATES.map((d) => {
                const isSelected = selectedDate === d.id;
                return (
                  <div
                    key={d.id}
                    onClick={() => setSelectedDate(d.id)}
                    className={`flex-shrink-0 w-20 h-28 rounded-full flex flex-col items-center justify-center cursor-pointer transition-colors ${isSelected
                        ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                        : 'bg-surface-container-lowest hover:bg-surface-variant text-on-surface'
                      }`}
                  >
                    <span className={`text-xs uppercase tracking-widest font-bold ${isSelected ? 'opacity-80' : 'text-on-surface-variant'}`}>{d.month}</span>
                    <span className="text-3xl font-bold leading-tight">{d.date}</span>
                    <span className={`text-[10px] uppercase tracking-widest font-bold ${isSelected ? 'opacity-80' : 'text-on-surface-variant'}`}>{d.day}</span>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TIMES.map((time) => {
                const isSelected = selectedTime === time;
                return (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-4 px-6 rounded-full text-sm font-bold border-2 transition-all ${isSelected
                        ? 'bg-surface-container-lowest border-primary text-primary shadow-sm shadow-primary/10'
                        : 'bg-surface-container-lowest border-transparent hover:border-primary/50 text-on-surface'
                      }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Step 4: Contact Info */}
        <section className="mb-20">
          <header className="mb-8">
            <span className="text-xs uppercase tracking-widest font-bold text-primary mb-2 block">Step 4 of 5</span>
            <h2 className="text-3xl font-bold tracking-tight">Personal Details</h2>
          </header>
          <div className="space-y-12 max-w-xl">
            <div className="relative">
              <input
                className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-all placeholder-transparent"
                placeholder=" "
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
              />
              <label className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary pointer-events-none">Full Name</label>
            </div>
            <div className="relative">
              <input
                className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-all placeholder-transparent"
                placeholder=" "
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-primary transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-on-surface-variant peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-primary pointer-events-none">Phone Number</label>
            </div>
            <button
              onClick={handleConfirmBooking}
              disabled={isSubmitting}
              className={`w-full text-surface py-5 rounded-full font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all ${isSubmitting ? 'bg-surface-variant text-on-surface-variant' : 'bg-on-background'}`}
            >
              {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
            </button>
          </div>
        </section>
      </main>
      <Footer />

      {/* Booking Summary Float */}
      {selectedServices.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-3rem)] md:w-auto md:min-w-[400px]">
          <div className="bg-on-background text-surface p-6 rounded-lg flex justify-between items-center shadow-2xl backdrop-blur-md bg-opacity-95">
            <div>
              <p className="text-[10px] uppercase tracking-widest opacity-60 font-bold mb-1">Selections</p>
              <p className="text-sm font-bold truncate max-w-[200px]">
                {selectedServices[0]?.name} {selectedServices.length > 1 ? `+ ${selectedServices.length - 1} more` : ''}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-primary">${totalPrice}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
