const illness = require("../db-models/ilness-schema");
const doctor = require("../db-models/doctor-schema");
const pos = require("pos");
const getIllnes = async (req, res) => {
  const symptoms = req.body.symptoms;
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
    res.status(200).json({ illnesses });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
    const doc = await doctor.find({ name: req.params.name });
    console.log(req.params);
    res.status(200).json({ doc });
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

module.exports = {
  getIllnes,
  createIllness,
  getDoc,
  createDoc,
};
