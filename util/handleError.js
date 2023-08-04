const handleErrorHttp = (res, message = String, code) => {
    try {
        res.status(code)
        res.status({message: message})
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    handleErrorHttp
}