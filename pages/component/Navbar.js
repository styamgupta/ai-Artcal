import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-gray-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
    <Link href={"/"}><span className="ml-3 text-xl">Galla Mandi</span></Link>
    </div>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/today"} className="mr-5 hover:text-gray-900">Today</Link>
      <Link href={"/filter"} className="mr-5 hover:text-gray-900">all</Link>
    </nav>
   
  </div>
</header>
    </div>
  )
}

export default Navbar
