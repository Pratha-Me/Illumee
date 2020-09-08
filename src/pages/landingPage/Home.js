import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import dashboard from "../../images/Dashboard.png";
import conference from "../../images/Conference.png";
import store from "../../images/Live conference- store layout 2 – 1.png";
import img2 from "../../images/Image2.png";
import img3 from "../../images/Image3.png";
import img from "../../images/Image.png";
import image from "../../images/Imagee.png";
import icon1 from "../../images/Icon awesome-calendar-alt.png";
import icon2 from "../../images/Icon awesome-city.png";
import icon3 from "../../images/Icon awesome-plane-departure.png";
import icon4 from "../../images/Icon ionic-ios-time.png";

import RedRelativeComp from "./RedRelativeComp";
import FormFooter from "./FormFooter";
import { FormPostService } from "../../services/FormApi";

const Home = (props) => {
  const [redRelativeComp, setRedRelativeComp] = useState({
    image1: conference,
    alt1: "Conference",
    text1:
      "With ILLUMEE, experts don’t require any specialized tech knowledge to create Live lectures; they don’t have to hire tech gurus to do that either. ILLUMEE makes it easy for them to develop and schedule interactive live conferences/lectures from their home or office’s comfort",

    image2: store,
    alt2: "Store",
    text2:
      "As a speaker, we know the importance of leaving the audience with knowledge and perception. With Illumee, we not only provide a location for your lecture/conferences; we also provide you with a storefront. Guests will be able to access the live storefront during the lecture/conference. The lecturer will be able to sell products that live during the talk. Purchase books, products, services being sold during the conference with no lineups or waiting until the end of the event to sell the product. Hosts can now host a live event, and sell products live online during the event.",
  });
  const [focus, setFocus] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const notifyRef = useRef(null);
  const { register, handleSubmit } = useForm();

  const handleNotify = (formData) => {
    setFocus(true);

    FormPostService(formData)
      .then((response) => {
        console.log("Notify me", formData);
        setFocus(false);
        setBtnDisabled(true);
        notifyRef.current.reset();
      })
      .catch((err) => {
        setFocus(false);
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <div className="intro-heading">
        <h2 className="brand">
          IILU<span>ME</span>E
        </h2>
        <div className="heading-flex">
          <h1 className="heading"> COMING SOON </h1>

          <p>GET NOTIFIED WHEN IT'S READY</p>
          <div className="input-div">
            <form
              className="notifyMe"
              onSubmit={handleSubmit(handleNotify)}
              ref={notifyRef}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                ref={register}
              ></input>
              <button
                className={focus ? "btn-notified" : "btn"}
                disabled={btnDisabled}
                type="submit"
              >
                {focus ? null : "Notify me"}
              </button>
            </form>
          </div>
          <p className="last-p">INVESTORS INFORMATION</p>
        </div>
      </div>

      <div className="illumee-body">
        <h1 className="body-heading"> What is ILLUMEE?</h1>

        <div className="flex-div grey-bg">
          <img className="shadow" src={dashboard} alt={"Dashboard"}></img>
          <div>
            <p className="body-p">
              ILLUMEE is a platform that allows guests to view upcoming talks
              and search for discussions in specific industries that the guest
              may be interested in learning.
            </p>
            <p className="body-p">
              ILLUMEE is a platform for all experts in different industries.
              Attendees have access to a wide variety of Live lectures in any
              industry they can subscribe to, and ILLUMEE brings the experts to
              guests remotely.
            </p>
          </div>
        </div>

        <RedRelativeComp
          image={redRelativeComp.image1}
          alt={redRelativeComp.alt1}
          text={redRelativeComp.text1}
        />

        <div className="flex-img">
          <img src={img2} alt="image2" />
          <img src={img3} alt="image3" />
          <img src={img} alt="image1" />
        </div>

        <div className="red-bg-div">
          <div className="grid-container">
            <img className="img-a" src={icon4} alt="icon4"></img>
            <img className="img-b" src={icon3} alt="icon3"></img>
            <img className="img-c" src={icon2} alt="icon2"></img>
            <img className="img-d" src={icon1} alt="icon1"></img>
          </div>

          <p className="body-p">
            At ILLUMEE, we know that creating a live conference may come with
            various obstacles, scheduling a date, booking a venue, and getting
            to the venue itself. For the people attending the conferences and
            seeking the knowledge from these events are challenging to deal
            with, now you can create or attend conferences/lectures from the
            comfort of your own home or office. You are thus saving time,
            enabling you to focus on what’s more important.
          </p>
        </div>

        <div className="flex-div grey-bg">
          <img src={image} alt={"Image"}></img>
          <div>
            <p className="body-p">
              "Courage starts with showing up and letting ourselves be seen." --
              Brene Brown
            </p>
            <p>
              As the conference devolves we provide our user with a dynamic live
              chat, where the speaker may interact with the audience, we
              encourage ou user to connect and share knowledge and expand their
              network.
            </p>
          </div>
        </div>

        <RedRelativeComp
          image={redRelativeComp.image2}
          alt={redRelativeComp.alt2}
          text={redRelativeComp.text2}
        />
      </div>

      <FormFooter />
    </React.Fragment>
  );
};

export default Home;
