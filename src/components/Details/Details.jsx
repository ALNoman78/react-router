import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'

const Details = () => {
    const postData = useLoaderData();
    console.log(postData)
    const { title, body } = postData
    return (
        <div className='text-center border border-red-400 rounded-xl p-4 m-4'>
            <h2 className='font-xl font-medium'>Post Data Title : {title}</h2>
            <p className='w-[35rem] mx-auto'>
                <small>Comments Data : {body}</small>
            </p>
        </div>
    )
}

Details.propTypes = {}

export default Details