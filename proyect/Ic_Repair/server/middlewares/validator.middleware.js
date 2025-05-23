export const validateSchema = (schema) => 
    (req, res, next) => {
        try {
            schema.parse(req.body)
        next()     
    }catch(err){
        return res.status(404).json(err.errors.map(error => error.message))
    }
}
