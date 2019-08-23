import React, { Component } from 'react';

export default class Select extends Component{
    render(){
        return(
            <select name="select" name="{this.props.name}">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
            </select>
        )
    }
}