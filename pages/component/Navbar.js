import Link from 'next/link'
import React from 'react'

const Navbar = ({ currentUrl }) => {
  return (
    <div>
    <header className="text-gray-600 body-font bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link href="/">
            <span className="ml-3 text-2xl font-bold text-white">Galla Mandi</span>
          </Link>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900 hover:bg-red-600 transition duration-300 ease-in-out">
            Add Data
          </Link>
          <Link href="/today" className="mr-5 hover:text-gray-900 hover:bg-red-600 transition duration-300 ease-in-out">
            Today
          </Link>
          <Link href="/all/filterdata" className="mr-5 hover:text-gray-900 hover:bg-red-600 transition duration-300 ease-in-out">
            All
          </Link>
        </nav>
      </div>
    </header>
  </div>
  
  
  )
}

export default Navbar
