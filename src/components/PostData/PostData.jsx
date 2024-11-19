import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostData = ({ data }) => {
    console.log(data)
    const { id, title, body } = data
    return (
        <div className='border border-blue-400 rounded-xl p-5 m-4'>

            <h2>Title : {title}</h2>
            <p className='w-[20rem] mx-auto font-me'><small>Comment : {body}</small></p>
            <Link to={`/post/${id}`} >
                <button className='btn btn-success text-white'> Show Details</button>
            </Link>
        </div>
    )
}

PostData.propTypes = {
    data: PropTypes.object.isRequired,
}

export default PostData