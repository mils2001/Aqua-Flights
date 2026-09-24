function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              Aqua Flights
            </h1>
            <p className="text-sm text-slate-500">
              Fly smarter. Travel better.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-blue-600">
              Flights
            </a>

            <a href="#" className="text-sm font-medium hover:text-blue-600">
              My Bookings
            </a>

            <a href="#" className="text-sm font-medium hover:text-blue-600">
              Login
            </a>

            <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Register
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-blue-700 px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-200">
                Welcome to Aqua Flights
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Your journey starts here.
              </h2>

              <p className="mt-6 max-w-2xl text-lg text-blue-100">
                Search flights, book your journey, and manage your travel
                experience from one simple platform.
              </p>
            </div>

            <div className="mt-10 rounded-2xl bg-white p-6 text-slate-900 shadow-xl">
              <h3 className="text-xl font-bold">Search Flights</h3>

              <div className="mt-5 grid gap-4 md:grid-cols-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    From
                  </label>
                  <input
                    type="text"
                    placeholder="Departure"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    To
                  </label>
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Departure
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div className="flex items-end">
                  <button className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
                    Search Flights
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold">Why Aqua Flights?</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">Easy Booking</h3>
                <p className="mt-2 text-slate-600">
                  Search and book your flights through a simple, responsive
                  interface.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">Flexible Payments</h3>
                <p className="mt-2 text-slate-600">
                  Support for traditional card payments and future AQUA Coin
                  payments.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">Travel Notifications</h3>
                <p className="mt-2 text-slate-600">
                  Receive important booking and flight updates when you need
                  them.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white px-6 py-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-slate-500">
          © 2026 Aqua Flights. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
