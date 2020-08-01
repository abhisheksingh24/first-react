import React, { Component } from 'react';
import ValidationString from './Validation'
import CharComponent from './CharComponent';

class LengthFinder extends Component {
    state = {
        inputText: ''
    }

    textChangeHandler = (event) => {
        this.setState({
            inputText: event.target.value
        });
    }

    getCharList = () => {
        return [...new Set(this.state.inputText.split(''))];
    } 

    charDeleteHandler = (c) => {
        this.setState({
            inputText: this.state.inputText.replaceAll(c, '')
        });
    }

    render() {

        return (
          <div>
            <input type = 'text' onChange = {this.textChangeHandler} value = {this.state.inputText}></input>
            <p>Input Length = {this.state.inputText.length}</p>
            <ValidationString textLength = {this.state.inputText.length}/>
            <p>Click on any character below to delete!!</p>
            {this.getCharList().map(char => {
                return <CharComponent character={char} charDeleteHandler = {this.charDeleteHandler}/>
            })}
          </div>
        ); 
    }
}

export default LengthFinder;