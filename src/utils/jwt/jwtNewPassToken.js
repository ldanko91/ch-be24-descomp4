import { config } from "dotenv";
import jwt from "jsonwebtoken";

config();
const PRIVATE_KEY = process.env.JWT_PRIVATE_KEY

export const generateNewPassToken = user => {
    const token = jwt.sign({ user }, PRIVATE_KEY, { expiresIn: 3600 })
    return token
}