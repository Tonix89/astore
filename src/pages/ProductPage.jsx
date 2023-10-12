import React , { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductStore from "../api/GetProduct";
import Discount from "../tools/Discount";
import Price from "../tools/Price";
import Review from "../components/Review";
import RatingStar from "../components/Ratings";
import useCartCounter from "../tools/Counter";
import * as S from "./product.styles";

function SingleProduct() {
    
    let params = useParams();

    const data = useProductStore((state) => state.data);

    const items = useCartCounter((state) => state.items);
    const addProduct = useCartCounter((state) => state.addProduct);

    const [showImage, setShowImage] = useState(false);
    const [product, setProduct] = useState({});
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const handleDomClick = (e) => {
          if(e.target.id === "item-image") {
            return;
          }
          setShowImage(false);
        };

        document.addEventListener("click", handleDomClick);
    
        return () => {
          document.removeEventListener("click", handleDomClick);
        }
      }, [])

    useEffect (() => {
        const filterProduct = data.filter((item) => item.id === params.id);
        setProduct(filterProduct[0]);
        setReviews(filterProduct[0].reviews);
    }, [data, params]);

    const isAdded = items.find((item) => {
        if(item.id === product.id){
            return true;
        }
    });

    if(isAdded){
        const button = document.getElementById("add-button");
        button.disabled= true;
        button.style.cursor = "none";
        button.innerHTML = "In Cart Already";
    }

    return (
        <S.ProductCont>
            <S.ImageCont>
                <S.ProductImage id="item-image" src={product.imageUrl} alt={product.title} onClick={() => setShowImage(true)}></S.ProductImage>
                <Discount item={product}/>
                <S.PriceCont>
                    <Price item={product}/>
                </S.PriceCont>
            </S.ImageCont>
            {showImage && (
                <S.ModalCont>
                    <S.ImageModal src={product.imageUrl} alt={product.title}></S.ImageModal>
                </S.ModalCont>
            )}
            <S.TitleCont>
                <S.ProductTitle>{product.title}</S.ProductTitle>
                <S.AddButton id="add-button" onClick={() => addProduct(product)}>Add To Cart</S.AddButton>
            </S.TitleCont>
            <S.ProductDesc>{product.description}</S.ProductDesc>
            <S.RatingCont>
                <S.H3>Ratings</S.H3>
                <RatingStar rate={product.rating} />
                <S.H4>{product.rating}</S.H4>
            </S.RatingCont>
            <S.ReviewsCont>
                <S.H3>Reviews</S.H3>
                {reviews.length === 0 ? (<div>No Reviews Yet</div>) : (reviews.map(review => <Review key={review.id} review={review} />))}
            </S.ReviewsCont>
        </S.ProductCont>
    );
}

export default SingleProduct;