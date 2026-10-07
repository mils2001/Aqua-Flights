import { useMemo, useState } from 'react'

type FlightStatus = 'Scheduled' | 'Boarding' | 'Completed' | 'Cancelled'

type Flight = {
  id: string
  flightNumber: string
  from: string
  to: string
  date: string
  departure: string
  arrival: string
  seats: number
  availableSeats: number
  price: number
  status: FlightStatus
}

type Booking = {
  id: string
  passenger: string
  flight: string
  route: string
  date: string
  amount: number
  payment: 'Paid' | 'Pending'
  status: 'Confirmed' | 'Pending' | 'Cancelled'
}

type User = {
  id: string
  name: string
  email: string
  country: string
  status: 'Active' | 'Suspended'
  verification: 'Verified' | 'Pending' | 'Not Verified'
}

const initialFlights: Flight[] = [
  {
    id: '1',
    flightNumber: 'AQ101',
    from: 'Nairobi',
    to: 'Mombasa',
    date: '2026-10-05',
    departure: '08:00',
    arrival: '09:15',
    seats: 30,
    availableSeats: 18,
    price: 8500,
    status: 'Scheduled',
  },
  {
    id: '2',
    flightNumber: 'AQ205',
    from: 'Nairobi',
    to: 'Kisumu',
    date: '2026-10-05',
    departure: '10:30',
    arrival: '11:25',
    seats: 30,
    availableSeats: 12,
    price: 7200,
    status: 'Boarding',
  },
  {
    id: '3',
    flightNumber: 'AQ310',
    from: 'Mombasa',
    to: 'Nairobi',
    date: '2026-10-06',
    departure: '14:00',
    arrival: '15:15',
    seats: 40,
    availableSeats: 24,
    price: 8500,
    status: 'Scheduled',
  },
  {
    id: '4',
    flightNumber: 'AQ420',
    from: 'Nairobi',
    to: 'Eldoret',
    date: '2026-10-07',
    departure: '16:30',
    arrival: '17:25',
    seats: 30,
    availableSeats: 9,
    price: 6800,
    status: 'Scheduled',
  },
]

const initialBookings: Booking[] = [
  {
    id: 'AQB-1001',
    passenger: 'John Kamau',
    flight: 'AQ101',
    route: 'Nairobi → Mombasa',
    date: '2026-10-05',
    amount: 8500,
    payment: 'Paid',
    status: 'Confirmed',
  },
  {
    id: 'AQB-1002',
    passenger: 'Mary Wanjiku',
    flight: 'AQ205',
    route: 'Nairobi → Kisumu',
    date: '2026-10-05',
    amount: 7200,
    payment: 'Paid',
    status: 'Confirmed',
  },
  {
    id: 'AQB-1003',
    passenger: 'Brian Otieno',
    flight: 'AQ310',
    route: 'Mombasa → Nairobi',
    date: '2026-10-06',
    amount: 8500,
    payment: 'Pending',
    status: 'Pending',
  },
  {
    id: 'AQB-1004',
    passenger: 'Grace Achieng',
    flight: 'AQ420',
    route: 'Nairobi → Eldoret',
    date: '2026-10-07',
    amount: 6800,
    payment: 'Paid',
    status: 'Confirmed',
  },
]

const initialUsers: User[] = [
  {
    id: 'USR-001',
    name: 'John Kamau',
    email: 'john@example.com',
    country: 'Kenya',
    status: 'Active',
    verification: 'Verified',
  },
  {
    id: 'USR-002',
    name: 'Mary Wanjiku',
    email: 'mary@example.com',
    country: 'Kenya',
    status: 'Active',
    verification: 'Verified',
  },
  {
    id: 'USR-003',
    name: 'Brian Otieno',
    email: 'brian@example.com',
    country: 'Kenya',
    status: 'Active',
    verification: 'Pending',
  },
  {
    id: 'USR-004',
    name: 'Grace Achieng',
    email: 'grace@example.com',
    country: 'Uganda',
    status: 'Active',
    verification: 'Not Verified',
  },
]

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('Dashboard')

  const [flights, setFlights] = useState<Flight[]>(initialFlights)

  const [bookings] = useState<Booking[]>(initialBookings)

  const [users, setUsers] = useState<User[]>(initialUsers)

  const [showFlightModal, setShowFlightModal] = useState(false)

  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null)

  const [flightSearch, setFlightSearch] = useState('')

  const [bookingSearch, setBookingSearch] = useState('')

  const [userSearch, setUserSearch] = useState('')

  const [newFlight, setNewFlight] = useState({
    flightNumber: '',
    from: '',
    to: '',
    date: '',
    departure: '',
    arrival: '',
    seats: '30',
    price: '',
  })

  const filteredFlights = useMemo(() => {
    const search = flightSearch.toLowerCase()

    return flights.filter(
      (flight) =>
        flight.flightNumber.toLowerCase().includes(search) ||
        flight.from.toLowerCase().includes(search) ||
        flight.to.toLowerCase().includes(search),
    )
  }, [flights, flightSearch])

  const filteredBookings = useMemo(() => {
    const search = bookingSearch.toLowerCase()

    return bookings.filter(
      (booking) =>
        booking.id.toLowerCase().includes(search) ||
        booking.passenger.toLowerCase().includes(search) ||
        booking.flight.toLowerCase().includes(search),
    )
  }, [bookings, bookingSearch])

  const filteredUsers = useMemo(() => {
    const search = userSearch.toLowerCase()

    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(search) ||
        user.email.toLowerCase().includes(search),
    )
  }, [users, userSearch])

  const totalRevenue = bookings
    .filter((booking) => booking.payment === 'Paid')
    .reduce((total, booking) => total + booking.amount, 0)

  const totalAvailableSeats = flights.reduce(
    (total, flight) => total + flight.availableSeats,
    0,
  )

  const handleNewFlightChange = (
    field: keyof typeof newFlight,
    value: string,
  ) => {
    setNewFlight((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleAddFlight = () => {
    if (
      !newFlight.flightNumber ||
      !newFlight.from ||
      !newFlight.to ||
      !newFlight.date ||
      !newFlight.departure ||
      !newFlight.arrival ||
      !newFlight.price
    ) {
      alert('Please complete all required flight fields.')
      return
    }

    const seats = Number(newFlight.seats)
    const price = Number(newFlight.price)

    if (!seats || !price) {
      alert('Seats and price must be valid numbers.')
      return
    }

    const flight: Flight = {
      id: Date.now().toString(),
      flightNumber: newFlight.flightNumber.toUpperCase(),
      from: newFlight.from,
      to: newFlight.to,
      date: newFlight.date,
      departure: newFlight.departure,
      arrival: newFlight.arrival,
      seats,
      availableSeats: seats,
      price,
      status: 'Scheduled',
    }

    setFlights((current) => [...current, flight])

    setNewFlight({
      flightNumber: '',
      from: '',
      to: '',
      date: '',
      departure: '',
      arrival: '',
      seats: '30',
      price: '',
    })

    setShowFlightModal(false)

    alert('Flight added successfully.')
  }

  const handleDeleteFlight = (id: string) => {
    const confirmed = window.confirm(
      'Are you sure you want to remove this flight?',
    )

    if (!confirmed) {
      return
    }

    setFlights((current) =>
      current.filter((flight) => flight.id !== id),
    )
  }

  const handleFlightStatus = (
    id: string,
    status: FlightStatus,
  ) => {
    setFlights((current) =>
      current.map((flight) =>
        flight.id === id
          ? {
              ...flight,
              status,
            }
          : flight,
      ),
    )
  }

  const handleUserStatus = (id: string) => {
    setUsers((current) =>
      current.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === 'Active'
                  ? 'Suspended'
                  : 'Active',
            }
          : user,
      ),
    )
  }

  const navItems = [
    {
      name: 'Dashboard',
      icon: '📊',
    },
    {
      name: 'Flights',
      icon: '✈️',
    },
    {
      name: 'Bookings',
      icon: '🎫',
    },
    {
      name: 'Users',
      icon: '👥',
    },
    {
      name: 'Revenue',
      icon: '💰',
    },
    {
      name: 'Notifications',
      icon: '🔔',
    },
    {
      name: 'Settings',
      icon: '⚙️',
    },
  ]

  return (
    <main className="min-h-screen bg-slate-100">
      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-700 text-xl font-bold text-white shadow">
              A
            </div>

            <div>
              <p className="font-bold text-slate-900">
                Aqua Flights
              </p>

              <p className="text-xs text-slate-500">
                Administration Portal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-bold text-slate-900">
                Admin User
              </p>

              <p className="text-xs text-slate-500">
                Administrator
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 font-bold text-white">
              AD
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1600px]">
        {/* =========================================================
            SIDEBAR
        ========================================================= */}
        <aside className="hidden min-h-[calc(100vh-76px)] w-64 shrink-0 border-r border-slate-200 bg-white lg:block">
          <div className="sticky top-[76px] p-4">
            <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Management
            </p>

            <nav className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveSection(item.name)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                    activeSection === item.name
                      ? 'bg-cyan-50 text-cyan-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span className="text-lg">
                    {item.icon}
                  </span>

                  {item.name}
                </button>
              ))}
            </nav>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                AQUA
              </p>

              <p className="mt-2 text-lg font-bold">
                Blockchain coming soon
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-300">
                AQUA payments, loyalty and DEX features will be connected
                later.
              </p>
            </div>
          </div>
        </aside>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}
        <section className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          {/* MOBILE NAV */}
          <div className="mb-6 flex gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 lg:hidden">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveSection(item.name)}
                className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm font-bold ${
                  activeSection === item.name
                    ? 'bg-cyan-500 text-white'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.icon} {item.name}
              </button>
            ))}
          </div>

          {/* =======================================================
              DASHBOARD
          ======================================================= */}
          {activeSection === 'Dashboard' && (
            <div className="space-y-7">
              <div>
                <p className="text-sm font-semibold text-cyan-600">
                  ADMINISTRATION
                </p>

                <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Dashboard
                </h1>

                <p className="mt-2 text-slate-500">
                  Monitor Aqua Flights operations from one place.
                </p>
              </div>

              {/* STAT CARDS */}
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Total Flights
                      </p>

                      <p className="mt-2 text-3xl font-bold text-slate-900">
                        {flights.length}
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
                      ✈️
                    </div>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-green-600">
                    ↑ Active flight schedule
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Total Bookings
                      </p>

                      <p className="mt-2 text-3xl font-bold text-slate-900">
                        {bookings.length}
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                      🎫
                    </div>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-green-600">
                    ↑ Customer bookings
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Registered Users
                      </p>

                      <p className="mt-2 text-3xl font-bold text-slate-900">
                        {users.length}
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl">
                      👥
                    </div>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-slate-500">
                    Customer accounts
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">
                        Revenue
                      </p>

                      <p className="mt-2 text-2xl font-bold text-slate-900">
                        KSh {totalRevenue.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                      💰
                    </div>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-green-600">
                    Paid bookings
                  </p>
                </div>
              </div>

              {/* OPERATIONS */}
              <div className="grid gap-6 xl:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        Recent Bookings
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        Latest customer reservations.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveSection('Bookings')}
                      className="text-sm font-bold text-cyan-600 hover:text-cyan-700"
                    >
                      View all
                    </button>
                  </div>

                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full min-w-[700px]">
                      <thead>
                        <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wider text-slate-400">
                          <th className="pb-4">Booking</th>
                          <th className="pb-4">Passenger</th>
                          <th className="pb-4">Flight</th>
                          <th className="pb-4">Amount</th>
                          <th className="pb-4">Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {bookings.slice(0, 4).map((booking) => (
                          <tr
                            key={booking.id}
                            className="border-b border-slate-50"
                          >
                            <td className="py-4 text-sm font-bold text-slate-900">
                              {booking.id}
                            </td>

                            <td className="py-4 text-sm text-slate-600">
                              {booking.passenger}
                            </td>

                            <td className="py-4 text-sm text-slate-600">
                              {booking.flight}
                            </td>

                            <td className="py-4 text-sm font-bold text-slate-900">
                              KSh {booking.amount.toLocaleString()}
                            </td>

                            <td className="py-4">
                              <span
                                className={`rounded-full px-3 py-1 text-xs font-bold ${
                                  booking.status === 'Confirmed'
                                    ? 'bg-green-100 text-green-700'
                                    : booking.status === 'Pending'
                                      ? 'bg-amber-100 text-amber-700'
                                      : 'bg-red-100 text-red-700'
                                }`}
                              >
                                {booking.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-slate-900">
                    Flight Capacity
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Available seats across the schedule.
                  </p>

                  <div className="mt-6 space-y-5">
                    {flights.map((flight) => {
                      const percentage =
                        (flight.availableSeats / flight.seats) * 100

                      return (
                        <div key={flight.id}>
                          <div className="mb-2 flex justify-between text-sm">
                            <span className="font-bold text-slate-700">
                              {flight.flightNumber}
                            </span>

                            <span className="text-slate-500">
                              {flight.availableSeats}/{flight.seats}
                            </span>
                          </div>

                          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className="h-full rounded-full bg-cyan-500"
                              style={{
                                width: `${percentage}%`,
                              }}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">
                      Total available seats
                    </p>

                    <p className="mt-1 text-2xl font-bold text-slate-900">
                      {totalAvailableSeats}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =======================================================
              FLIGHTS
          ======================================================= */}
          {activeSection === 'Flights' && (
            <div className="space-y-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-cyan-600">
                    OPERATIONS
                  </p>

                  <h1 className="mt-1 text-3xl font-bold text-slate-900">
                    Flight Management
                  </h1>

                  <p className="mt-2 text-slate-500">
                    Create and manage the Aqua Flights schedule.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowFlightModal(true)}
                  className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-600"
                >
                  + Add New Flight
                </button>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <input
                  type="search"
                  value={flightSearch}
                  onChange={(event) =>
                    setFlightSearch(event.target.value)
                  }
                  placeholder="Search by flight number, origin or destination..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1100px]">
                    <thead className="bg-slate-50">
                      <tr className="text-left text-xs uppercase tracking-wider text-slate-400">
                        <th className="px-5 py-4">Flight</th>
                        <th className="px-5 py-4">Route</th>
                        <th className="px-5 py-4">Date</th>
                        <th className="px-5 py-4">Time</th>
                        <th className="px-5 py-4">Seats</th>
                        <th className="px-5 py-4">Price</th>
                        <th className="px-5 py-4">Status</th>
                        <th className="px-5 py-4">Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredFlights.map((flight) => (
                        <tr
                          key={flight.id}
                          className="border-t border-slate-100"
                        >
                          <td className="px-5 py-5 font-bold text-slate-900">
                            {flight.flightNumber}
                          </td>

                          <td className="px-5 py-5 text-sm text-slate-600">
                            {flight.from} → {flight.to}
                          </td>

                          <td className="px-5 py-5 text-sm text-slate-600">
                            {flight.date}
                          </td>

                          <td className="px-5 py-5 text-sm text-slate-600">
                            {flight.departure} - {flight.arrival}
                          </td>

                          <td className="px-5 py-5 text-sm">
                            <span className="font-bold text-slate-900">
                              {flight.availableSeats}
                            </span>

                            <span className="text-slate-400">
                              /{flight.seats}
                            </span>
                          </td>

                          <td className="px-5 py-5 text-sm font-bold text-slate-900">
                            KSh {flight.price.toLocaleString()}
                          </td>

                          <td className="px-5 py-5">
                            <select
                              value={flight.status}
                              onChange={(event) =>
                                handleFlightStatus(
                                  flight.id,
                                  event.target.value as FlightStatus,
                                )
                              }
                              className="rounded-lg border border-slate-200 px-2 py-2 text-xs font-bold outline-none"
                            >
                              <option value="Scheduled">
                                Scheduled
                              </option>
                              <option value="Boarding">
                                Boarding
                              </option>
                              <option value="Completed">
                                Completed
                              </option>
                              <option value="Cancelled">
                                Cancelled
                              </option>
                            </select>
                          </td>

                          <td className="px-5 py-5">
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  setSelectedFlight(flight)
                                }
                                className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600 hover:border-cyan-300 hover:text-cyan-600"
                              >
                                View
                              </button>

                              <button
                                type="button"
                                onClick={() =>
                                  handleDeleteFlight(flight.id)
                                }
                                className="rounded-lg border border-red-100 px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredFlights.length === 0 && (
                  <div className="p-10 text-center text-slate-500">
                    No flights found.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* =======================================================
              BOOKINGS
          ======================================================= */}
          {activeSection === 'Bookings' && (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-cyan-600">
                  RESERVATIONS
                </p>

                <h1 className="mt-1 text-3xl font-bold text-slate-900">
                  Booking Management
                </h1>

                <p className="mt-2 text-slate-500">
                  Monitor customer reservations and payments.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <input
                  type="search"
                  value={bookingSearch}
                  onChange={(event) =>
                    setBookingSearch(event.target.value)
                  }
                  placeholder="Search booking ID, passenger or flight..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[950px]">
                    <thead className="bg-slate-50">
                      <tr className="text-left text-xs uppercase tracking-wider text-slate-400">
                        <th className="px-5 py-4">Booking</th>
                        <th className="px-5 py-4">Passenger</th>
                        <th className="px-5 py-4">Flight</th>
                        <th className="px-5 py-4">Date</th>
                        <th className="px-5 py-4">Amount</th>
                        <th className="px-5 py-4">Payment</th>
                        <th className="px-5 py-4">Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredBookings.map((booking) => (
                        <tr
                          key={booking.id}
                          className="border-t border-slate-100"
                        >
                          <td className="px-5 py-5 text-sm font-bold text-slate-900">
                            {booking.id}
                          </td>

                          <td className="px-5 py-5 text-sm text-slate-600">
                            {booking.passenger}
                          </td>

                          <td className="px-5 py-5">
                            <p className="text-sm font-bold text-slate-900">
                              {booking.flight}
                            </p>

                            <p className="text-xs text-slate-500">
                              {booking.route}
                            </p>
                          </td>

                          <td className="px-5 py-5 text-sm text-slate-600">
                            {booking.date}
                          </td>

                          <td className="px-5 py-5 text-sm font-bold text-slate-900">
                            KSh {booking.amount.toLocaleString()}
                          </td>

                          <td className="px-5 py-5">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-bold ${
                                booking.payment === 'Paid'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-amber-100 text-amber-700'
                              }`}
                            >
                              {booking.payment}
                            </span>
                          </td>

                          <td className="px-5 py-5">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-bold ${
                                booking.status === 'Confirmed'
                                  ? 'bg-green-100 text-green-700'
                                  : booking.status === 'Pending'
                                    ? 'bg-amber-100 text-amber-700'
                                    : 'bg-red-100 text-red-700'
                              }`}
                            >
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* =======================================================
              USERS
          ======================================================= */}
          {activeSection === 'Users' && (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-cyan-600">
                  CUSTOMERS
                </p>

                <h1 className="mt-1 text-3xl font-bold text-slate-900">
                  User Management
                </h1>

                <p className="mt-2 text-slate-500">
                  Manage Aqua Flights customer accounts.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <input
                  type="search"
                  value={userSearch}
                  onChange={(event) =>
                    setUserSearch(event.target.value)
                  }
                  placeholder="Search by name or email..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px]">
                    <thead className="bg-slate-50">
                      <tr className="text-left text-xs uppercase tracking-wider text-slate-400">
                        <th className="px-5 py-4">User</th>
                        <th className="px-5 py-4">Country</th>
                        <th className="px-5 py-4">Verification</th>
                        <th className="px-5 py-4">Status</th>
                        <th className="px-5 py-4">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredUsers.map((user) => (
                        <tr
                          key={user.id}
                          className="border-t border-slate-100"
                        >
                          <td className="px-5 py-5">
                            <p className="font-bold text-slate-900">
                              {user.name}
                            </p>

                            <p className="text-xs text-slate-500">
                              {user.email}
                            </p>
                          </td>

                          <td className="px-5 py-5 text-sm text-slate-600">
                            {user.country}
                          </td>

                          <td className="px-5 py-5">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-bold ${
                                user.verification === 'Verified'
                                  ? 'bg-green-100 text-green-700'
                                  : user.verification === 'Pending'
                                    ? 'bg-amber-100 text-amber-700'
                                    : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {user.verification}
                            </span>
                          </td>

                          <td className="px-5 py-5">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-bold ${
                                user.status === 'Active'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-red-100 text-red-700'
                              }`}
                            >
                              {user.status}
                            </span>
                          </td>

                          <td className="px-5 py-5">
                            <button
                              type="button"
                              onClick={() =>
                                handleUserStatus(user.id)
                              }
                              className={`rounded-lg px-3 py-2 text-xs font-bold ${
                                user.status === 'Active'
                                  ? 'border border-red-100 text-red-600 hover:bg-red-50'
                                  : 'border border-green-100 text-green-600 hover:bg-green-50'
                              }`}
                            >
                              {user.status === 'Active'
                                ? 'Suspend'
                                : 'Activate'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* =======================================================
              REVENUE
          ======================================================= */}
          {activeSection === 'Revenue' && (
            <div className="space-y-7">
              <div>
                <p className="text-sm font-semibold text-cyan-600">
                  FINANCE
                </p>

                <h1 className="mt-1 text-3xl font-bold text-slate-900">
                  Revenue
                </h1>

                <p className="mt-2 text-slate-500">
                  Overview of ticket sales and payments.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <p className="text-sm text-slate-500">
                    Total Revenue
                  </p>

                  <p className="mt-3 text-3xl font-bold text-slate-900">
                    KSh {totalRevenue.toLocaleString()}
                  </p>

                  <p className="mt-2 text-sm text-green-600">
                    From paid bookings
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <p className="text-sm text-slate-500">
                    Paid Bookings
                  </p>

                  <p className="mt-3 text-3xl font-bold text-slate-900">
                    {
                      bookings.filter(
                        (booking) => booking.payment === 'Paid',
                      ).length
                    }
                  </p>

                  <p className="mt-2 text-sm text-green-600">
                    Completed payments
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <p className="text-sm text-slate-500">
                    Pending Payments
                  </p>

                  <p className="mt-3 text-3xl font-bold text-slate-900">
                    {
                      bookings.filter(
                        (booking) => booking.payment === 'Pending',
                      ).length
                    }
                  </p>

                  <p className="mt-2 text-sm text-amber-600">
                    Awaiting payment
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">
                  Payment Methods
                </h2>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm font-bold text-slate-900">
                      M-Pesa
                    </p>

                    <p className="mt-2 text-2xl font-bold text-green-600">
                      Coming Soon
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm font-bold text-slate-900">
                      Card
                    </p>

                    <p className="mt-2 text-2xl font-bold text-blue-600">
                      Coming Soon
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm font-bold text-slate-900">
                      AQUA
                    </p>

                    <p className="mt-2 text-2xl font-bold text-cyan-600">
                      Coming Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =======================================================
              NOTIFICATIONS
          ======================================================= */}
          {activeSection === 'Notifications' && (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-cyan-600">
                  COMMUNICATION
                </p>

                <h1 className="mt-1 text-3xl font-bold text-slate-900">
                  Notifications
                </h1>

                <p className="mt-2 text-slate-500">
                  Monitor customer communication and alerts.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl">📱</div>

                  <h2 className="mt-4 font-bold text-slate-900">
                    SMS
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Flight reminders and booking updates through SMS.
                  </p>

                  <span className="mt-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                    Coming Soon
                  </span>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl">📧</div>

                  <h2 className="mt-4 font-bold text-slate-900">
                    Email
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    E-tickets, booking confirmations and account messages.
                  </p>

                  <span className="mt-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                    Coming Soon
                  </span>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-3xl">🔔</div>

                  <h2 className="mt-4 font-bold text-slate-900">
                    Push Notifications
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Real-time flight and booking notifications.
                  </p>

                  <span className="mt-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* =======================================================
              SETTINGS
          ======================================================= */}
          {activeSection === 'Settings' && (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-cyan-600">
                  SYSTEM
                </p>

                <h1 className="mt-1 text-3xl font-bold text-slate-900">
                  Settings
                </h1>

                <p className="mt-2 text-slate-500">
                  Configure the Aqua Flights administration system.
                </p>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900">
                    General Settings
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Basic airline system configuration.
                  </p>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Airline Name
                      </label>

                      <input
                        value="Aqua Flights"
                        readOnly
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-600 outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-700">
                        Currency
                      </label>

                      <input
                        value="KES - Kenyan Shilling"
                        readOnly
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-600 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900">
                    Backend Connection
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Backend services will be connected during the next
                    development stage.
                  </p>

                  <div className="mt-5 flex items-center gap-3 rounded-2xl bg-amber-50 p-4">
                    <span className="text-xl">⚠️</span>

                    <div>
                      <p className="font-bold text-amber-800">
                        Frontend Prototype
                      </p>

                      <p className="text-sm text-amber-700">
                        Express API and PostgreSQL are not connected yet.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900">
                    Blockchain
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    AQUA blockchain functionality will be integrated later.
                  </p>

                  <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      AQUA
                    </p>

                    <p className="mt-2 text-lg font-bold">
                      Blockchain Integration
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Smart contracts, wallet connections, AQUA payments,
                      loyalty rewards and DEX functionality will be added
                      after the main airline backend is complete.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* =========================================================
          ADD FLIGHT MODAL
      ========================================================= */}
      {showFlightModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-cyan-600">
                  FLIGHT MANAGEMENT
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Add New Flight
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Create a new flight for the Aqua Flights schedule.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowFlightModal(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-600 hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Flight Number
                </label>

                <input
                  value={newFlight.flightNumber}
                  onChange={(event) =>
                    handleNewFlightChange(
                      'flightNumber',
                      event.target.value,
                    )
                  }
                  placeholder="AQ501"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 uppercase outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Price (KSh)
                </label>

                <input
                  type="number"
                  value={newFlight.price}
                  onChange={(event) =>
                    handleNewFlightChange(
                      'price',
                      event.target.value,
                    )
                  }
                  placeholder="8500"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  From
                </label>

                <input
                  value={newFlight.from}
                  onChange={(event) =>
                    handleNewFlightChange(
                      'from',
                      event.target.value,
                    )
                  }
                  placeholder="Nairobi"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  To
                </label>

                <input
                  value={newFlight.to}
                  onChange={(event) =>
                    handleNewFlightChange(
                      'to',
                      event.target.value,
                    )
                  }
                  placeholder="Mombasa"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Date
                </label>

                <input
                  type="date"
                  value={newFlight.date}
                  onChange={(event) =>
                    handleNewFlightChange(
                      'date',
                      event.target.value,
                    )
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Number of Seats
                </label>

                <input
                  type="number"
                  min="1"
                  value={newFlight.seats}
                  onChange={(event) =>
                    handleNewFlightChange(
                      'seats',
                      event.target.value,
                    )
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Departure
                </label>

                <input
                  type="time"
                  value={newFlight.departure}
                  onChange={(event) =>
                    handleNewFlightChange(
                      'departure',
                      event.target.value,
                    )
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  Arrival
                </label>

                <input
                  type="time"
                  value={newFlight.arrival}
                  onChange={(event) =>
                    handleNewFlightChange(
                      'arrival',
                      event.target.value,
                    )
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowFlightModal(false)}
                className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleAddFlight}
                className="rounded-xl bg-cyan-500 px-6 py-3 text-sm font-bold text-white hover:bg-cyan-600"
              >
                Add Flight
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          FLIGHT DETAILS MODAL
      ========================================================= */}
      {selectedFlight && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-cyan-600">
                  FLIGHT DETAILS
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  {selectedFlight.flightNumber}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedFlight(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-slate-50 p-5 text-center">
                <p className="text-xl font-bold text-slate-900">
                  {selectedFlight.from} → {selectedFlight.to}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {selectedFlight.date}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {selectedFlight.departure} -{' '}
                  {selectedFlight.arrival}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="text-xs text-slate-400">
                    Available Seats
                  </p>

                  <p className="mt-1 text-xl font-bold text-slate-900">
                    {selectedFlight.availableSeats}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 p-4">
                  <p className="text-xs text-slate-400">
                    Ticket Price
                  </p>

                  <p className="mt-1 text-xl font-bold text-slate-900">
                    KSh {selectedFlight.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 p-4">
                <p className="text-xs text-slate-400">
                  Flight Status
                </p>

                <p className="mt-1 font-bold text-cyan-600">
                  {selectedFlight.status}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedFlight(null)}
              className="mt-6 w-full rounded-xl bg-slate-900 px-5 py-3 font-bold text-white hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default AdminDashboard
