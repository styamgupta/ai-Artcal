const mongoose = require('mongoose');

const contactdata = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true ,unique:true},
    address: { type: String},
    mobile:{ type: String},
    message:{ type: String, required: true},

},{timestamps:true});
mongoose.models = {}
export default mongoose.model("contactdatas",contactdata);