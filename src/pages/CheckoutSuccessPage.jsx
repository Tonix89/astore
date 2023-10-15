import React, {useEffect, useReducer, useState }from "react";
import { Link } from "react-router-dom";
import useCartCounter from "../tools/Counter";
import {reducer}  from "../tools/Checkout";
import * as S from "./checkoutSuccess.styles"

function CheckoutSuccess() {

    const items = useCartCounter((state) => state.items);
    const total = useCartCounter((state) => state.total);
    const addProduct = useCartCounter((state) => state.addProduct);

    const initialState = { cart: items, total: total };

    const [state, dispatch] = useReducer(reducer, initialState);

    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        if(items.length !== 0){
            setTimeout(() => {
                dispatch({ type: 'clearCart' })
                addProduct(state);
            }, 3000);
        }else{
            setIsEmpty(true);
        }
    }, [state.cart])

    if(isEmpty){
        return <S.LoaderCont>
            <h2>Payment Successful. Thank you for your order.</h2>
            <Link to="/">
                <S.Button>Back to Home</S.Button>
            </Link>
        </S.LoaderCont>
    }else{
        return <S.LoaderCont>
            <S.Loader></S.Loader>
            <h2>Processing Your Payment...</h2>
            </S.LoaderCont>
    }
}

export default CheckoutSuccess;