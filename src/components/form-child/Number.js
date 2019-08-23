import React, { Component } from 'react';

export default class Number extends Component{
    render(){
        return(
            <input type="number" className="test" name="{this.props.name}"/>
        )
    }
}
