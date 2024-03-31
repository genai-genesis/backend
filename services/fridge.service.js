const Group = require('../models/group.model');

const getFridge = async (id) => {
    const fridge = await Fridge.findById(id)
    return fridge
}

const getItems = async (id) => {
    if (!id) {
        throw new Error("Incorrect Input")
    }

    const items = await Fridge.find({items:item})
    return items

}
const createFridge = async ( body ) => {
    const id = body.id
    console.log(body)
    if (id) {
        throw new Error("Incorect Input")
    }

    const newFridge = new Fridge ()
    newFridge.id = id
    console.log(newFridge)
    return await newFridge.save()
}




//dont know how to do this
const addToFridge = async (body) => {
    const user = body.id;
//    const invite = body.id
    
    if (!(users)) {
        throw new Error("Incorect Input")
    }

    const fridge = await Fridge.findById(id)
    group.users = filterForUnique(group.users, users)
    return await id.save()
}

const removeFromFridge = async (body) =>{
    
}