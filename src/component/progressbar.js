import React, {Component} from 'react';

export default class ProgressBar extends Component{

  render(){
    return(
      <div>
      {this.props.percent.map( (bar) => (
                          <div key={bar} className="divprogressbarbg">
                            <div className="divprogressbar" style={{"max-width":"100%",width:(bar > 95) ? '95%' : bar+'%',"background-color":(bar > 100) ? "red" : "rgb(43,194,83)","box-sizing":"border-box",
                            "border-top-right-radius": (bar > 100) ? "20px" : "8px", "border-bottom-right-radius":(bar > 100) ? "20px" : "8px"}}>

                            </div>
                            <span >{bar+'%'}</span>
                          </div>

                      ))}
      </div>
    );
  }
}
