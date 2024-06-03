import mongoose, { trusted } from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requiered: true
    },
    email: {
        type: String,
        requiered: true,
        unique: true 
    },
    password: {
        type: String,
        requiered: true,
    },
    cartData: {
        type: Object,
        default: {}
    },
    verified: {
        type: Boolean,
        default: false
    }
}, { minimize: false })

const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;