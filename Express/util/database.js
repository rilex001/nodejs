const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://nikola:misarska8@cluster0.oo5b6.mongodb.net/shop?retryWrites=true&w=majority')
    .then(client => {
        console.log('Connected!')
        _db = client.db()
        callback()
    })
    .then(err => {
        console.log(err)
        throw err
    })
}

const getDb = () => {
    if (_db) {
        return _db
    }
    throw 'No database found'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb