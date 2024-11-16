const Navbar = () => {
    return (
        <div className="text-center ">
            <h2 className="font-bold text-2xl text-center">Navbar</h2>
            <nav className="flex justify-center items-center gap-6 text-xl font-semibold">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
            </nav>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar