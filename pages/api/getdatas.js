import connectdb from "@/middleware/mongoose"
import adddata from "@/models/adddata"
const handler = async (req, res) => {
    // let getdatas = await adddata.find({ $and: [{ gallname: 'चना' }, { gallnaem: 'मटर' }] })
    // let getdatas = await adddata.find({ gallname: { $exists: true }, state: { $exists: true } })
    const getdatas = await adddata.find({ $or: [{ gallname: ""}, { gallname: "गेहूँ" }] });    
    res.status(200).json({ getdatas })

}
export default connectdb(handler)
