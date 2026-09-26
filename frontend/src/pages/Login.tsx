import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50">
      <div className="grid min-h-[calc(100vh-80px)] lg:grid-cols-2">
        {/* Left Side */}
        <section className="relative hidden overflow-hidden bg-slate-950 lg:block">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,47,73,0.95),rgba(15,23,42,0.9))]" />

          <div className="relative flex h-full items-center px-12 xl:px-20">
            <div className="max-w-xl text-white">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-600 text-2xl font-bold shadow-lg">
                A
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Welcome Back
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight xl:text-5xl">
                Your journey starts with Aqua Flights.
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Sign in to manage your flights, view your bookings, access
                your AQUA Wallet and keep your travel information in one
                convenient place.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-2xl font-bold text-cyan-400">24/7</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Digital assistance
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-2xl font-bold text-cyan-400">Easy</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Flight management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Login Form */}
        <section className="flex items-center justify-center px-6 py-12 lg:px-12">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600 text-xl font-bold text-white">
                A
              </div>

              <div>
                <p className="text-xl font-bold text-slate-900">
                  Aqua Flights
                </p>

                <p className="text-xs text-slate-500">
                  Your Journey. Our Commitment.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                Account Login
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Welcome back
              </h2>

              <p className="mt-3 text-slate-600">
                Sign in to continue to your Aqua Flights account.
              </p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault()
                alert('Login will be connected to the backend soon.')
              }}
              className="space-y-5"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm font-semibold text-cyan-600 transition hover:text-cyan-700"
                    onClick={() =>
                      alert('Password recovery will be connected later.')
                    }
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 pr-20 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500 transition hover:text-cyan-600"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                  />

                  Remember me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-cyan-500 hover:shadow-md"
              >
                Sign In
              </button>
            </form>

            {/* Register */}
            <div className="mt-8 border-t border-slate-200 pt-7 text-center">
              <p className="text-sm text-slate-600">
                Don't have an Aqua Flights account?
              </p>

              <Link
                to="/register"
                className="mt-2 inline-block font-semibold text-cyan-600 transition hover:text-cyan-700"
              >
                Create an account →
              </Link>
            </div>

            {/* Security Note */}
            <p className="mt-8 text-center text-xs leading-5 text-slate-400">
              Your account information will be securely handled when
              authentication is connected to the Aqua Flights backend.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login
