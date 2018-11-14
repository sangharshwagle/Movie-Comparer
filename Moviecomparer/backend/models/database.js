const mongoose = require ('mongoose');

const databaseSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    repassword: String,
});

module.exports = mongoose.model('Database', databaseSchema);