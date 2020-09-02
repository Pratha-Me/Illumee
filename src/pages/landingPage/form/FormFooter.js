import React, { useState } from "react"

const FormFooter = (props) => {

    const [name, setName] = useState(null);

    const handleSubmit = (event) => {
        console.log(event.target);
    }

    return (
        <div className="formComp">
            <h1> ILLU<span>ME</span>E </h1>

            <div className="form">
                <h2> INVESTORS INFORMATION</h2>
                <form onSubmit={handleSubmit} id="form-post">
                    <input type="text" name="name" id="name" placeholder="NAME"></input>
                    <input type="email" name="email" id="email" placeholder="EMAIL"></input>
                    <input type="text" pattern="[0-9]+" name="number" id="number" placeholder="PHONE NUMBER"></input>
                    <select name="reason" id="reason">
                        <option value="one"> one</option>
                        <option value="two"> two</option>
                        <option value="three"> three</option>
                        <option value="four"> four</option>
                    </select>
                    <textarea name="message" id="message" placeholder="YOUR MESSAGE"></textarea>
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