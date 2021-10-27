import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {

    return (
        <header className="header">
            <nav>
                <a href="#">
                    <Link to='/'>
                        <h1>E-commerce</h1>
                    </Link>
                </a>
                <div>
                    <ul className="categories">
                        <Link to='/samsung'><li>Samsung</li></Link>
                        <Link to='/motorola'><li>Motorola</li></Link>
                        <Link to='/apple'><li>Apple</li></Link>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </header >
    )
}

export default NavBar






