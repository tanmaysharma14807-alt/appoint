import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <span className="label-md uppercase tracking-[0.2em] text-primary font-bold mb-4 block">Hair Masters</span>
              <h1 className="text-7xl md:text-8xl font-headline mb-6 leading-[1.1]">Elevate Your <span className="italic">Inner Glow</span></h1>
              <p className="text-lg text-on-surface-variant max-w-md mb-10 font-body leading-relaxed">
                A curated sanctuary where high-fashion editorial aesthetics meet the organic calm of a luxury spa experience.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/booking" className="bg-primary text-on-primary px-10 py-5 rounded-full text-lg font-bold hover:opacity-90 transition-all active:scale-95 inline-block text-center">
                  Book Now
                </Link>
                <a className="group flex items-center gap-2 text-on-surface font-bold" href="#services">
                  View Services
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden h-[600px] w-full shadow-2xl">
                <img alt="Luxury Salon Interior" className="w-full h-full object-cover" src="/main.png" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/10 to-transparent pointer-events-none"></div>
        </section>

        {/* Services Section */}
        <section className="py-32 px-8 bg-surface-container-low" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <span className="label-md uppercase tracking-[0.2em] text-primary font-bold mb-4 block">Curated Menu</span>
                <h2 className="text-5xl font-headline">Precision &amp; Artistry</h2>
              </div>
              <p className="text-on-surface-variant max-w-xs font-body italic">Every service is tailored to your unique facial architecture and personal style.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="group">
                <div className="h-[400px] rounded-lg overflow-hidden mb-8 relative">
                  <img alt="Signature Cut" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/signaturecut.png" />
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-sm">
                    <span className="font-bold text-primary">₹400+</span>
                  </div>
                </div>
                <h3 className="text-2xl font-headline mb-2">Signature Cut</h3>
                <p className="text-on-surface-variant leading-relaxed">A bespoke architectural cut including a therapeutic scalp massage and editorial styling.</p>
              </div>

              <div className="group">
                <div className="h-[400px] rounded-lg overflow-hidden mb-8 relative">
                  <img alt="Color &amp; Gloss" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/hair2.png" />
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-sm">
                    <span className="font-bold text-primary">₹3000+</span>
                  </div>
                </div>
                <h3 className="text-2xl font-headline mb-2">Color &amp; Gloss</h3>
                <p className="text-on-surface-variant leading-relaxed">Dimensional hand-painted techniques finished with a high-shine conditioning glaze.</p>
              </div>

              <div className="group">
                <div className="h-[400px] rounded-lg overflow-hidden mb-8 relative">
                  <img alt="Atelier Ritual" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/ritual.png" />
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-sm">
                    <span className="font-bold text-primary">₹1000+</span>
                  </div>
                </div>
                <h3 className="text-2xl font-headline mb-2">Masters Ritual</h3>
                <p className="text-on-surface-variant leading-relaxed">Deep restorative treatment using rare botanical extracts and extended pressure-point massage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="label-md uppercase tracking-[0.2em] text-primary font-bold mb-4 block">The Space</span>
              <h2 className="text-5xl font-headline italic">A Sanctuary of Design</h2>
            </div>
            <div className="grid grid-cols-12 gap-6 h-[800px]">
              <div className="col-span-12 md:col-span-7 h-full rounded-lg overflow-hidden">
                <img alt="Salon Main Hall" className="w-full h-full object-cover" src="/inside1.png" />
              </div>
              <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img alt="Atelier Details" className="w-full h-full object-cover" src="/inside2.png" />
                </div>
                <div className="rounded-lg overflow-hidden bg-primary-container flex items-center justify-center p-12 text-center">
                  <div>
                    <h3 className="text-3xl font-headline text-on-primary-container mb-4">Crafted for Serenity</h3>
                    <p className="text-on-primary-container/80 font-body">Our space was designed by award-winning architects to ensure your time with us is a meditative retreat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-surface-container-low px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <span className="label-md uppercase tracking-[0.2em] text-primary font-bold mb-4 block">Client Voice</span>
                <h2 className="text-5xl font-headline mb-8">Refined Experiences</h2>
                <div className="space-y-12">
                  <blockquote className="border-l-4 border-primary pl-8">
                    <p className="text-2xl font-headline italic mb-4 leading-relaxed">Thanks to Asha Mam (MUA) and Wajid sir (Hair Artist) for my Makeover. I got exact look that I had in my mind for my brothers wedding. Both are highly skilled and professional and more importantly nice human beings. It was a lovely time spent Thank you once again.
                    </p>
                    <footer className="font-body font-bold text-on-surface">— Harleen Kaur, Local Guide</footer>
                  </blockquote>
                  <blockquote className="border-l-4 border-primary/30 pl-8">
                    <p className="text-2xl font-headline italic mb-4 leading-relaxed">This is my first time visiting Chandigarh, I came for a friends wedding to do my hair and makeup and OMG I loved the services. Kevin did my makeup and he was amazing! He Knew exactly what works for my features and eye shape. I didn’t tell him to change anything in the makeup, he knew exactly what to do, professional and nice and fast. Highly highly recommend him if u come here. 10/10</p>
                    <footer className="font-body font-bold text-on-surface">— mays atiyeh</footer>
                  </blockquote>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <img alt="Satisfied Client" className="w-full h-full object-cover" src="/nails.png" />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-surface-container-highest rounded-full flex items-center justify-center p-6 text-center border border-primary/20">
                  <span className="text-primary font-serif italic text-sm">Est. 2014 DL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map & CTA Section */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-7xl mx-auto rounded-lg overflow-hidden bg-white text-on-surface shadow-2xl flex flex-col md:flex-row border border-outline-variant/30">
            <div className="p-16 md:w-1/2">
              <h2 className="text-5xl font-headline mb-6">Visit the Masters</h2>
              <p className="text-on-surface-variant mb-12 font-body max-w-sm">Located in the heart of the design district, our flagship salon awaits your arrival.</p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <div>
                    <p className="font-bold">Sector 9C, Madhya Marg</p>
                    <p className="text-on-surface-variant text-sm">Chandigarh, 160009</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  <div>
                    <p className="font-bold">Mon - Sun: 10am - 9pm</p>
                    <p className="text-on-surface-variant text-sm"></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <div>
                    <p className="font-bold">+91 1234567899</p>
                    <p className="text-on-surface-variant text-sm">ourmail@gmail.com</p>
                  </div>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/vT8jjqhbkCKCMq8a8" target="_blank" rel="noopener noreferrer" className="mt-16 bg-primary text-on-primary px-10 py-5 rounded-full font-bold hover:bg-primary-container transition-colors w-full md:w-auto inline-block text-center">
                Get Directions
              </a>
            </div>
            <div>
              <img alt="Location Map" className="w-full h-full object-cover opacity-80" src="/mapviewwhite.png" />
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent md:block hidden"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
