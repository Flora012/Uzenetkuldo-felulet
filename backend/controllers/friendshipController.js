
const db = require('../db/dbContext');

exports.getAllFriendships = (req, res) => {
  db.query('SELECT * FROM friendships', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.createFriendship = (req, res) => {
  const { user_id, friend_id } = req.body;
  db.query(
    'INSERT INTO friendships (user_id, friend_id, status) VALUES (?, ?, "pending")',
    [user_id, friend_id],
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Barátság létrehozva!', id: results.insertId });
    }
  );
};
