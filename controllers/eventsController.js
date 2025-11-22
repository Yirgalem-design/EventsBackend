const pool = require("../db");

exports.getEvents = async (req, res) => {
  const result = await pool.query("SELECT * FROM events");
  res.json(result.rows);
};

exports.createEvent = async (req, res) => {
  const { title, description, date } = req.body;
  const result = await pool.query(
    "INSERT INTO events (title, description, date) VALUES ($1, $2, $3) RETURNING *",
    [title, description, date]
  );
  res.json(result.rows[0]);
};
