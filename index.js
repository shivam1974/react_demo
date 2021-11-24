import React from "react";
import reactDom from "react-dom";
import Bookshelf from "./bookshelf";
import Counter from "./counter";
import Counters from "./counters";

const element = <h1>Hello lala</h1>

reactDom.render(element, document.getElementById('root'));
// reactDom.render(< Bookshelf/>,document.getElementById('root')) 
reactDom.render(<Counter/>, document.getElementById('root'));
reactDom.render(<Counters/>, document.getElementById('root'));