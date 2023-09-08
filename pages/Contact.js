import { useState } from "react"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setemail] = useState("")
  const [address, setaddress] = useState("")
  const [message, setmessage] = useState("")
  const [mobile, setmobile] = useState("")

  const handlechange = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
        setName(e.target.value)
    }
    else if (e.target.name === "email") {
        setemail(e.target.value)
    }
    else if (e.target.name === "message") {
        setmessage(e.target.value)
    }
    else if (e.target.name === "address") {
        setaddress(e.target.value)
    }
    else if (e.target.name === "mobile") {
        setmobile(e.target.value)
    }
    
}
const handleSubmit = async (e) => {
  e.preventDefault();
  const data = { name, email, address, mobile,message };
    const response = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/contactdata`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    if (response.ok === true) {
        setName("")
        setemail("")
        setaddress("")
        setmobile("")
        setmessage("")
    }

};

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">अगर आपके पास कोई सवाल और सुझाव हैं, तो हम उनका अनुभव कर सकते हैं,उनके बारे में चर्चा करते हैं।</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input onChange={handlechange} placeholder="*" value={name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input onChange={handlechange} placeholder="*" value={email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">Mobile num</label>
                <input onChange={handlechange} value={mobile} type="mobile" id="mobile" name="mobile" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                <input onChange={handlechange} value={address} type="address" id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                <textarea  id="message" placeholder="*" name="message" onChange={handlechange} value={message} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required/>
              </div>
            </div>
            <div className="p-2 w-full">
              <button disabled={name=="" || email=="" || message==""} onClick={handleSubmit} className="disabled:cursor-not-allowed flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">submit</button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-indigo-500">Email :abcdssir@gmail.com</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
