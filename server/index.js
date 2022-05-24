const admin = require("firebase-admin");

const serviceAccount = require("./service-account-key.json");

const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://personal-color-62f62-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "personal-color-62f62"
});
