import React from 'react';
import ReactDOM from 'react-dom';

let App = () => {
  return (<div>Hello...</div>);
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'))
})