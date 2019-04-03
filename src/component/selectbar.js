import React, {Component} from 'react';

export default class SelectBar extends Component{
  constructor(){
    super();
    this.state = {
      value:""
    }
  }
  handleSelect(e){
    // alert(e)
    this.setState({value:e.target.value});
    // console.log(e);
    this.props.onChange(e.target.value);

  }
  render(){
    return(
      <select name="progress" onChange={(e) => this.handleSelect(e)} value={this.state.value} className="select mL10">
      {this.props.bars.map( (bar,index) => (

                          <option key={bar} value={index}>{"progressbar " + (index+1)}</option>
                      ))}
      </select>
    );
  }
}
