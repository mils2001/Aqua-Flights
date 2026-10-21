
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import nairobiImage from '../assets/Nairobi.jpg'
import mombasaImage from '../assets/MOMBASA.jpg'
import londonImage from '../assets/lONDON.jpg'
import parisImage from '../assets/PARIS.jpg'
import lagosImage from '../assets/Lagos naija.jpg'
import namibiaImage from '../assets/NAMIBIA.jpg'

const API_URL = 'http://localhost:5000/api/flights'

type FlightSchedule = {
  id: number
  flightId: number
  departureDate: string
  departureTime: string
  arrivalTime: string
  availableSeats: number
  status: string
}

type Flight = {
  id: number
  flightNumber: string
  origin: string
  destination: string
  originCode: string
  destinationCode: string
  destinationImage: string | null
  basePrice: number
  totalSeats: number
  schedules: FlightSchedule[]
}

type Destination = {
  city: string
  description: string
  image: string
}

const destinations: Destination[] = [
  {
    city: 'Nairobi',
    description: 'Experience the vibrant capital of Kenya.',
    image: nairobiImage,
  },
  {
    city: 'Mombasa',
    description: 'Discover beautiful beaches and coastal culture.',
    image: mombasaImage,
  },
  {
    city: 'London',
    description: 'Explore iconic landmarks and historic streets.',
    image: londonImage,
  },
  {
    city: 'Paris',
    description: 'Enjoy the art, culture, and charm of Paris.',
    image: parisImage,
  },
  {
    city: 'Lagos',
    description: 'Experience the energy of Nigeria.',
    image: lagosImage,
  },
  {
    city: 'Namibia',
    description: 'Discover breathtaking landscapes and deserts.',
    image: namibiaImage,
  },
]

const formatPrice = (amount: number) =>
  new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(amount)

const formatDate = (date: string) => {
  const parsedDate = new Date(date)

  if (Number.isNaN(parsedDate.getTime())) {
    return date
  }

  return parsedDate.toLocaleDateString('en-KE', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

function Flights() {
  const navigate = useNavigate()

  const [from, setFrom] = useState('Nairobi')
  const [to, setTo] = useState('Mombasa')
  const [departureDate, setDepartureDate] = useState('2026-11-01')
  const [passengers, setPassengers] = useState('1')

  const [flights, setFlights] = useState<Flight[]>([])
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getDestinationImage = (flight: Flight) => {
    return (
      flight.destinationImage ||
      destinations.find(
        (destination) =>
          destination.city.toLowerCase() ===
          flight.destination.toLowerCase(),
      )?.image ||
      mombasaImage
    )
  }

  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement>,
    flight: Flight,
  ) => {
    const image = event.currentTarget
    const fallback =
      destinations.find(
        (destination) =>
          destination.city.toLowerCase() ===
          flight.destination.toLowerCase(),
      )?.image || mombasaImage

    if (image.src !== new URL(fallback, window.location.href).href) {
      image.src = fallback
    }
  }

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setError('')
    setFlights([])
    setSearchPerformed(false)

    if (!from || !to || !departureDate) {
      setError('Please select your departure city, destination, and date.')
      return
    }

    if (from.toLowerCase() === to.toLowerCase()) {
      setError('Departure city and destination must be different.')
      return
    }

    setLoading(true)

    try {
      const params = new URLSearchParams({
        origin: from,
        destination: to,
        date: departureDate,
      })

      const response = await fetch(`${API_URL}/search?${params.toString()}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Unable to search for flights.')
      }

      setFlights(Array.isArray(data.flights) ? data.flights : [])
      setSearchPerformed(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Could not connect to the flights server. Please try again.',
      )
    } finally {
      setLoading(false)
    }
  }

  const handleBooking = (flight: Flight) => {
    navigate('/login', {
      state: {
        flightId: flight.id,
        flightNumber: flight.flightNumber,
        origin: flight.origin,
        destination: flight.destination,
        departureDate,
        passengers: Number(passengers),
      },
    })
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-purple-950/80" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-purple-300">
            Welcome aboard Aqua Flights
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Your next adventure starts here.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Discover destinations, compare flight prices, and find your next
            journey with Aqua Flights.
          </p>
        </div>
      </section>

      <section className="relative mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleSearch}
          className="grid gap-4 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-200 sm:grid-cols-2 lg:grid-cols-5 lg:items-end lg:p-7"
        >
          <div>
            <label
              htmlFor="from"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              From
            </label>
            <select
              id="from"
              value={from}
              onChange={(event) => setFrom(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            >
              {destinations.map((destination) => (
                <option key={destination.city} value={destination.city}>
                  {destination.city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="to"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              To
            </label>
            <select
              id="to"
              value={to}
              onChange={(event) => setTo(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            >
              {destinations.map((destination) => (
                <option key={destination.city} value={destination.city}>
                  {destination.city}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="departureDate"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Departure date
            </label>
            <input
              id="departureDate"
              type="date"
              value={departureDate}
              onChange={(event) => setDepartureDate(event.target.value)}
              required
              className="w-full rounded-xl border border-slate-300 px-3 py-3 text-slate-900 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
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
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            >
              {[1, 2, 3, 4, 5, 6].map((number) => (
                <option key={number} value={number}>
                  {number} {number === 1 ? 'passenger' : 'passengers'}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-purple-600 px-5 py-3 font-bold text-white transition hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Searching...' : 'Search flights'}
          </button>
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-7">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Available flights
          </h2>
          <p className="mt-2 text-slate-600">
            Search results and destination photos from Aqua Flights.
          </p>
        </div>

        {error && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700"
          >
            {error}
          </div>
        )}

        {loading && (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="font-semibold text-slate-700">
              Finding the best flights for you...
            </p>
          </div>
        )}

        {!loading && searchPerformed && flights.length === 0 && !error && (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              No flights found
            </h3>
            <p className="mt-2 text-slate-600">
              Try another date or route to find available flights.
            </p>
          </div>
        )}

        {!loading && flights.length > 0 && (
          <div className="grid gap-7">
            {flights.map((flight) => (
              <article
                key={flight.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-lg"
              >
                <div className="relative h-56 sm:h-72">
                  <img
                    src={getDestinationImage(flight)}
                    alt={`Discover ${flight.destination}`}
                    onError={(event) => handleImageError(event, flight)}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7">
                    <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-bold uppercase tracking-wide">
                      {flight.flightNumber}
                    </span>

                    <h3 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                      {flight.destination}
                    </h3>

                    <p className="mt-2 text-sm text-white/90 sm:text-base">
                      {flight.origin} ({flight.originCode}) →{' '}
                      {flight.destination} ({flight.destinationCode})
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  {flight.schedules && flight.schedules.length > 0 ? (
                    <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                      <div>
                        {flight.schedules.map((schedule) => (
                          <div
                            key={schedule.id}
                            className="mb-4 rounded-xl border border-slate-200 p-4 last:mb-0"
                          >
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                  Departure
                                </p>
                                <p className="mt-1 text-lg font-bold text-slate-900">
                                  {schedule.departureTime}
                                </p>
                              </div>

                              <div className="text-center">
                                <p className="text-xs text-slate-500">
                                  Flight time
                                </p>
                                <div className="mt-2 flex items-center gap-2 text-purple-600">
                                  <span className="h-px w-8 bg-purple-300" />
                                  <span aria-hidden="true">✈</span>
                                  <span className="h-px w-8 bg-purple-300" />
                                </div>
                              </div>

                              <div className="text-right">
                                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                  Arrival
                                </p>
                                <p className="mt-1 text-lg font-bold text-slate-900">
                                  {schedule.arrivalTime}
                                </p>
                              </div>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-sm text-slate-600">
                              <span>{formatDate(schedule.departureDate)}</span>
                              <span>
                                {schedule.availableSeats} seats available
                              </span>
                              <span className="rounded-full bg-green-50 px-3 py-1 font-semibold text-green-700">
                                {schedule.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-slate-200 pt-5 lg:min-w-48 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                        <p className="text-sm text-slate-500">
                          Price per passenger
                        </p>
                        <p className="mt-1 text-3xl font-extrabold text-slate-900">
                          {formatPrice(flight.basePrice)}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Estimated total:{' '}
                          {formatPrice(
                            flight.basePrice * Number(passengers),
                          )}
                        </p>

                        <button
                          type="button"
                          onClick={() => handleBooking(flight)}
                          className="mt-5 w-full rounded-xl bg-purple-600 px-5 py-3 font-bold text-white transition hover:bg-purple-700"
                        >
                          Book flight
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-slate-500">
                          Price per passenger
                        </p>
                        <p className="mt-1 text-2xl font-extrabold text-slate-900">
                          {formatPrice(flight.basePrice)}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          No scheduled departure is currently available.
                        </p>
                      </div>
                      <button
                        type="button"
                        disabled
                        className="rounded-xl bg-slate-200 px-5 py-3 font-bold text-slate-500"
                      >
                        No schedule available
                      </button>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-7">
          <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Explore destinations
          </h2>
          <p className="mt-2 text-slate-600">
            Get inspired for your next trip.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <button
              type="button"
              key={destination.city}
              onClick={() => {
                if (destination.city !== from) {
                  setTo(destination.city)
                } else {
                  setFrom(destination.city)
                  setTo(destination.city === 'Mombasa' ? 'Nairobi' : 'Mombasa')
                }

                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="group overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.city}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">
                  {destination.city}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {destination.description}
                </p>
                <span className="mt-4 inline-block font-bold text-purple-600">
                  Explore destination →
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Flights
