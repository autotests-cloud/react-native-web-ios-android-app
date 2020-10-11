const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')

const passport = require("./passport/setup")
const auth = require("./routes/auth")

const app = express()

const { MONGO_URI, PORT } = process.env

mongoose
    .connect(MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true 
    })
    .then(() => console.log(`MongoDB connected successful`))
    .catch(err => console.log(`MongoDB connect error:
                            `) || console.log(err))


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use("/api/auth", auth)
app.get("/", (req, res) => res.send("٩(◕‿◕｡)۶"))

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}!`))