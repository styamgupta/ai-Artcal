import Link from "next/link"


const MainPage = (props) => {
    const { title, date, description, url,catagory } = props
    return (
        <div className=" md:w-1/3">
            <Link href={`/blogclicks/${title}`}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="relative">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={url} alt="blog" />
                        <div className="absolute top-0 right-0 bg-red-500 text-white rounded-sm px-2">
                            <span className="text-sm font-bold">{catagory}</span>
                        </div>
                    </div>
                    <div className=" bg-slate-300 shadow-sm">
                        {/* <h2 className=" p-3 tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{date}</h2> */}
                        <h1 className=" p-3 title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                        <p className=" p-3 leading-relaxed mb-3">{description}...</p>
                        <div className="flex items-center flex-wrap ">

                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default MainPage
