const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//Create a user using : POST "/api/auth/". Doesn't require Auth
router.post(
  "/createuser",
  body("name").isLength({ min: 3 }),
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),

  async (req, res) => {
    //if there are erroes, return bad req and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user with this email exist already

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "user with same email exist" });
      }
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      //   .then((user) => res.json(user))
      //   .catch((err) => {
      //     console.log(err);
      //     res.json({
      //       error: "please enter a unique value for email",
      //       message: err.message,
      //     });
      //   });
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

module.exports = router;
