import React, {useEffect, useReducer} from "react";
import { Link } from "react-router-dom";
import useCartCounter from "../tools/Counter";
import {reducer}  from "../tools/Checkout";
import * as S from "./checkout.styles";

function Checkout() {

    const items = useCartCounter((state) => state.items);
    const total = useCartCounter((state) => state.total);
    const addProduct = useCartCounter((state) => state.addProduct);

    const initialState = { cart: items, total: total };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        addProduct(state);
    }, [state.cart])
     
    if(items.length !== 0){
            return <S.CartCont>
            <div>
                {items.map((item) => <div key={item.id}><S.ItemCont>
                    <S.ItemImage src={item.imageUrl}></S.ItemImage>
                    <S.TitleCont>
                        <S.Title>{item.title}</S.Title>
                        <S.ButtonCont>
                            <S.Button onClick={() =>  dispatch({ type: 'removeProduct', payload: item })}>-</S.Button>
                            <h4>{item.quantity}</h4>
                            <S.Button  onClick={() => dispatch({ type: 'addProduct', payload: item })}
          >+</S.Button>
                        </S.ButtonCont>
                    </S.TitleCont>
                    <S.Price>{pricePerItem(items, item)}</S.Price>
                </S.ItemCont>
                <hr/>
                </div>
                )},
            </div>
            <S.TotalCont>
                <h2>Total</h2>
                <S.TotalPrice>{Number(total).toFixed(2)}</S.TotalPrice>
            </S.TotalCont>
            <Link to="/checkout-success">
                <S.Checkout>Checkout</S.Checkout>
            </Link>
        </S.CartCont>

    }else{
        return <S.CartCont>
            <div>
                You have No Item In The Cart Yet.
            </div>
        </S.CartCont>
    }

}

export default Checkout;

function pricePerItem(items, item){
const pieces = items.filter((product) => product.id === item.id);
const totalPrizePerItem = pieces[0].quantity * pieces[0].discountedPrice;
return <>{totalPrizePerItem.toFixed(2)}</>
}
