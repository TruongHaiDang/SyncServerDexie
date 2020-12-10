const MongoClient = require('mongodb').MongoClient;
class Mongo {
  constructor() {
    this.option = { useUnifiedTopology: true }
  }
  addDocs(dbName = '', collectionName = '', data = {}) {
    return new Promise((resolve, reject) => {
      const url = `mongodb://localhost:27017/${dbName}`;
      MongoClient.connect(url, function(err, client) {
        if (err) return reject(err);
        const applications = client.db(dbName).collection(collectionName).insertOne(data);
        applications.then(data => {
          resolve(data.ops);
          client.close();
        })
        .catch(err => {
          reject(err);
          client.close();
        })
      });
    })
  }
  updateDocs(dbName, collectionName, filter, data) {
    return new Promise((resolve, reject) => {
      const url = `mongodb://localhost:27017/${dbName}`;
      MongoClient.connect(url, (err, client) => {
        if (err) return reject(err);
        const applications = client.db(dbName).collection(collectionName).findOneAndReplace(filter, data)
        applications.then(data => {
          resolve(data);
          client.close();
        })
        .catch(err => {
          reject(err);
          client.close();
        })
      })
    })
  }
  deleteDocs(dbName, collectionName, filter) {
    return new Promise((resolve, reject) => {
      const url = `mongodb://localhost:27017/${dbName}`;
      MongoClient.connect(url, (err, client) => {
        if (err) return reject(err);
        const applications = client.db(dbName).collection(collectionName).findOneAndDelete(filter)
        applications.then(data => {
          resolve(data);
          client.close();
        })
        .catch(err => {
          reject(err);
          client.close();
        })
      })
    })
  }
}
module.exports = Mongo;