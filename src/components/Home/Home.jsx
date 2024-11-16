import { Outlet } from 'react-router-dom'
import Navbar from '../Header/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>

            </Outlet>
            <div className='text-center font-medium mt-12'>
                <h2 className='font-bold text-2xl'>Home page</h2>
                <p>This is Home page like parent element of the website</p>
            </div>
        </div>
    )
}

Home.propTypes = {}

export default Home