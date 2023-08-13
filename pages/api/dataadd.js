import connectdb from "@/middleware/mongoose";
import adddata from "@/models/adddata";

const handler = async (req, res) => {
    if (req.method == "POST") {
        let p = new adddata({
                totalprice: req.body.totalprice,
                gallname: req.body.gallname,
                kitnakg: req.body.kitnakg,
                state:req.body.state
            })
            await p.save()
            res.status(200).json({ success: "success" })
        }
        else {
            res.status(400).json("error")
            
        }
}
export default connectdb(handler)
