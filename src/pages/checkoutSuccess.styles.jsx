import styled from "styled-components";

export const Loader = styled.div`
    border: 16px solid ${(props) => props.theme.color.secondary};
    border-radius: 50%;
    border-top: 16px solid ${(props) => props.theme.color.primary};
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }
    
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
`;

export const LoaderCont = styled.div`
      height : 80vh;
      display : flex;
      flex-direction : column;
      justify-content : center;
      align-items : center;
      padding : 10px;
`;

export const Button = styled.button`
    border : 3px solid ${(props) => props.theme.color.primary};
    border-radius : 10px;
    color : ${(props) => props.theme.color.primary};
    padding : 5px 10px;
    font-size : 18px;
    font-weight : bold;
    cursor : pointer;
`;