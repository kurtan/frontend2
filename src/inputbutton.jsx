import React, { Component } from 'react';

class MyinputButton extends Component{
    constructor(props) {
        super(props)
        this.state = { id: '', namn: '', beskrivning: '', pris: '', enhet: '', antal: '', varugrupp: '', rabatt: '', bild: '', ekologisk: '', kampanj: false }
        // this.state=Myobj
    }
    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.id}</label>
                <input  id={this.props.id}
                    value={this.props.myvalue} type='submit' 
                    /><br /> 
            </div>
        )
    }
}
export default MyinputButton