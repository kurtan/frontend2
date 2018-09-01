import React, { Component } from 'react';
import Input from './inputtext.jsx'
import Button from './inputbutton.jsx'
import CheckBox from './inputcheckbox.jsx'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { id: '', namn: '', beskrivning: '', pris: '', enhet: '', antal: '', varugrupp: '', rabatt: '', bild: '', ekologisk: '', kampanj: false }
       
    }
    handleChange = (e) => {
        var a = e.target.id
        var b=e.target.value
        this.setState({ [a]: b })
       
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        var v = ['id', 'namn', 'beskrivning','pris','enhet','antal','varugrupp','rabatt','bild']
        var q = v.map((x, i) => {
            var v=this.state[x]
             return <div key={i}><Input onchange={this.handleChange}
                id={x} value={v}/></div>
            
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {q}
                    <CheckBox id='ekologisk' /> < CheckBox id='kampanj' />
                    
                    <Button myvalue='Spara' />  
                 <img width='100px' src='images/fikon.png' />'   
              </form>
          </div>
      )
    }
}
export default App;