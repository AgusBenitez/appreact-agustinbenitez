import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const navBar = () => {

    return (
        <header className="header">
            <nav>
                <a href="#">
                    <Link to='/'>
                        <h1>E-commerce</h1>
                    </Link>
                </a>
                <CartWidget />
            </nav>
        </header>
    )
}

export default navBar






