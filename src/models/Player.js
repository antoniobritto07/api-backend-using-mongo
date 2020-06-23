const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    nickname: {
        type: String,
        required: true,
    },
    level: {
        type: Number,
        required: true
    }
});

const PlayerData = mongoose.model('Player', PlayerSchema);

class Player {

    //Create
    static newPlayer(data) {
        return new Promise((resolve, reject) => {
            PlayerData.create(data).then((result) => {
                resolve(result);
            })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    //Index
    static getAllPlayers() {
        return new Promise((resolve, reject) => {
            PlayerData.find({}).then((results) => {
                resolve(results);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    //Update
    static updatePlayer(name, player) {
        return new Promise((resolve, reject) => {
            PlayerData.findOneAndUpdate(name, player).then(()=> {
                resolve();
            }).catch((error)=> {
                reject(error);
            });
        });
    }

    //Delete
    static deletePlayer(name){
        return new Promise((resolve, reject) => {
            PlayerData.findOneAndDelete(name).then(()=> {
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

module.exports = Player;