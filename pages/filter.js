
import Link from "next/link"
import mongoose from "mongoose";
import adddata from "@/models/adddata";
export async function getServerSideProps() {
    if (!mongoose.connections[0].readyState) {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI);
    }

    let getdatas = await adddata.find()
    // let gedivatas = await adddata.find({ gallname: context.query.filter },{createdAt:context.query.filter})
    // {gehu;{totalprice:{kg}}}

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
                        <hr />
                        <h2 className="sm:text-xl text-3xl font-medium title-font mb-2 text-gray-900">NOTE: click to catagory to find item by catagory</h2>
                    </div>
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                        <div className="table-auto w-full text-left whitespace-no-wrap">
                        
                            <div>

                                {Object.keys(data).map((key) => {
                                    return <div key={data[key]._id}>

                                        <div className="bg-lime-100 m-3 shadow-red-400"><div className="px-4 py-3">TOTAL PRICE :{data[key].totalprice}</div>
                                            <div className="px-4 py-3">{data[key].kitnakg} KG</div>
                                            <Link href={`/all/${data[key].gallname}`}>  
                                             <div className="px-4 py-3 text-blue-500 ">{data[key].gallname}</div>
                                             </Link>
                                         </div>
                                    </div>
                                })}
                            </div>
                            <div>
                                <div>
                                    {/* <div colSpan="3">Subtotal: {subtotal}</div> */}
                                    {/* <div colSpan="3">total rupess: {totalsubtotal}</div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default all

