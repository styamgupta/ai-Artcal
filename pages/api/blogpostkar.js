import connectdb from "@/middleware/mongoose"
import postBlog from "@/models/postBlog"
const handler = async (req, res) => {
    if (req.method == "POST") {
            let blogs = new postBlog({
                title: req.body.title,
                description: req.body.description,
                Fulldescription: req.body.Fulldescription,
                url: req.body.url,
                catagory: req.body.catagory,
               
            })
            await blogs.save()
        res.status(200).json({ success: "success"})
    }
    else {
        res.status(400).json({ error: "error" })

    }
}
export default connectdb(handler)
