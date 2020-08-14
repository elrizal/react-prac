import  React  from 'react';
//We want to set up a timer whenever the Clock is rendered to the DOM for the
// first time. This is called “mounting” in React.

//We also want to clear that timer whenever the DOM produced by the Clock
// is removed. This is called “unmounting” in React.
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    // componentDidMount() {
    //     //The componentDidMount() method runs after the component output has 
    //     //been rendered to the DOM. This is a good place to set up a timer:
    //     this.timerID = setInterval(
    //         () => this.tick(),
    //         1000
    //       );
    // }
  
    componentWillUnmount() {
        //We will tear down the timer in the componentWillUnmount() lifecycle method:
        clearInterval(this.timerID);
    }
//It will use this.setState() to schedule updates to the component local state:

    tick() {
        this.setState({
          date: new Date()
        }); // can failt with this.state.dat etc. 
      }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  export default Clock;