import Link from 'next/link';
import SideWar from './SideWar';

const Navbar = () => {
  const closesidewar = () => {
    const sidewar = document.getElementById("sidewar");
    sidewar.classList.toggle("hidden");
  };

  return (
    <>

<header className="text-red-600 body-font">
      <div className="flex flex-wrap p-4 flex-col md:flex-row items-center fixed top-0 right-0 w-full shadow-xl -z-10">
        <Link href={"/"}>
          <h1 className="mr-5 hover:text-red-900 transition duration-300">
            <span className=' m-3 p-2'>ai-Artical</span>
          </h1>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <div className="mr-5 hover:text-red-900 transition duration-300">
            <Link href={"/Postdata"}>Post</Link>
          </div>
          <div className="mr-5 hover:text-red-900 transition duration-300">
            <Link href={"/Stories"}>Stories</Link>
          </div>
          <div className="mr-5 hover:text-red-900 transition duration-300">
            <Link href={"/Trending"}>Trending</Link>
          </div>
          <div className="mr-5 hover:text-red-900 transition duration-300">
            <Link href={"/Other"}>Other</Link>
          </div>
          <div className="mr-5 hover:text-red-900 transition duration-300">
            <Link href={"/Contact"}>Contact</Link>
          </div>
        </nav>
        <div className="transition duration-300 hover:text-red-900 cursor-pointer" onClick={closesidewar}>
          <div className="text-center text-base pr-5 inline-flex">About us</div>
        </div>
      </div>
      <SideWar />
    </header>
    </>
  );
};

export default Navbar;
