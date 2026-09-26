import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import heroOne from '../assets/alex-perez-m_ikwYM7ntI-unsplash.jpg'
import heroTwo from '../assets/cody-board-f88XRM443DY-unsplash.jpg'
import heroThree from '../assets/erik-odiin-jbQvJx2EWnU-unsplash.jpg'
import heroFour from '../assets/liu-revutska-uUWD7fsh9tg-unsplash.jpg'

import holidayImage from '../assets/HOLIDAY.jpg'
import coteImage from '../assets/Cote de viour.jpg'
import airportImage from '../assets/etienne-jong-9NDAJ1VnQwQ-unsplash.jpg'
import travelImage from '../assets/josue-isai-ramos-figueroa-n2NBgIx3A28-unsplash.jpg'
import flightImage from '../assets/lukas-souza-PAO06EjpCAY-unsplash.jpg'
import nairobiImage from '../assets/Nairobi.jpg'

type TravelClass = {
  title: string
  subtitle: string
  description: string
  price: number
  priceLabel: string
  icon: string
  image: string
}

type Booking = {
  reference: string
  flight: string
  route: string
  date: string
  time: string
  passenger: string
  status: string
  price: string
}

type BookingForm = {
  travelClass: string
  flight: string
  route: string
  date: string
  passenger: string
  email: string
  phone: string
  passengers: number
  hotel: boolean
  airportPickup: boolean
  travelAssistance: boolean
}

const heroImages = [heroOne, heroTwo, heroThree, heroFour]

const travelClasses: TravelClass[] = [
  {
    title: 'Economy Class',
    subtitle: 'Smart Travel',
    description:
      'Comfortable and affordable flights designed for everyday travellers, families and students.',
    price: 6800,
    priceLabel: 'From KSh 6,800',
    icon: '✈️',
    image: heroOne,
  },
  {
    title: 'Business Class',
    subtitle: 'Travel in Comfort',
    description:
      'Enjoy extra comfort, priority services and a premium experience designed around your time.',
    price: 18500,
    priceLabel: 'From KSh 18,500',
    icon: '💼',
    image: flightImage,
  },
  {
    title: 'First Class',
    subtitle: 'Exceptional Travel',
    description:
      'Experience elevated service, privacy and a premium journey from departure to arrival.',
    price: 45000,
    priceLabel: 'From KSh 45,000',
    icon: '👑',
    image: heroTwo,
  },
  {
    title: 'Private Charter',
    subtitle: 'Your Aircraft. Your Schedule.',
    description:
      'Private aviation for individuals, families, executives and special journeys.',
    price: 0,
    priceLabel: 'Request a quote',
    icon: '🛩️',
    image: heroThree,
  },
]

const bookings: Booking[] = [
  {
    reference: 'AQF-20481',
    flight: 'AQ101',
    route: 'Nairobi (NBO) → Mombasa (MBA)',
    date: '18 October 2026',
    time: '08:00 – 09:15',
    passenger: 'Sample Passenger',
    status: 'Confirmed',
    price: 'KSh 8,500',
  },
  {
    reference: 'AQF-20517',
    flight: 'AQ205',
    route: 'Nairobi (NBO) → Kisumu (KIS)',
    date: '26 October 2026',
    time: '10:30 – 11:25',
    passenger: 'Sample Passenger',
    status: 'Confirmed',
    price: 'KSh 7,200',
  },
]

const initialBookingForm: BookingForm = {
  travelClass: 'Economy Class',
  flight: 'AQ101',
  route: 'Nairobi (NBO) → Mombasa (MBA)',
  date: '',
  passenger: '',
  email: '',
  phone: '',
  passengers: 1,
  hotel: false,
  airportPickup: false,
  travelAssistance: false,
}

function Bookings() {
  const navigate = useNavigate()

  const [currentHero, setCurrentHero] = useState(0)

  const [bookingModalOpen, setBookingModalOpen] = useState(false)
  const [ticketModalOpen, setTicketModalOpen] = useState(false)

  const [selectedClass, setSelectedClass] = useState<TravelClass | null>(
    null,
  )

  const [bookingForm, setBookingForm] =
    useState<BookingForm>(initialBookingForm)

  const [confirmedBooking, setConfirmedBooking] =
    useState<Booking | null>(null)

  const [loginMessage, setLoginMessage] = useState('')

  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('aquaFlightsLoggedIn')),
  )

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentHero((previous) => (previous + 1) % heroImages.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const checkLogin = () => {
      setIsLoggedIn(
        Boolean(localStorage.getItem('aquaFlightsLoggedIn')),
      )
    }

    window.addEventListener('storage', checkLogin)

    return () => {
      window.removeEventListener('storage', checkLogin)
    }
  }, [])

  const requireLogin = (action: () => void) => {
    const loggedIn = Boolean(
      localStorage.getItem('aquaFlightsLoggedIn'),
    )

    setIsLoggedIn(loggedIn)

    if (!loggedIn) {
      setLoginMessage(
        'Please sign in to your Aqua Flights account before making a booking.',
      )
      return
    }

    action()
  }

  const openBookingModal = (travelClass: TravelClass) => {
    requireLogin(() => {
      setSelectedClass(travelClass)

      setBookingForm({
        ...initialBookingForm,
        travelClass: travelClass.title,
      })

      setBookingModalOpen(true)
      setLoginMessage('')
    })
  }

  const closeBookingModal = () => {
    setBookingModalOpen(false)
    setSelectedClass(null)
  }

  const calculateTotal = () => {
    if (!selectedClass || selectedClass.price === 0) {
      return 0
    }

    let total = selectedClass.price * bookingForm.passengers

    if (bookingForm.hotel) {
      total += 6500 * bookingForm.passengers
    }

    if (bookingForm.airportPickup) {
      total += 2500
    }

    if (bookingForm.travelAssistance) {
      total += 1500
    }

    return total
  }

  const formatCurrency = (amount: number) => {
    return `KSh ${amount.toLocaleString()}`
  }

  const createBookingReference = () => {
    const randomNumber = Math.floor(10000 + Math.random() * 90000)

    return `AQF-${randomNumber}`
  }

  const handleBookingSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    if (!selectedClass) {
      return
    }

    if (selectedClass.price === 0) {
      alert(
        'Private Charter enquiry will be connected to the charter booking system.',
      )
      closeBookingModal()
      return
    }

    if (!bookingForm.passenger.trim()) {
      alert('Please enter the passenger name.')
      return
    }

    if (!bookingForm.email.trim()) {
      alert('Please enter your email address.')
      return
    }

    if (!bookingForm.phone.trim()) {
      alert('Please enter your phone number.')
      return
    }

    if (!bookingForm.date) {
      alert('Please select your travel date.')
      return
    }

    const newBooking: Booking = {
      reference: createBookingReference(),
      flight: bookingForm.flight,
      route: bookingForm.route,
      date: bookingForm.date,
      time: '08:00 – 09:15',
      passenger: bookingForm.passenger,
      status: 'Confirmed',
      price: formatCurrency(calculateTotal()),
    }

    setConfirmedBooking(newBooking)

    setBookingModalOpen(false)
    setTicketModalOpen(true)

    /*
      FUTURE DATABASE CONNECTION

      This is where we will send the booking to:

      POST /api/bookings

      The backend will save:

      - userId
      - flightId
      - passenger details
      - travel class
      - travel date
      - passengers
      - hotel
      - airport pickup
      - travel assistance
      - total price
      - payment status
      - booking reference
      - ticket number
      - QR code information
    */
  }

  return (
    <main className="bg-slate-50">
      {/* LOGIN MESSAGE */}
      {loginMessage && (
        <div className="fixed left-1/2 top-24 z-[80] w-[90%] max-w-xl -translate-x-1/2">
          <div className="rounded-2xl border border-amber-200 bg-white p-5 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl">
                🔐
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-slate-900">
                  Sign in required
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {loginMessage}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => navigate('/login')}
                    className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500"
                  >
                    Sign In
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate('/register')}
                    className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    Create Account
                  </button>

                  <button
                    type="button"
                    onClick={() => setLoginMessage('')}
                    className="px-3 py-2 text-sm font-semibold text-slate-500 hover:text-slate-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="relative h-[650px] overflow-hidden">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Aqua Flights travel experience"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === currentHero ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-slate-950/65" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
              ✈️ Premium Travel Made Simple
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Travel Beyond Expectations
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Your Journey.
              <br />
              Your Choice.
              <br />
              <span className="text-cyan-300">Your Aqua Flights.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              From affordable everyday flights to premium business travel and
              private charter experiences, Aqua Flights brings your entire
              journey together in one place.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#flight-options"
                className="rounded-xl bg-cyan-600 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-cyan-500"
              >
                Explore Flights
              </a>

              <a
                href="#travel-services"
                className="rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-center font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore Travel Services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-200">
              <span>✓ Secure booking</span>
              <span>✓ Flexible travel</span>
              <span>✓ Premium services</span>
              <span>✓ Digital tickets</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show travel image ${index + 1}`}
              onClick={() => setCurrentHero(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentHero
                  ? 'w-8 bg-cyan-400'
                  : 'w-2.5 bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Complete Travel Solutions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              More than a flight. It is the beginning of your journey.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Aqua Flights is designed to make travel easier from the moment
              you decide to travel until the moment you arrive at your
              destination.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Choose the way you want to travel, arrange your accommodation,
              organise airport transportation and keep your journey details
              together in one convenient experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'Domestic Travel',
                'International Travel',
                'Corporate Travel',
                'Private Charter',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={travelImage}
              alt="Aqua Flights travel experience"
              className="h-[420px] w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-7 text-white">
              <p className="text-sm font-semibold text-cyan-300">
                THE AQUA EXPERIENCE
              </p>

              <p className="mt-2 text-2xl font-bold">
                Travel with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLIGHT CLASSES */}
      <section
        id="flight-options"
        className="px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Choose Your Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Fly your way
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Whether you're travelling on a budget, travelling for business
              or looking for complete privacy, Aqua Flights has an option for
              you.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {travelClasses.map((travelClass) => (
              <article
                key={travelClass.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={travelClass.image}
                    alt={travelClass.subtitle}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                  <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-xl backdrop-blur">
                      {travelClass.icon}
                    </span>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                        {travelClass.subtitle}
                      </p>

                      <h3 className="font-bold">
                        {travelClass.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="min-h-[84px] text-sm leading-6 text-slate-600">
                    {travelClass.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="font-bold text-slate-900">
                      {travelClass.priceLabel}
                    </p>

                    <button
                      type="button"
                      onClick={() => openBookingModal(travelClass)}
                      className="mt-4 w-full rounded-xl bg-cyan-600 px-4 py-3 font-semibold text-white transition hover:bg-cyan-500"
                    >
                      {travelClass.title === 'Private Charter'
                        ? 'Request a Quote'
                        : 'Book This Option'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED FLIGHTS */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Flight Deals
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Popular ways to fly
              </h2>
            </div>

            <Link
              to="/flights"
              className="font-semibold text-cyan-600 hover:text-cyan-700"
            >
              View all flights →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src={nairobiImage}
                alt="Nairobi destination"
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm font-semibold text-cyan-600">
                  DOMESTIC
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Nairobi → Mombasa
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Fast, convenient travel between Kenya's major cities.
                </p>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-slate-400">From</p>

                    <p className="text-xl font-bold text-slate-900">
                      KSh 8,500
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      requireLogin(() => {
                        setSelectedClass(travelClasses[0])
                        setBookingForm({
                          ...initialBookingForm,
                          travelClass: 'Economy Class',
                          flight: 'AQ101',
                          route: 'Nairobi (NBO) → Mombasa (MBA)',
                        })
                        setBookingModalOpen(true)
                      })
                    }
                    className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src={flightImage}
                alt="Premium flight experience"
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm font-semibold text-cyan-600">
                  BUSINESS
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Premium Business Travel
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  More space, priority service and a smoother travel
                  experience.
                </p>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-slate-400">From</p>

                    <p className="text-xl font-bold text-slate-900">
                      KSh 18,500
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      openBookingModal(travelClasses[1])
                    }
                    className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src={airportImage}
                alt="Airport travel experience"
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-sm font-semibold text-cyan-600">
                  INTERNATIONAL
                </p>

                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  Global Travel
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Connect to exciting destinations around the world.
                </p>

                <div className="mt-5">
                  <Link
                    to="/flights"
                    className="inline-flex rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500"
                  >
                    Explore flights
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL SERVICES */}
      <section
        id="travel-services"
        className="px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Complete Your Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              More services. Less travel stress.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Your trip shouldn't stop at the airport. Add the services you
              need and let Aqua Flights help coordinate the rest.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* HOTEL */}
            <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={holidayImage}
                  alt="Holiday accommodation"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-sm text-cyan-200">
                    ACCOMMODATION
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    Hotel Placement
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="leading-7 text-slate-600">
                  Find suitable accommodation for your journey and keep your
                  travel arrangements together.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    requireLogin(() => {
                      const economy = travelClasses[0]

                      setSelectedClass(economy)

                      setBookingForm({
                        ...initialBookingForm,
                        travelClass: economy.title,
                        hotel: true,
                      })

                      setBookingModalOpen(true)
                    })
                  }
                  className="mt-5 font-semibold text-cyan-600 hover:text-cyan-700"
                >
                  Add accommodation →
                </button>
              </div>
            </article>

            {/* AIRPORT PICKUP */}
            <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={coteImage}
                  alt="Airport transfer service"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-sm text-cyan-200">
                    GROUND TRANSFER
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    Airport Pickup
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="leading-7 text-slate-600">
                  Arrange airport pickup and transfer services so your journey
                  continues smoothly after landing.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    requireLogin(() => {
                      const economy = travelClasses[0]

                      setSelectedClass(economy)

                      setBookingForm({
                        ...initialBookingForm,
                        travelClass: economy.title,
                        airportPickup: true,
                      })

                      setBookingModalOpen(true)
                    })
                  }
                  className="mt-5 font-semibold text-cyan-600 hover:text-cyan-700"
                >
                  Arrange pickup →
                </button>
              </div>
            </article>

            {/* TRAVEL ASSISTANCE */}
            <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={travelImage}
                  alt="Aqua Flights travel assistance"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-sm text-cyan-200">
                    TRAVEL SUPPORT
                  </p>

                  <h3 className="mt-1 text-2xl font-bold">
                    Journey Assistance
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="leading-7 text-slate-600">
                  Get help coordinating your flight, accommodation and
                  transportation requirements.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    requireLogin(() => {
                      const economy = travelClasses[0]

                      setSelectedClass(economy)

                      setBookingForm({
                        ...initialBookingForm,
                        travelClass: economy.title,
                        travelAssistance: true,
                      })

                      setBookingModalOpen(true)
                    })
                  }
                  className="mt-5 font-semibold text-cyan-600 hover:text-cyan-700"
                >
                  Add assistance →
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PRIVATE CHARTER */}
      <section className="bg-slate-950 px-6 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Private Aviation
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              When ordinary travel isn't enough.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Our private charter concept is designed for clients who value
              privacy, flexibility and control over their travel schedule.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl">🛩️</p>

                <p className="mt-3 font-semibold">
                  Private aircraft
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Tailored charter experiences.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl">🕐</p>

                <p className="mt-3 font-semibold">
                  Flexible schedules
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Travel around your plans.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                openBookingModal(travelClasses[3])
              }
              className="mt-8 rounded-xl bg-cyan-600 px-7 py-3.5 font-semibold text-white hover:bg-cyan-500"
            >
              Request Charter Information
            </button>
          </div>

          <div className="overflow-hidden rounded-3xl">
            <img
              src={heroThree}
              alt="Private travel experience"
              className="h-[450px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MY BOOKINGS */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Your Trips
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                My Bookings
              </h2>

              <p className="mt-3 text-slate-600">
                View and manage your upcoming Aqua Flights journeys.
              </p>
            </div>

            <Link
              to="/flights"
              className="font-semibold text-cyan-600 hover:text-cyan-700"
            >
              Book another flight →
            </Link>
          </div>

          <div className="mt-10 space-y-5">
            {bookings.map((booking) => (
              <article
                key={booking.reference}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                        {booking.status}
                      </span>

                      <span className="text-sm font-semibold text-slate-500">
                        {booking.reference}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                      {booking.route}
                    </h3>

                    <div className="mt-3 grid gap-2 text-sm text-slate-500 sm:grid-cols-3">
                      <span>Flight: {booking.flight}</span>
                      <span>{booking.date}</span>
                      <span>{booking.time}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="sm:mr-4 sm:text-right">
                      <p className="text-xs text-slate-400">
                        Total
                      </p>

                      <p className="text-xl font-bold text-slate-900">
                        {booking.price}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setConfirmedBooking(booking)
                        setTicketModalOpen(true)
                      }}
                      className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100"
                    >
                      View Ticket
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        alert(
                          `Booking management for ${booking.reference} will be connected to the customer dashboard.`,
                        )
                      }
                      className="rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-500"
                    >
                      Manage
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-cyan-600 px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Your next adventure is closer than you think.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-cyan-50">
            Book your flight, arrange your stay and organise your airport
            transfer with Aqua Flights.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/flights"
              className="rounded-xl bg-white px-7 py-3.5 font-semibold text-cyan-700 hover:bg-cyan-50"
            >
              Search Flights
            </Link>

            <Link
              to="/register"
              className="rounded-xl border border-white/50 px-7 py-3.5 font-semibold text-white hover:bg-white/10"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* BOOKING MODAL */}
      {bookingModalOpen && selectedClass && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/70 px-4 py-8 backdrop-blur-sm">
          <div className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={closeBookingModal}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-slate-600 shadow-lg hover:bg-slate-100"
              aria-label="Close booking form"
            >
              ×
            </button>

            <div className="relative h-52 overflow-hidden">
              <img
                src={selectedClass.image}
                alt={selectedClass.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                  Aqua Flights Booking
                </p>

                <h2 className="mt-1 text-3xl font-bold">
                  {selectedClass.title}
                </h2>
              </div>
            </div>

            <form
              onSubmit={handleBookingSubmit}
              className="p-6 sm:p-8"
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900">
                  Passenger & Journey Details
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Complete the details below to prepare your booking.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Passenger Name
                  </label>

                  <input
                    type="text"
                    value={bookingForm.passenger}
                    onChange={(event) =>
                      setBookingForm({
                        ...bookingForm,
                        passenger: event.target.value,
                      })
                    }
                    placeholder="Full passenger name"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={bookingForm.email}
                    onChange={(event) =>
                      setBookingForm({
                        ...bookingForm,
                        email: event.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    value={bookingForm.phone}
                    onChange={(event) =>
                      setBookingForm({
                        ...bookingForm,
                        phone: event.target.value,
                      })
                    }
                    placeholder="+254..."
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Travel Date
                  </label>

                  <input
                    type="date"
                    value={bookingForm.date}
                    onChange={(event) =>
                      setBookingForm({
                        ...bookingForm,
                        date: event.target.value,
                      })
                    }
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Flight
                  </label>

                  <select
                    value={bookingForm.flight}
                    onChange={(event) =>
                      setBookingForm({
                        ...bookingForm,
                        flight: event.target.value,
                      })
                    }
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  >
                    <option value="AQ101">
                      AQ101 — Nairobi → Mombasa
                    </option>

                    <option value="AQ205">
                      AQ205 — Nairobi → Kisumu
                    </option>

                    <option value="AQ310">
                      AQ310 — Mombasa → Nairobi
                    </option>

                    <option value="AQ420">
                      AQ420 — Nairobi → Eldoret
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Passengers
                  </label>

                  <select
                    value={bookingForm.passengers}
                    onChange={(event) =>
                      setBookingForm({
                        ...bookingForm,
                        passengers: Number(event.target.value),
                      })
                    }
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  >
                    <option value={1}>1 Passenger</option>
                    <option value={2}>2 Passengers</option>
                    <option value={3}>3 Passengers</option>
                    <option value={4}>4 Passengers</option>
                    <option value={5}>5 Passengers</option>
                    <option value={6}>6 Passengers</option>
                  </select>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-slate-900">
                  Add to your journey
                </h3>

                <div className="mt-4 grid gap-3">
                  <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:border-cyan-300 hover:bg-cyan-50/50">
                    <div>
                      <p className="font-semibold text-slate-900">
                        🏨 Hotel Accommodation
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Add accommodation from KSh 6,500 per passenger
                      </p>
                    </div>

                    <input
                      type="checkbox"
                      checked={bookingForm.hotel}
                      onChange={(event) =>
                        setBookingForm({
                          ...bookingForm,
                          hotel: event.target.checked,
                        })
                      }
                      className="h-5 w-5 accent-cyan-600"
                    />
                  </label>

                  <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:border-cyan-300 hover:bg-cyan-50/50">
                    <div>
                      <p className="font-semibold text-slate-900">
                        🚐 Airport Pickup
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Airport transfer from KSh 2,500
                      </p>
                    </div>

                    <input
                      type="checkbox"
                      checked={bookingForm.airportPickup}
                      onChange={(event) =>
                        setBookingForm({
                          ...bookingForm,
                          airportPickup: event.target.checked,
                        })
                      }
                      className="h-5 w-5 accent-cyan-600"
                    />
                  </label>

                  <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:border-cyan-300 hover:bg-cyan-50/50">
                    <div>
                      <p className="font-semibold text-slate-900">
                        🧳 Journey Assistance
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Personal travel support from KSh 1,500
                      </p>
                    </div>

                    <input
                      type="checkbox"
                      checked={bookingForm.travelAssistance}
                      onChange={(event) =>
                        setBookingForm({
                          ...bookingForm,
                          travelAssistance: event.target.checked,
                        })
                      }
                      className="h-5 w-5 accent-cyan-600"
                    />
                  </label>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      Estimated total
                    </p>

                    <p className="mt-1 text-3xl font-bold">
                      {selectedClass.price === 0
                        ? 'Quote Required'
                        : formatCurrency(calculateTotal())}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-slate-400">
                      Travel class
                    </p>

                    <p className="mt-1 font-semibold">
                      {selectedClass.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeBookingModal}
                  className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-cyan-600 px-7 py-3 font-semibold text-white hover:bg-cyan-500"
                >
                  {selectedClass.price === 0
                    ? 'Request Charter Quote'
                    : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DIGITAL TICKET MODAL */}
      {ticketModalOpen && confirmedBooking && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm">
          <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="bg-cyan-600 px-6 py-8 text-center text-white">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl">
                ✓
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                Booking Confirmed
              </h2>

              <p className="mt-2 text-cyan-50">
                Your Aqua Flights journey has been successfully created.
              </p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Booking Reference
                    </p>

                    <p className="mt-1 text-xl font-bold text-slate-900">
                      {confirmedBooking.reference}
                    </p>
                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                    Confirmed
                  </span>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Passenger
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {confirmedBooking.passenger}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Journey
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    {confirmedBooking.route}
                  </p>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Flight
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      {confirmedBooking.flight}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Travel Date
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      {confirmedBooking.date}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-5">
                  <span className="text-sm text-slate-500">
                    Total Paid
                  </span>

                  <span className="text-xl font-bold text-slate-900">
                    {confirmedBooking.price}
                  </span>
                </div>
              </div>

              {/* QR PLACEHOLDER */}
              <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white p-6">
                <div className="grid h-32 w-32 grid-cols-8 gap-1 rounded-lg bg-slate-100 p-3">
                  {Array.from({ length: 64 }).map((_, index) => (
                    <span
                      key={index}
                      className={
                        (index * 17) % 5 < 2
                          ? 'rounded-sm bg-slate-900'
                          : 'rounded-sm bg-white'
                      }
                    />
                  ))}
                </div>

                <p className="mt-4 text-center text-sm text-slate-500">
                  Digital boarding QR code
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Final QR generation will be connected to the backend.
                </p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setTicketModalOpen(false)}
                  className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Close Ticket
                </button>

                <button
                  type="button"
                  onClick={() =>
                    alert(
                      'Ticket download will be connected when PDF ticket generation is added.',
                    )
                  }
                  className="rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-500"
                >
                  Download Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Bookings
