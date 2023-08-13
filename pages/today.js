import mongoose from "mongoose"
import adddata from "@/models/adddata"
import { useState } from "react"
import Link from "next/link"


const today = ({ data }) => {
    const [totalprice, settotalprice] = useState("")
    const [gallname, setgallname] = useState("")
    const [kitnakg, setkitnakg] = useState("")
    const [id, setId] = useState(-1)
    const deletedata = async (_id) => {
        const data = { _id };
        const response = await fetch(`http://localhost:3000/api/deletedata`, {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        let res = await response.json()
        if (res.status == "success") {
            console.log("delete")
        }
    }
    const editdata = async (data) => {
        setId(data._id)
        setgallname(data.gallname)
        settotalprice(data.totalprice)
        setkitnakg(data.kitnakg)
    }
    const updatedata = async (id, totalprice, gallname, kitnakg) => {
        console.log(kitnakg)
        const data = {
            "_id": id,
            "totalprice": totalprice,
            "gallname": gallname,
            "kitnakg": kitnakg,
        }
        const response = await fetch(`http://localhost:3000/api/updatedatas`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        let res = await response.json()
        console.log(res)
        if (res.status == "success") {
            console.log("updated")
        }
    }
    const handleOnchange = (e) => {
        if (e.target.name == "totalprice") {
            settotalprice(e.target.value)
        }
        else if (e.target.name == "gallname") {
            setgallname(e.target.value)
        }
        else if (e.target.name == "kitnakg") {
            setkitnakg(e.target.value)
        }

    }
    return (
        <>
            <div className="container">
                <Link href={"/component/aavak"} ><button className="bg-green-400 w-screen p-2"> aavak</button></Link>
                <Link href={"/component/javak"} ><button className="bg-red-400 w-screen p-2"> javak</button></Link>
            </div>
            {/* {addbtn? <h1>hello  </h1>
        :""} */}

            {Object.keys(data).map((key) => {
                return <div key={data[key]._id}>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-10 mx-auto">
                            <div className="flex flex-wrap -m-2">

                                <div className={`p-2 lg:w-1/3 ${data[key].state == "aavak" ? "lg:w-1/3 text-green-300 border-solid border-8 border-green-600" : "ml-auto text-red-300 border-solid border-8 border-red-600"} md:w-1/2 w-full`}>
                                    <div className="my-2 h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                        {id == data[key]._id ? <div className="flex-grow">
                                            <h1><input type="text" name="totalprice" onChange={handleOnchange} value={totalprice} /></h1>
                                            <h2 className="text-gray-900 title-font font-medium">
                                                <select name="gallname" onChange={handleOnchange} value={gallname} className="w-30 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                    <option></option>
                                                    <option value={"गेहूँ"}>गेहूँ</option>
                                                    <option value={"सरसों"}> सरसों</option>
                                                    <option value={"चना"}>चना</option>
                                                    <option value={"मटर"}>मटर</option>

                                                </select>
                                            </h2>
                                            <p className="text-gray-500"><input type="text" name="kitnakg" onChange={handleOnchange} value={kitnakg} /></p>
                                            <div className="flex justify-between">
                                                <button onClick={() => { updatedata(id, totalprice, gallname, kitnakg) }}>update</button>
                                            </div>
                                        </div>
                                            :
                                            <div className="flex-grow">
                                                {new Date(data[key].createdAt).toGMTString() == "Invalid Date" ? "" : <p className="text-gray-500">{new Date(data[key].createdAt).toGMTString()}</p>}
                                                {new Date(data[key].updatedAt).toGMTString() == "Invalid Date" ? "" : <p className="text-gray-500">{new Date(data[key].updatedAt).toGMTString()}</p>}
                                                <h1>{data[key].totalprice}</h1>

                                                <h2 className="text-gray-900 title-font font-medium">{data[key].gallname}</h2>
                                                <p className="text-gray-500">{data[key].kitnakg}</p>
                                                <div className="flex justify-between">
                                                    <button onClick={() => { deletedata(data[key]._id) }}>delete</button>
                                                    <button onClick={() => { editdata(data[key]) }}>Edit</button>
                                                </div>
                                            </div>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
                </div>
            })}



        </>
    )
}

export async function getServerSideProps() {
    if (!mongoose.connections[0].readyState) {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI);
    }
    let getdatas = await adddata.find()
    return {
        props: { data: JSON.parse(JSON.stringify(getdatas)) },
    }

}
export default today