import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import HomeBanner from './HomeBanner';
import HomeCatalogo from './HomeCatalogo';


const Home = () => {

    return (
        <div className="home">
            <HomeBanner />
            <HomeCatalogo />
            <Link to="/samsung" className="homeContainer1">
                <div>

                </div>
            </Link>
            <Link to="/apple" className="homeContainer2">
                <div>

                </div>
            </Link>
            <Link to="/motorola" className="homeContainer3">
                <div>

                </div>
            </Link>
        </div>
    )
}

export default Home
