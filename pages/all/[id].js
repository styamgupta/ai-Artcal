import mongoose from "mongoose"
import adddata from "@/models/adddata"
import { useState } from "react"
// import { useRouter } from "next/router"
// export async function getStaticPaths() {
//     if (!mongoose.connections[0].readyState) {
//         console.log(process.env.MONGO_URI)
//         await mongoose.connect(process.env.MONGO_URI);
//     }
//     let getdatas = await adddata.find()
//     const allusergallname = getdatas.map(user => user)
//     // console.log(allusergallname)
//     return {
//         paths: allusergallname.map((user) => ({ params: { id: `${user.gallname}` } })),
//         fallback: false, // or 'blocking' or true depending on your use case
//     };
// }
// export async function getStaticProps(context) {
//     if (!mongoose.connections[0].readyState) {
//         console.log(process.env.MONGO_URI)
//         await mongoose.connect(process.env.MONGO_URI);
//     }

//     let getdatas = await adddata.aggregate([
//         {
//             $match: {
//                 $or: [
//                     { gallname: { $regex: context.params.id, $options: "i" } }
//                 ]
//             }
//         }
//     ]);
    // let getdatas = await adddata.find({gallname:context.params.id})
    // let getdatas = await adddata.find({ gallname: context.query.filter },{createdAt:context.query.filter})

//     return {
//         props: { data: JSON.parse(JSON.stringify(getdatas)) },
//     }
// }

const filter = () => {


  const [query, setquery] = useState("")
  const [data2, setdata2] = useState([])
    // console.log(data2)
    const handlechange = async (e) => {
        setquery(e.target.value)
        const response = await fetch(`http://localhost:3000/api/getquerydata?q=${query}`)
        const data = await response.json();
        setdata2(data.getdatas)
      }
      const subtotal = data2.reduce((acc, item) => acc + item.totalprice, 0);
      const totalsubtotal = data2.reduce((acc, item) => acc + item.totalprice * item.kitnakg, 0);
      const totalgallname = data2.reduce((acc, item) => acc + item.gallname+",", "");
      return (
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <input onChange={handlechange} type="text" className="bg-red-100 p-2 m-1" />
      
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Filter data</h1>
          </div>
      
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Total</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">kitnakg</th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">gallname</th>
                </tr>
              </thead>
              <tbody>
                {data2.map((item) => (
                  <tr key={item._id}>
                    <td className="px-4 py-3">{item.totalprice}</td>
                    <td className="px-4 py-3">{item.kitnakg}</td>
                    <td className="px-4 py-3">{item.gallname}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
               {!data2.length==0? <tr>
                  <td colSpan="3" className="bg-gray-200">{subtotal} rupess</td>
                  <td colSpan="3" className="bg-gray-200">{totalsubtotal} kg</td>
                  <td colSpan="3" className="bg-gray-200">{totalgallname} kg</td>
                </tr>:""}
              </tfoot>
            </table>
          </div>
      
        </div>
      </section>
      
    )
}

export default filter
