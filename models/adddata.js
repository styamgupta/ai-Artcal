const mongoose = require('mongoose');

const adddata = new mongoose.Schema({
    totalprice: { type: Number, required: true },
    gallname: { type: String, required: true},
    kitnakg: { type: Number, required: true },
    state:{type:String,default:"aavak"}
},{ timestamps: true });
mongoose.models = {}
export default mongoose.model("data",adddata);
