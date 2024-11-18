import { useLoaderData, useSearchParams } from "react-router-dom"
import PostData from "../PostData/PostData"
import { Oval } from "react-loader-spinner"

const Posts = () => {
    const postedData = useLoaderData()
    console.log(postedData)
    return (
        <div className="text-center font-medium ">
            {/* loader */}
            {/* <div className="text-center flex justify-center items-center">
                <Oval visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass="">
                </Oval>
            </div> */}
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