import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Paste URL Here!'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(){

  }
  
  render () {
    return (
    <div className="app">
        <div className="banner">
          Redis Link Shortener
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='link-url-box'>
            <input value={this.state.value} onChange={this.handleChange} />
          </div>
          <div className='link-url-box-button'>
            <input type='submit' value='Submit' />
          </div>
        </form>
        <div className='shortened-link'>
          Your Shortened URL is:
          {this.state.value}
        </div>
      </div>
    );
  }
}