import userModel from "../models/userModel.js";
import tokenModel from "../models/tokenModel.js";
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'
import sendEmail from "../utils/sendEmail.js";
import verifactionMail from "../mail/template/verifactionMail.js";


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({
                success: false,
                message: "User does not exist."
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({
                success: false,
                message: "Invalid Credintials."
            })
        }

        if (!user.verified) {
            let emailToken = await tokenModel.findOne({
                userId: user._id
            })
            if (!emailToken) {
                emailToken = new tokenModel({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString("hex")
                })
                await emailToken.save();
                
            }
            const url = `${process.env.BASE_URL}/user/${user._id}/verify/${emailToken.token}`
            await sendEmail(user.email,"Verify your Email",verifactionMail(url))
            return res.json({
                success: false,
                message: "An Email sent to your account please verify."
            })
        }

        const token = createToken(user._id);

        return res.json({
            success: true,
            token
        })

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Error"
        })
    }
}



// Register User 
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // checking user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({
                success: false,
                message: "User alreary exists."
            })
        }

        //validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Please Enter valid email."
            })
        }

        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Please enter a strong password."
            })
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword    
        })
        
        const user = await newUser.save();

        const emailToken = new tokenModel({
            userId: user._id,
            token: crypto.randomBytes(32).toString("hex")
        })
        await emailToken.save();
        const url = `${process.env.BASE_URL}/user/${user._id}/verify/${emailToken.token}`
        await sendEmail(user.email,"Verify your Email",verifactionMail(url))


        res.json({
            success: true,
            message: "An Email sent to your account please verify."
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "error"
        })
    }
}

const verifyEmail = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) {
            return res.json({
                success: false,
                message: "Invalid link"
            })
        }
    
        const emailToken = await tokenModel.findOne({
            userId: user._id,
            token: req.params.token
        });
        if (!emailToken) {
            return res.json({
                success: false,
                message: "Invalid link"
            })
        }
    
        await userModel.findByIdAndUpdate(user._id, { verified: true });
        await tokenModel.findByIdAndDelete(emailToken._id);
    
        res.json({
            success: true,
            message: "Email Verified Successfully."
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Error"
        })
    }
}

export {
    loginUser,
    registerUser,
    verifyEmail
}