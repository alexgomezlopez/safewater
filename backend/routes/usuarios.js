const express = require("express");
const Usuario = require("../models/Usuario");

const router = express.Router();

// Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    console.log("🔍 Datos recibidos:", req.body);  // ✅ Verifica qué está llegando

    const nuevoUsuario = await Usuario.create(req.body);
    res.json(nuevoUsuario);
  } catch (error) {
    console.error("❌ Error al crear usuario:", error);
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
