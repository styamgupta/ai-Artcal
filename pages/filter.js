
import Link from "next/link"
import mongoose from "mongoose";
import adddata from "@/models/adddata";
export async function getStaticProps() {
    if (!mongoose.connections[0].readyState) {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI);
    }

    let getdatas = await adddata.find()
    // let getdatas = await adddata.find({ gallname: context.query.filter },{createdAt:context.query.filter})

    return {
        props: { data: JSON.parse(JSON.stringify(getdatas)) },
    }
}

const all = ({ data }) => {


    return (
        <>
            {/* <div className="flex justify-center  text-lg flex-col">

                <Link href={"/all/गेहूँ"}> <h1>गेहूँ</h1></Link>
                <Link href={"/all/सरसों"}> <h1>सरसों</h1></Link>
                <Link href={"/all/चना"}> <h1>चना</h1></Link>
                <Link href={"/all/मटर"}> <h1>मटर</h1></Link>
            </div> */}
            <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-4">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Fiter data </h1>
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

                            {Object.keys(data).map((key) => {
                                return <tr key={data[key]._id}>

                                    <><td className="px-4 py-3">{data[key].totalprice}</td>
                                        <td className="px-4 py-3">{data[key].kitnakg} KG</td>
                                        <td className="px-4 py-3">{data[key].gallname}</td></>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                {/* <td colSpan="3">Subtotal: {subtotal}</td> */}
                                {/* <td colSpan="3">total rupess: {totalsubtotal}</td> */}
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        </section>

        </>
    )
}

export default all

