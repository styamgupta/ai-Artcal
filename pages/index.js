
import mongoose from "mongoose"
import postBlog from "@/models/postBlog"
import MainPage from "./components/MainPage";
import Head from "next/head";

const Navbar = ({ data, datas}) => {

  return (
    <>
      <Head>
        <title>ai-Artical</title>
        <meta name="description" content="Explore a world of knowledge and inspiration on our blog. Dive into a wide range of topics, including stories, trenidng,posts, other, and more. Discover expert insights, tips, and captivating stories that will keep you coming back for more" />
        <meta name="keywords" content="blog , trending,posts , stories, hindi mai blogs ,easy understand ,how to ,and many more" />
      </Head>
      {!datas.length == 0 ? <section className="text-gray-600 body-font">
        <div className="container px-3 mx-auto">
          <b><h1 className="m-3">Latest Post</h1></b><hr />
          <div className="flex flex-wrap -m-4">
            {Object.keys(datas).map((k) => {
              return <MainPage key={datas[k]._id} title={datas[k].title} catagory={datas[k].catagory} image="https://source.unsplash.com/50x50/?girl" description={datas[k].description} url={datas[k].url} date={new Date(datas[k].createdAt).toLocaleString()} />

            })}
          </div>
        </div>
      </section > : null}
      
      <br className="m-3 p-2"></br>

      {!data.length == 0 ? <section className="text-gray-600 body-font">
        <div className="container px-3 mx-auto">
          <b><h1 className="m-3">Popular Post</h1></b><hr />
          <div className="flex flex-wrap -m-4">
            {Object.keys(data).map((k) => {
              return <MainPage key={data[k]._id} title={data[k].title} catagory={data[k].catagory} image="https://source.unsplash.com/50x50/?girl" description={data[k].description} url={data[k].url} date={new Date(data[k].createdAt).toLocaleString()} />

            })}
          </div>
        </div>
      </section > : null}
      <br className="m-3 p-2"></br>

    </>
  )
}
export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let latespost = await postBlog.find().sort({ createdAt: -1 }).limit(1)
  let popularpost = await postBlog.find().sort({ createdAt: 1 }).limit(4)

  return {
    props: { data: JSON.parse(JSON.stringify(popularpost)), datas: JSON.parse(JSON.stringify(latespost))},
  }

}
export default Navbar;