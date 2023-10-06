import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Link to="/product">
            <button>View Product</button>
        </Link>
    )
}

export default Home;