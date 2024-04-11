import passport from "passport";
import { PassportConfig } from "../../config/passportConfig.js";
import * as local from "passport-local";
import jwt from "passport-jwt";
import dbUsersController from "../../controllers/user.controller.js";
import createHash from "../bcrypt/bryptCreateHash.js"
import useValidPassword from "../bcrypt/bryptUseValidPassword.js";
import { cookieExtractor } from "../jwt/cookieExtractor.js";
import NewUserDto from "../../dto/userDto/newUserDto.js";
const DBUsersController = new dbUsersController();
const LocalStrategy = local.Strategy
const JWTStrategy = jwt.Strategy
import CustomError from "../../handlers/errors/CustomError.js";
import ERROR_TYPES from "../../handlers/errors/ErrorTypes.js";
import ERROR_CAUSES from "../../handlers/errors/ErrorCauses.js";
import EErrors from "../../handlers/errors/EErrors.js";
import logger from "../middlewares/logs/logger.middleware.js";


const initializePassport = () => {
    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: jwt.ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: PassportConfig.privateKey
    }, (jwt_payload, done) => {
        try {
            done(null, jwt_payload)
        } catch (error) {
            req.logger.error(error.message)
            done(error)
        }
    }))

    passport.use(
        'register',
        new LocalStrategy(
            { passReqToCallback: true, usernameField: 'email' },
            async (req, username, password, done) => {
                if (!username || !password) {
                    CustomError.createError({
                    name: ERROR_TYPES.USER_CREATION_ERROR,
                    cause: ERROR_CAUSES.USER_CREATION_ERROR,
                    message: ERROR_CAUSES.USER_CREATION_ERROR,
                    code: EErrors.INVALID_USER_INFO,
                    })
                }
                    req.logger.info('creando usuario')
                    const { email } = req.body
                    const user = await DBUsersController.getUserByEmail({ email })
                    if (user) {
                        req.logger.info('Este usuario ya se encuentra registrado previamente')
                        return done(null, false)
                    }

                    const newUserInfo = new NewUserDto(req.body)

                    const newUser = await DBUsersController.createOne(newUserInfo)

                    return done(null, newUser)
            }
        )
    )

    passport.use(
        'local-login',
        new LocalStrategy(
            { usernameField: 'email' },
            async (username, password, done) => {
                try {
                    const user = await DBUsersController.getUserByEmail({ email: username })
                    if (!user) {
                        req.logger.warn('Bad request')
                        return done(null, false)
                    }

                    if (!useValidPassword(user, password)) {
                        req.logger.warn('Bad request')
                        done(null, false)
                    }

                    return done(null, user)
                } catch (error) {
                    req.logger.error(error.message)
                    done(error)
                }
            }
        )
    )

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })

    passport.deserializeUser(async (id, done) => {
        const user = DBUsersController.getAllUsers(id)
        done(null, user)
    })
}

export default initializePassport