import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition ${
      isActive
        ? 'text-cyan-600 font-semibold'
        : 'text-slate-700 hover:text-cyan-600'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-600 text-xl font-bold text-white">
            A
          </div>

          <div>
            <p className="text-xl font-bold tracking-tight text-slate-900">
              Aqua Flights
            </p>

            <p className="text-xs text-slate-500">
              Your Journey. Our Commitment.
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/flights" className={navLinkClass}>
            Flights
          </NavLink>

          <NavLink to="/bookings" className={navLinkClass}>
            Bookings
          </NavLink>

          <NavLink to="/wallet" className={navLinkClass}>
            AQUA Wallet
          </NavLink>

          <NavLink to="/profile" className={navLinkClass}>
            Profile
          </NavLink>
        </nav>

        {/* Authentication */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2.5 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-lg bg-cyan-600 px-5 py-2.5 font-semibold text-white transition hover:bg-cyan-500"
          >
            Create Account
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </div>
    </header>
  )
}

export default Navbar
