import React, { Component } from 'react';
import './App.css';
import FontAwesome from 'react-fontawesome'

class App extends Component {
//
// constructor() {
//   super();
//   this.state = { "avatar_url": ""};
// }

// componentDidMount() {
  // var that = this;
  // fetch("https://api.github.com/users/vphong/repos")
  //   .then(function(result) {
  //     return result.json()
  //   }).then(function(json) {
  //     console.log(json)
  //     that.setState({"avatar_url": json[0].owner.avatar_url})
  //   }).catch(function(ex) {
  //     console.log('parsing failed', ex)
  //   })
// }

  render() {
    return (
      <div className="container">
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Vanna Phong</h1>
          </header>
        </div>

        <div className="icons">
        <a href="mailto:contact@vanna.io"><FontAwesome name="envelope" /></a>
        </div>
      </div>
    );
  }
}

export default App;
