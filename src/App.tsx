import React from 'react';
import './App.css';
import Clock from './components/Clock';

let testProp: string = 'Am I getting passed  to the Clock component?'
let optionalProp: string = 'You sure are!';
 
// function App() {
// converting our functional component declaration into an arrow function expression
      //1         //2
const App: React.FunctionComponent = () => {
//1. Arrow function is given the name of 'App'
//2. After the colon, we are assigning a type to the function
  return (
      <div className="App">
        <div className="verticalCenter">
        <Clock testProp={testProp} optionalProp={optionalProp} />
        </div>  
      </div>
    );
}


export default App;
