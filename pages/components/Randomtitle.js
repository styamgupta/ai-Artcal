import {
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share'


const Randomtitle = (props) => {
  const { url, title, Fulldescription, description, catagory } = props

  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-96 overflow-hidden relative">
            <img alt="content" className="object-cover object-center h-full w-full " src={url} />
            <div className="absolute top-0 right-0 rounded-sm px-2 ">
              <WhatsappShareButton
                url={`${process.env.NEXT_PUBLIC_PORT}/${title}`}
                title={`Check out this blog is trending now: ${title}`}
                separator=":: "
                windowWidth={800}
                windowHeight={800}

              >
                <WhatsappIcon size={35} round />
              </WhatsappShareButton>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row bg-sky-300">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img src="https://source.unsplash.com/50x50/?girl" alt="" className="rounded-xl" />
              </div>
              <div className="flex flex-col items-center text-center justify-center m-3 p-2">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">your well-wisher: <span className="bg-red-400 text-white px-2 rounded-sm">{catagory}</span></h2>
                <b><div className="text-base m-2">{title}</div></b>
                <div className="text-base m-2">{description}</div>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <div className="leading-relaxed text-lg mb-4">{Fulldescription}</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Randomtitle
