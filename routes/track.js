const express = require("express")
const router = express.Router()
const customHeaders = require("../middleware/customHeader")
const { validator_createItem, validator_getItem } = require("../validators/TracksValidator")
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/TrackController")

/**
 * Obtener Todos los Items
 */
router.get("/", getItems)

/**
 * Obtener un item mediante ID
 */
router.get("/:id",validator_getItem, getItem)

/**
 * Crear un Item de Track
 */
router.post("/", validator_createItem, customHeaders, createItem)

/**
 * Actualizar un Item de Track
 */
router.put("/:id", validator_getItem, validator_createItem, updateItem)

/**
 * Eliminar un Item de Track
 */
router.delete("/:id", validator_getItem, deleteItem)

module.exports = router