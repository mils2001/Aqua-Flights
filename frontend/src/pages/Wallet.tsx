import { useEffect, useMemo, useState } from 'react'

type ClaimRecord = {
  id: string
  date: string
  amount: number
  balanceAfter: number
  status: 'Completed'
}

type VerificationType = 'national-id' | 'driving-licence' | 'passport'

type VerificationStatus = 'unverified' | 'pending' | 'verified'

const DAILY_REWARD = 2
const BALANCE_KEY = 'aquaWalletBalance'
const CLAIMS_KEY = 'aquaDailyClaims'
const REFERRAL_KEY = 'aquaReferralCode'

function getTodayKey() {
  return new Date().toISOString().split('T')[0]
}

function formatDate(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`)

  return date.toLocaleDateString('en-KE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

function createReferralCode() {
  return `AQUA-${Math.random()
    .toString(36)
    .substring(2, 8)
    .toUpperCase()}`
}

function Wallet() {
  const [balance, setBalance] = useState<number>(0)
  const [claims, setClaims] = useState<ClaimRecord[]>([])

  const [referralCode] = useState<string>(() => {
    const saved = localStorage.getItem(REFERRAL_KEY)

    if (saved) {
      return saved
    }

    const newCode = createReferralCode()
    localStorage.setItem(REFERRAL_KEY, newCode)

    return newCode
  })

  const [verificationType, setVerificationType] =
    useState<VerificationType>('national-id')

  const [documentPhoto, setDocumentPhoto] = useState<File | null>(null)
  const [facePhoto, setFacePhoto] = useState<File | null>(null)

  const [verificationStatus, setVerificationStatus] =
    useState<VerificationStatus>('unverified')

  const today = getTodayKey()

  const claimedToday = useMemo(() => {
    return claims.some((claim) => claim.date === today)
  }, [claims, today])

  useEffect(() => {
    const savedBalance = localStorage.getItem(BALANCE_KEY)
    const savedClaims = localStorage.getItem(CLAIMS_KEY)

    if (savedBalance) {
      setBalance(Number(savedBalance))
    }

    if (savedClaims) {
      try {
        setClaims(JSON.parse(savedClaims))
      } catch {
        setClaims([])
      }
    }
  }, [])

  const saveWallet = (
    newBalance: number,
    newClaims: ClaimRecord[],
  ) => {
    setBalance(newBalance)
    setClaims(newClaims)

    localStorage.setItem(BALANCE_KEY, String(newBalance))
    localStorage.setItem(CLAIMS_KEY, JSON.stringify(newClaims))
  }

  const handleDailyClaim = () => {
    if (claimedToday) {
      return
    }

    const newBalance = balance + DAILY_REWARD

    const newClaim: ClaimRecord = {
      id: `claim-${Date.now()}`,
      date: today,
      amount: DAILY_REWARD,
      balanceAfter: newBalance,
      status: 'Completed',
    }

    const newClaims = [newClaim, ...claims]

    saveWallet(newBalance, newClaims)
  }

  const handleCopyReferral = async () => {
    try {
      await navigator.clipboard.writeText(referralCode)
      alert('Referral code copied!')
    } catch {
      alert(`Your referral code is ${referralCode}`)
    }
  }

  const handleVerificationSubmit = () => {
    if (!documentPhoto || !facePhoto) {
      alert(
        'Please select both your identification document and face verification photo.',
      )
      return
    }

    setVerificationStatus('pending')

    alert(
      'Verification submitted successfully. Backend identity verification will be connected later.',
    )
  }

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
            AQUA Wallet
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Manage your AQUA rewards, claim daily coins, verify your account,
            track wallet activity and use your balance for future travel.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        {/* =========================================================
            PROFILE + AQUA CARD
        ========================================================= */}
        <section className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* PROFILE */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-3xl font-bold text-white shadow-lg">
                A
              </div>

              <div className="mt-4 flex items-center gap-2">
                <h2 className="text-xl font-bold text-slate-900">
                  Aqua Member
                </h2>

                {verificationStatus === 'verified' && (
                  <span
                    title="Verified Aqua Flights account"
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white"
                  >
                    ✓
                  </span>
                )}
              </div>

              <div className="mt-2">
                {verificationStatus === 'verified' && (
                  <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">
                    ✓ Verified Account
                  </span>
                )}

                {verificationStatus === 'pending' && (
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                    ⏳ Verification Pending
                  </span>
                )}

                {verificationStatus === 'unverified' && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                    Unverified Account
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-slate-500">
                Aqua Flights Wallet
              </p>

              <div className="mt-6 w-full rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                  Available Balance
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {balance.toFixed(2)}
                </p>

                <p className="text-sm font-semibold text-cyan-600">
                  AQUA
                </p>
              </div>
            </div>
          </div>

          {/* AQUA CARD */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-slate-950 p-7 text-white shadow-2xl">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-300/10" />

            <div className="relative flex min-h-[280px] flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/70">
                    Aqua Flights
                  </p>

                  <p className="mt-2 text-2xl font-bold tracking-wider">
                    AQUA CARD
                  </p>
                </div>

                <div className="rounded-xl border border-white/20 bg-white/10 px-3 py-2">
                  <span className="text-lg font-bold">A</span>
                </div>
              </div>

              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-10 w-14 rounded-lg bg-gradient-to-br from-yellow-200 to-yellow-500">
                    <div className="grid h-full grid-cols-2 gap-px p-2">
                      <span className="rounded-sm bg-yellow-600/30" />
                      <span className="rounded-sm bg-yellow-600/20" />
                      <span className="rounded-sm bg-yellow-600/20" />
                      <span className="rounded-sm bg-yellow-600/30" />
                    </div>
                  </div>

                  <span className="text-sm text-white/70">
                    DIGITAL REWARDS CARD
                  </span>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      Balance
                    </p>

                    <p className="mt-1 text-3xl font-bold">
                      {balance.toFixed(2)} AQUA
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs uppercase tracking-widest text-white/60">
                      Member
                    </p>

                    <p className="mt-1 font-semibold">
                      AQUA MEMBER
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            ACCOUNT VERIFICATION
        ========================================================= */}
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
                  🛡️
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Account Verification
                  </h2>

                  <p className="text-sm text-slate-500">
                    Verify your identity to unlock verified account features.
                  </p>
                </div>
              </div>
            </div>

            {verificationStatus === 'verified' && (
              <div className="flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-xs text-white">
                  ✓
                </span>

                Verified
              </div>
            )}

            {verificationStatus === 'pending' && (
              <div className="rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700">
                ⏳ Under Review
              </div>
            )}

            {verificationStatus === 'unverified' && (
              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
                Not Verified
              </div>
            )}
          </div>

          {verificationStatus === 'verified' ? (
            <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-xl font-bold text-white">
                  ✓
                </div>

                <div>
                  <h3 className="font-bold text-cyan-900">
                    Your account is verified
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-cyan-800">
                    Your Aqua Flights account has completed identity
                    verification.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-6 space-y-7">
              {/* DOCUMENT TYPE */}
              <div>
                <label className="mb-3 block text-sm font-bold text-slate-900">
                  Select identification document
                </label>

                <div className="grid gap-3 md:grid-cols-3">
                  <button
                    type="button"
                    onClick={() =>
                      setVerificationType('national-id')
                    }
                    className={`rounded-2xl border p-5 text-left transition ${
                      verificationType === 'national-id'
                        ? 'border-cyan-500 bg-cyan-50 ring-2 ring-cyan-100'
                        : 'border-slate-200 bg-white hover:border-cyan-300'
                    }`}
                  >
                    <div className="text-2xl">🪪</div>

                    <p className="mt-3 font-bold text-slate-900">
                      National ID
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Government-issued identity document
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setVerificationType('driving-licence')
                    }
                    className={`rounded-2xl border p-5 text-left transition ${
                      verificationType === 'driving-licence'
                        ? 'border-cyan-500 bg-cyan-50 ring-2 ring-cyan-100'
                        : 'border-slate-200 bg-white hover:border-cyan-300'
                    }`}
                  >
                    <div className="text-2xl">🚘</div>

                    <p className="mt-3 font-bold text-slate-900">
                      Driving Licence
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Valid government-issued licence
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVerificationType('passport')}
                    className={`rounded-2xl border p-5 text-left transition ${
                      verificationType === 'passport'
                        ? 'border-cyan-500 bg-cyan-50 ring-2 ring-cyan-100'
                        : 'border-slate-200 bg-white hover:border-cyan-300'
                    }`}
                  >
                    <div className="text-2xl">🛂</div>

                    <p className="mt-3 font-bold text-slate-900">
                      Passport
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Valid passport identification
                    </p>
                  </button>
                </div>
              </div>

              {/* DOCUMENT UPLOAD */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-900">
                  Upload identification document
                </label>

                <p className="mb-3 text-xs leading-5 text-slate-500">
                  Selected document:{' '}
                  <strong>
                    {verificationType === 'national-id'
                      ? 'National ID'
                      : verificationType === 'driving-licence'
                        ? 'Driving Licence'
                        : 'Passport'}
                  </strong>
                </p>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center transition hover:border-cyan-400 hover:bg-cyan-50">
                  <div className="text-3xl">📷</div>

                  <span className="mt-3 font-semibold text-slate-700">
                    {documentPhoto
                      ? documentPhoto.name
                      : 'Choose document photo'}
                  </span>

                  <span className="mt-1 text-xs text-slate-500">
                    JPG, PNG or WEBP
                  </span>

                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={(event) => {
                      const file = event.target.files?.[0] ?? null
                      setDocumentPhoto(file)
                    }}
                  />
                </label>
              </div>

              {/* FACE VERIFICATION */}
              <div>
                <label className="mb-2 block text-sm font-bold text-slate-900">
                  Face Verification
                </label>

                <p className="mb-3 text-xs leading-5 text-slate-500">
                  Upload a clear face photo for the future identity matching
                  process.
                </p>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center transition hover:border-cyan-400 hover:bg-cyan-50">
                  <div className="text-3xl">🤳</div>

                  <span className="mt-3 font-semibold text-slate-700">
                    {facePhoto
                      ? facePhoto.name
                      : 'Choose face verification photo'}
                  </span>

                  <span className="mt-1 text-xs text-slate-500">
                    JPG, PNG or WEBP
                  </span>

                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={(event) => {
                      const file = event.target.files?.[0] ?? null
                      setFacePhoto(file)
                    }}
                  />
                </label>
              </div>

              {/* SUBMIT */}
              <div className="flex flex-col gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-amber-900">
                    🔒 Identity verification
                  </p>

                  <p className="mt-1 max-w-2xl text-xs leading-5 text-amber-800">
                    This is currently a frontend prototype. Selected identity
                    files are not uploaded or stored by the application.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleVerificationSubmit}
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-white shadow-sm transition hover:bg-cyan-600"
                >
                  Submit for Verification
                </button>
              </div>
            </div>
          )}
        </section>

        {/* =========================================================
            DAILY CLAIM
        ========================================================= */}
        <section className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
                  🪙
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Daily AQUA Claim
                  </h2>

                  <p className="text-sm text-slate-500">
                    Claim your daily Aqua Flights reward.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
                  +2 AQUA every day
                </span>

                <span className="text-sm text-slate-500">
                  {claimedToday
                    ? 'Claim completed today'
                    : 'Available today'}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleDailyClaim}
              disabled={claimedToday}
              className={`rounded-2xl px-7 py-4 font-bold shadow-lg transition ${
                claimedToday
                  ? 'cursor-not-allowed bg-slate-200 text-slate-500'
                  : 'bg-cyan-500 text-white hover:bg-cyan-600 hover:shadow-xl'
              }`}
            >
              {claimedToday ? '✓ Claimed Today' : 'Claim 2 AQUA'}
            </button>
          </div>
        </section>

        {/* =========================================================
            REDEEM OPTIONS
        ========================================================= */}
        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-slate-900">
              Use Your AQUA
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Future redemption options for your Aqua Flights rewards.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {/* FLIGHT */}
            <button
              type="button"
              onClick={() =>
                alert(
                  'Flight redemption will be connected to the booking system later.',
                )
              }
              className="group rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-2xl">
                ✈️
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Flight Ticket
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Use your AQUA balance toward an Aqua Flights ticket.
              </p>

              <span className="mt-5 inline-block text-sm font-bold text-cyan-600">
                Redeem for Flight →
              </span>
            </button>

            {/* HOTEL */}
            <button
              type="button"
              onClick={() =>
                alert('Hotel redemption will be connected later.')
              }
              className="group rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                🏨
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Hotel Booking
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Use AQUA rewards toward selected hotel bookings.
              </p>

              <span className="mt-5 inline-block text-sm font-bold text-blue-600">
                Redeem for Hotel →
              </span>
            </button>

            {/* DEX */}
            <button
              type="button"
              onClick={() => alert('AQUA DEX is coming soon.')}
              className="group rounded-3xl border border-dashed border-slate-300 bg-slate-100 p-6 text-left transition hover:border-cyan-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-200 text-2xl">
                🔄
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900">
                  AQUA DEX
                </h3>

                <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-600">
                  Coming Soon
                </span>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                AQUA decentralized exchange features will be connected in a
                future phase.
              </p>
            </button>
          </div>
        </section>

        {/* =========================================================
            REFERRAL
        ========================================================= */}
        <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_240px] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Invite & Earn
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Your AQUA Referral
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-slate-300">
                Share your referral code with friends. The referral reward
                system will be connected to the Aqua Flights backend later.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <div className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 font-mono font-bold tracking-wider">
                  {referralCode}
                </div>

                <button
                  type="button"
                  onClick={handleCopyReferral}
                  className="rounded-xl bg-cyan-500 px-5 py-3 font-bold text-white transition hover:bg-cyan-600"
                >
                  Copy Code
                </button>
              </div>
            </div>

            <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-3xl bg-white p-4">
              <div className="grid h-full w-full grid-cols-8 grid-rows-8 gap-1">
                {Array.from({ length: 64 }).map((_, index) => {
                  const dark =
                    (index * 17 + index * index) % 7 < 3 ||
                    [
                      0,
                      1,
                      2,
                      8,
                      16,
                      7,
                      15,
                      56,
                      57,
                      58,
                      48,
                      49,
                      50,
                    ].includes(index)

                  return (
                    <span
                      key={index}
                      className={
                        dark ? 'bg-slate-950' : 'bg-white'
                      }
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            LEDGER
        ========================================================= */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  AQUA Ledger
                </h2>

                <p className="text-sm text-slate-500">
                  Track your daily claims and wallet activity.
                </p>
              </div>

              <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-700">
                {claims.length} transaction
                {claims.length === 1 ? '' : 's'}
              </span>
            </div>
          </div>

          {claims.length === 0 ? (
            <div className="p-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl">
                📒
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900">
                No wallet activity yet
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Claim your first 2 AQUA coins to create your first ledger
                entry.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] text-left">
                <thead className="bg-slate-50">
                  <tr className="text-xs uppercase tracking-wider text-slate-500">
                    <th className="px-6 py-4 font-semibold">Date</th>
                    <th className="px-6 py-4 font-semibold">
                      Transaction
                    </th>
                    <th className="px-6 py-4 font-semibold">Amount</th>
                    <th className="px-6 py-4 font-semibold">Balance</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {claims.map((claim) => (
                    <tr
                      key={claim.id}
                      className="hover:bg-slate-50"
                    >
                      <td className="px-6 py-5 text-sm text-slate-600">
                        {formatDate(claim.date)}
                      </td>

                      <td className="px-6 py-5">
                        <div className="font-semibold text-slate-900">
                          Daily AQUA Claim
                        </div>

                        <div className="text-xs text-slate-500">
                          Reward distribution
                        </div>
                      </td>

                      <td className="px-6 py-5 font-bold text-cyan-600">
                        +{claim.amount.toFixed(2)} AQUA
                      </td>

                      <td className="px-6 py-5 font-semibold text-slate-900">
                        {claim.balanceAfter.toFixed(2)} AQUA
                      </td>

                      <td className="px-6 py-5">
                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                          {claim.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* =========================================================
            PROTOTYPE NOTICE
        ========================================================= */}
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
          <strong>Prototype wallet:</strong> AQUA balances and daily claims
          are currently stored in your browser using localStorage. Identity
          documents and face photos are not uploaded or stored by this
          prototype. The secure backend, PostgreSQL ledger, real identity
          verification, blockchain integration, redemption system and DEX
          will be connected in later phases.
        </section>
      </div>
    </main>
  )
}

export default Wallet
