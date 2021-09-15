import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FormPostService, FormDataPostService } from "../../services/FormApi";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const FormFooter = (props) => {

  const [phone, setPhone] = useState(null);
  const [focus, setFocus] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const formRef = useRef(null);
  const { register, handleSubmit } = useForm();

  const handleSubmitForm = (formData) => {
    setFocus(true);
    setBtnDisabled(true);

    formData = { ...formData, tel: phone }

    Promise.all([FormPostService(formData), FormDataPostService(formData)]).then((responses) => {
      setFocus(false);
      setPhone(null);
      formRef.current.reset();

    }).catch((err) => {
      setFocus(false);
      setBtnDisabled(false);
      console.log(err);
    });
  };

  return (
    <div className="formComp">
      <h1>
        ILLU<span>ME</span>E
      </h1>

      <div className="form">
        <h2> INVESTORS INFORMATION</h2>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          id="form-post"
          ref={formRef}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="NAME"
            ref={register}
          ></input>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL"
            required
            ref={register}
          ></input>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="COUNTRY"
            ref={register}
          ></input>
          <div className="phone">
            <PhoneInput country={'us'} ref={register} placeholder={"PHONE NUMBER"} value={phone} onChange={(phone) => setPhone(phone)} />
          </div>
          <select name="reason" id="reason" ref={register}>
            <option value="" disabled selected hidden>
              CHOOSE A REASON
            </option>
            <option value="Information Request"> Information Request</option>
            <option value="Investment"> Investment</option>
            <option value="Career"> Career</option>
          </select>
          <textarea
            name="message"
            id="message"
            placeholder="YOUR MESSAGE"
            ref={register}
          ></textarea>
          <button
            className={focus ? "btn-focus" : "btn"}
            disabled={btnDisabled}
            type="submit"
          >
            {focus ? null : "SEND"}
          </button>
        </form>
      </div>

      <div className="footnotes">
        <div className="footnotes-p">
          <p>+351 932 080 132 </p> <p> &bull; </p> <p> +1 416 857 1505 </p>{" "}
          <p>INFO@ILLUMEE.LIVE</p> <p> ABOUT ILLUMEE </p>
          <a href="https://www.linkedin.com/company/illumee/" target="_blank">
            <ion-icon
              name="logo-linkedin"
              style={{ color: "white", fontSize: "2vw" }}
            ></ion-icon>
          </a>
          <a href="https://www.facebook.com/illumee.live" target="_blank">
            <ion-icon
              name="logo-facebook"
              style={{ color: "white", fontSize: "2vw" }}
            ></ion-icon>
          </a>
          <a href="https://www.instagram.com/illumee.live" target="_blank">
            <ion-icon
              name="logo-instagram"
              style={{ color: "white", fontSize: "2vw" }}
            ></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormFooter;
