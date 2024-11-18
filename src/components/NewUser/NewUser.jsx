import PropTypes from 'prop-types'

const NewUser = ({mainData}) => {
    const {name , email} = mainData
    return (
        <div>
            <p className='font-medium text-lg'>Name : {name}</p>
            <p className='font-medium text-lg'>Email : {email}</p>
        </div>
    )
}

NewUser.propTypes = {
    mainData : PropTypes.object.isRequired,
}

export default NewUser