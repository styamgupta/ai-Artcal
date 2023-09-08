import mongoose from "mongoose"
import postBlog from "@/models/postBlog"
import Randomtitle from '../components/Randomtitle'

const Title = ({ data }) => {
  function createMarkup(c) {
    return {__html: c};
  }
  
  return (

    <div>
      {Object.keys(data).map((k) => {
        return <div key={data[k]._id} >
          <Randomtitle title={data[k].title} image="https://source.unsplash.com/50x50/?girl" catagory={data[k].catagory} description={data[k].description} Fulldescription={<div dangerouslySetInnerHTML={createMarkup(data[k].Fulldescription)} />} url={data[k].url} />
          
        </div>
      })}
    </div>
  )
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let getdatas = await postBlog.find({ "title": context.query.title })
  return {
    props: { data: JSON.parse(JSON.stringify(getdatas)) },
  }

}
export default Title
