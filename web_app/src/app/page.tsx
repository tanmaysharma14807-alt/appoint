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
              <span className="label-md uppercase tracking-[0.2em] text-primary font-bold mb-4 block">The Modern Atelier</span>
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
                <img alt="Luxury Salon Interior" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN5WuTgTCtwmfgV8Xu51KX7Yp3LE6oAOJf9L_BGpCTNi79I21MXje9H_JEefI5EKYoAFxWD-6MNsK-RUNwiVmY2jEct9gs8ao_lSTrOQVQQmGJrp72tVCcXYpgsDLXyghlX6-KuRMua6WJUZlMBplEauGQtMN5Nrcfm8CHUy0SSIj0ghmsjIUIe5UusLoIzD0rp8wGTdiZCXVlXzZE2-4aw_yEFD9rsb9Hvyp8tF1uJo6kxyE5ex-iOwV0wDJGQr7VSOE_Gb8fG2M"/>
              </div>
              <div className="absolute -bottom-12 -left-12 bg-primary-container p-8 rounded-lg max-w-xs shadow-xl hidden md:block">
                <p className="font-headline text-on-primary-container italic text-xl mb-2">&quot;A transformation beyond the chair.&quot;</p>
                <p className="text-on-primary-container/80 text-sm">— Vogue Editorial 2024</p>
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
                  <img alt="Signature Cut" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjaVRiat6GfHaW2Nou2UQwqBQtRC4AgKbmDN3FS3tHRCyWaOY05snGQ3Ug7l8JeN3aD4a0UPVpEba4dmj_XvAzMBMvR6N7cj-LA56hV6xoLvGk4yj98A21qPCCnjh8F4l9up8V5vYLMjjQy-pRYWR7uzo1d0vp-G7ofQjfp3Zne3qEasb0WYkyUqCa1TbmN6nZ7EiTTyj8V4IIUN_C7JOpj7IuhU6bdwuvGJUsIiquXWArTnHY_UJlZ1QJ92hchx5kW7LBkH2jvJ0"/>
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-sm">
                    <span className="font-bold text-primary">$85+</span>
                  </div>
                </div>
                <h3 className="text-2xl font-headline mb-2">Signature Cut</h3>
                <p className="text-on-surface-variant leading-relaxed">A bespoke architectural cut including a therapeutic scalp massage and editorial styling.</p>
              </div>

              <div className="group">
                <div className="h-[400px] rounded-lg overflow-hidden mb-8 relative">
                  <img alt="Color &amp; Gloss" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA40k1GuX8MpKmyiWqy73IFuTh8S0R1MOpN3sRm5VF3cijZFNEFIeffy4EgFoQN98nuAK_JhYeLEW82UscaQ1e2Jmz3U9kUj-Tl-M_Jb0252SnTQvWlr2OAg24Y_BIEXzBNKK_nz-P4br9hGcpprpfjamw6tlXpeh8S0jhoLfyUsgoKDV6s3Dq915eMmrWF_AnjYLP6IrbOlLkomvOu8Kv4uWhijc-mKJZKBLvdn0IHcPAWt3OoG4XZcFE94vBB3u3248LgFdMHzWo"/>
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-sm">
                    <span className="font-bold text-primary">$150+</span>
                  </div>
                </div>
                <h3 className="text-2xl font-headline mb-2">Color &amp; Gloss</h3>
                <p className="text-on-surface-variant leading-relaxed">Dimensional hand-painted techniques finished with a high-shine conditioning glaze.</p>
              </div>

              <div className="group">
                <div className="h-[400px] rounded-lg overflow-hidden mb-8 relative">
                  <img alt="Atelier Ritual" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxwZM_eUrkk5npaScAYx2bYkCLiLWZnv82VPPrkzseEFvMZtw6aavSVXuyOA7OrFuGl-p9pUl_Oze9BVddlTyAdHk9yV06VJSWi5H6xk7uJAseiqeZ2YnZUsLT_If_6iaYM9SgFkB0xHpbRHUHhu8BQ1VNcD_I-jYRlQADKo7wXOrpYNMwNtqqpIRLrQX6lRSLkLkJ2wJAQ4IIaCiMud6HPgvh8xSXdeqMKHIPfsT8rf3h1Aixf8BSGVwowROYPHm7auw3td0lIl8"/>
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-6 py-2 rounded-full shadow-sm">
                    <span className="font-bold text-primary">$120+</span>
                  </div>
                </div>
                <h3 className="text-2xl font-headline mb-2">Atelier Ritual</h3>
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
                <img alt="Salon Main Hall" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQauaW8xPTLohT9gXXtGVMBaHroErtYyq9BXt7bgBgp3ItBiidepq-I6pASJJ6OiBRGFY0eUu546ha5iy1Nnu_XPxZ9w3kVDMs13eQMwnubV1NqFmb1lwDggGajaALIBIZ5MnBmx5CT2C5lPlizPfSRj-aWApSdVDl7zvzWAbLXWGF4xrMWQplocnFNIydYUUSbdMdompgOkThiPUvGi027qI-XMu0JiXNZuoD8bbpGO2IRSqgvL4joXmPsJ7Av_pjrW37GrNDYIw"/>
              </div>
              <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <img alt="Atelier Details" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANPrZQrTqJXuNcA9qgtj7tGsmgZ_oFe7dYYPt41tjYOo-tK8_HlMmXQaJtwnaKc1TyJKuCIawYgEYZ8bHglqMQoJjzILHL4xjHGRW3WFwVX65QQBNwF1OCZ7m11VEeYkBJckDm2nBF7-pntmKlDxRhimdMQoOpT1QE-ANwhcbhiF6j0or_dx_u5trSYkL5qaNvjw-YgMZvy9HpVYLMn9cts8n-sgWQAVPmdfZt08FPUf39fqGXz3j7WQx-LHzc1qDX5I8OlmgL3-4"/>
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
                    <p className="text-2xl font-headline italic mb-4 leading-relaxed">&quot;The most sophisticated salon experience I&apos;ve had globally. Tanmay&apos;s Salon doesn&apos;t just cut hair; they curate your entire presence.&quot;</p>
                    <footer className="font-body font-bold text-on-surface">— Julianne M., Creative Director</footer>
                  </blockquote>
                  <blockquote className="border-l-4 border-primary/30 pl-8">
                    <p className="text-2xl font-headline italic mb-4 leading-relaxed">&quot;A masterclass in luxury. The attention to detail from the moment you walk in is unparalleled.&quot;</p>
                    <footer className="font-body font-bold text-on-surface">— David R., Architect</footer>
                  </blockquote>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <img alt="Satisfied Client" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD92F2Ct8IvJYkDMZ1g-kwSYi2cIsOx8PWKCh1b-M9-mx2rPwy-dCJk3XRpkRsWT8y72HwY4esMWupb5NW3jP2LxGAyamHK2YMSRClYpRxvGxzml_xpr8Fwb3lrukz_nKcKNqPJnohTAmZrpce-wE9Jc-jTtKIkN_UZLgi63tGSgwvaT9olMR_QhS4A0KrNkHHUAQNchXhlsemECgc7urOIfhb1wboRfTUDgi9EtrOpq0XlMFjFxdxQVE18S7i2wLdvC1rOF6iJePU"/>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-surface-container-highest rounded-full flex items-center justify-center p-6 text-center border border-primary/20">
                  <span className="text-primary font-serif italic text-sm">Est. 2024 NYC</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map & CTA Section */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-7xl mx-auto rounded-lg overflow-hidden bg-on-surface text-surface flex flex-col md:flex-row">
            <div className="p-16 md:w-1/2">
              <h2 className="text-5xl font-headline mb-6">Visit the Atelier</h2>
              <p className="text-surface/70 mb-12 font-body max-w-sm">Located in the heart of the design district, our flagship salon awaits your arrival.</p>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container">location_on</span>
                  <div>
                    <p className="font-bold">722 Madison Avenue</p>
                    <p className="text-surface/60">New York, NY 10065</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container">schedule</span>
                  <div>
                    <p className="font-bold">Mon - Sat: 9am - 8pm</p>
                    <p className="text-surface/60">Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary-container">call</span>
                  <div>
                    <p className="font-bold">+1 (212) 555-0198</p>
                    <p className="text-surface/60">concierge@aurareserve.com</p>
                  </div>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/vT8jjqhbkCKCMq8a8" target="_blank" rel="noopener noreferrer" className="mt-16 bg-primary text-on-primary px-10 py-5 rounded-full font-bold hover:bg-primary-container transition-colors w-full md:w-auto inline-block text-center">
                Get Directions
              </a>
            </div>
            <div className="md:w-1/2 min-h-[400px] relative grayscale">
              <img alt="Location Map" className="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtz3qdx9gvXoin63n6and-uzav99ZsVIp6EWfFoZsdrPyk_y3YLJgXtEI6RA5Lw_oXeyPl5_CR3Jc5JJFy2Dt40qPm6ypxktjhYokSmNvPKlegCJArgZq_PHiv1cVl5c9i3Bi5aHbO0_dITaESQznIVdlTgxKIigVABgUjivOykuwTyC77Gz1gxPFEKxMHfXCtEH183SiQGpdtlDecf3aJ2DUFcwKiXbo2lmbfAB-UaaZcXEvPfpHAyJ297_Am23p2-Zu_n_TErwc"/>
              <div className="absolute inset-0 bg-gradient-to-r from-on-surface to-transparent md:block hidden"></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
