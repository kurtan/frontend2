import React, { Component } from 'react';
/* import logo from './logo.svg';
import './App.css'; */


class App extends React.Component{
  constructor(props) {
      super(props)
    this.state={ id: '', namn: '',beskrivning:'',pris:'',enhet:'',antal:'',varugrupp:'',rabatt:'',bild:'',ekologisk:'',kampanj:false }
    // this.state=Myobj
  }
  componentDidMount()
  {
      var v = JSON.parse(localStorage.getItem('product'))
      console.log(v)
      if(v==null) return
       this.setState({namn:v.namn,id:v.id,beskrivning:v.beskrivning,pris:v.pris,enhet:v.enhet,antal:v.antal,varugrupp:v.varugrupp,rabatt:v.rabatt,bild:v.bild,ekologisk:v.ekologisk,kampanj:v.kampanj})
  }
   handleSubmit=(e)=> {
      e.preventDefault() 
     // console.log(this.state)
       localStorage.setItem('product',JSON.stringify(this.state))
  }
  handleChange(e) {
      var txt = e.target.value
      var prop = e.target.id
      this.setState({ [prop]: txt })
  }
  handleReset() {
      this.setState( { id: '', namn: '',beskrivning:'',pris:'',enhet:'',antal:'',varugrupp:'',rabatt:'',bild:'',ekologisk:false,kampanj:false })
      
  }
  handleClick(e) {
      var checked = e.target.checked
      this.setState({[e.target.id]:checked})
  }
  render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <label htmlFor="id">ID</label>
              <input onChange={this.handleChange.bind(this)} id='id' value={this.state.id} type='text' placeholder='Ange id'></input><br />
              <label htmlFor="namn">Namn</label>
              <input onChange={this.handleChange.bind(this)} id='namn' type='text' value={this.state.namn}></input><br />
              <label htmlFor="beskrivning">Beskrivning</label>
              <input onChange={this.handleChange.bind(this)} id='beskrivning' type='text' value={this.state.beskrivning}></input><br />
              <label htmlFor="pris">Pris</label>
              <input value={this.state.pris} onChange={this.handleChange.bind(this)} id='pris' type='text'></input><br />
              <label htmlFor="enhet">Enhet</label>
              <input value={this.state.enhet} onChange={this.handleChange.bind(this)} id='enhet' type='text' placeholder='styck eller kg'></input><br />
              <label htmlFor="antal">Antal i lager</label>
              <input value={this.state.antal} onChange={this.handleChange.bind(this)} id='antal' type='text'></input><br />
              <label htmlFor="varugrupp">Varugrupp</label>
              <input value={this.state.varugrupp} onChange={this.handleChange.bind(this)} id='varugrupp' type='text'></input><br />
              
              <label htmlFor="rabatt">Kampanjrabatt</label>
              <input value={this.state.rabatt} onChange={this.handleChange.bind(this)} id='rabatt' type='text'></input><br />
             
              <label htmlFor="bild">Bild</label>
              <input value={this.state.bild} onChange={this.handleChange.bind(this)} id='bild' type='text'></input><br />
              
              
              <label htmlFor="ekologisk">Ekologisk</label>
              <input checked={this.state.ekologisk} onClick={this.handleClick.bind(this)} id='ekologisk' type='checkbox'></input><br />
              <label htmlFor="kampanj">Kampanj</label>
              <input checked={this.state.kampanj} onClick={this.handleClick.bind(this)}
               id='kampanj' type='checkbox'></input><br />
              <label></label><input id='submit' type='submit'></input> &nbsp;&nbsp;
              <input onClick={this.handleReset.bind(this)} id='reset' type='button' value='Clear'></input>
              <img width='50%' src= {'images/'+this.state.bild}></img>
          </form>
         
      )
  }

}
export default App;
