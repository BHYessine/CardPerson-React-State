import React from 'react';
class Time extends React.Component {
  state = {
    digit: 0
  };
componentDidMount = () => {
  this.myTimer = setInterval(() => {
    this.setState((prevState) => ({
      digit: prevState.digit + 1
    }));
 }, 1000);
 };
 
   componentWillUnmount = () => {
     clearInterval(this.myTimer);
   }
   render(){
    return (
      <div className="counter"> Time Shows : {this.state.digit}s </div> 
    );}
  }

   export default Time;
