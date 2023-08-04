const express = require("express")
const router = express.Router()
const { uploadMiddleware }= require("../util/filesHandler")
const { validateId} = require("../validators/idValidator")
const { createItem, getItems, getItem_, deleteItem } = require("../controllers/StorageController")

/**
 * Listar todos los Items
 */
router.get("/", getItems)

/**
 * Obtener Un Item
 */
router.get("/:id", validateId, getItem_)


/**
 * Crear un Item tipo File
 */
router.post("/", uploadMiddleware.single("myfile"), createItem)

/**
 * Eliminar un Item tipo File
 */
router.delete("/:id", validateId, deleteItem)

module.exports = router