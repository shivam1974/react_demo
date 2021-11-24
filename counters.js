import React, { Component } from 'react';
import Counter from "./counter"
class Counters extends React.Component {
    state={
        counters: [
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:0}

        ]
    };
    handleDelete = (counterId) => {
        console.log ('Event Handler',counterId);
        const counters=this.state.counters.filter(c=>c.id !== counterId);
        this.setState({counters})
    }

    render() { 
        return <div>
            {this.state.counters.map(counter=> 
            <Counter key={counter.id} onDelete={this.handleDelete} 
            value={counter.value} 
            id={counter.id}>
                <h4>Title</h4>
            </Counter>
            )}    
        </div>;
    }
}
 
export default Counters;