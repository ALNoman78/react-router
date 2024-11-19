import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'

const Details = () => {
    const postData = useLoaderData();
    const {title , body} = postData
    return (
        <div className='text-center'>
            <h2 className='font-xl font-medium'>Post Data Title : {title}</h2>
            <p className='w-[20rem] border border-red-400 rounded-xl p-4 mx-auto m-4'><small>Comments Data : {body}</small></p>
        </div>
    )
}

Details.propTypes = {}

export default Details