import connectdb from "@/middleware/mongoose"
import adddata from "@/models/adddata"
const handler = async (req, res) => {
    const query1 = req.query.q
    const query = query1.toString()
    const getdatas = await adddata.aggregate([
      {
        $match: {
          $or: [
            { gallname: { $regex: query, $options: "i" } }
          ]
        }
      }
    ]);
    
    res.status(200).json({ getdatas})

}
export default connectdb(handler)
