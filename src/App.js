import './App.css';



const App = () => {

  return (
    
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

// State : 