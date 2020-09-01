import React, { Component } from 'react'
export default class Home extends Component {
    render() {
        return (
            <div className="intro">
                <h2 className="brand">IILU<span>ME</span>E</h2>
                <h1 className="heading"> COMING SOON </h1>


                <p>GET NOTIFIED WHEN IT'S READY</p>
                <input type="email" name="email" placeholder="Enter your email"></input><button> Notify me</button>
                <p className="last-p">INVESTORS INFORMATION</p>
            </div>
        )
    }
}
