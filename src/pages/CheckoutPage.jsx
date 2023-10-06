import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
    return (
        <Link to="/checkout-success">
            <button>Checkout</button>
        </Link>
    )
}

export default Checkout;