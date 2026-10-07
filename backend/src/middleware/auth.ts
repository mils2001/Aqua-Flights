import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export interface AuthRequest extends Request {
  user?: {
    userId: number
    email: string
  }
}

export const authenticateToken = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({
        message: "Authorization token is required",
      })
    }

    const parts = authHeader.split(" ")

    if (parts.length !== 2 || parts[0] !== "Bearer") {
      return res.status(401).json({
        message: "Invalid authorization format",
      })
    }

    const token = parts[1]

    const jwtSecret = process.env.JWT_SECRET

    if (!jwtSecret) {
      console.error("JWT_SECRET is not configured")

      return res.status(500).json({
        message: "Server configuration error",
      })
    }

    const decoded = jwt.verify(token, jwtSecret)

    if (
      typeof decoded !== "object" ||
      decoded === null ||
      typeof decoded.userId !== "number" ||
      typeof decoded.email !== "string"
    ) {
      return res.status(401).json({
        message: "Invalid token",
      })
    }

    req.user = {
      userId: decoded.userId,
      email: decoded.email,
    }

    next()
  } catch (error) {
    console.error("Authentication error:", error)

    return res.status(401).json({
      message: "Invalid or expired token",
    })
  }
}
