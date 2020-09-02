import React, { Component } from 'react'

export default class RedRelativeComp extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
                    <div className="relative-div">
                        <div className="red-bg valign">
                            <p className="body-p">
                                {this.props.text}
                            </p>
                        </div>
                        <div className="valign abs-div">
                            <img src={this.props.image} alt={this.props.alt} />
                        </div>
                    </div>
                
        )
    }
}
