const navBar = () => {

    function carritoToggle() {
        console.log('Carrito funciona')
    }

    return (
        <header className="header">
            <nav>
                <h1>E-commerce</h1>
                <ul>
                    <a href="#"><li>Productos</li></a>
                    <a onClick={carritoToggle} id="btn-carrito" href="#"><li >Carrito</li></a>
                </ul>
            </nav>
        </header>
    )
}

export default navBar






