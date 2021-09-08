import CartWidget from "./CartWidget";

const navBar = () => {

    return (
        <header className="header">
            <nav>
                <a href="#">
                    <h1>E-commerce</h1>
                </a>
                <CartWidget />
            </nav>
        </header>
    )
}

export default navBar






