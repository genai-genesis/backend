const {
  logUserIn,
  createUser,
} = require("../controllers/users")

const express = require("express")

const authRouter = express.Router()

authRouter.post("/login", logUserIn)
authRouter.post("/signup", createUser)
module.exports = {
  authRouter,
}
