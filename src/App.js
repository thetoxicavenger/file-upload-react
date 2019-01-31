import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    selectedFile: null,
    loaded: 0
  }
  onFileUpload = e => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }
  onSubmit = e => {
    e.preventDefault()
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)
    console.log(data.get('file'))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="file" onChange={this.onFileUpload} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
