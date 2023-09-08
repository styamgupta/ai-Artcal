import mongoose from "mongoose"
import postBlog from "@/models/postBlog"
import MainPage from "./components/MainPage"
import Head from "next/head";

const Postdata = ({ data }) => {
  return (<>
  <Head>
        <title>ai-Artical/postdata</title>
        <meta name="description" content="Explore a world of knowledge and inspiration on our blog. Dive into a wide range of topics, including stories, trenidng,posts, other, and more. Discover expert insights, tips, and captivating stories that will keep you coming back for more" />
        <meta name="keywords" content="blog , trending,posts , stories, hindi mai blogs ,easy understand ,how to ,and many more" />
      </Head>
    <section className="text-gray-600 body-font">
      <div className="container px-3 md:py-20 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Object.keys(data).map((k) => {
            return <MainPage key={data[k]._id} catagory={data[k].catagory} title={data[k].title} description={data[k].description} url={data[k].url} date={new Date(data[k].createdAt).toLocaleString()} />
          })}
        </div>
      </div>

    </section>
  </>

  )
}
export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let getdatas = await postBlog.find().sort({ createdAt: -1 })

  return {
    props: { data: JSON.parse(JSON.stringify(getdatas)) },
  }

}
export default Postdata
