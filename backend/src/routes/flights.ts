
import { Router } from "express"
import prisma from "../lib/prisma"

const router = Router()

// GET /api/flights
router.get("/", async (_req, res) => {
  try {
    const flights = await prisma.flight.findMany({
      include: {
        schedules: true,
      },
      orderBy: {
        createdAt: "desc",
      },
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
      include: {
        schedules: true,
      },
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
      typeof basePrice !== "number" ||
      !Number.isFinite(basePrice) ||
      basePrice <= 0 ||
      !Number.isInteger(totalSeats) ||
      totalSeats < 1
    ) {
      return res.status(400).json({
        message:
          "Provide a flight number, route, airport codes, positive price, and valid seat capacity",
      })
    }

    const flight = await prisma.flight.create({
      data: {
        flightNumber: flightNumber.trim().toUpperCase(),
        origin: origin.trim(),
        destination: destination.trim(),
        originCode: originCode.trim().toUpperCase(),
        destinationCode: destinationCode.trim().toUpperCase(),
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
      message: "Could not create flight. Check whether the flight number already exists.",
    })
  }
})

export default router
