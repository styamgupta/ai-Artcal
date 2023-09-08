import React, { useState } from 'react'

const Postblog = () => {
    const [title, setTitle] = useState("")
    const [catagory, setcatagory] = useState("other")
    const [description, setDescription] = useState("")
    const [Fulldescription, setFullDescription] = useState("")
    const [url, setUrl] = useState("")
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);//inital false kar do ispasswordcorrect

    const handlechange = (e) => {
        e.preventDefault();
        if (e.target.name === "title") {
            setTitle(e.target.value)
        }
        else if (e.target.name === "description") {
            setDescription(e.target.value)
        }
        else if (e.target.name === "url") {
            setUrl(e.target.value)
        }
        else if (e.target.name === "password") {
            setPassword(e.target.value)
        }
        else if (e.target.name === "Fulldescription") {
            setFullDescription(e.target.value)
        }
        else if (e.target.name == "catagory") {
            setcatagory(e.target.value)
        }

        if (e.target.value === 'satyamsir') {
            setIsPasswordCorrect(true);
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { title, description, url, Fulldescription, catagory };
        const response = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/blogpostkar`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if (response.ok === true) {
            setTitle("")
            setDescription("")
            setUrl("")
            setcatagory("")
            setFullDescription("")
        }

    };

    return (
        <div>

            {!isPasswordCorrect ? <form action=""><div className="mt-24">
                <label>Username: </label>
                <input
                    type="password"
                    autoComplete="new-password"
                    onChange={handlechange}
                    className="bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder-opacity-50 font-semibold md:w-72 lg:w-[340px]"
                    required />
                <label>Enter Password: </label>
                <input
                    autoComplete='username'
                    type="text"
                    className="w-full bg-transparent rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out hover:bg-gray-100"
                />
            </div></form> : null}


            {isPasswordCorrect ? <div className="flex justify-center">
                <div className="h-[90%] w-full md:w-3/4 m-4">
                    <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
                        <h1 className="font-semibold text-3xl text-gray-700 m-2 mt-6">Post</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
                        <input value={url} onChange={handlechange} name="url" type="text" placeholder="url" autoComplete="url"
                            className="w-full bg-transparent rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out hover:bg-gray-100" required />
                        {url && (
                            <div>
                                <img
                                    src={url}
                                    alt="Preview"
                                    style={{ Width: '50px', height: '50px' }}
                                />
                            </div>
                        )}

                        <input value={title} name='title' onChange={handlechange} type="text" placeholder="unique title" autoComplete="title"
                            className="w-full bg-transparent rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out hover:bg-gray-100" required />


                        <select
                            type="text"
                            name="catagory"
                            value={catagory}
                            onChange={handlechange}
                            className="w-full bg-transparent rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out hover:bg-gray-100"
                            required>
                            {/* <option></option> */}
                            <option value="other"> slect catagory( default:other)</option>
                            <option value="stories">stories</option>
                            <option value="trending">trending</option>
                        </select>

                        <textarea value={description} name='description' onChange={handlechange} type="textarea" autoComplete="description" placeholder="description" rows={2}
                            className="w-full bg-transparent rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out hover:bg-gray-100" required />

                        <textarea value={Fulldescription} name='Fulldescription' onChange={handlechange} type="textarea" autoComplete="Fulldescription" placeholder="Fulldescription" rows={3}
                            className="w-full bg-transparent rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out hover:bg-gray-100" required />

                    </div>
                    <div className="text-center mt-7">
                        <button onClick={handleSubmit}
                            className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-violet-500 hover:bg-violet-600  font-medium ">Post</button>
                    </div>

                </div>
            </div> : null}
        </div>
    )
}

export default Postblog
