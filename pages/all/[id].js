
import { useState } from "react"

const filter = () => {


  const [query, setquery] = useState("")
  const [data2, setdata2] = useState([])
    const handlechange = async (e) => {
        setquery(e.target.value)
        const response = await fetch(`http://localhost:3000/api/getquerydata?q=${query}`)
        const data = await response.json();
        setdata2(data.getdatas)
      }
      const subtotal = data2.reduce((acc, item) => acc + item.totalprice, 0);
      const totalsubtotal = data2.reduce((acc, item) => acc + item.kitnakg, 0);
      const totalgallname = data2.reduce((acc, item) => acc + item.gallname+",", "");
      return (
        
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
              <div className="mb-4">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Filter Data</h1>
                <input onChange={handlechange} type="text" className="w-full md:w-1/3 bg-red-100 p-2 m-1" placeholder="Search" />
              </div>
              <div className="overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">State</th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Total</th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Kitna kg</th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Gall Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data2.map((item) => (
                      <tr key={item._id}>
                        <td className="px-4 py-3 text-lg text-gray-900">{item.state}</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">{item.totalprice}</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">{item.kitnakg}</td>
                        <td className="border-t-2 border-gray-200 px-4 py-3">{item.gallname}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="border-t-4 border-gray-200 px-4 py-3"><b>totalprice: {subtotal} rupess</b></td>
                      <td colSpan="3" className="border-t-4 border-gray-200 px-4 py-3"><b>total kg :{totalsubtotal} kg</b></td>
                      <td colSpan="3" className="border-t-4 border-gray-200 px-4 py-3"><b>Galla :{totalgallname}</b></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </section>
      
    )
}

export default filter
