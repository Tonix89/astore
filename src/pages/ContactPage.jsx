import React, {useState} from "react";
import * as S from "./contact.styles";

function Contact() {

    const [fullName, setFullName] = useState("");
    const [fullNameError, setFullNameError] = useState("");

    const [subject, setSubject] = useState("");
    const [subjectError, setSubjectError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState("");

    const [success, setSuccess] = useState("");

    function onFormSubmit(e) {
        e.preventDefault();
        const body = {
            fullName,
            subject,
            email,
            message,
        };
        if(!fullNameError && fullName && !subjectError && subject && !emailError && email && !messageError && message){
            console.log(body);
            setSuccess("Message Sent. Thank you!")
        }
    }

    function onTextInputChange(e){
        const value = e.target.value;
        const name = e.target.name;
        switch (name) {
            case "fullname":
                setFullName(value.toUpperCase());
                if(value.length >= 3){
                    setFullNameError("");
                }else{
                    setFullNameError("Required : Must be at least 3 characters.")
                }
                break;
            case "subject" :
                setSubject(value);
                if(value.length >= 3){
                    setSubjectError("");
                }else{
                    setSubjectError("Required : Must be at least 3 characters.")
                }
                break;
            case "message" :
                setMessage(value);
                if(value.length >= 3){
                    setMessageError("");
                }else{
                    setMessageError("Required : Must be at least 3 characters.")
                }
                break;
        
            default:
                break;
        }
    }

    function onEmailInputChange(e){
        setEmail(e.target.value)
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        const validEmail = emailPattern.test(e.target.value);
        if(!validEmail){
            setEmailError("Required : Must be a valid email address.")
        }else{
            setEmailError("");
        }
    }

    if(success){
        return <S.SuccessMessage>{success}</S.SuccessMessage>
    }else{
    return <S.ContactCont>
                <S.Form onSubmit={onFormSubmit}>
                    <S.FormCont>
                        <h3>Contact Us</h3>
                        <S.InputCont>
                            <S.Label htmlFor="fullname">Full Name</S.Label>
                            <S.ErrorMessage>{fullNameError}</S.ErrorMessage>
                            <S.Input type="text" name="fullname" value={fullName}  placeholder="Ex. John Doe" onChange={onTextInputChange}/>
                        </S.InputCont>
                        <S.InputCont>
                            <S.Label htmlFor="subject">Subject</S.Label>
                            <S.ErrorMessage>{subjectError}</S.ErrorMessage>
                            <S.Input type="text" name="subject" value={subject}  placeholder="Subject" onChange={onTextInputChange}/>
                        </S.InputCont>
                        <S.InputCont>
                            <S.Label htmlFor="Email">Email</S.Label>
                            <S.ErrorMessage>{emailError}</S.ErrorMessage>
                            <S.Input type="email" value={email}  placeholder="johndoe@yahoo.com" onChange={onEmailInputChange}/>
                        </S.InputCont>
                        <S.InputCont>
                            <S.TextAreaLabel htmlFor="message">Message</S.TextAreaLabel>
                            <S.TextareaErrorMessage>{messageError}</S.TextareaErrorMessage>
                            <S.Textarea name="message" placeholder="Type your message here..." value={message} onChange={onTextInputChange}></S.Textarea>
                        </S.InputCont>
                    </S.FormCont>
                    <S.Button>Submit</S.Button>
                </S.Form>
        </S.ContactCont>
    }
}

export default Contact;