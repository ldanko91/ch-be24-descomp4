import bcrypt from 'bcrypt'
const salt = bcrypt.genSaltSync(10)
const createHash = (data) => {
    return bcrypt.hashSync(data, salt)
}

export default createHash