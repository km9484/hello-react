import React, { Component } from 'react';

export default class Textarea extends Component{
    render(){
        return(
            <textarea name="{this.props.name}" rows="4" cols="50">
            </textarea>
        )
    }
}