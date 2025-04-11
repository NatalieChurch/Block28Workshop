function NavBar () {
    return (
        <nav>
            <Link to="/blue" style={{color: "black"}}>Blue</Link>
            <Link to="/red" style={{color:"black"}}>Red</Link>
            <Link to="/green" style={{color:"black"}}>Green</Link>
            <Link to="/purple" style={{color:"black"}}>Purple</Link>
            <Link to="/orange" style={{color:"black"}}>Orange</Link>
            <Link to="/" style={{color:"black"}}>Home</Link>
        </nav>
    )
}

export default NavBar