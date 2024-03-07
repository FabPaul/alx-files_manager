const redis = require('redis');

class RedisClient{
    constructor() {
        this.client = redis.createClient();
        this.client.on_connect('error', (err) => {
            console.error('Redis client error', err);
        });
    }

    isAlive() {
        if (this.client.connected) {
            return true;
        } else {
            return false;
        }
    }

    async get(key) {
        return new Promise((resolve, reject) => {
            this.client.get(key, (err, reply) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(reply);
                }
            });
        });
    }

    async set(key, value, duration) {
        return new Promise((resolve, reject) => {
            this.client.setex(key, duration, value, (err, reply) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(reply);
                }
            });
        });
    }

    async del(key) {
        return new Promise((resolve, reject) => {
            this.client.del(key, (err, reply) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(reply);
                }
            });
        });
    }
}

const redisClient = new RedisClient();
module.exports = redisClient;
