import { useEffect, useState } from 'react'

type ProfileData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  country: string
  bio: string
}

const PROFILE_KEY = 'aquaUserProfile'
const BALANCE_KEY = 'aquaWalletBalance'

const defaultProfile: ProfileData = {
  firstName: 'Aqua',
  lastName: 'Member',
  email: 'member@aquaflights.com',
  phone: '',
  dateOfBirth: '',
  country: 'Kenya',
  bio: 'Aqua Flights member',
}

function Profile() {
  const [profile, setProfile] = useState<ProfileData>(defaultProfile)

  const [isEditing, setIsEditing] = useState(false)

  const [balance, setBalance] = useState(0)

  const [profilePhoto, setProfilePhoto] = useState<string | null>(null)

  const [savedMessage, setSavedMessage] = useState('')

  useEffect(() => {
    const savedProfile = localStorage.getItem(PROFILE_KEY)
    const savedBalance = localStorage.getItem(BALANCE_KEY)
    const savedPhoto = localStorage.getItem('aquaProfilePhoto')

    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile))
      } catch {
        setProfile(defaultProfile)
      }
    }

    if (savedBalance) {
      setBalance(Number(savedBalance))
    }

    if (savedPhoto) {
      setProfilePhoto(savedPhoto)
    }
  }, [])

  const handleChange = (
    field: keyof ProfileData,
    value: string,
  ) => {
    setProfile((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const handleSave = () => {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile))

    setIsEditing(false)

    setSavedMessage('Profile updated successfully.')

    setTimeout(() => {
      setSavedMessage('')
    }, 3000)
  }

  const handlePhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0]

    if (!file) {
      return
    }

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.')
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      const image = reader.result as string

      setProfilePhoto(image)
      localStorage.setItem('aquaProfilePhoto', image)
    }

    reader.readAsDataURL(file)
  }

  const removePhoto = () => {
    setProfilePhoto(null)
    localStorage.removeItem('aquaProfilePhoto')
  }

  const fullName =
    `${profile.firstName} ${profile.lastName}`.trim()

  const initials =
    `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`
      .toUpperCase()

  return (
    <main className="min-h-screen bg-slate-50">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Aqua Flights
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My Profile
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Manage your personal information, account details, security and
            Aqua Flights membership.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        {/* =========================================================
            PROFILE HEADER
        ========================================================= */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="h-32 bg-gradient-to-r from-cyan-500 via-blue-600 to-slate-950" />

          <div className="px-6 pb-7 sm:px-8">
            <div className="-mt-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              {/* PHOTO */}
              <div className="flex items-end gap-5">
                <div className="relative">
                  {profilePhoto ? (
                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl"
                    />
                  ) : (
                    <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-cyan-400 to-blue-600 text-3xl font-bold text-white shadow-xl">
                      {initials || 'A'}
                    </div>
                  )}

                  <label className="absolute bottom-1 right-1 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-cyan-500 text-lg text-white shadow-lg transition hover:bg-cyan-600">
                    📷

                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      className="hidden"
                      onChange={handlePhotoChange}
                    />
                  </label>
                </div>

                <div className="pb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-2xl font-bold text-slate-900">
                      {fullName || 'Aqua Member'}
                    </h2>

                    <span className="flex items-center gap-1 rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-[10px] text-white">
                        ✓
                      </span>
                      Aqua Member
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    {profile.email}
                  </p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-3">
                {profilePhoto && (
                  <button
                    type="button"
                    onClick={removePhoto}
                    className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                  >
                    Remove Photo
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setIsEditing((current) => !current)}
                  className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-cyan-600"
                >
                  {isEditing ? 'Cancel Editing' : 'Edit Profile'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SUCCESS MESSAGE */}
        {savedMessage && (
          <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-700">
            ✓ {savedMessage}
          </div>
        )}

        {/* =========================================================
            ACCOUNT OVERVIEW
        ========================================================= */}
        <section className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  AQUA Balance
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {balance.toFixed(2)}
                </p>

                <p className="mt-1 text-sm font-bold text-cyan-600">
                  AQUA
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
                🪙
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Account Status
                </p>

                <p className="mt-2 text-xl font-bold text-slate-900">
                  Active
                </p>

                <p className="mt-1 text-sm text-green-600">
                  ● Account operational
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">
                ✓
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Verification
                </p>

                <p className="mt-2 text-xl font-bold text-slate-900">
                  Not Verified
                </p>

                <p className="mt-1 text-sm text-amber-600">
                  Verification required
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                🛡️
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PERSONAL INFORMATION
        ========================================================= */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="border-b border-slate-100 pb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Keep your personal information up to date.
            </p>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {/* FIRST NAME */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                First Name
              </label>

              <input
                type="text"
                value={profile.firstName}
                disabled={!isEditing}
                onChange={(event) =>
                  handleChange('firstName', event.target.value)
                }
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                  isEditing
                    ? 'border-slate-300 bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
                    : 'border-slate-200 bg-slate-50 text-slate-600'
                }`}
              />
            </div>

            {/* LAST NAME */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Last Name
              </label>

              <input
                type="text"
                value={profile.lastName}
                disabled={!isEditing}
                onChange={(event) =>
                  handleChange('lastName', event.target.value)
                }
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                  isEditing
                    ? 'border-slate-300 bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
                    : 'border-slate-200 bg-slate-50 text-slate-600'
                }`}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                value={profile.email}
                disabled={!isEditing}
                onChange={(event) =>
                  handleChange('email', event.target.value)
                }
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                  isEditing
                    ? 'border-slate-300 bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
                    : 'border-slate-200 bg-slate-50 text-slate-600'
                }`}
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Phone Number
              </label>

              <input
                type="tel"
                value={profile.phone}
                disabled={!isEditing}
                placeholder="+254 7XX XXX XXX"
                onChange={(event) =>
                  handleChange('phone', event.target.value)
                }
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                  isEditing
                    ? 'border-slate-300 bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
                    : 'border-slate-200 bg-slate-50 text-slate-600'
                }`}
              />
            </div>

            {/* DOB */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Date of Birth
              </label>

              <input
                type="date"
                value={profile.dateOfBirth}
                disabled={!isEditing}
                onChange={(event) =>
                  handleChange(
                    'dateOfBirth',
                    event.target.value,
                  )
                }
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                  isEditing
                    ? 'border-slate-300 bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
                    : 'border-slate-200 bg-slate-50 text-slate-600'
                }`}
              />
            </div>

            {/* COUNTRY */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Country
              </label>

              <select
                value={profile.country}
                disabled={!isEditing}
                onChange={(event) =>
                  handleChange('country', event.target.value)
                }
                className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                  isEditing
                    ? 'border-slate-300 bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
                    : 'border-slate-200 bg-slate-50 text-slate-600'
                }`}
              >
                <option value="Kenya">Kenya</option>
                <option value="Uganda">Uganda</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Nigeria">Nigeria</option>
                <option value="South Africa">South Africa</option>
                <option value="United Kingdom">
                  United Kingdom
                </option>
                <option value="United States">
                  United States
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* BIO */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                About You
              </label>

              <textarea
                value={profile.bio}
                disabled={!isEditing}
                rows={4}
                onChange={(event) =>
                  handleChange('bio', event.target.value)
                }
                className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition ${
                  isEditing
                    ? 'border-slate-300 bg-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
                    : 'border-slate-200 bg-slate-50 text-slate-600'
                }`}
              />
            </div>
          </div>

          {isEditing && (
            <div className="mt-7 flex justify-end border-t border-slate-100 pt-6">
              <button
                type="button"
                onClick={handleSave}
                className="rounded-xl bg-cyan-500 px-7 py-3 font-bold text-white shadow-sm transition hover:bg-cyan-600"
              >
                Save Changes
              </button>
            </div>
          )}
        </section>

        {/* =========================================================
            VERIFICATION
        ========================================================= */}
        <section className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
                🛡️
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Account Verification
                </h2>

                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                  Verify your identity using a National ID, Driving Licence
                  or Passport. Face verification will also be required.
                </p>
              </div>
            </div>

            <a
              href="/wallet"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-cyan-600"
            >
              Verify Account
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="text-2xl">🪪</div>

              <h3 className="mt-3 font-bold text-slate-900">
                Identity Document
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                National ID, Driving Licence or Passport.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="text-2xl">🤳</div>

              <h3 className="mt-3 font-bold text-slate-900">
                Face Verification
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Confirm that the account belongs to you.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="text-2xl">✓</div>

              <h3 className="mt-3 font-bold text-slate-900">
                Verified Badge
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Receive a verified Aqua Flights account badge.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECURITY
        ========================================================= */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="border-b border-slate-100 pb-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Security
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Manage your Aqua Flights account security.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-bold text-slate-900">
                  Password
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Change your account password regularly to keep your account
                  secure.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  alert(
                    'Password management will be connected to the backend later.',
                  )
                }
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600"
              >
                Change Password
              </button>
            </div>

            <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-bold text-slate-900">
                  Two-Factor Authentication
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Add an additional layer of protection to your account.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  alert(
                    'Two-factor authentication will be connected later.',
                  )
                }
                className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600"
              >
                Set Up 2FA
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            DANGER ZONE
        ========================================================= */}
        <section className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-red-700">
            Account Management
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Account deletion will require additional confirmation once the
            Aqua Flights backend is connected.
          </p>

          <button
            type="button"
            onClick={() =>
              alert(
                'Account deletion will be connected to the backend later.',
              )
            }
            className="mt-5 rounded-xl border border-red-200 px-5 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
          >
            Delete Account
          </button>
        </section>

        {/* =========================================================
            PROTOTYPE NOTICE
        ========================================================= */}
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
          <strong>Frontend prototype:</strong> Profile information, profile
          picture and AQUA balance are currently stored locally in the browser.
          Authentication, PostgreSQL, secure image storage, identity
          verification, password management and 2FA will be connected when we
          build the Aqua Flights backend.
        </section>
      </div>
    </main>
  )
}

export default Profile
