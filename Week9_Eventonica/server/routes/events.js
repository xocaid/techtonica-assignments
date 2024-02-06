// server/routes/ events.mjs;
//This code comes directly from the instructions, swapped user with events, added router to index.js
import express from "express";
import db from "../db/db-connection.js";

const router = express.Router();
/* GET events listing. */

router.get('/', async function (req, res, next) {

  try {
    //SQL Query to provide TIMESTAMP data type separately as date & time
    const events = await db.any(
      `SELECT 
      id,
      TO_CHAR(date, 'HH:MI AM') AS event_time,
      TO_CHAR(date, 'MM/DD/YY') AS event_date,
      name, 
      description, 
      category 
      FROM events`,
      [true]);
    res.send(events);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

/* Add events listing. */

router.post('/', async (req, res) => {
  const events = {
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    date: req.body.date,

  };
  console.log(events);
  try {
    const createdEvents = await db.one(
      `INSERT INTO events(name, description, category, date) 
      VALUES($1, $2, $3, $4) 
      RETURNING id,
      TO_CHAR(date, 'HH:MI AM') AS event_time,
      TO_CHAR(date, 'MM/DD/YY') AS event_date,
      name, 
      description, 
      category`,
      [events.name, events.description, events.category, events.date]
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
    await db.none(`
    DELETE FROM events 
    WHERE id=$1`,
      [eventsId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

export default router;