const illness = require("../db-models/user-schema");

const getIllnes = async (req, res) => {
  const symptoms = req.params.symptoms;
  try {
    const illnesses = await illness.find({ symptoms: symptoms });
    res.status(200).json({ illnesses });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const createIllness = async (req, res) => {
  const illness = req.body;
  try {
    const newIllness = await illness.create(illness);
    res.status(200).json({ illness });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};
