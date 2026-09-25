import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import planeImage from '../assets/alexander-schimmeck-DSOohFTAfno-unsplash.jpg'
import airportImage from '../assets/etienne-jong-9NDAJ1VnQwQ-unsplash.jpg'
import travelImage from '../assets/josue-isai-ramos-figueroa-n2NBgIx3A28-unsplash.jpg'
import flightImage from '../assets/lukas-souza-PAO06EjpCAY-unsplash.jpg'

const heroImages = [
  planeImage,
  airportImage,
  travelImage,
  flightImage,
]

function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[700px] overflow-hidden">
        {/* Background Images */}
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Aqua Flights travel experience ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[700px] items-center">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Welcome to Aqua Flights
              </p>

              <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Your Journey.
                <br />
                Our Commitment.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
                Discover a smarter way to travel. Search flights, book your
                journey, manage your trips, and experience reliable customer
                service with Aqua Flights.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/flights"
                  className="rounded-lg bg-cyan-500 px-7 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
                >
                  Search Flights
                </Link>

                <Link
                  to="/register"
                  className="rounded-lg border border-white/70 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImage(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === currentImage
                  ? 'w-8 bg-cyan-400'
                  : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              About Aqua Flights
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
              Making every journey simpler
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Aqua Flights is designed to bring flight discovery, booking,
              payments, travel management, and customer support together in one
              convenient platform.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              What We Offer
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Everything you need for your journey
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '✈️',
                title: 'Flight Booking',
                description:
                  'Search and book available flights through a simple travel experience.',
              },
              {
                icon: '🎫',
                title: 'Digital Tickets',
                description:
                  'Keep your booking information organized and accessible.',
              },
              {
                icon: '💳',
                title: 'Easy Payments',
                description:
                  'Support for convenient digital payment options for your bookings.',
              },
              {
                icon: '👥',
                title: 'Customer Support',
                description:
                  'Get assistance throughout your travel experience.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">{service.icon}</div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-slate-900 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl font-bold md:text-5xl">
            Ready to start your journey?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Find your next destination and let Aqua Flights help you travel
            with confidence.
          </p>

          <Link
            to="/flights"
            className="mt-8 inline-block rounded-lg bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-400"
          >
            Explore Flights
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
