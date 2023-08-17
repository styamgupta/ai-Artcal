import connectdb from "@/middleware/mongoose"
import adddata from "@/models/adddata"
const handler = async (req, res) => {
    // let getdatas = await adddata.find({ $and: [{ gallname: 'चना' }, { gallname: 'मटर' }] })
    // let getdatas = await adddata.find({ gallname: { $exists: true }, state: { $exists: true } })
    const getdatas = await adddata.find();
    // const getdata = await adddata.find({ gallname: "d4" });
    // // {gehu:{3:{3kg}}}   
    // const fetchdata = {}
    // for (let item of getdata) {

    //     if (Object.keys(fetchdata).includes('totalprice')) {
    //         fetchdata[item.totalprice][item.kitnakg] = { gallname: item.gallname }
    //     }
    //     else {
    //         fetchdata[item.totalprice] = {}
    //         fetchdata[item.totalprice][item.kitnakg] = { gallname: item.gallname }
    //     }

    // }
    // if()


    // for (let item of varients) {
    //     if (Object.keys(colorSizeSlug).includes(item.color)) {
    //         colorSizeSlug[item.color][item.size] = { slug: item.slug }
    //     }
    //     else {
    //         colorSizeSlug[item.color] = {}
    //         colorSizeSlug[item.color][item.size] = { slug: item.slug }
    //     }
    // }
    res.status(200).json({ getdatas})

}
export default connectdb(handler)
