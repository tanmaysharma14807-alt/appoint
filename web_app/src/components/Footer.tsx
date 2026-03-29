import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/15">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <span className="text-2xl font-headline italic text-on-surface block mb-6">Hair Masters</span>
          <p className="text-on-surface-variant text-sm leading-relaxed">A sanctuary for high-fashion aesthetics and precision craft. Experience the art of refinement.</p>
        </div>
        <div>
          <h4 className="font-headline text-lg text-on-surface mb-6">Discover</h4>
          <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
            <li><Link className="hover:text-primary transition-colors" href="/#services">Services</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Our Stylists</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">The Gallery</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Gift Cards</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline text-lg text-on-surface mb-6">Connect</h4>
          <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
            <li><Link className="hover:text-primary transition-colors" href="#">Instagram</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Pinterest</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Contact Us</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Newsletter</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline text-lg text-on-surface mb-6">Company</h4>
          <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
            <li><Link className="hover:text-primary transition-colors" href="#">About Us</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Careers</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#">Press</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-outline-variant/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs uppercase tracking-widest text-on-surface-variant font-medium">© 2014 Hair Masters. All rights reserved.</p>
        <div className="flex gap-8">
          <Link className="text-xs uppercase tracking-widest text-on-surface-variant font-medium hover:text-primary" href="#">Privacy Policy</Link>
          <Link className="text-xs uppercase tracking-widest text-on-surface-variant font-medium hover:text-primary" href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
