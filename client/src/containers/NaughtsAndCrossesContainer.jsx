import React from "react";
import NaughtsAndCrossesBoard from "../components/NaughtsAndCrossesBoard.jsx";

export default class NaughtsAndCrossesContainer extends React.Component{

  constructor(props){
    super(props);
    this.state={ topL:null, topC:null, topR:null, midL:null, midC:null, midR:null, botL:null, botC:null, botR:null}
  }

  render(){
    return(
      <div>
        <p>You lose</p>
        <NaughtsAndCrossesBoard boardPositions={this.state}/>
      </div>
    )
  }

}