const { Request, Response } = require("express")
const User = require("../models/auth_user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
/**
 *
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
const createUser = async (req, res) => {
  let { password, username } = req.body
  console.log(req.body)

  try {
    // Error Checking:
    // By this point, not a google user, so should have username, email, and password.
    // If missing any single one, return an error
    if (!username || !password) {
      return res.status(404).send({ message: "Invalid Information" })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({ password: hashedPassword, username })

    const token = jwt.sign(
      {
        username,
        hashedPassword,
      },
      process.env.JWT_SECRET
    )
    try {
      await user.save()
    } catch (e) {
      if (e.errors) {
        const message = e.errors.username
        if (message) {
          return res.status(400).send({ message })
        }
      }
    }
    return res.status(200).send({ user: token })
  } catch (err) {
    console.error(err.message)

    res.status(500).send({ message: "Oops, server side error" })
  }
}

const logUserIn = async (req, res) => {
  const { username, password } = req.body

  //Error checking in case no email or password
  if (!username || !password) {
    return res.status(404).send({ message: "Invalid Information" })
  }

  const user = await User.findOne().where("username").equals(username).exec()

  if (user == null) {
    return res.status(400).send({ message: "User Not Found" })
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          username: username,
          password: user.password,
        },
        process.env.JWT_SECRET
      )
      return res.status(200).send({ message: "success", user: token })
    } else {
      return res.status(400).send({ message: "Incorrect Password." })
    }
  } catch (err) {
    console.error(err.message)
    res.status(500).send({ message: err.message })
  }
}

module.exports = {
  logUserIn,
  createUser,
}
