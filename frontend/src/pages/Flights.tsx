import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import nairobiImage from '../assets/Nairobi.jpg'
import mombasaImage from '../assets/MOMBASA.jpg'
import londonImage from '../assets/lONDON.jpg'
import parisImage from '../assets/PARIS.jpg'
import lagosImage from '../assets/Lagos naija.jpg'
import namibiaImage from '../assets/NAMIBIA.jpg'

type Flight = {
  id: number
  flightNumber: string
  from: string
  fromCode: string
  to: string
  toCode: string
  departure: string
  arrival: string
  duration: string
  price: number
  seats: number
}

type Destination = {
  city: string
  country: string
  description: string
  image: string
}

const flights: Flight[] = [
  {
    id: 1,
    flightNumber: 'AQ101',
    from: 'Nairobi',
    fromCode: 'NBO',
    to: 'Mombasa',
    toCode: 'MBA',
    departure: '08:00',
    arrival: '09:15',
    duration: '1h 15m',
    price: 8500,
    seats: 18,
  },
  {
    id: 2,
    flightNumber: 'AQ205',
    from: 'Nairobi',
    fromCode: 'NBO',
    to: 'Kisumu',
    toCode: 'KIS',
    departure: '10:30',
    arrival: '11:25',
    duration: '55m',
    price: 7200,
    seats: 12,
  },
  {
    id: 3,
    flightNumber: 'AQ310',
    from: 'Mombasa',
    fromCode: 'MBA',
    to: 'Nairobi',
    toCode: 'NBO',
    departure: '14:00',
    arrival: '15:15',
    duration: '1h 15m',
    price: 8500,
    seats: 24,
  },
  {
    id: 4,
    flightNumber: 'AQ420',
    from: 'Nairobi',
    fromCode: 'NBO',
    to: 'Eldoret',
    toCode: 'EDL',
    departure: '16:30',
    arrival: '17:25',
    duration: '55m',
    price: 6800,
    seats: 9,
  },
]

const destinations: Destination[] = [
  {
    city: 'Nairobi',
    country: 'Kenya',
    description: 'Experience the energy and beauty of Kenya’s capital city.',
    image: nairobiImage,
  },
  {
    city: 'Mombasa',
    country: 'Kenya',
    description: 'Enjoy beautiful beaches, warm weather and coastal culture.',
    image: mombasaImage,
  },
  {
    city: 'London',
    country: 'United Kingdom',
    description: 'Discover history, culture and unforgettable city experiences.',
    image: londonImage,
  },
  {
    city: 'Paris',
    country: 'France',
    description: 'Explore one of the world’s most iconic travel destinations.',
    image: parisImage,
  },
  {
    city: 'Lagos',
    country: 'Nigeria',
    description: 'Experience the vibrant culture and energy of Lagos.',
    image: lagosImage,
  },
  {
    city: 'Namibia',
    country: 'Namibia',
    description: 'Discover breathtaking landscapes and unforgettable adventures.',
    image: namibiaImage,
  },
]

function Flights() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [passengers, setPassengers] = useState('1')
  const [searchPerformed, setSearchPerformed] = useState(false)

  const filteredFlights = useMemo(() => {
    const fromSearch = from.trim().toLowerCase()
    const toSearch = to.trim().toLowerCase()

    return flights.filter((flight) => {
      const matchesFrom =
        !fromSearch ||
        flight.from.toLowerCase().includes(fromSearch) ||
        flight.fromCode.toLowerCase().includes(fromSearch)

      const matchesTo =
        !toSearch ||
        flight.to.toLowerCase().includes(toSearch) ||
        flight.toCode.toLowerCase().includes(toSearch)

      return matchesFrom && matchesTo
    })
  }, [from, to])

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSearchPerformed(true)
  }

  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Explore with Aqua Flights
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Find Your Perfect Flight
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Search available flights, discover exciting destinations and
              start planning your next journey with Aqua Flights.
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="relative z-10 -mt-8 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <form
            onSubmit={handleSearch}
            className="grid gap-5 lg:grid-cols-5"
          >
            <div>
              <label
                htmlFor="from"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                From
              </label>

              <input
                id="from"
                type="text"
                value={from}
                onChange={(event) => setFrom(event.target.value)}
                placeholder="Nairobi or NBO"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label
                htmlFor="to"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                To
              </label>

              <input
                id="to"
                type="text"
                value={to}
                onChange={(event) => setTo(event.target.value)}
                placeholder="Mombasa or MBA"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label
                htmlFor="departureDate"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Departure Date
              </label>

              <input
                id="departureDate"
                type="date"
                value={departureDate}
                onChange={(event) => setDepartureDate(event.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
            </div>

            <div>
              <label
                htmlFor="passengers"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Passengers
              </label>

              <select
                id="passengers"
                value={passengers}
                onChange={(event) => setPassengers(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              >
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
                <option value="5">5 Passengers</option>
                <option value="6">6 Passengers</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-500"
              >
                Search Flights
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Search Results */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                Available Flights
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {searchPerformed ? 'Search Results' : 'Featured Flights'}
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              {filteredFlights.length} flight
              {filteredFlights.length !== 1 ? 's' : ''} available
            </p>
          </div>

          <div className="grid gap-5">
            {filteredFlights.length > 0 ? (
              filteredFlights.map((flight) => (
                <div
                  key={flight.id}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
                >
                  <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div className="grid gap-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                      <div>
                        <p className="text-sm font-semibold text-cyan-600">
                          {flight.flightNumber}
                        </p>

                        <div className="mt-2 flex items-center gap-3">
                          <div>
                            <p className="text-2xl font-bold text-slate-900">
                              {flight.departure}
                            </p>
                            <p className="text-sm font-semibold text-slate-700">
                              {flight.fromCode}
                            </p>
                            <p className="text-xs text-slate-500">
                              {flight.from}
                            </p>
                          </div>

                          <div className="flex flex-1 items-center gap-2">
                            <div className="h-px flex-1 bg-slate-300" />
                            <span className="text-xs text-slate-400">
                              {flight.duration}
                            </span>
                            <div className="h-px flex-1 bg-slate-300" />
                          </div>

                          <div className="text-right">
                            <p className="text-2xl font-bold text-slate-900">
                              {flight.arrival}
                            </p>
                            <p className="text-sm font-semibold text-slate-700">
                              {flight.toCode}
                            </p>
                            <p className="text-xs text-slate-500">
                              {flight.to}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="hidden h-14 w-px bg-slate-200 sm:block" />

                      <div className="flex items-center gap-4 sm:justify-center">
                        <div>
                          <p className="text-xs uppercase tracking-wide text-slate-400">
                            Available seats
                          </p>
                          <p className="mt-1 font-semibold text-slate-800">
                            {flight.seats} seats
                          </p>
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-wide text-slate-400">
                            From
                          </p>
                          <p className="mt-1 text-xl font-bold text-slate-900">
                            KSh {flight.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="lg:text-right">
                      <Link
                        to="/register"
                        className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition hover:bg-cyan-500 lg:w-auto"
                      >
                        Book Flight
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-200">
                <h3 className="text-xl font-bold text-slate-900">
                  No flights found
                </h3>

                <p className="mt-2 text-slate-500">
                  Try another departure or destination.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Popular Destinations
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Where Would You Like To Go?
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Discover some of the destinations you can explore with Aqua
              Flights.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <article
                key={destination.city}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`${destination.city}, ${destination.country}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 text-white">
                    <p className="text-sm font-medium text-cyan-200">
                      {destination.country}
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                      {destination.city}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="leading-7 text-slate-600">
                    {destination.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setTo(destination.city)}
                    className="mt-4 font-semibold text-cyan-600 transition hover:text-cyan-700"
                  >
                    Search flights to {destination.city} →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Travel CTA */}
      <section className="bg-cyan-600 px-6 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-bold">
              Ready to start your journey?
            </h2>

            <p className="mt-3 max-w-2xl text-cyan-50">
              Create your Aqua Flights account and enjoy a simpler way to
              search, book and manage your flights.
            </p>
          </div>

          <Link
            to="/register"
            className="rounded-xl bg-white px-7 py-3.5 font-semibold text-cyan-700 transition hover:bg-cyan-50"
          >
            Create Account
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Flights
