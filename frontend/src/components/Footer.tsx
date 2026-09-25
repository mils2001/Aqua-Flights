import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">Aqua Flights</h2>

            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              Making every journey simpler through technology, convenience,
              and customer-focused travel services.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold">Explore</h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/"
                className="text-slate-400 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/flights"
                className="text-slate-400 transition hover:text-white"
              >
                Search Flights
              </Link>

              <Link
                to="/bookings"
                className="text-slate-400 transition hover:text-white"
              >
                My Bookings
              </Link>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold">Account</h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/login"
                className="text-slate-400 transition hover:text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="text-slate-400 transition hover:text-white"
              >
                Create Account
              </Link>

              <Link
                to="/profile"
                className="text-slate-400 transition hover:text-white"
              >
                Profile
              </Link>

              <Link
                to="/wallet"
                className="text-slate-400 transition hover:text-white"
              >
                AQUA Wallet
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Aqua Flights</h3>

            <div className="mt-4 space-y-3 text-slate-400">
              <p>Customer Support</p>
              <p>24/7 Digital Assistance</p>
              <p>Kenya</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Aqua Flights. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
