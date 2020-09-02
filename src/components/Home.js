import React, { Component } from 'react'
import dashboard from '../images/Dashboard.png';
import conference from '../images/Conference.png';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="intro-heading">
                    <h2 className="brand">IILU<span>ME</span>E</h2>
                    <h1 className="heading"> COMING SOON </h1>

                    <p>GET NOTIFIED WHEN IT'S READY</p>
                    <div className="input-div">
                        <input type="email" name="email" placeholder="Enter your email"></input><button> Notify me</button>
                    </div>
                    <p className="last-p">INVESTORS INFORMATION</p>

                </div>

                <div className="illumee-body">
                    <h1 className="body-heading"> What is ILLUMEE?</h1>
                    <div className="flex-div grey-bg">
                        <img src={dashboard} alt="Dashboard"></img>
                        <p className="body-p sm-width-p">
                            ILLUMEE is a platform that allows guests to view upcoming talks and search for discussions in specific industries
                            that the guest may be interested in learning.
                            <br></br> <br></br>
                            ILLUMEE is a platform for all experts in different industries. Attendees have access to a wide variety of Live
                            lectures in any industry they can subscribe to, and ILLUMEE brings the experts to guests remotely.
                        </p>

                        {/* <div className="img-div">
                            <img className="img-resize"></img>
                        </div>
                        <div className="div-p">
                            <p className="body-p"> 
                            ILLUMEE is a platform that allows guests to view upcoming talks and search for discussions in specific industries
                            that the guest may be interested in learning.
                            <br></br>
                            ILLUMEE is a platform for all experts in different industries. Attendees have access to a wide variety of Live
                            lectures in any industry they can subscribe to, and ILLUMEE brings the experts to guests remotely.</p>
                        </div> */}
                    </div>
                    <div className="relative-div">
                        <div className="red-bg valign">
                            <p className="body-p md-width-p">
                                With ILLUMEE, experts don’t require any specialized tech knowledge to create Live lectures;
                                they don’t have to hire tech gurus to do that either. ILLUMEE makes it easy for them to develop and
                                schedule interactive live conferences/lectures from their home or office’s comfort
                            </p>
                        </div>
                        <div className="valign abs-div">
                            <img src={conference} alt="Live Conference" />
                        </div>

                    </div>
                </div>

            </React.Fragment>
        )
    }
}
