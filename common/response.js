let response = (res, code, message, result)=>{
    res.send({
        status:code,
        message:message,
        result:result
    })
}


module.exports = {
    response
}
