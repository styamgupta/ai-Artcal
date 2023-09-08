const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    url: { type: String, required: true},
    title: { type: String, required: true ,unique:true},
    description: { type: String, required: true },
    Fulldescription:{ type: String, required: true },
    catagory:{ type: String, required: true},

},{timestamps:true});
mongoose.models = {}
export default mongoose.model("Posts",Post);