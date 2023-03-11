import './App.css';
import { useEffect } from 'react';

import { useState } from 'react';   // using State Hooks
// Any function that starts with a use in react we call it a Hook

const App = () => {
  const[counter , updateCounter] = useState(0);
  useEffect(()=>{
    // Use effect allows us to do something or some kind of a effect or some kind of an event.
    // alert("Reloaded");
    // Alert message appears in the page reload
    
    // Never Modify state manually.
    updateCounter(100);

  },[])

  // This array in the useEfffecr is the dependency array!
  // which stores the changes done by the user.
  // without the array the useEffect() will update and again the counter will reset back to 100.
  // If there is any element in the array then it will continously run.
  // It is recommended to not to store any element in the array.



  function add(){
    updateCounter(counter+1);
  }
  function sub(){
    updateCounter(counter-1);
  }
  return (
    <div className='App'>
      <button onClick={sub}>-</button>
      <h1>{counter}</h1>
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;


// THis is a Ternary Operator.
//  <h1>Hello,{isNameShowing?name:<h1>Noooo</h1>}</h1>

// React Fragement
// {name ? (
//   <>
//     test
//   </>
//  ):(
//   <h1>Test</h1>
//  )
// }

// However in order to add more element in the line 38 then you have to use <> </>  tag to insert the element.
  // const App = () => {
  //   // THis is a JSX File.

  //   // const name = null
  //   const loggedIn = false;
  //   return (
  //     <div className="App">
  //         {/* <h1>Hello,{isNameShowing?name:<h1>Noooo</h1>}</h1> */}
  //         {loggedIn? (
  //           <>
  //             <h1>Hello USer</h1>
  //           </>
  //         ):(
  //           <>
  //             <h1>Please Login </h1>
  //           </>
  //         )
  //         }
  //     </div>
  //   );
  // }


  // This is a Custom component, a Component is a set of code that returns a JSX.
// const person = () =>{
//   return (
//     <><h1>Name : John</h1>
//       <h2>Last Name : Doe</h2>
//       <h3>Age : 30</h3>
//     </>
//   )
// }
// In order to implement the code we can do  <Person /> to add it.


// Props : Props allow you to use dynamic data to add component
// const Person = (props) =>{
//   return (
//     <><h1>Name : {props.name}</h1>
//       <h2>Last Name : {props.lName}</h2>
//       <h3>Age : {props.age}</h3>
//     </>
//   )
// }


// <div className="App">
// {/* <Person name = {"ujjwal"} lName = {'Kumar'} age={21}/>
// </div> */}

// State : State in a react is a plain Javascript object used by React to represent a piece of information about
// the components current situation. It is completely managed by the component itself.


// Hooks : 
// import { useState } from 'react';   // using State Hooks
// // Any function that starts with a use in react we call it a Hook

// Event : Event is an action that can be triggerered as a result of the user action or some kind of a system generated event.
// eg : onClick or onHover is an event.

// const App = () => {
//   const[counter , updateCounter] = useState(0);
//   function add(){
//     updateCounter(counter+1);
//   }
//   function sub(){
//     updateCounter(counter-1);
//   }
//   return (
//     <div className='App'>
//       <button onClick={sub}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={add}>+</button>
//     </div>
//   );
// }

// See the Documentaiton of the Hooks!!!!!!!!.



// import './App.css';
// import { useEffect } from 'react';

// import { useState } from 'react';   // using State Hooks
// Any function that starts with a use in react we call it a Hook

// const App = () => {
  // const[counter , updateCounter] = useState(0);
  // useEffect(()=>{
    // Use effect allows us to do something or some kind of a effect or some kind of an event.
    // alert("Reloaded");
    // Alert message appears in the page reload
    
    // Never Modify state manually.
    // updateCounter(100);

  // },[])

  // This array in the useEfffecr is the dependency array!
  // which stores the changes done by the user.
  // without the array the useEffect() will update and again the counter will reset back to 100.
  // If there is any element in the array then it will continously run.
  // It is recommended to not to store any element in the array.
  