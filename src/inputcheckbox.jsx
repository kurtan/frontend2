import React, { Component } from 'react';

class MyinputCheckBox extends Component{
    constructor(props) {
        super(props)
        this.state = { id: '', namn: '', beskrivning: '', pris: '', enhet: '', antal: '', varugrupp: '', rabatt: '', bild: '', ekologisk: '', kampanj: false }
        // this.state=Myobj
    }
    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.id.charAt(0).toUpperCase() + this.props.id.substr(1)}</label>
                <input checked={this.state.checked} onClick={this.props.onclick} id={this.props.id} type='checkbox'></input><br /> 
            </div>
        )
    }
}
export default MyinputCheckBox