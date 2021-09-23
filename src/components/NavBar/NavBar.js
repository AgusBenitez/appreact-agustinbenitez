import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";
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
                    <Categories />
                    <CartWidget />
                </div>
            </nav>
        </header>
    )
}

export default navBar






