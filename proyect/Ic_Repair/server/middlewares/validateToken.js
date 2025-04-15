import jwt from 'jsonwebtoken'


export const authRequired = async (req, res, next) => {
      const {token} = req.cookies

      if(!token){
        return res.status(401).json({message:"No token found, authorization denied"})
      }else{
        jwt.verify(token, "secret123", (err, user) => {
           if(err){
              return res.status(403).json({message: "Invalid token"})  
            } else {
              req.user = user
              // console.log(req.user)
              console.log("Usuario autenticado en authRequired:", req.user);
              next()
            }
        })
      }
}