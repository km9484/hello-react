import React, {Component} from 'react';
import Text from './form-child/Text';
import Number from './form-child/Number';
import Select from './form-child/Select';
import Textarea from './form-child/Textarea';
import Button from './form-child/Button';




export default class CustomForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        alert("This value is "+this.submit.value);
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label> Name: </label>
                <Text name="name"/>
                <Number name="numbers"/>
                <Select name="select" />
                <Textarea name="comment" />
                <Button type="submit" name="submit" />
                <input type="submit" value="Submit" ref={(test) => this.submit = test}/>
            </form>
        )
    }
}