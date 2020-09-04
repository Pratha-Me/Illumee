import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { FormPostService } from "../../../services/FormApi";

const FormFooter = (props) => {

    const { register, handleSubmit } = useForm();
    const formRef = useRef(null);

    const handleSubmitForm = (formData) => {

       console.log("Form", formData);
       
       FormPostService(formData).then((response) => {
           console.log("Response", response);
       }).catch((err) => {
           console.log("Err2", err.response.data);
       });

       formRef.current.reset();
    }

    return (
        <div className="formComp">
            <h1> ILLU<span>ME</span>E </h1>

            <div className="form">
                <h2> INVESTORS INFORMATION</h2>
                <form onSubmit={handleSubmit(handleSubmitForm)} id="form-post" ref={formRef}>
                    <input type="text" name="name" id="name" placeholder="NAME" ref={register}></input>
                    <input type="email" name="email" id="email" placeholder="EMAIL" ref={register}></input>
                    <input type="text" pattern="[0-9]+" name="number" id="number" placeholder="PHONE NUMBER" ref={register}></input>
                    <select name="reason" id="reason" required ref={register}>
                        <option value="" disabled selected hidden>Choose a reason</option>
                        <option value="one"> One</option>
                        <option value="two"> Two</option>
                        <option value="three"> Three</option>
                        <option value="four"> Four</option>
                    </select>
                    <textarea name="message" id="message" placeholder="YOUR MESSAGE" ref={register}></textarea>
                    <input type="submit" id="btn" name="button" value="SEND"></input>
                </form>
            </div>

            <div className="footnotes">
                <p>+351 932 080 132 &bull; +1 416 857 1505</p> <p>INFO@ILLUMEE.LIVE</p> <p>ABOUT ILLUMEE </p>
                <a href="#" target="_blank"> <ion-icon name="logo-linkedin" style={{ color: "white", fontSize: "28px" }}></ion-icon></a>
                <a href="#" target="_blank"> <ion-icon name="logo-facebook" style={{ color: "white", fontSize: "28px" }}></ion-icon></a>
            </div>
        </div>
    )
}

export default FormFooter;