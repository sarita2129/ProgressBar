import React, {Component} from 'react';

export default class Button extends Component{
  handleClick(e){
    console.log(e);
    this.props.onClick(e)
  }
  render(){
    return(
      <div className="buttondiv">
      {this.props.buttons.map( (button) => (

                          <button className="btnnew btn-primary" key={button} onClick={() => this.handleClick(button)}>{button}</button>
                      ))}

      </div>
    );
  }
}
