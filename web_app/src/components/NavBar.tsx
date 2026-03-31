import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-[1440px] mx-auto">
        <Link href="/" className="font-headline italic text-2xl text-on-surface">HEADLINE SALON</Link>
        <Link href="/booking" className="bg-primary text-on-primary px-6 py-2 rounded-full font-medium text-sm hover:opacity-80 transition-opacity active:scale-95 duration-200">
          Book Appointment
        </Link>
      </div>
    </nav>
  );
}
