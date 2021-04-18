const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{type:String,required:true,index:{unique:true}},
    email:mongoose.SchemaTypes.Email,
    password:{type:String,required:true},
    drugs: [{ type:Schema.Types.ObjectId,ref:'Drug' }]

})

module.exports = mongoose.model('User',userSchema);