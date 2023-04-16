const illness = require("../db-models/ilness-schema");
const doctor = require("../db-models/doctor-schema");
const user = require("../db-models/user-schema");
const pos = require("pos");
const getIllnes = async (req, res) => {
  const symptoms = req.query.symptoms;
  console.log(req.query.symptoms);
  const words = new pos.Lexer().lex(symptoms);
  const taggedWords = new pos.Tagger().tag(words);
  const nouns = [];

  for (let i = 0; i < taggedWords.length; i++) {
    const taggedWord = taggedWords[i];
    const word = taggedWord[0];
    const tag = taggedWord[1];
    if (tag.startsWith("NN")) {
      nouns.push(word);
    }
  }

  console.log(nouns);
  try {
    const illnesses = await illness.find({ symptoms: { $in: nouns } });
    const matchedIllnesses = illnesses.map((illness) => {
      const percentageMatch = calculatePercentageMatch(illness.symptoms, nouns);
      return { ...illness.toObject(), percentageMatch };
    });
    console.dir(matchedIllnesses)
    res.status(200).json({ 
      illnesses: illnesses,
      matchedIllnesses: matchedIllnesses
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
const calculatePercentageMatch = (symptomsInDb, userSymptoms) => {
  const matchedSymptoms = symptomsInDb.filter((symptom) => userSymptoms.includes(symptom));
  return (matchedSymptoms.length / symptomsInDb.length) * 100;
};

const createIllness = async (req, res) => {
  const illness_params = req.body;
  try {
    const newIllness = await illness.create(illness_params);
    res.status(200).json({ newIllness });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

//
//
//illnesses
//
//

const getDoc = async (req, res, next) => {
  try {
    console.log(req.query);
    const doc = await doctor.find({ name: req.query.name });
    console.log("doc name" + doc[0]);
    res.send(doc);
  } catch (error) {
    console.log(error);
    res.status(500).json({ err });
  }
};

const createDoc = async (req, res) => {
  try {
    const newDoc = await doctor.create(req.body);
    res.status(200).json({ newDoc });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err });
  }
};

//
//
//doctors
//
//

const addDocumentToUser = async (req, res) => {
  try {
    console.dir(req.body.document);
    const newDocument = req.body.document;
    const name = req.body.document.Name;
    console.log(newDocument, name);
    const updatedUser = await user.findOneAndUpdate(
      { name: name },
      { $push: { documents: newDocument } },
      { new: true }
    );
    console.log(updatedUser);
    res.send(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
const createUser = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.status(200).json({ newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const getUserDocuments = async (req, res) => {
  try {
    const documents = await user.find({ name: req.query.name });
    res.send(documents);
  } catch (error) {
    console.log(error);
  }
};

//
//
//users
//
//

module.exports = {
  getIllnes,
  createIllness,
  getDoc,
  createDoc,
  createUser,
  getUserDocuments,
  addDocumentToUser,
};
