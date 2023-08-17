import connectdb from "@/middleware/mongoose"
import adddata from "@/models/adddata"
const handler = async (req, res) => {
    const getdatas = await adddata.find();
    
    res.status(200).json({ getdatas})

}
export default connectdb(handler)
