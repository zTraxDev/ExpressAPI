// Imports
const fs = require("node:fs")
const { matchedData} = require("express-validator")
const { Storage } = require("../models")
const { handleErrorHttp } = require("../util/handleError")
const URL_STATIC = process.env.PUBLIC_URL
const STORAGE_PATH = `${__dirname}/../storage`
/**
 * - Obtenemos los Items
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
    try{
        const data = await Storage.find()
        res.send({ data })
    }catch(e){
        console.log(e)
        handleErrorHttp(res, "ERROR_GET_ITEMS", 403)
    }
}

/**
 * - Obtenemos un Item
 * @param {*} req
 * @param {*} res
*/

const getItem_ = async (req, res) => {
    try{
        req = matchedData(req)
        const { id }  = req
        const data = await Storage.findById(id)
        res.send({ data })
    }catch(e){
        console.log(e)
        handleErrorHttp(res, "ERROR_GET_ITEM", 403)
    }

}

/**
 * - Crea un Item
 * @param {*} req
 * @param {*} res
*/

const createItem =  async (req, res) => {
    const {file} = req
    const fileData = {
        url: `${URL_STATIC}/${file.filename}`,
        filename: file.filename,
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
    try{
        const {id}  = matchedData(req)
        const dataFile = await Storage.findById(id)
        const { filename } = dataFile
        const filePath = `${STORAGE_PATH}/${filename}`

        fs.unlinkSync(filePath)

        const data = {
            filePath,
            delete: 1
        }
        res.send({ data })
    }catch(e){
        console.log(e)
        handleErrorHttp(res, "ERROR_DELETE_ITEM", 403)
    }
}

module.exports = {
    getItems,
    getItem_,
    createItem,
    updateItem,
    deleteItem
}