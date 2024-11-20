import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'

const SingleComments = () => {
    const data = useLoaderData()
    console.log(data)
    const { id, body } = data
    return (
        <div className='w-[30rem] mx-auto border border-yellow-300 rounded-xl p-4'>
            <h2 className='font-bold'>Post id : {id}</h2>
            <h2 className='text-lg font-medium'>Main Comments : </h2>
            <p>{body}</p>
        </div>
    )
}

SingleComments.propTypes = {}

export default SingleComments