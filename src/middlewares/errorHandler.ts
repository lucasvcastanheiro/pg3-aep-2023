import { ErrorRequestHandler } from 'express'

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {    
    const {status, message} = error
    
    return res.status(status || 500).send({
        message
    })
}

export default errorHandler
