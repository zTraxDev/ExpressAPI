const express = require("express")
const fs = require("node:fs")
const router = express.Router()

const pat = __dirname;

const filesExtension = (file) => {
    return file.split(".").shift() // Funcion flecha para dividir el nombre del archivo desde el comienzo, Ej: ["index", "js"]
}

fs.readdirSync(pat).filter((files) => { // Filtramos los archivos del directorio
    if(fs.lstatSync(pat + "/" + files).isDirectory()) return false

    const name = filesExtension(files) // Divimos los nombre de los archivos en un array []
    if(name !== "index") { // Si el nombre del archivo es difernete a Index
        console.log(`[Enrutador] Cargando ruta de ${name}`) // Mostramos por consola los nombre de los archivos
        router.use(`/${name}`, require(`./${files}`)) // Obtenemos las rutas y las cargamos
    }
})
 

module.exports = router