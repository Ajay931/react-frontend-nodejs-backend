import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class Counter extends Component {
    state = { 
        count : 1
     };

     constructor()
     {
         super();
         this.handleInc = this.handleInc.bind(this);
         this.handleDec = this.handleDec.bind(this);
     }

     handleInc()
     {
         this.setState({ count : this.state.count+1});
         console.log(this.state.count);
     }

     handleDec()
     {
        this.setState({ count : this.state.count-1});
        console.log(this.state.count); 
     }
    render() { 
    return <div>
            <span className='badge badge-warning m-2'>{this.state.count}</span>
            <button onClick={this.handleInc} className='btn btn secondary btn-sm'>Increment</button>
            <button onClick={this.handleDec} className='btn btn secondary btn-sm'>Decrement</button>
           </div>;
    }
}
 
export default Counter;