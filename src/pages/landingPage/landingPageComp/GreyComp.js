import React, { Component } from 'react'

export default class GreyComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                    <div className="flex-div grey-bg">
                        <img src={this.props.image} alt={this.props.alt}></img>
                        <p className="body-p">
                            {this.props.text}
                        </p>
                    </div>
        )
    }
}
