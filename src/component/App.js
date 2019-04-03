import React, { Component } from 'react';
import ProgressBar from './progressbar';
import Button from './button';
import SelectBar from './selectbar';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      bars:[],
      buttons:[],
      limit:0,
      percent:[],
      style:"{background-color : green,width:50%}",
      updbar:0
    }
    const fetchapi = () => {
      fetch("http://pb-api.herokuapp.com/bars",
            { method: 'GET',
              headers: {"Content-Type" : "application/json"}
              }).then(res => res.json()).then(res => {
                 // console.log(res);
                 this.setState({bars:res.bars});
                 this.setState({buttons:res.buttons});
                 this.setState({limit:res.limit});
                 const arrbarpercent = this.state.bars.map( (bar) => {
                   return Math.round((bar * 100) / Number(this.state.limit))
                 });
                 console.log(arrbarpercent);
                 this.setState({percent:arrbarpercent});
             });
    }
    fetchapi();
  }
  loaddata(){
    window.location.reload();
  }
  handleSelect(bar){
    this.setState({updbar:bar});
  }
  handleClick(progress){
    this.updateprogress(progress,this.state.updbar);
  }
  updateprogress(progress,bar){
    let arrpercent = this.state.percent;
    arrpercent[bar] = (arrpercent[bar] + progress < 0) ? 0 : arrpercent[bar] + progress;
    // this.setState({bars:arrpercent});
    // const arrbarpercent = this.state.bars.map( (bar) => {
    //   return Math.round((bar * 100) / Number(this.state.limit))
    // });
    console.log(arrpercent);
    this.setState({percent:arrpercent});
  }
  render() {
    return (
      <div className="container col-4 bg-color">
        <h1>Progress Bar</h1>
        <ProgressBar percent={this.state.percent}/>
        <SelectBar bars={this.state.bars} onChange={(b) => this.handleSelect(b)}/>
        <Button buttons={this.state.buttons} onClick={(p) => this.handleClick(p)}/>
        <button className="btnnew btn-primary" onClick={() => this.loaddata()}>Reset</button>
      </div>
    );
  }
}

export default App;
