import React from "react";

const RedRelativeComp = (props) => {

    return (
      <div className="relative-div">
        <div className="red-bg valign">
          <p className="body-p">{props.text}</p>
        </div>
        <div className="valign abs-div">
          <img src={props.image} alt={props.alt} />
        </div>
      </div>
    );
}

export default RedRelativeComp;