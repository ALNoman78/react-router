import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import { Oval } from 'react-loader-spinner'

const Home = () => {
    const navigation = useNavigation()
    const location = useLocation()
    console.log(location)
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center items-center'>
                {
                    navigation.state === 'loading' ? <Oval
                        visible={true}
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    /> : <Outlet></Outlet>
                }
            </div>
            {/* <Outlet></Outlet> */}
            <Footer></Footer>
        </div>
    )
}

Home.propTypes = {}

export default Home