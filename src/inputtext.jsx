import React, { Component } from 'react';

class MyinputText extends Component{
    constructor(props) {
        super(props)
        this.state = { id: '', namn: '', beskrivning: '', pris: '', enhet: '', antal: '', varugrupp: '', rabatt: '', bild: '', ekologisk: '', kampanj: false }
        // this.state=Myobj
    }
    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.id.charAt(0).toUpperCase() + this.props.id.substr(1)}</label>
                <input onChange={this.props.handleChange} id={this.props.id.toLowerCase()}
                    value={this.props.value} type='text' onChange={this.props.onchange}
                    /><br /> 
            </div>
        )
    }
}
export default MyinputText