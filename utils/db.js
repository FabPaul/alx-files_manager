const { MongoClient } = require('mongodb');

class DBClient{
    constructor() {
        const host = process.env.DB_HOST || 'localhost';
        const port = process.env.DB_PORT || 27017;
        const database = process.env.DB_DATABASE || 'files_manager';
        const uri = `mongodb://${host}:${port}/${database}`;
        this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    isAlive() {
        if (this.client.connected) {
            return true;
        } else {
            return false;
        }
    }

    async nbUsers() {
        const collection = this.client.db().collection('users');
        return collection.countDocuments();
    }

    async nbFiles() {
        const collection = this.client.db().collection('files');
        return collection.countDocuments();
    }
}

const dbClient = new DBClient();
module.exports = dbClient;