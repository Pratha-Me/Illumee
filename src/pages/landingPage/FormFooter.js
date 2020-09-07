import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FormPostService } from "../../services/FormApi";

const FormFooter = (props) => {

    const [focus, setFocus] = useState(false);

    const { register, handleSubmit } = useForm();
    const formRef = useRef(null);

    const handleSubmitForm = (formData) => {
        FormPostService(formData).then((response) => {
            setFocus(true);
            formRef.current.reset();
            alert("Please check your email")
        }).catch((err) => {
            setFocus(false);
            console.log(err);
        })
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
                    <button className={focus ? "btn-focus" : "btn"} disabled={focus} type="submit"> SEND </button>
                </form>
            </div>

            <div className="footnotes">
                <div className="footnotes-p">
                    <p>+351 932 080 132 </p> <p> &bull; </p> <p> +1 416 857 1505 </p> <p>INFO@ILLUMEE.LIVE</p> <p> ABOUT ILLUMEE </p>
                    <a href="#" target="_blank"> <ion-icon name="logo-linkedin" style={{ color: "white", fontSize: "2vw" }}></ion-icon></a>
                    <a href="#" target="_blank"> <ion-icon name="logo-facebook" style={{ color: "white", fontSize: "2vw" }}></ion-icon></a>
                </div>
            </div>
        </div>
    )
}

export default FormFooter;