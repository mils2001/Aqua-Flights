import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!acceptedTerms) {
      alert('Please accept the Terms and Conditions to continue.')
      return
    }

    alert('Account registration will be connected to the backend soon.')
  }

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-600 text-2xl font-bold text-white shadow-sm">
            A
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Join Aqua Flights
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Create Your Account
          </h1>

          <p className="mt-4 text-slate-600">
            Create your Aqua Flights account and make managing your journeys
            easier.
          </p>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="border-b border-slate-200 bg-slate-950 px-6 py-6 text-white sm:px-10">
            <h2 className="text-xl font-bold">Personal Information</h2>

            <p className="mt-1 text-sm text-slate-300">
              Tell us a little about yourself to get started.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 sm:p-10">
            {/* Personal Information */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Christian"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Last Name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="David"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

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
                  className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+254 700 000 000"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Date of Birth
                </label>

                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3.5 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* Country */}
              <div>
                <label
                  htmlFor="country"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Country
                </label>

                <select
                  id="country"
                  name="country"
                  defaultValue="Kenya"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                >
                  <option value="Kenya">Kenya</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Namibia">Namibia</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="France">France</option>
                  <option value="United States">United States</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Account Security */}
            <div className="mt-10 border-t border-slate-200 pt-10">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900">
                  Account Security
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Choose a secure password for your Aqua Flights account.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      minLength={8}
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3.5 pr-20 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500 transition hover:text-cyan-600"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>

                  <p className="mt-2 text-xs text-slate-400">
                    Password must contain at least 8 characters.
                  </p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      minLength={8}
                      required
                      className="w-full rounded-xl border border-slate-300 px-4 py-3.5 pr-20 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500 transition hover:text-cyan-600"
                    >
                      {showConfirmPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="mt-10 rounded-2xl bg-slate-50 p-5">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(event) =>
                    setAcceptedTerms(event.target.checked)
                  }
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500"
                />

                <span className="text-sm leading-6 text-slate-600">
                  I agree to the Aqua Flights Terms and Conditions and
                  acknowledge the Privacy Policy.
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-cyan-500 hover:shadow-md"
              >
                Create Account
              </button>
            </div>

            {/* Login Link */}
            <div className="mt-7 text-center">
              <p className="text-sm text-slate-600">
                Already have an Aqua Flights account?
              </p>

              <Link
                to="/login"
                className="mt-2 inline-block font-semibold text-cyan-600 transition hover:text-cyan-700"
              >
                Sign in to your account →
              </Link>
            </div>
          </form>
        </div>

        {/* Security Note */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-5 text-slate-400">
          Your registration information will be securely processed when the
          Aqua Flights authentication system is connected to the backend.
        </p>
      </div>
    </main>
  )
}

export default Register
