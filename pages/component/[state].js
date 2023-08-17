import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Adddata = () => {
    const router = useRouter()
    const states = router.query.state;
    const [totalprice, settotalprice] = useState("")
    const [gallname, setgallname] = useState("")
    const [kitnakg, setkitnakg] = useState("")

    const handlechange = (e) => {
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

    const handlesubmit = async (e) => {
        e.preventDefault();
        const data = {
            "totalprice": totalprice,
            "gallname": gallname,
            "kitnakg": kitnakg,
            "state": states
        };
        const response = await fetch(`http://localhost:3000/api/dataadd`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        let res = await response.json()
        if (response.ok == true) {
            settotalprice("")
            setgallname("")
            setkitnakg("")
             alert("data added")
        }
        else{
            alert("values sahi se likho")
        }
    }
    return (
      
        <section className="text-gray-600 body-font relative">
          <div className="container p-4 md:p-10 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form onSubmit={handlesubmit} method="POST">
                <div className="flex flex-wrap -m-2">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Total Price</label>
                  <input
                    value={totalprice}
                    onChange={handlechange}
                    type="number"
                    placeholder="Total price must be a number"
                    id="name"
                    name="totalprice"
                    className="w-full bg-transparent rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out hover:bg-gray-100"
                  />
    
                  <label htmlFor="text" className="leading-7 text-sm text-gray-600">Gallname</label>
                  <select
                    type="text"
                    name="gallname"
                    value={gallname}
                    onChange={handlechange}
                    className="w-full bg-transparent rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out hover:bg-gray-100"
                  >
                    <option></option>
                    <option value="गेहूँ">गेहूँ</option>
                    <option value="सरसों">सरसों</option>
                    <option value="चना">चना</option>
                    <option value="मटर">मटर</option>
                  </select>
    
                  <label htmlFor="text" className="leading-7 text-sm text-gray-600">Kitnakg</label>
                  <input
                    value={kitnakg}
                    onChange={handlechange}
                    type="number"
                    placeholder="Kitnakg must be a number"
                    id="text"
                    name="kitnakg"
                    className="w-full bg-transparent rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out hover:bg-gray-100"
                  />
                  <div className="container flex flex-col md:flex-row justify-center md:justify-between mt-4">
                    <button className="text-white my-2 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm transition duration-300 ease-in-out">
                      Add
                    </button>
                    <Link href="/today">
                      <button className="text-white my-2 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm transition duration-300 ease-in-out">
                        Check
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      
    )
}

export default Adddata
