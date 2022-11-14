const {User} = require ('../models')
const middleware = require ('../middleware')

const Login = async (req,res)=>{
    try{

    }catch(error){
        throw error
    }
}

const Register = async (req,res)=>{
    try{
        const {email, password, firstName, lastName, username,age}= req.body
        let passwordDigest = await middleware.hashPassword(password)
        const user = await User.create({email, passwordDigest, firstName, lastName, username,age})
        res.send(user)

    } catch(error){
        throw error
    }
}

module.exports ={
    Login,
    Register
}