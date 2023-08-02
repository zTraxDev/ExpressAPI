// Imports
const { Storage } = require("../models")
const URL_STATIC = process.env.PUBLIC_URL
/**
 * - Obtenemos los Items
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
   const data = await Storage.find({})

   res.send({ data })
}

/**
 * - Obtenemos un Item
 * @param {*} req
 * @param {*} res
*/

const getItem = async (req, res) => {

}

/**
 * - Crea un Item
 * @param {*} req
 * @param {*} res
*/

const createItem =  async (req, res) => {
    const { body, file } = req
    
    const fileData = {
        name: file.filename,
        url: `${URL_STATIC}/${file.filename}`
    }
    const data = await Storage.create(fileData)
    res.send({ data })
}

/**
 * - Actualiza un Item
 * @param {*} req
 * @param {*} res
*/

const updateItem = async (req, res) => {

}

/**
 * - Elimina un Item
 * @param {*} req
 * @param {*} res
*/

const deleteItem = async (req, res) => {

}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}