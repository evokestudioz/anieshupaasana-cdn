export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-end overflow-hidden mt-20">
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover object-center">
          <source src="/mohanlal-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="absolute left-1 bottom-1 z-10 text-white max-w-xl mx-auto px-1 lg:px-12 pb-20 w-full">
        <div className="text-left">
          <h1 className="text-5xl md:text-5xl font-serif font-light mb-6 leading-tight">
            Capturing Life's
            <br />
            <span className="font-medium">Precious Moments</span>
          </h1>
          <p className="text-xl md:text-xl font-light">Professional Photography by Aneesh Upasana</p>
        </div>
      </div>
    </section>
  )
}