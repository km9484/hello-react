import React, { Component } from 'react';

export default class Button extends Component{
    render(){
        return(
            <input type="{this.props.type}" name="{this.props.name}"/>
        )
    }
}