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

// Rutas
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/auth", authRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log("📊 Base de datos sincronizada");
  app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
});
