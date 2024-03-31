const {
  logUserIn,
  createUser,
  getItems,
  addItems,
} = require("../controllers/users")

const express = require("express")

const authRouter = express.Router()

authRouter.post("/login", logUserIn)
authRouter.post("/signup", createUser)
// authRouter.get("/getfridge", getItems)
authRouter.get('/items/:username', getItems);

authRouter.post("/additem", addItems)
module.exports = {
  authRouter,
}
