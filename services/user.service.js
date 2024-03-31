const User = require('../models/user.model')

const createUser = async (body) => {
    const email = body.email;
    const name = body.name;
    const password = body.password;
    if (!(email && name && password)){
        throw new Error ("Incorrect Input")
    }

    const newUser = new User({
        email: email,
        name: name,
        password: password,
        id: name
    })
    console.log(newUser)
    return await newUser.save()
    }
    const getUser = async (id)=>{ //parameter should be string of the id??
        const user = await User.findById(id)
        return user
    }
    const getUserByEmail = async (email) => {
        const user = await User.findOne({email: email})
        return user
    }

    module.exports = {
        createUser, 
        getUser, 
        getUserByEmail
    };