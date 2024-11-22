import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'

const OneComment = ({oneComment}) => {
    const {id , name , email } = oneComment

    const navigate = useNavigate()

    const handleShowDetails = () => {
        navigate(`/comments/${id}`)
    }

    return (
        <div className='border border-emerald-700 rounded-xl p-4 m-4'>
            <h2 className='font-medium text-lg'>Name : {name}</h2>
            <p>Email : {email}</p>
            {/* <Link to={`/comments/${id}`} className='btn btn-success text-white my-4'>
                See Comment
            </Link> */}
            <button className='btn my-4' onClick={handleShowDetails}>Show Details Click Button</button>
        </div>
    )
}

OneComment.propTypes = {
    oneComment: PropTypes.object.isRequired,
}

export default OneComment