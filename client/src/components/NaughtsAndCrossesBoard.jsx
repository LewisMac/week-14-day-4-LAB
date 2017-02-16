import React from "react";

export default class NaughtsAndCrossesBoard extends React.Component{

  constructor(props){
    super(props);
    this.state={player: 0};
  }

  HandleButtonClick(event){
    // console.log(this)
    // console.log(event.target.innerHTML)
    const targetId = event.target.id
    const targetValue = event.target.innerHTML
    this.changeStateLogic(targetValue, targetId);
  }

  changeStateLogic(targetValue, targetId){
    if (targetValue === " " && this.state.player === 1) {
      this.props.boardPositions[targetId] = true;
      let selected = document.querySelector('#' + targetId);
      selected.innerHTML = "X"
      this.gameWinLogic(targetId);
    } else if (targetValue === " " && this.state.player === 0){
      this.props.boardPositions[targetId] = true;
      let selected = document.querySelector('#' + targetId);
      selected.innerHTML = "O"
      this.gameWinLogic(targetId);
    }
  }

  gameWinLogic(targetId){
    var selected = document.querySelector("#"+targetId)

    let opt1
    let opt2
    let opt3
    let opt4
    let optA

    switch(targetId){
      case "topL":
       opt1 = document.querySelector("#topC");
       opt2 = document.querySelector("#midC");
       opt3 = document.querySelector("#midL");
      if( opt1.innerHTML === selected.innerHTML ) {
         optA = document.querySelector("#topR");

        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      } else if ( opt2.innerHTML === selected.innerHTML ) {
         optA = document.querySelector("#botR");

        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }  else if ( opt3.innerHTML === selected.innerHTML ) {
         optA = document.querySelector("#botL");

        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }
      break;

      case "topC":
      opt1 = document.querySelector("#topR");
      opt2 = document.querySelector("#midC");
      if( opt1.innerHTML === selected.innerHTML ) {
        optA = document.querySelector("#topL");
        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      } else if ( opt2.innerHTML === selected.innerHTML ) {
        optA = document.querySelector("#botC");
        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }
      break;

      case "topR":
      opt1 = document.querySelector("#topC");
      opt2 = document.querySelector("#midC");
      opt3 = document.querySelector("#midR");
      if( opt1.innerHTML === selected.innerHTML ) {
        optA = document.querySelector("#topL");
        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      } else if ( opt2.innerHTML === selected.innerHTML ) {
        optA = document.querySelector("#botL");
        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }  else if ( opt3.innerHTML === selected.innerHTML ) {
        optA = document.querySelector("#botR");
        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }
      break;

      case "midL":
      opt1 = document.querySelector("#topL");
      opt2 = document.querySelector("#midC");
      if( opt1.innerHTML === selected.innerHTML ) {
        optA = document.querySelector("#botL");
        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      } else if ( opt2.innerHTML === selected.innerHTML ) {
        optA = document.querySelector("#midR");
        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }  
      break;

      case "midC":
      opt1 = document.querySelector("#topC");
      opt2 = document.querySelector("#midL");
      opt3 = document.querySelector("#topL"); 
      opt4 = document.querySelector("#botL"); 
      if( opt1.innerHTML === selected.innerHTML ) {
        optA = document.querySelector("#botC");
        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      } else if ( opt2.innerHTML === selected.innerHTML ) {
        optA = document.querySelector("#midR");
        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }  else if ( opt3.innerHTML === selected.innerHTML ) {
        optA = document.querySelector("#botR");
        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }  else if ( opt4.innerHTML === selected.innerHTML ) {
        optA = document.querySelector("#topR");
        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }
      break;

      case "midR":
       opt1 = document.querySelector("#topR");
       opt2 = document.querySelector("#midC");
      //  opt3 = document.querySelector("#topR");
      if( opt1.innerHTML === selected.innerHTML ) {
         optA = document.querySelector("#botR");

        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      } else if ( opt2.innerHTML === selected.innerHTML ) {
         optA = document.querySelector("#midL");

        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }
      break;

      case "botL":
       opt1 = document.querySelector("#midL");
       opt2 = document.querySelector("#midC");
       opt3 = document.querySelector("#botC");
      if( opt1.innerHTML === selected.innerHTML ) {
         optA = document.querySelector("#topL");

        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      } else if ( opt2.innerHTML === selected.innerHTML ) {
         optA = document.querySelector("#topR");

        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }  else if ( opt3.innerHTML === selected.innerHTML ) {
         optA = document.querySelector("#botR");

        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }
      break;

      case "botC":
       opt1 = document.querySelector("#botL");
       opt2 = document.querySelector("#midC");
      //  opt3 = document.querySelector("#midL");
      if( opt1.innerHTML === selected.innerHTML ) {
         optA = document.querySelector("#botR");

        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      } else if ( opt2.innerHTML === selected.innerHTML ) {
         optA = document.querySelector("#topC");

        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }
      break;

      case "botR":
       opt1 = document.querySelector("#botC");
       opt2 = document.querySelector("#midC");
       opt3 = document.querySelector("#midR");
      if( opt1.innerHTML === selected.innerHTML ) {
         optA = document.querySelector("#botL");

        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      } else if ( opt2.innerHTML === selected.innerHTML ) {
         optA = document.querySelector("#topL");

        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }  else if ( opt3.innerHTML === selected.innerHTML ) {
         optA = document.querySelector("#topR");

        if( optA.innerHTML === selected.innerHTML){
          const winner = document.querySelector("#results-text")
          winner.innerText = "You Win"
        }
      }
      break;
    }
    if(this.state.player === 0){
      this.setState({player: this.state.player + 1})
    } else {
      this.setState({player: this.state.player - 1})
    }
  }


  render(){
    return(
      <div>
      <p>Hi there</p>

      <div id="main-div">
      <div className="item" onClick={this.HandleButtonClick.bind(this)} id="topL"> </div>
      <div className="item" onClick={this.HandleButtonClick.bind(this)} id="topC"> </div>
      <div className="item" onClick={this.HandleButtonClick.bind(this)} id="topR"> </div>
      <div className="item" onClick={this.HandleButtonClick.bind(this)} id="midL"> </div>
      <div className="item" onClick={this.HandleButtonClick.bind(this)} id="midC"> </div>
      <div className="item" onClick={this.HandleButtonClick.bind(this)} id="midR"> </div>
      <div className="item" onClick={this.HandleButtonClick.bind(this)} id="botL"> </div>
      <div className="item" onClick={this.HandleButtonClick.bind(this)} id="botC"> </div>
      <div className="item" onClick={this.HandleButtonClick.bind(this)} id="botR"> </div>
      </div>

      <div>
        <h3 id="results-text"></h3>
      </div>
      </div>
      )
  }

}