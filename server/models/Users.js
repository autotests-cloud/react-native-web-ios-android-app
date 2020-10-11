const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true
        },
        lang: {
            type: String,
            enum: ["en", "ru"],
            default: "en"
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String
        },
        role: {
            type: String,
            enum : ['user','admin'],
            default: "user"
        },
    },
    { 
        strict: false,
        timestamps: true,
        toJSON: {
            transform: (doc, ret, options) => {
                const { email, username, _id, createdAt } = ret
                return { 
                    email, username, createdAt
                }
            }
        }
    }
)

module.exports = User = mongoose.model("users", UserSchema)