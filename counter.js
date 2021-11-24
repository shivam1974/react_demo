import React, { Component } from 'react';
class Counter extends Component {
    state= {
        count : this.props.value

    };



    handleIncrement = () => {
        this.setState ({count: this.state.count+1});
        console.log("Increment Clicked");
    }
    styles={
        fontSize:40,
        fontWeight:"Bold"
    }
    render() { 

    console.log("props",this.props);
        return (
         <React.Fragment>

        

            {this.props.children}

            <span style={this.styles}>{this.state.count}</span>
            <button 
                onClick={this.handleIncrement}
                className="btn btn-secondary btn-sm">button</button>
                <button onClick= {() =>this.props.onDelete(this.props.id) } className="btn btn-danger btn-sm m-2">Delete</button>
                
        </React.Fragment>
        );
    }
    formatCount() {
        const {count} = this.state;
        return count===0 ? "zero": count
    }
}
 
export default Counter;