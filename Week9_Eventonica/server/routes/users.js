//This code comes directly from the instructions, swapped user with events, added router to index.js
// server/routes/ users.mjs;
import express from "express";
import db from "../db/db-connection.js";

const router = express.Router();
/* GET users listing. */

router.get('/', async function (req, res, next) {

  try {
    const users = await db.any('SELECT * FROM users', [true]);
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* Add users listing. */

router.post('/', async (req, res) => {
  //need to add bodyParser to be able to use the req.body.etc. Without it, the code gets stuck here
  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone_number: req.body.phone_number
  };
  console.log(user);
  try {
    const createdUser = await db.one(
      'INSERT INTO users(first_name, last_name, email, phone_number) VALUES($1, $2, $3, $4) RETURNING *',
      [user.first_name, user.last_name, user.email, user.phone_number]
    );
    console.log(createdUser);
    res.send(createdUser);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* Delete users listing. */

//Parameterized queries use placeholders instead of directly writing the
//values into the statements. Parameterized queries increase security and performance.

router.delete("/:id", async (req, res) => {
  // : acts as a placeholder
  const userId = req.params.id;
  try {
    await db.none("DELETE FROM users WHERE id=$1", [userId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

export default router;