import PropTypes from 'prop-types'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    const navigate = useNavigate()
    const handler = () => {
        navigate('/')
    }
    return (
        <div className='text-center font-bold text-3xl'>
            <h2>Oops !</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page is not found</h3>
                    <button onClick={handler} className='btn btn-success'>Go Back</button>
                </div>
            }
        </div>
    )
}

ErrorPage.propTypes = {}

export default ErrorPage