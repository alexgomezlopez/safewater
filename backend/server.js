require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const Usuario = require("./models/Usuario");
const usuariosRoutes = require("./routes/usuarios");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta base para `/api`
app.get("/api", (req, res) => {
    res.json({ mensaje: "🚀 API de SafeWater en funcionamiento!" });
});

// Rutas
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/auth", authRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log("📊 Base de datos sincronizada");
  app.listen(PORT, "0.0.0.0", () => 
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
  );
});

