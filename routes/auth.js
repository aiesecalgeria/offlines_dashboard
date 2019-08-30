const express = require("express");
const router = express.Router();

// bring the middlware
//const auth = require("../../middleware/auth");

// expa
//   .getToken()
//   .then(console.log)
//   .catch(console.log);

//expa.get('current_person.json').then(console.log).catch(console.log);

// bring USER MODEL

//const User = require("../../models/User");

// everything needed for authentifiaction
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

// @route   GET api/auth
// @desc    test route
// @acess   Public

// router.get("/", auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     res.json(user);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("serveer error");
//   }

//   res.send("Auth route");
// });

// @route   POST api/users
// @desc    Autenticate user and get token
// @acess   Public because u have to get the token to make request tu private routes

router.post(
  "/",
  [
    check("email", "please include valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // see if user exits

    try {
      // use the wrapper function

      var expa = require("../midleware/node-gis-wrapper-master/index.js")(
        email,
        password,
        false
      );

      var aiesecer = await expa.get("current_person.json");

      res.send({ aiesecer });
    } catch (err) {
      if (err.message === "undefined") {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }
      console.error(err.message);
      res.status(500).send("Serveur error");
    }
  }
);

module.exports = router;
