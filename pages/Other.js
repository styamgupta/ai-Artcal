
import mongoose from "mongoose"
import postBlog from "@/models/postBlog"
import MainPage from "./components/MainPage";
import Head from "next/head";


const Other = ({data}) => {
  return (
    <>
    <Head>
        <title>ai-Artical/other</title>
        <meta name="description" content="Explore a world of knowledge and inspiration on our blog. Dive into a wide range of topics, including stories, trenidng,posts, other, and more. Discover expert insights, tips, and captivating stories that will keep you coming back for more" />
        <meta name="keywords" content="blog , trending,posts , stories, hindi mai blogs ,easy understand ,how to ,and many more" />
      </Head>
    {!data.length==0?<section className="text-gray-600 body-font">
      <div className="container px-3 md:py-20 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Object.keys(data).map((k) => {
            return <MainPage key={data[k]._id} title={data[k].title} catagory={data[k].catagory} description={data[k].description} url={data[k].url} date={new Date(data[k].createdAt).toLocaleString()} />
          })}
        </div>
      </div>

    </section>:<div className="flex mt-40 justify-center content-center"> अभी भाई कोई डेटा नहीं हैं</div>}
  </>
  )
}
export async function getServerSideProps() {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI);
    }
    let getdatas = await postBlog.find({catagory:"other"})
  
    return {
      props: { data: JSON.parse(JSON.stringify(getdatas)) },
    }
  
  }
export default Other
