const { Router } = require('express');
const axios = require("axios");

// Modelos de la base de datos ↓
const {  } = require("../db");

const router = Router()


// Obtener todos los usuarios
router.get("/usuarios", async (req, res) => {
    // AXIOS.GET("")
}) 

// obtener un usuario en particular
router.get("/usuario/name?Nombre", async (req, res) => {
    
}) 

// cargar/crear usuario 
router.post("/usuario/name?Nombre", async (req, res) => {
    
}) 

// Actualizar informacion del usuario
router.put("/usuario/name?Nombre", async (req, res) => {
    
}) 

// Eliminar cuenta del usuario
router.delete("/usuario/name?Nombre", async (req, res) => {

}) 