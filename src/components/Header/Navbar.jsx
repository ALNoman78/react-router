import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="text-center ">
            <h2 className="font-bold text-2xl text-center">Navbar</h2>
            <nav className="flex justify-center items-center gap-6 text-xl font-semibold">
                <Link to="/" className="btn btn-neutral">Home</Link>
                <Link to = '/about' className="btn btn-neutral">About</Link>
                <Link to = '/contact' className="btn btn-neutral">Contact Us</Link>
            </nav>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar