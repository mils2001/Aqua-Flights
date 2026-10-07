"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./routes/auth"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (_req, res) => {
    res.json({
        message: "Aqua Flights API is running",
        status: "success",
    });
});
app.get("/api/health", (_req, res) => {
    res.json({
        status: "ok",
        message: "Aqua Flights backend is healthy",
    });
});
// Authentication routes
app.use("/api/auth", auth_1.default);
app.listen(PORT, () => {
    console.log(`Aqua Flights API running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map