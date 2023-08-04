// Imports
const { matchedData } = require("express-validator")
const { Track } = require("../models")
const { handleErrorHttp } = require("../util/handleError")
/**
 * - Obtenemos los Items
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
    try{
        const data = await Track.find({})
        res.send({ data })
    }catch(e){
        handleErrorHttp(res, "ERROR_GET_ITEM", 403)
    }
}

/**
 * - Obtenemos un Item
 * @param {*} req
 * @param {*} res
*/

const getItem = async (req, res) => {
    try{
        req = matchedData(req)
        const { id } = req
        const data = await Track.findById(id)
        res.send({ data })
    }catch(E){
        handleErrorHttp(res, "ERROR_GET_ITEM", 403)
    }
}

/**
 * - Crea un Item
 * @param {*} req
 * @param {*} res
*/

const createItem =  async (req, res) => {
    try{
        const body = matchedData(req)
        console.log(body)
        const data = await Track.create(body)
        res.send({ data }) 
    }catch(e){
        handleErrorHttp(res, "ERROR_CREATE_ITEM", 403)
    }
}

/**
 * - Actualiza un Item
 * @param {*} req
 * @param {*} res
*/

const updateItem = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req) 
        const data = await Track.findByIdAndUpdate(
            id, body
        )
        res.send({  data })
    }catch(e){
        handleErrorHttp(res, "ERROR_UPDATE_ITEM", 403)
    }
}

/**
 * - Elimina un Item
 * @param {*} req
 * @param {*} res
*/

const deleteItem = async (req, res) => {
    try {
        const {id} = matchedData(req)
        const data = await Track.delete({_id:id})
        res.send({ data })
    }catch(e){
        handleErrorHttp(res, "ERROR_DELETE_ITEM", 403)
    }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}