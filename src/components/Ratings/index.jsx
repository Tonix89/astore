import React, {useEffect, useState} from "react";
import * as R  from "../../assets/Rate_Star";
import * as S from "./ratings.styles";

export default function RatingStar({rate}) {

    const [int, setInt] = useState();
    const [dec, setDec] = useState();

    useEffect(() => {
        if(rate){
            const ratings = rate.toString().split(".");
            setDec("p" + ratings[1]);
            setInt(ratings[0]);
        }
    }, [rate])

    const divNumbers = Array.from({ length: int }, (_, index) => index + 1);

  return (
    <S.RatingCont>
      {divNumbers.map((divNumber) => (
        <div key={divNumber}>
          <S.StarImage src={R.p}></S.StarImage>
        </div>
      ))}
      <S.StarImage src={R[dec]}></S.StarImage>
      <ExtraStar int={int} dec={dec}/>
    </S.RatingCont>
  );
}

function ExtraStar({int, dec}){

    const [extra, setExtra] = useState();
    useEffect(()=>{
        const extraStar = 5 - parseInt(int);
        if(isNaN(extraStar) ){
            setExtra(5)
        }else{
            if(dec !== "pundefined"){
                setExtra(extraStar - 1)
            }else{
                setExtra(extraStar);
            }
        }
    }, [int, dec])

    const divNumbers = Array.from({ length: extra }, (_, index) => index + 1);


   
        return <>
        {divNumbers.map((divNumber) => (
        <div key={divNumber}>
          <S.StarImage src={R.p0}></S.StarImage>
        </div>
      ))}
        </>
}

