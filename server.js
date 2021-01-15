
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://katers0259:Coolie23@fitness-app.99qpm.mongodb.net/katers0259?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

