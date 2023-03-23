const admin = require("firebase-admin");

const serviceAccount = require("./account-service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
