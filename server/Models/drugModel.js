const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dosageSchema = new Schema({
    amount:String
})

const drugSchema = new Schema({
    name:String,
    dosages:[dosageSchema],
    ingredients:[{
        name:String
    }]

})

module.exports = mongoose.model('Drug',drugSchema);