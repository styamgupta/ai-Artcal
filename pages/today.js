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
        if (response.ok == true) {
            alert("data deleted")
            window.location.reload()
        }
    }
    const editdata = async (data) => {
        setId(data._id)
        setgallname(data.gallname)
        settotalprice(data.totalprice)
        setkitnakg(data.kitnakg)
    }
    const updatedata = async (id, totalprice, gallname, kitnakg) => {
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
        if (response.ok == true) {
            alert(" data updated")
            window.location.reload()
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
        <div className="flex justify-between px-4 md:px-6 mt-4">
          <Link href="/component/aavak">
            <button className="bg-green-400 w-full md:w-auto p-2 my-2 md:my-3">Add data by aavak</button>
          </Link>
          <Link href="/component/javak">
            <button className="bg-red-400 w-full md:w-auto p-2 my-2 md:my-3">Add data by javak</button>
          </Link>
        </div>
      
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {Object.keys(data).map((key) => (
            <div key={data[key]._id} className={`border-8 border-solid ${data[key].state === "aavak" ? "border-green-600" : "border-red-600"} rounded-lg bg-white p-4`}>
              {id === data[key]._id ? (
                <div className="-grow">
                  <input type="text" name="totalprice" onChange={handleOnchange} value={totalprice} placeholder="Total Price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out my-2" />
                  <select name="gallname" onChange={handleOnchange} value={gallname} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out my-2">
                    <option></option>
                    <option value="गेहूँ">गेहूँ</option>
                    <option value="सरसों">सरसों</option>
                    <option value="चना">चना</option>
                    <option value="मटर">मटर</option>
                  </select>
                  <input type="text" name="kitnakg" onChange={handleOnchange} value={kitnakg} placeholder="Kitna kg" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out my-2" />
                  <div className="flex justify-between">
                    <button onClick={() => { updatedata(id, totalprice, gallname, kitnakg) }} className="bg-blue-500 text-white p-2">Update</button>
                  </div>
                </div>
              ) : (
                <div className="-grow">
                  {new Date(data[key].createdAt).toGMTString() !== "Invalid Date" && <p className="text-gray-500">{new Date(data[key].createdAt).toGMTString()}</p>}
                  {new Date(data[key].updatedAt).toGMTString() !== "Invalid Date" && <p className="text-gray-500">{new Date(data[key].updatedAt).toGMTString()}</p>}
                  <h1 className="font-bold">{data[key].totalprice}</h1>
                  <h2 className="text-gray-900 title-font font-medium">{data[key].gallname}</h2>
                  <p className="text-gray-500">{data[key].kitnakg}</p>
                  <div className="flex justify-between mt-2">
                    <button onClick={() => { deletedata(data[key]._id) }} className="bg-red-500 text-white p-2">Delete</button>
                    <button onClick={() => { editdata(data[key]) }} className="bg-blue-500 text-white p-2">Edit</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </>
      
    )
}

export async function getServerSideProps() {
    if (!mongoose.connections[0].readyState) {
        await mongoose.connect(process.env.MONGO_URI);
    }
        let getdatas = await adddata.find().sort({ createdAt: -1 })
    return {
        props: { data: JSON.parse(JSON.stringify(getdatas)) },
    }

}
export default today