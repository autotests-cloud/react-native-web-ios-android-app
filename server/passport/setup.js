
const passport = require("passport")
const passportJWT = require("passport-jwt")

const User = require("../models/Users")

const { ExtractJwt, Strategy: JwtStrategy} = passportJWT

const { JWT_KEY } = process.env

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //ExtractJwt.fromAuthHeaderAsBearerToken()
    secretOrKey: JWT_KEY
}

passport.use(new JwtStrategy(jwtOptions, async (jwt_payload, next) => {
    const user = await User.findById(jwt_payload._id)
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
}))

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser((_id, done) => {
    User.findById(_id, (err, user) => {
        done(err, user)
    })
})

module.exports = passport