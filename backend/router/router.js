const express = require("express");
const router = express.Router();
const {
  getIllnes,
  createIllness,
  getDoc,
  createDoc,
  getUserDocuments,
  createUser,
  addDocumentToUser,
} = require("../controllers/controllers");
router.route("/illness").get(getIllnes).post(createIllness);
router.route("/docs").get(getDoc).post(createDoc);
router.route("/users").get(getUserDocuments).post(createUser);
router.route("/user").post(addDocumentToUser);
module.exports = router;
