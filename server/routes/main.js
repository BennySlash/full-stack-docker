const express = require("express");
const router = express.Router();
const users = require("../utils/users");
const { getEmployeeScores } = require("../controller/main");

router.get("/users", (req, res) => {
  const employeeEmails = users.map(
    ({ "Email Address [Required]": email }) => email
  );

  res.send(employeeEmails);
});

router.route("/employee-Score").get(getEmployeeScores);

module.exports = router;
