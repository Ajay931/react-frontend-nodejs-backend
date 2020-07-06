import React, { Component } from 'react';
class Fetch extends React.Component {
  
    state = {
        apiResponse : ' '
    }

    callapi()
    {
        fetch("http://localhost:9000/index").
        then(res => res.text()).
        then(res => this.setState({apiResponse : res})).catch(err => err);
    }
    
    componentWillMount()
    {
        this.callapi();
    }

    render() {
      return <div>
            <p>{this.state.apiResponse}Hello</p>
      </div>;
    }
  }

export default Fetch;