import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="text-center ">
            <nav className="flex justify-center items-center gap-6 text-xl font-semibold my-5">
                <Link to="/" className="btn btn-neutral">Home</Link>
                <Link to = '/about' className="btn btn-neutral">About</Link>
                <Link to = '/contact' className="btn btn-neutral">Contact Us</Link>
                <Link to = '/portfolio' className="btn btn-neutral">Portfolio</Link>
                <Link to = '/users' className="btn btn-neutral">Users</Link>
                <Link to = '/post' className="btn btn-neutral">Post</Link>
            </nav>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar