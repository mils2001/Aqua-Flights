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


      {/* Our Story Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Our Story
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Inspired by a better way to travel
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Aqua Flights was created from a simple idea: air travel should
              feel easier, more accessible, and more connected.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              From discovering a flight to managing a booking, making a
              payment, and receiving support, our goal is to bring the
              important parts of the travel experience together in one
              platform.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              As Aqua Flights grows, we aim to combine modern technology with
              human-centered customer service to create a travel experience
              people can rely on.
            </p>
          </div>

          <div className="relative">
            <img
              src={travelImage}
              alt="Aqua Flights travel experience"
              className="h-[450px] w-full rounded-3xl object-cover shadow-xl"
            />

            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-slate-900 p-6 text-white shadow-xl">
              <p className="text-3xl font-bold">AQUA</p>
              <p className="text-sm text-slate-300">Travel beyond limits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Customer Experience
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
              Designed around our passengers
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              We are building Aqua Flights around convenience, reliability,
              responsive support, and a smooth digital experience.
            </p>
          </div>

          {/* Sample Statistics */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: '4.8/5',
                label: 'Target Customer Rating',
              },
              {
                value: '94%',
                label: 'Target Satisfaction',
              },
              {
                value: '< 10 min',
                label: 'Target Support Response',
              },
              {
                value: '24/7',
                label: 'Digital Availability',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-8 text-center shadow-sm"
              >
                <p className="text-4xl font-bold text-cyan-600">
                  {stat.value}
                </p>

                <p className="mt-3 text-sm font-medium text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Performance Graph */}
          <div className="mt-12 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Customer Experience Goals
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Illustrative targets — to be replaced with real company
                  data.
                </p>
              </div>

              <div className="text-sm text-slate-500">
                Target performance
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {[
                { label: 'Customer Satisfaction', value: 94 },
                { label: 'Booking Experience', value: 90 },
                { label: 'Support Experience', value: 88 },
                { label: 'Digital Convenience', value: 96 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex justify-between text-sm font-medium">
                    <span className="text-slate-700">{item.label}</span>
                    <span className="text-cyan-600">{item.value}%</span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-cyan-500 transition-all duration-1000"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
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
