const bcrypt = require("bcryptjs")
const express = require("express")
const router = express.Router()
const passport = require("passport")
const jwt = require('jsonwebtoken')

const User = require("../models/Users")

const { JWT_KEY } = process.env

router.post("/register_login", (req, res, next) => {
    const { email, password, lang } = req.body
    User.findOne({ email: email })
        .then(user => {

            // Create new User
            const isAdmin = (process.env.BASE_EMAIL || "").split(",").includes(email)

            if (!user) {
                const newUser = new User({ email, password, lang })
                // Hash password before saving in database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                const token = jwt.sign({ _id: user._id }, JWT_KEY)
                                return res.status(200).json({ user: user.toJSON(), token, 
                                    message: 'Succesfully signed up user!',
                                    description: 'Account created successfully!',
                                 })
                            })
                            .catch(err => {
                                return res.status(400).json({ 
                                    message: err,
                                    description: "Create account error",
                                 })
                            })
                    })
                })
            } else {
                bcrypt.compare(password, user.password, async (err, isMatch) => {
                    if (err) throw err;

                    if (isMatch) {
                        const token = jwt.sign({ _id: user._id }, JWT_KEY)
                        user.lang = lang
                        await user.save()
                        return res.status(200).json({ user: user.toJSON(), token, message: 'Succesfully signed up user!' })
                    } else {
                        return res.status(400).json({ 
                            message: "Error",
                            description: "Error signing up user",
                        })
                    }
                })
            }
        })
        .catch(err => {
            return res.status(400).json({ message: err })
        })
})

router.get("/", passport.authenticate('jwt', { session: false }), function(req, res){
    
    res.json({ user: req.user.toJSON() });
})

module.exports = router