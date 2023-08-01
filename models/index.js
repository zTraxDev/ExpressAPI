const models = {
    User: require('./nosql/UserModel'),
    Track: require('./nosql/TrackModel'),
    Storage: require("./nosql/StorageModel")
}

module.exports = models;