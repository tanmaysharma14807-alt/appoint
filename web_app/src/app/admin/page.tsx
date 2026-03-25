'use client';
import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBooking, setNewBooking] = useState({ clientName: '', phone: '', service: '', stylist: '', date: '', time: '' });

  useEffect(() => {
    fetch('/api/bookings')
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setIsLoading(false);
      });
  }, []);

  const handleComplete = async (id: number) => {
    try {
      await fetch('/api/bookings', { 
        method: 'PATCH', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: 'completed' }) 
      });
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'completed' } : b));
    } catch(e) {
      alert("Failed to update booking status.");
    }
  };

  const handleUndo = async (id: number) => {
    try {
      await fetch('/api/bookings', { 
        method: 'PATCH', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: 'active' }) 
      });
      setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'active' } : b));
    } catch(e) {
      alert("Failed to undo booking status.");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch('/api/bookings', { 
        method: 'DELETE', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }) 
      });
      setBookings(prev => prev.filter(b => b.id !== id));
    } catch(e) {
      alert("Failed to delete booking.");
    }
  };

  const handleManualBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      clientName: newBooking.clientName,
      phone: newBooking.phone,
      services: [newBooking.service],
      stylist: newBooking.stylist,
      stylistImg: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80&w=400', // placeholder admin generic img
      date: newBooking.date,
      time: newBooking.time
    };
    
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        setIsModalOpen(false);
        setNewBooking({ clientName: '', phone: '', service: '', stylist: '', date: '', time: '' });
        const updated = await fetch('/api/bookings').then(r => r.json());
        setBookings(updated);
      } else {
        alert("Failed to create entry.");
      }
    } catch(e) {
      alert("Error saving manual entry.");
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.username === 'admin1' && loginForm.password === 'password') {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface p-4">
        <div className="bg-surface-container-low p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-sm animate-in fade-in zoom-in duration-500">
          <div className="text-center mb-8">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">lock</span>
            <h2 className="font-headline text-3xl font-bold tracking-tight">Admin Access</h2>
            <p className="text-sm text-on-surface-variant mt-2 font-medium">Authorized personnel only</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Username</label>
              <input 
                required 
                type="text" 
                className="w-full text-sm font-bold bg-surface-container-lowest border-2 border-outline-variant/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-all"
                value={loginForm.username}
                onChange={e => setLoginForm({...loginForm, username: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Password</label>
              <input 
                required 
                type="password" 
                className="w-full text-sm font-bold bg-surface-container-lowest border-2 border-outline-variant/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-all"
                value={loginForm.password}
                onChange={e => setLoginForm({...loginForm, password: e.target.value})}
              />
            </div>
            <button type="submit" className="w-full bg-primary text-on-primary py-4 rounded-full font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all mt-6 shadow-md shadow-primary/20">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full min-h-screen bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* SideNavBar Component */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col py-8 z-40 transition-all duration-300">
        <div className="px-8 mb-12">
          <h1 className="font-headline text-lg text-[#735C00]">Atelier Admin</h1>
          <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-60">Manager Access</p>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-1">
            <li>
              <a className="bg-white text-[#735C00] rounded-l-full ml-4 pl-4 py-3 flex items-center gap-4 font-bold shadow-sm" href="#">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                <span className="text-xs font-label uppercase tracking-widest">Bookings</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="px-6 mt-auto">
          <button onClick={() => setIsModalOpen(true)} className="w-full bg-primary text-on-primary py-4 rounded-full font-bold text-sm tracking-tight mb-8 hover:opacity-90 active:scale-95 transition-all shadow-md shadow-primary/20">
            New Entry
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-64 w-full min-h-screen p-12">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-headline text-4xl text-on-surface tracking-tight">Active Bookings</h2>
            <p className="font-label text-on-surface-variant mt-2 tracking-wide uppercase text-xs opacity-70">Daily Schedule — Oct 24, 2024</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container-lowest px-4 py-2 rounded-full border border-outline-variant/30 flex items-center gap-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
              <span className="material-symbols-outlined text-sm text-outline">search</span>
              <input 
                type="text" 
                placeholder="Search Client Name..." 
                className="bg-transparent border-none outline-none text-xs font-medium w-48 text-on-surface placeholder-on-surface-variant/50"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </header>

        <section className="bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-500">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-8 py-5 text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant font-bold">Client Name</th>
                <th className="px-8 py-5 text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant font-bold">Phone</th>
                <th className="px-8 py-5 text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant font-bold">Service</th>
                <th className="px-8 py-5 text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant font-bold">Stylist</th>
                <th className="px-8 py-5 text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant font-bold text-center">Time</th>
                <th className="px-8 py-5 text-[10px] font-label uppercase tracking-[0.2em] text-on-surface-variant font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-8 py-10 text-center text-on-surface-variant">
                    Loading bookings form database...
                  </td>
                </tr>
              ) : bookings.filter(b => b.clientName.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-8 py-10 text-center text-on-surface-variant">
                    {searchQuery ? 'No clients found matching your search.' : 'No active bookings found.'}
                  </td>
                </tr>
              ) : (
                bookings.filter(b => b.clientName.toLowerCase().includes(searchQuery.toLowerCase())).map((booking) => (
                  <tr key={booking.id} className={`hover:bg-surface-container-low transition-colors duration-200 group ${booking.status === 'completed' ? 'bg-surface-container-lowest/50' : ''}`}>
                    <td className="px-8 py-6">
                      <span className={`font-headline text-lg ${booking.status === 'completed' ? 'text-on-surface-variant line-through opacity-70' : 'text-on-surface'}`}>{booking.clientName}</span>
                    </td>
                    <td className={`px-8 py-6 text-sm font-medium ${booking.status === 'completed' ? 'text-on-surface-variant opacity-70' : 'text-on-surface-variant'}`}>{booking.phone}</td>
                    <td className={`px-8 py-6 ${booking.status === 'completed' ? 'opacity-70 grayscale' : ''}`}>
                      <div className="flex flex-wrap gap-2">
                        {booking.services.map((svc: string, idx: number) => (
                          <span key={idx} className="inline-block px-3 py-1 bg-secondary-container/30 text-secondary text-[11px] font-bold uppercase tracking-wider rounded-full">{svc}</span>
                        ))}
                      </div>
                    </td>
                    <td className={`px-8 py-6 flex items-center gap-3 ${booking.status === 'completed' ? 'opacity-70 grayscale' : ''}`}>
                      <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
                        <img alt="Stylist" src={booking.stylistImg} />
                      </div>
                      <span className="text-sm font-semibold">{booking.stylist}</span>
                    </td>
                    <td className="px-8 py-6 text-center">
                      {booking.status === 'completed' ? (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 flex items-center justify-center gap-1 w-max mx-auto shadow-sm">
                          <span className="material-symbols-outlined text-xs">done_all</span> Completed
                        </span>
                      ) : (
                        <span className="text-sm font-bold bg-surface px-4 py-2 rounded-full border border-outline-variant/10 shadow-sm">{booking.time}</span>
                      )}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        {booking.status === 'completed' && (
                          <button onClick={() => handleUndo(booking.id)} className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300" title="Undo Completion">
                            <span className="material-symbols-outlined">undo</span>
                          </button>
                        )}
                        {booking.status !== 'completed' && (
                          <button onClick={() => handleComplete(booking.id)} className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300" title="Mark as Completed">
                            <span className="material-symbols-outlined">check</span>
                          </button>
                        )}
                        <button onClick={() => handleDelete(booking.id)} className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${booking.status === 'completed' ? 'bg-surface-variant text-on-surface-variant hover:bg-red-600 hover:text-white' : 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white'}`} title={booking.status === 'completed' ? "Delete Record" : "Cancel Booking"}>
                          <span className="material-symbols-outlined">{booking.status === 'completed' ? 'delete' : 'close'}</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <div className="px-8 py-6 bg-surface-container-low/20 flex justify-between items-center">
            <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant opacity-60">Showing {bookings.filter(b => b.clientName.toLowerCase().includes(searchQuery.toLowerCase())).length} of {bookings.length} total active</p>
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-lg">chevron_left</span>
              </button>
              <button className="p-2 rounded-full hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        </section>


      </main>

      {/* Success Feedback Overlay (Hidden by default) */}
      <div className="fixed bottom-12 right-12 bg-inverse-surface text-inverse-on-surface px-6 py-4 rounded-lg shadow-xl translate-y-24 opacity-0 transition-all duration-500 pointer-events-none flex items-center gap-4" id="toast">
        <span className="material-symbols-outlined text-emerald-400">check_circle</span>
        <span className="text-sm font-medium">Booking successfully updated</span>
      </div>

      {/* Manual Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-surface w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="px-8 py-6 bg-surface-container-low border-b border-outline-variant/20 flex justify-between items-center">
              <div>
                <h2 className="font-headline text-2xl tracking-tight">Manual Entry</h2>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mt-1">Direct Walk-in Booking</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:text-red-500 hover:bg-red-50 transition-colors">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
            <form onSubmit={handleManualBooking} className="p-8 space-y-5">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Client Name</label>
                <input required type="text" className="w-full text-sm font-bold bg-surface-container-lowest border-2 border-outline-variant/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-all placeholder-on-surface-variant/40" placeholder="e.g. Jane Doe" value={newBooking.clientName} onChange={e => setNewBooking({...newBooking, clientName: e.target.value})} />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Phone</label>
                <input required type="tel" className="w-full text-sm font-bold bg-surface-container-lowest border-2 border-outline-variant/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-all placeholder-on-surface-variant/40" placeholder="+1 (555) 000-0000" value={newBooking.phone} onChange={e => setNewBooking({...newBooking, phone: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Service</label>
                  <input required type="text" placeholder="Haircut" className="w-full text-sm font-bold bg-surface-container-lowest border-2 border-outline-variant/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-all placeholder-on-surface-variant/40" value={newBooking.service} onChange={e => setNewBooking({...newBooking, service: e.target.value})} />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Stylist</label>
                  <input required type="text" placeholder="Marcus" className="w-full text-sm font-bold bg-surface-container-lowest border-2 border-outline-variant/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-all placeholder-on-surface-variant/40" value={newBooking.stylist} onChange={e => setNewBooking({...newBooking, stylist: e.target.value})} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Date (Optional)</label>
                  <input type="date" className="w-full text-sm font-bold bg-surface-container-lowest border-2 border-outline-variant/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-all text-on-surface-variant" value={newBooking.date} onChange={e => setNewBooking({...newBooking, date: e.target.value})} />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Time</label>
                  <input required type="text" placeholder="10:30 AM" className="w-full text-sm font-bold bg-surface-container-lowest border-2 border-outline-variant/30 rounded-lg px-4 py-3 focus:border-primary focus:ring-0 outline-none transition-all uppercase placeholder-on-surface-variant/40" value={newBooking.time} onChange={e => setNewBooking({...newBooking, time: e.target.value})} />
                </div>
              </div>
              <button type="submit" className="w-full bg-primary text-on-primary py-4 rounded-full font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all mt-6 shadow-md shadow-primary/20">
                Create Entry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
