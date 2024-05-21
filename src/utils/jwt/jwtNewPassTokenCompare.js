import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();
const PRIVATE_KEY = process.env.JWT_PRIVATE_KEY

export const newPassToken = (req, res, next) => {
    const authHeader = req.headers.cookie
    if (!authHeader)
        return res.redirect('/recovery')

    const token = authHeader.split('=')[1]
    console.log(authHeader)
    console.log(`Este otro`, token)

    jwt.verify(token, PRIVATE_KEY, (error, credentials) => {
        console.log(error)
        if (error)
            return res.status(401).json({ status: 'error', error: 'Unauthorized' })

        next()
    })
}