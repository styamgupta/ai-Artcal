
import React,{useState} from "react";
import Link from "next/link";
export default function Home() {
  // let d = new Date()
  // console.log(d)
  const [dates, setDates] = useState([]);

  const addDate = () => {
    const currentDate = new Date();
    // Check if the current date is not already in the list
    if (!dates.some(date => date.toDateString() === currentDate.toDateString())) {
      setDates([...dates, currentDate]);
    }
  };

  const deleteDate = (dateToDelete) => {
    const updatedDates = dates.filter(date => date !== dateToDelete);
    setDates(updatedDates);
  };
  return (
    <>
       <div className="p-4">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={addDate}
      >
        Add Date
      </button>
      <div className="mt-4">
        {dates.map((date, index) => (
          <div
            className="bg-gray-100 p-2 rounded flex justify-between items-center mt-2"
            key={index}
          >
            <Link href={`/all/${date.toDateString()}`}><p>{date.toLocaleString()}</p></Link>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => deleteDate(date)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}
