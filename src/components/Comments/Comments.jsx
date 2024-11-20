import PropTypes from 'prop-types'
import { useLoaderData } from 'react-router-dom'
import OneComment from '../OneCommnet/OneComment'

const Comments = () => {
    const comment = useLoaderData()
    return (
        <div>
            <div className='grid md:grid-cols-4 grid-cols-1'>
                {
                    comment.map((cmt, idx) => <OneComment key={idx} oneComment={cmt}></OneComment>)
                }
            </div>
        </div>
    )
}

Comments.propTypes = {}

export default Comments