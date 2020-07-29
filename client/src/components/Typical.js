// comp is removed from the DOM: componentwillunmount() 
//The render() method is the only required method in a class component.
//When called, it should examine this.props and this.state and return one of the following types:
//react elements, array fragments, portals, strings, numbers, boolean and null
//render() will not be invoked if shouldComponentUpdate() returns false.

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));
  // Wrong:
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Example