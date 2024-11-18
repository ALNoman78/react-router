import { useLoaderData } from "react-router-dom"
import PostData from "../PostData/PostData"

const Posts = () => {
    const postedData = useLoaderData()
    console.log(postedData)
    return (
        <div className="text-center font-medium ">
            <h2>Title : {postedData.length}</h2>
            <div className="grid md:grid-cols-4 grid-cols-1">
                {
                    postedData.map((data, idx) => <PostData key={idx} data={data}></PostData>)
                }
            </div>
        </div>
    )
}

Posts.propTypes = {}

export default Posts