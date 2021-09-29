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
                        <li>Samsung</li>
                        <li>Motorola</li>
                        <li>Apple</li>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </header >
    )
}

export default NavBar






