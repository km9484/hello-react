import React, { Component } from 'react';

export default class Text extends Component{
    render(){
        return(
            <input type="text" name="{this.props.name}" />
        )
    }
}