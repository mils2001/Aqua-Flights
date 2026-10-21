
import { Router } from "express"
import prisma from "../lib/prisma"

const router = Router()

// GET /api/flights/search
router.get("/search", async (req, res) => {
  try {
    const { origin, destination, date } = req.query

    if (
      typeof origin !== "string" ||
      !origin.trim() ||
      typeof destination !== "string" ||
      !destination.trim() ||
      typeof date !== "string" ||
      !/^\d{4}-\d{2}-\d{2}$/.test(date)
    ) {
      return res.status(400).json({
        message:
          "Provide origin, destination, and date using YYYY-MM-DD format.",
      })
    }

    const startDate = new Date(`${date}T00:00:00.000Z`)

    if (
      Number.isNaN(startDate.getTime()) ||
      startDate.toISOString().slice(0, 10) !== date
    ) {
      return res.status(400).json({
        message: "Provide a valid travel date.",
      })
    }

    const endDate = new Date(startDate)
    endDate.setUTCDate(endDate.getUTCDate() + 1)

    const flights = await prisma.flight.findMany({
      where: {
        origin: { equals: origin.trim() },
        destination: { equals: destination.trim() },
        schedules: {
          some: {
            departureDate: { gte: startDate, lt: endDate },
            status: "SCHEDULED",
            availableSeats: { gt: 0 },
          },
        },
      },
      include: {
        schedules: {
          where: {
            departureDate: { gte: startDate, lt: endDate },
            status: "SCHEDULED",
            availableSeats: { gt: 0 },
          },
          orderBy: { departureTime: "asc" },
        },
      },
      orderBy: { basePrice: "asc" },
    })

    return res.status(200).json({
      count: flights.length,
      search: {
        origin: origin.trim(),
        destination: destination.trim(),
        date,
      },
      flights,
    })
  } catch (error) {
    console.error("Flight search error:", error)
    return res.status(500).json({
      message: "Could not search flights.",
    })
  }
})

// GET /api/flights
router.get("/", async (_req, res) => {
  try {
    const flights = await prisma.flight.findMany({
      include: { schedules: true },
      orderBy: { createdAt: "desc" },
    })

    return res.status(200).json({
      count: flights.length,
      flights,
    })
  } catch (error) {
    console.error("Fetch flights error:", error)
    return res.status(500).json({
      message: "Could not retrieve flights",
    })
  }
})

// GET /api/flights/:id
router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id)

    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({
        message: "Invalid flight ID",
      })
    }

    const flight = await prisma.flight.findUnique({
      where: { id },
      include: { schedules: true },
    })

    if (!flight) {
      return res.status(404).json({
        message: "Flight not found",
      })
    }

    return res.status(200).json({ flight })
  } catch (error) {
    console.error("Fetch flight error:", error)
    return res.status(500).json({
      message: "Could not retrieve flight",
    })
  }
})

// POST /api/flights
router.post("/", async (req, res) => {
  try {
    const {
      flightNumber,
      origin,
      destination,
      originCode,
      destinationCode,
      destinationImage,
      basePrice,
      totalSeats,
    } = req.body

    if (
      typeof flightNumber !== "string" ||
      !flightNumber.trim() ||
      typeof origin !== "string" ||
      !origin.trim() ||
      typeof destination !== "string" ||
      !destination.trim() ||
      typeof originCode !== "string" ||
      !originCode.trim() ||
      typeof destinationCode !== "string" ||
      !destinationCode.trim() ||
      (destinationImage !== undefined &&
        destinationImage !== null &&
        typeof destinationImage !== "string") ||
      typeof basePrice !== "number" ||
      !Number.isFinite(basePrice) ||
      basePrice <= 0 ||
      !Number.isInteger(totalSeats) ||
      totalSeats < 1
    ) {
      return res.status(400).json({
        message: "Provide valid flight details and seat capacity.",
      })
    }

    if (
      typeof destinationImage === "string" &&
      destinationImage.trim() &&
      !/^https?:\/\/\S+$/i.test(destinationImage.trim())
    ) {
      return res.status(400).json({
        message: "destinationImage must be a valid HTTP or HTTPS URL",
      })
    }

    const flight = await prisma.flight.create({
      data: {
        flightNumber: flightNumber.trim().toUpperCase(),
        origin: origin.trim(),
        destination: destination.trim(),
        originCode: originCode.trim().toUpperCase(),
        destinationCode: destinationCode.trim().toUpperCase(),
        destinationImage:
          typeof destinationImage === "string" && destinationImage.trim()
            ? destinationImage.trim()
            : null,
        basePrice,
        totalSeats,
      },
    })

    return res.status(201).json({
      message: "Flight created successfully",
      flight,
    })
  } catch (error) {
    console.error("Create flight error:", error)
    return res.status(500).json({
      message:
        "Could not create flight. Check whether the flight number already exists.",
    })
  }
})

// PUT /api/flights/:id
router.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { destinationImage } = req.body

    if (!Number.isInteger(id) || id < 1) {
      return res.status(400).json({
        message: "Invalid flight ID",
      })
    }

    if (
      destinationImage !== null &&
      typeof destinationImage !== "string"
    ) {
      return res.status(400).json({
        message: "destinationImage must be a URL string or null",
      })
    }

    if (
      typeof destinationImage === "string" &&
      (!destinationImage.trim() ||
        !/^https?:\/\/\S+$/i.test(destinationImage.trim()))
    ) {
      return res.status(400).json({
        message: "Provide a valid HTTP or HTTPS image URL",
      })
    }

    const existingFlight = await prisma.flight.findUnique({
      where: { id },
    })

    if (!existingFlight) {
      return res.status(404).json({
        message: "Flight not found",
      })
    }

    const flight = await prisma.flight.update({
      where: { id },
      data: {
        destinationImage:
          typeof destinationImage === "string"
            ? destinationImage.trim()
            : null,
      },
    })

    return res.status(200).json({
      message: "Destination image updated successfully",
      flight,
    })
  } catch (error) {
    console.error("Update flight error:", error)
    return res.status(500).json({
      message: "Could not update flight",
    })
  }
})

// POST /api/flights/:id/schedules
router.post("/:id/schedules", async (req, res) => {
  try {
    const flightId = Number(req.params.id)
    const {
      departureDate,
      departureTime,
      arrivalTime,
      availableSeats,
    } = req.body

    if (!Number.isInteger(flightId) || flightId < 1) {
      return res.status(400).json({
        message: "Invalid flight ID",
      })
    }

    if (
      typeof departureDate !== "string" ||
      !/^\d{4}-\d{2}-\d{2}$/.test(departureDate)
    ) {
      return res.status(400).json({
        message: "departureDate must use YYYY-MM-DD format",
      })
    }

    const parsedDate = new Date(`${departureDate}T00:00:00.000Z`)

    if (
      Number.isNaN(parsedDate.getTime()) ||
      parsedDate.toISOString().slice(0, 10) !== departureDate
    ) {
      return res.status(400).json({
        message: "Provide a valid departure date",
      })
    }

    const validTime = (value: unknown): value is string =>
      typeof value === "string" &&
      /^([01]\d|2[0-3]):[0-5]\d$/.test(value)

    if (!validTime(departureTime) || !validTime(arrivalTime)) {
      return res.status(400).json({
        message: "Departure and arrival times must use HH:mm format",
      })
    }

    if (!Number.isInteger(availableSeats) || availableSeats < 1) {
      return res.status(400).json({
        message: "availableSeats must be a positive whole number",
      })
    }

    const flight = await prisma.flight.findUnique({
      where: { id: flightId },
    })

    if (!flight) {
      return res.status(404).json({
        message: "Flight not found",
      })
    }

    if (availableSeats > flight.totalSeats) {
      return res.status(400).json({
        message: `availableSeats cannot exceed the flight capacity of ${flight.totalSeats}`,
      })
    }

    const schedule = await prisma.flightSchedule.create({
      data: {
        flightId,
        departureDate: parsedDate,
        departureTime,
        arrivalTime,
        availableSeats,
      },
    })

    return res.status(201).json({
      message: "Flight schedule created successfully",
      schedule,
    })
  } catch (error) {
    console.error("Create flight schedule error:", error)
    return res.status(500).json({
      message:
        "Could not create schedule. Check whether this flight already has a schedule for that date and departure time.",
    })
  }
})

export default router
