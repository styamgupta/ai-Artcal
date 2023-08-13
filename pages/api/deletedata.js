// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectdb from "@/middleware/mongoose"
import adddata from "@/models/adddata"

const handler = async (req, res) => {
    if (req.method == "DELETE") {
            let p = await adddata.findByIdAndDelete(req.body._id)
            if (!p) { return res.status(404).send("Not Found") }
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "error" })
    }
}
export default connectdb(handler)

