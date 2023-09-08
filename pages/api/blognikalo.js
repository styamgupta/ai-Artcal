// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectdb from "@/middleware/mongoose"
import postBlog from "@/models/postBlog"
const handler = async (req, res) => {
    let blogs = await postBlog.find()
    res.status(200).json({ blogs })

}
export default connectdb(handler)
