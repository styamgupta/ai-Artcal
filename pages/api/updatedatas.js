// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectdb from "@/middleware/mongoose"
import adddata from "@/models/adddata"

const handler = async (req, res) => {
    console.log(req.body)
    if (req.method == "POST") {
            let p = await adddata.findByIdAndUpdate(req.body._id,req.body)
            console.log(p)
        res.status(200).json({ success: "success" })
    }
    else {
        res.status(400).json({ error: "error" })

    }
}
export default connectdb(handler)

