require("dotenv").config(); // 🔹 Asegura que .env se cargue

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY || "fallback_secret"; // 🔹 Usar variable de entorno

// 🔹 Registro de Usuario (Signup)
router.post("/register", async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    // Verificar si el usuario ya existe
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ error: "El usuario ya está registrado." });
    }

    // Crear usuario en la base de datos
    const nuevoUsuario = await Usuario.create({ nombre, email, password });

    res.json({ mensaje: "Usuario registrado exitosamente.", usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Inicio de Sesión (Login)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario por email
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(400).json({ error: "Credenciales incorrectas." });
    }

    // Comparar contraseña ingresada con la almacenada
    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) {
      return res.status(400).json({ error: "Credenciales incorrectas." });
    }

    // Generar Token JWT
    const token = jwt.sign({ id: usuario.id, email: usuario.email }, SECRET_KEY, { expiresIn: "1h" });

    res.json({ mensaje: "Login exitoso.", token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Ruta Protegida (Ejemplo)
router.get("/perfil", verificarToken, async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.userId, { attributes: { exclude: ["password"] } });
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Middleware para verificar JWT
function verificarToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Acceso denegado, token no proporcionado." });

  try {
    const tokenLimpio = token.replace("Bearer ", "").trim(); // 🔹 Asegura que se elimine "Bearer "
    const decoded = jwt.verify(tokenLimpio, SECRET_KEY);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ error: "Token inválido." });
  }
}

module.exports = router;
