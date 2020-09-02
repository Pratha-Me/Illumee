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

        </div>
    )
}

export default FormFooter;