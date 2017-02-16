var React = require('react');
var ReactDOM = require('react-dom');
import NaughtsAndCrossesContainer from "./containers/NaughtsAndCrossesContainer.jsx"

window.onload = function(){
  ReactDOM.render(
    <NaughtsAndCrossesContainer/>,
    document.getElementById('app')
  );
}
