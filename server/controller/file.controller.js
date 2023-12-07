const db = require('../db');
const Uuid = require('uuid');
const config = require ('config');

class FileController {
  async uploadAvatar(req, res) {
    try {
      const file = req.files.file;
      const userId = req.user.id;

      const avatarName = Uuid.v4() + ".jpg";

      file.mv(config.get("staticPath") + "/" + avatarName);

      const user = await db.query(
        `update person set avatar=$1 where id=$2 RETURNING *`,
        [avatarName, userId]
      );
      //return res.json({ message: "Avatar was uploaded" });
      return res.json(user.rows[0]);
    } catch (error) {
      console.log(error);
      res.send({ message: "Upload avatar server error" });
    }
  }
}

module.exports = new FileController();
