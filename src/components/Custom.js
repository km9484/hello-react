import React, { Component } from 'react';

export default class Custom extends Component{

    render(){
        return (
            <div> Hi, {this.props.name}, <br />your Roll: {this.props.Roll} is generated</div>
        )
    }
}
