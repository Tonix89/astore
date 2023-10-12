import React from "react";
import RatingStar from "../Ratings";
import * as S from "./review.styles";

export default function Review({review}) {
    return  <S.ReviewCont>
                <S.Review>"{review.description}"</S.Review>
                <S.ReviewerCont>
                    <S.Reviewer>
                        <RatingStar rate={review.rating}/>
                        {review.rating} - {review.username}
                    </S.Reviewer>
                </S.ReviewerCont>
            </S.ReviewCont>
}