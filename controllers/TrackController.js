// Imports
const { Track } = require("../models")
/**
 * - Obtenemos los Items
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
   const data = await Track.find({})

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
    const { body } = req
    console.log(body)
    const data = await Track.create(body)
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