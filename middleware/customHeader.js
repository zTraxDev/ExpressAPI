const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key
        if(apiKey === "Bernard"){
            next()
        } 
        else {
            res.status(401).json({message: "Unauthorized"})
        } 
    } catch(e) {

    }
}

module.exports = customHeader