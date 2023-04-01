const express = require("express");
const router = express.Router();
const {
  getIllnes,
  createIllness,
  getDoc,
  createDoc,
} = require("../controllers/controllers");
router.route("/illness").get(getIllnes).post(createIllness);
router.route("/docs").get(getDoc).post(createDoc);
module.exports = router;
