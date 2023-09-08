import connectdb from "@/middleware/mongoose"
import contactdata from "@/models/contactdata"
const handler = async (req, res) => {
    if (req.method == "POST") {
        let contactdatas = new contactdata({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            mobile: req.body.mobile,
            message: req.body.message

        })
        await contactdatas.save()
        res.status(200).json({ success: "success"})
    }
    else {
        res.status(400).json({ error: "error" })

    }
}
export default connectdb(handler)
