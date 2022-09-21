// server/routes/ events.mjs;
import express from "express"; 
import db from "../db/db-connection.js";

const router = express.Router();
/* GET events listing. */

router.get('/', async function (req, res, next) {

  try {
    const events = await db.any('SELECT * FROM events', [true]);
    res.send(events);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* Add events listing. */

router.post('/', async (req, res) => {
  const events = {
    name: req.body.name,
    email: req.body.description
  };
  console.log(events);
  try {
    const createdevents = await db.one(
      'INSERT INTO events(name, email) VALUES($1, $2) RETURNING *',
      [events.name, events.description]
    );
    console.log(createdEvents);
    res.send(createdEvents);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* Delete events listing. */

  //Parameterized queries use placeholders instead of directly writing the
  //values into the statements. Parameterized queries increase security and performance.

router.delete("/:id", async (req, res) => {
    // : acts as a placeholder
  const eventsId = req.params.id;
  try {
  await db.none("DELETE FROM events WHERE id=$1", [eventsId]);
  res.send({ status: "success" });
  } catch (e) {
  return res.status(400).json({ e });
  }
});

export default router;