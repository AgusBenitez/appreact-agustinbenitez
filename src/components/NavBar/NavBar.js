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
                <div>
                    <ul className="categories">
                        <li><Link>Samsung</Link></li>
                        <li><Link>Motorola</Link></li>
                        <li><Link>Apple</Link></li>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </header >
    )
}

export default navBar






