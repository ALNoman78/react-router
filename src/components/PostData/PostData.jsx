import PropTypes from 'prop-types';

const PostData = ({data}) => {
    console.log(data)
    const {title , body} = data
    return (
        <div className='border border-blue-400 rounded-xl p-5 m-4'>
            <h2>Title : {title}</h2>
            <p className='w-[20rem] mx-auto'><small>Comment : {body}</small></p>
        </div>
    )
}

PostData.propTypes = {
    data : PropTypes.object.isRequired,
}

export default PostData