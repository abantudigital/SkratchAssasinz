// Users route
const express = require("express");
const router = express.Router();
const gravatarUrl = require("gravatar-url");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

// User model
const User = require("../../models/User");

//  @route  POST api/users
//  @desc   Register user
//  @access Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // Get User's gravatar
      const avatar = gravatarUrl(email, {
        size: "200",
        rating: "g",
        default: "mm"
      });

      // Create an instance of a User
      user = new User({
        name,
        email,
        avatar,
        password
      });

      // Create a salt to hash the password
      const salt = await bcrypt.genSalt(10);

      // Encrypt password
      user.password = await bcrypt.hash(password, salt);

      // Save User to the DataBase
      await user.save();

      // Get the payload, include in it the User ID
      const payload = {
        user: {
          id: user.id
        }
      };

      // Sign & return Token back to the Client
      // pass in the Payload, Secret & Token expiration time(optional)
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 }, //! EXPIRE BACK TO 3600 WHEN DEPLOYING APP
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
