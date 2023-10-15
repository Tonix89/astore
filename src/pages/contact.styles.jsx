import styled from "styled-components";

export const ContactCont = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    padding : 10px;
    margin-top : 10px;
`;

export const FormCont = styled(ContactCont)`
    position : relative;
    justify-content : start;
    border : 2px solid ${(props) => props.theme.color.warning};
    border-radius : 10px;
    width : 450px;

    @media (max-width : 450px) {
        width : 95%;
    }
`;

export const Button = styled.button`
    border : 3px solid ${(props) => props.theme.color.primary};
    border-radius : 10px;
    color : ${(props) => props.theme.color.primary};
    padding : 5px 10px;
    font-size : 18px;
    font-weight : bold;
    margin-top : 10px;
    cursor : pointer;
`;

export const Form = styled.form`
    display : flex;
    flex-direction : column;
    align-items : center;
    width : 95%;
`;

export const InputCont = styled.div`
width : 100%;
    margin-top : 10px;
    position : relative;
`;


export const Label = styled.label`
    position : absolute;
    background-color : white;
    padding : 0 10px 0 5px;
    color : ${(props) => props.theme.color.success};
    font-weight : bold;
    top : -20%;
    left : 10%;

    @media (max-width : 450px) {
        left : 4%;
    }
`;

export const Input =  styled.input`
    width : 350px;
    height : 20px;
    padding : 8px;
    border : 3px solid ${(props) => props.theme.color.success};
    border-radius : 10px;
    margin-bottom : 15px;
    font-weight : bold;

    @media (max-width : 450px) {
        width : 95%;
    }
`;

export const Textarea = styled.textarea`
    width : 350px;
    height : 100px;
    padding : 8px;
    border : 3px solid ${(props) => props.theme.color.success};
    border-radius : 10px;
    margin-bottom : 10px;
    font-weight : bold;

    @media (max-width : 450px) {
        width : 95%;
    }
`;

export const TextAreaLabel = styled(Label)`
    top : -8%;
`;

export const ErrorMessage = styled.p`
    position : absolute;
    font-size : 12px;
    font-weight : bold;
    font-style : italic;
    color : red;
    top: -48%;
    right: 9%;

    @media (max-width : 450px) {
        right: 0%;
    }
`;

export const TextareaErrorMessage = styled(ErrorMessage)`
    top: -21%;
`;

export const SuccessMessage = styled.h3`
    display : flex;
    flex-direction : column ;
    align-items : center;
    justify-content : center;
    height : 85vh;
`;