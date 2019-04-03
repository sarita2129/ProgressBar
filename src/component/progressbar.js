import React, {Component} from 'react';

export default class ProgressBar extends Component{

  render(){
    return(
      <div>
      {this.props.percent.map( (bar) => (
                          <div key={bar} className="divprogressbarbg">
                            <div className="divprogressbar" style={{"maxWidth":"100%",width:(bar > 95) ? '95%' : bar+'%',"backgroundColor":(bar > 100) ? "red" : "rgb(43,194,83)","boxSizing":"border-box",
                            "borderTopRightRadius": (bar > 100) ? "20px" : "8px", "borderBottomRightRadius":(bar > 100) ? "20px" : "8px"}}>

                            </div>
                            <span >{bar+'%'}</span>
                          </div>

                      ))}
      </div>
    );
  }
}
