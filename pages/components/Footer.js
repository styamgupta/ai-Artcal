import Link from "next/link"

const Footer = () => {
    return (

        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 mt-12">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <div className="mr-5 hover:text-red-900 transition duration-300">
                    <Link href={"/"}>ai-Artical</Link>
                </div>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <div className="mr-5 hover:text-red-900 transition duration-300">
                        <Link href={"/"}>hello</Link>
                    </div>
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
                </ul>
            </div>
        </footer>

    )
}

export default Footer
