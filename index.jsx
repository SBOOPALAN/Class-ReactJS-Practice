import React, { Component } from "react";
import "./index.css";
import "./pages/Home.css"
import { useState } from "react";

/*_____________________________________________________________________________________________________________________*/

import ReactDOM from "react-dom/client";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(<App />);


/*_____________________________________________________________________________________________________________________*/

/* FIRST PROGRAM REACT     [ 1 ]  */

//  const Sample =()=>{
//     return(
//         <div>
//             <h1>Hello World</h1>
//         </div>
//     )
// }

// const r1=ReactDOM.createRoot(document.getElementById('root'))

// r1.render(<Sample/>)

/*_____________________________________________________________________________________________________________________*/

/* BASIC RENDERING REACT     [ 2 ] */

//  const App=()=>{
//     return(
//         <div>
//             <h1>Hi student</h1>
//             <p>Welcome To ReactApp</p>
//         </div>
//     )
// }

// const r1=document.getElementById('root')

// const r2=ReactDOM.createRoot(r1)

// r2.render(<App/>)

/*_____________________________________________________________________________________________________________________*/

/* DYNAMIC RENDERING      [ 3 ]  */

//  const App = () => {
//     const Username = "Hi student";
//     return (
//         <div>
//             <h1>{Username}</h1>
//             <center>
//             <h2>Today's date: {new Date().toLocaleDateString()}</h2>
//             </center>

//         </div>
//     );
// };
// const r1 = ReactDOM.createRoot(document.getElementById('root'));

// r1.render(<App />);

/*_____________________________________________________________________________________________________________________*/

/*  WITH REACT JSX     [ 4 ]  */

// const student=<h1>Welcome to the jsx</h1>
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(student)

/*_____________________________________________________________________________________________________________________*/

/*  WITHOUT REACT JSX  [ 5 ]  */

// const student1=React.createElement('h1',null,'Welcome to the without jsx')
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(student)

/*_____________________________________________________________________________________________________________________*/

/*  EXPRESSING IN JSX       [ 6 ]  */

// const myElement=<h1>React.js{5+5} times better with jsx </h1>

// const root =ReactDOM.createRoot(document.getElementById ('root'))

// root.render(myElement);

/*_____________________________________________________________________________________________________________________*/

/*  REACT JS LIST topics    [ 7 ] */

//  const student=()=>{

//     return(
//         <div>
//             <ul>
//                 <li>list 1</li>
//                 <li>list 2</li>
//                 <li>list 3</li>
//             </ul>
//         </div>
//     )
// }

// const r3=ReactDOM.createRoot(document.getElementById('root'))

// r3.render(<student/>)

/*_____________________________________________________________________________________________________________________*/

/* EXPRESSION IN VARIABLE {name} [ 8 ] */

//  const student=()=>{
//     const Username ='student'
//     return(
//         <div>
//             <h1>Welcome {Username}</h1>
//         </div>
//     )
// }

// const r4=ReactDOM.createRoot(document.getElementById('root'))

// r4.render(<student/>)

/*_____________________________________________________________________________________________________________________*/

/* React ClassName [ 9 ] */

//  const App=()=>{

//     return(
//         <div className='s1'>
//             <h1 className='s2'>React is {5+5} times better with JSX</h1>;
//         </div>

//     )
// }

// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<App/>)

/*_____________________________________________________________________________________________________________________*/

/* conditional Rendering in (if) lader [ 10 ] */

//   const x=9
//               let text=""

//               if(x>10){
//                   text="good bye"
//               }

//               const student=()=>{
//                   return(
//                       <div>
//                           <h1>
//                               output is {text}</h1>
//                       </div>
//                   )
//               }

//               const r2=ReactDOM.createRoot(document.getElementById('root'))

//               r2.render(<student/>) */

/*_____________________________________________________________________________________________________________________*/

/*  Rendering in (else if) lader [ 10.2 ] */

// const x=9
// let text=""

// if(x>10){
//     text="good bye"
// }
// else if (x===10)
//     {
//         text="ten"
//     }
// else{
//     text="x is less than 10 "
// }

// const student=()=>{
//     return(
//         <div>
//             <h1>
//                 output is {text}</h1>
//         </div>
//     )
// }

// const r2=ReactDOM.createRoot(document.getElementById('root'))

// r2.render(<student/>)

/*_____________________________________________________________________________________________________________________*/

/* Condition Rendering in (Nested if) lader [ 10.3 ] */

// const x=9
// let text=""

// if(x>10){
//     text="good bye"
// }
// else if (x===10)
//     {
//         text="ten"
//     }
//     if (x===11){
//         text="abcd"
//     }
//     if (x<12){
//         text="one"
//     }
// else{
//     text="x is less than 10 "
// }

// const student=()=>{
//     return(
//         <div>
//             <h1>
//                 output is {text}</h1>
//         </div>
//     )
// }

// const r2=ReactDOM.createRoot(document.getElementById('root'))

// r2.render(<student/>)

/*_____________________________________________________________________________________________________________________*/

/* condition Operator (ternary operator) [ 11 ] */

// const x=5;

// const myElement= <h1>{(x)<10? "Hello": "Good bye"}</h1>

// const root=ReactDOM.createRoot(document.getElementById('root'))

// root.render(myElement)

/*_____________________________________________________________________________________________________________________*/

/* React class Component  [ 12 ]*/

// class Sample extends React.Component
// {
//     render()
//     {
//         return(
//             <div>
//                 <h1>Welcome to the class Component</h1>
//             </div>
//         )
//     }
// }

// const d1 =ReactDOM.createRoot(document.getElementById('root'))
// d1.render(<Sample/>)

/*_____________________________________________________________________________________________________________________*/

/* function Component [ 13 ] */

// function Sample(){
//     return <h2>Hi, I am a Sample </h2>
// }

// const d1 =ReactDOM.createRoot(document.getElementById('root'))

// d1.render(<Sample/>)

/*_____________________________________________________________________________________________________________________*/

/* function Component [ 13.2 ] */

// function Sample1(){

//     return<h1>Hello student Welcome to my page </h1>

// }

// const r1=ReactDOM.createRoot(document.getElementById('root'))

// r1.render(<Sample1/>)

/*_____________________________________________________________________________________________________________________*/

/* Function Component With props  [ 14 ] */

// function Sample(props)

// {
//     return (
//         <>
//          <h1>Welcome to function Component</h1>
//          <p id="p1">{props.name}</p>
//          <p id="p2">{props.age}</p>
//         </>
//     )
// }

// const r1=ReactDOM.createRoot(document.getElementById('root'))

// r1.render(<Sample name={"student"} age={22} />)

/*_____________________________________________________________________________________________________________________*/

/*  Component in Component  [ 15 ] */

// function Sample() {
//     return <h2>I am a Sample !</h2>
// }

// function student() {
//     return (
//         <>
//             <h1>Who in my student ? </h1>
//             <Sample />
//         </>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<student />)

/*_____________________________________________________________________________________________________________________*/

/* Component files in React  [ 16 ] */

// import Sample from "./App";

// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample />)

/*_____________________________________________________________________________________________________________________*/

/*  Component constructor  [ 17 ] */

// class Sample extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "student",
//             age: 22
//         };
//     }

//     render() {
//         return (
//             <>
//                 <h1>Username: {this.state.name}</h1>
//                 <h2>Password: {this.state.age}</h2>
//             </>
//         );
//     }
// }

// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample/>)

/*_____________________________________________________________________________________________________________________*/

/*  React state  [ 17.2 ] */

// class Employee extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "student",
//             age: 22,
//             id:"student379",
//             salary:"20000",
//             performance:"Good"

//         };
//     }

//     render() {
//         return (
//             <>
//                 <h1>Employee id:: {this.state.id}</h1>
//                 <h1>Employee Name:: {this.state.name}</h1>
//                 <h1>Employee Salary:: {this.state.salary}</h1>
//                 <h1>Employee performance:: {this.state.performance}</h1>

//             </>
//         );
//     }
// }

// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Employee/>)

/*_____________________________________________________________________________________________________________________*/

/* Constructor Using props [ 18 ] */

// class Sample extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state={f1:"green",f2:"Arial, Helvetica, sans-serif",f3:"50px", f4:"pink", f5:'center'}

//         }
//         render()
//         {
//          return(
//            <div>
//            <h3 style={{backgroundColor:this.state.f1}}>{this.props.text}</h3>
//            <h3 style={{fontFamily:this.state.f2, fontSize:this.state.f3, backgroundColor:this.state.f4,
//               textAlign:this.state.f5

//            }}>{this.props.text}</h3>

//            </div>

//          )

//         }
//     }

// const r1=ReactDOM.createRoot(document.getElementById('root'))

// r1.render(<Sample text= 'Hello World'/>)

/*_____________________________________________________________________________________________________________________*/

/* changing the state Object [ 19 ] */

// class Sample extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             emp: {
//                 id: 1002,
//                 name: "student",
//                 city: "London"
//             },
//             showData: false
//         };
//     }

//     showData() {
//         this.setState({
//             showData: true
//         });
//     }

//     hideData() {
//         this.setState({
//             showData: false
//         });
//     }

//     render() {
//         let Data;
//         if (this.state.showData) {
//             Data = (

//                 <div className= "data">
//                     <button id="btn" onClick={this.hideData.bind(this)}>Hide Data</button> <br/> <br/>

//                     <b>name:  {this.state.emp.name} </b><br/><br/>
//                     <b>id:    {this.state.emp.id} </b><br/><br/>
//                     <b>city:  {this.state.emp.city} </b><br/><br/>
//                  </div>
//             );
//         } else {
//             Data = (

//                 <button id="btn" onClick={this.showData.bind(this)}>Show Data</button>
//             );
//         }
//         return (
//             <div className="App">
//                 <h1>Employee Details</h1>
//                 {Data}
//             </div>
//         );
//     }
// }

// /* ReactDOM.render(<Sample />, document.getElementById('root'));*/

// const r1=ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<Sample/>)

/*_____________________________________________________________________________________________________________________*/

/* React Events [ 20 ]   */

// function Football (){
//     const shoot = ()=>{
//         alert('Goal')
//     }
//     return(

//         <>
//         <button id="btn" onClick={shoot}>ClickHere</button>
//         </>
//     )
// }

// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Football/>)

/*_____________________________________________________________________________________________________________________*/

/*  React Events Arguments passing [ 21 ]*/

// function Football() {
//   const shoot = (a) => {
//     alert("Goal " + a);
//   }

//   return (
//     <button id="btn"  onClick={() => shoot('Arguments!!')}>Click Here</button>
//   );
// }

// const r1 = ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<Football />);

/*_____________________________________________________________________________________________________________________*/

/*  React Events login from [ 22 ] */

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//       alert("thank you for login ")
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2 id="text">Login</h2>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button id="sub" type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// const r1=ReactDOM.createRoot(document.getElementById('root'))

// r1.render(<Login/>)

/*_____________________________________________________________________________________________________________________*/

/*  React Events login from [ 23 ] */

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState('student');

//   return (
//     <>
//       <div>
//         <h1>count: {count}</h1>
//         <h1>your name is!!: {name}</h1>
//         <button id="btn" onClick={() => setName('bala')}>New name</button><br/><br/><br/>

//         <button id="btn" onClick={() => setCount(count + 1)}>Increment</button>
//       </div>
//     </>
//   );
// }
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Counter/>)

/*_____________________________________________________________________________________________________________________*/

/*  useSate in typing add table  [ 24 ] */

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <>
//       <p id="count">count: {count}</p>
//       <button id="Increment" onClick={() => setCount(count + 1)}>Increment</button>
//       <p id="Username">Username: {username}</p>
//       <input id="text" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       <p id="password">Password: {password}</p>
//       <input id="input-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//       <table id="table"border="1">
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Password</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{username}</td>
//             <td>{password}</td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// }

// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Counter/>)

/*_____________________________________________________________________________________________________________________*/

/*  conditional rendering in multiple functions [ 25 ] */

// function MissedGoal() {
//   return <h1>Missed Goal</h1>;
// }

// function MadeGoal() {
//   return <h1>Goal</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;

//   if (isGoal) {
//     return <MadeGoal />;
//   } else {
//     return <MissedGoal />;
//   }
// }

// const r1 = ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<Goal isGoal={Math.random() > 0.7} />);

/*_____________________________________________________________________________________________________________________*/

/* List With Map function [ 26 ] */

// function Emp(props) {
//   return <h1>{props.n1}</h1>;
// }

// function Salary() {
//   const emp = ["mohan", "mohamed", "azar", "raja"];

//   return (
//     <ul>
//       {emp.map((n1, index) => (
//         <Emp n1={n1} key={index} />
//       ))}
//     </ul>
//   );
// }

// const r1 = ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<Salary />);

/*_____________________________________________________________________________________________________________________*/

/* React Simple Login from  [ 27 ] */

// function Sample(){
//     return(
//         <>
//         <form action="">
//             <label> UserName</label>
//             <input type="text"/>
//             <label> UserName</label>
//             <input type="password"/>
//              <input type="submit"  value="Login" className="btn btn-primary"/>

//             </form>
//         </>
//     )
// }

// const r1= ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Sample/>)

/*_____________________________________________________________________________________________________________________*/

/* React TextArea  [ 28 ] */

// function MyTextArea() {
//   const [value, setValue] = React.useState('');

//   return (
//     <>
//       <textarea value={value} onChange={e => setValue(e.target.value)}></textarea>

//       <p>{value}</p>
//     </>
//   );
// }

// const r1 = ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<MyTextArea />);

/*_____________________________________________________________________________________________________________________*/

/* React getDerived State from State  [ 29 ] */

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favcolor: "red" };
//   }

//   static getDerivedStateFromProps(props,state) {
//     return {
//       favcolor: props.favcolor
//     };
//   }

//   render() {
//     return <h1>This is reader page {this.state.favcolor}</h1>;
//   }
// }

// const r1 = ReactDOM.createRoot(document.getElementById('root'));
// r1.render(<Header favcolor="pink" />);

/*_____________________________________________________________________________________________________________________*/

/* component Did mind  [ 30 ] */

// componentDidMount()
// {
//     setTimeout(() => {
//       this.setState({ favColor: "yellow" });
//     }, 1000);
//   }

/*_____________________________________________________________________________________________________________________*/

/*  getDerived State from props [ 31 ] */

// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { favColor: "red" };
//       this.changeColor = this.changeColor.bind(this);
//     }

//     static getDerivedStateFromProps(props, state) {
//       return {
//         favColor: props.favColor
//       };
//     }

//     changeColor() {
//       this.setState({ favColor: "yellow" });
//     }

//     render() {
//       return (
//         <div>
//           <h1>This is reader page {this.state.favColor}</h1>
//           <button type="button" onClick={this.changeColor}>Change color</button>
//         </div>
//       );
//     }
//   }

//   const r1 = ReactDOM.createRoot(document.getElementById('root'));
//   r1.render(<Header favColor="pink" />);

/*_____________________________________________________________________________________________________________________*/
