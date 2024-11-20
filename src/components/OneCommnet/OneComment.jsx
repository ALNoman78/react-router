import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const OneComment = ({oneComment}) => {
    const {id , name , email , body} = oneComment
    return (
        <div className='border border-emerald-700 rounded-xl p-4 m-4'>
            <h2 className='font-medium text-lg'>Name : {name}</h2>
            <p>Email : {email}</p>
            <Link to={`/comments/${id}`} className='btn btn-success text-white my-4'>
                {/* <button className='btn btn-success text-white my-4'> See Comment</button> */}
                See Comment
            </Link>
        </div>
    )
}

OneComment.propTypes = {
    oneComment: PropTypes.object.isRequired,
}

export default OneComment