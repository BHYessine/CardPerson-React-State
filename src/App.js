import React from 'react';
import './App.css';
import Time from './Component/Time';

class App extends React.Component {
  state = {
    Person : {
      fullName:"Yessine Ben Hlima",
      bio:"30",
      imgSrc:"./user.png",
      profession:"Web Developer"},
    show: false,
  };

  handleClick=()=>{
    this.setState({...this.state,
      show: !this.state.show}
      )
    };
      
  render(){
        return (
          <div className="App">
            
            <button onClick={this.handleClick} >{this.state.show?('Hidden'):('Show')}</button>
            { this.state.show ? (
              <div className="card">
                <img src={this.state.Person.imgSrc} width="120px" height="120px" alt=""/>
                <div className="person">My name is {this.state.Person.fullName}</div>
                <div className="person">I`m {this.state.Person.bio} years old</div>
                <div className="person">I`m an {this.state.Person.profession}</div>  
                <Time/>
              </div>   
             
              ):(<h2>Click to show the profile!!</h2>) 
            }  
                          
          </div>
    );
  }
  
}

export default App;
