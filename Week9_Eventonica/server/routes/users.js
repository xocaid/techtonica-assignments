//This code comes directly from the instructions, swapped user with events, added router to index.js
// server/routes/ users.mjs;
import express from "express";
import db from "../db/db-connection.js";
import { validatePhoneNumber, validateEmail } from "../validations/validation.js";

const router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {

  try {
    //PostgreSQL to return phone_number in desired format: (xxx)xxx-xxxx
    const users = await db.any(
      String.raw`
        SELECT
          id,
          first_name,
          last_name,
          email,
          REGEXP_REPLACE(phone_number, '(\d{3})(\d{3})(\d{4})', '(\1) \2-\3') AS phone_number
        FROM users;
      `);
    // Convention is to write directives(SELECT, FROM, etc.) and functions in all caps.
    //-- regexp_replace is a function in postgresql & takes 3 parameters: column (you want to retrieve info from), pattern, replacement string
    //2nd Parameter
    // \d --> single digit
    // {number} --> number of digits to group together. This is grouping data into 123 456 7890
    //3rd Parameter
    // \number --> represents the group its referring to group: 123
    // () --> represents the parantheses you want to add --> (123)
    // \number-\number --> represents group 2 and 3 with a hyphen in the middle; important here is the hyphen only : 456-7890
    // AS --> renames the entire line to what you want...otherwise it will called the entire function on lines 14-21
    // ** String.raw --> Fixed the problem of \, \\, \\\\.....it is JS for template literals; removes the special meaning of \, without it it gives \ a special meaning, which it usually has in code
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* ADD users listing. */
router.post('/', async (req, res) => {
  //need to add bodyParser to be able to use the req.body.etc. Without it, the code gets stuck here
  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number
  };
  if (!validatePhoneNumber(user.phone_number)) {
    res.status(400).json({ message: 'Phone Number Validation Failed.' });
    return;
  };

  if (!validateEmail(user.email)) {
    res.status(400).json({ message: 'Email Validation Failed.' });
    return;
  };
  console.log('User Info Input:', user);

  try {
    const createdUser = await db.one(
      'INSERT INTO users(first_name, last_name, email, phone_number) VALUES($1, $2, $3, $4) RETURNING *',
      [user.first_name, user.last_name, user.email, user.phone_number]
    );
    console.log('Created User:', createdUser);
    res.send(createdUser);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* DELETE users listing. */
router.delete("/:id", async (req, res) => {
  // : acts as a placeholder
  const userId = req.params.id;
  try {
    await db.none(`
    DELETE FROM users 
    WHERE id=$1`,
      [userId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

export default router;