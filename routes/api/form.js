// Customer Form
const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// Customer Form Model
const Form = require("../../models/Form");

//  @route  POST api/customerForm
//  @desc   Customer contact form
//  @access Public
router.post(
  "/",
  [
    check("name", "Please inlcude your name")
      .not()
      .isEmpty(),
    check("phone", "Please enter your phone number")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email address, i beg").isEmail()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, company, phone, email, eventDate, notes } = req.body;

      const newForm = new Form({
        name,
        company,
        phone,
        email,
        eventDate,
        notes
      });

      const form = await newForm.save();

      res.json(form);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
