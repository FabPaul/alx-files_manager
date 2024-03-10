const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const uri = `mongodb://${host}:${port}`;
    const client = new MongoClient(uri);
    client.connect();
    this.client = client;
    this.database = database;
  }

  isAlive() {
    if (this.client.connected) {
      return true;
    }
    return false;
  }

  async nbUsers() {
    const db = this.client.db(this.database);
    const collection = db.collection('users');
    const users = await collection.find({}).toArray();
    return users.length;
  }

  async nbFiles() {
    const db = this.client.db(this.database);
    const collection = db.collection('files');
    const files = await collection.find({}).toArray();
    return files.length;
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
