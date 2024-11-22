import { Link, NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="text-center ">
            <nav className="flex justify-center items-center gap-6 text-xl font-semibold my-5">
                <NavLink className="btn btn-neutral" to= '/'>Home</NavLink>
                <NavLink className="btn btn-neutral" to= '/about'>About</NavLink>
                <NavLink className="btn btn-neutral" to= '/contact'>Contact Us</NavLink>
                <NavLink className="btn btn-neutral" to= '/portfolio'>Portfolio</NavLink>
                <NavLink className="btn btn-neutral" to= '/users'>Users</NavLink>
                <NavLink className="btn btn-neutral" to= '/post'>Post</NavLink>
                <NavLink className="btn btn-neutral" to= '/comments'>Comments</NavLink>
            </nav>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar