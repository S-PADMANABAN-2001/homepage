import './App.css';
import React from 'react';
import { Wave } from "react-animated-text";
import Particle from './Particle';
import ieeeLogo from './ieeeLogo.jpg';
function App() {
  return (
    <div className="App">
      <Particle/>
      <CenterTitle />
      </div>
    );
  }
  const Title = (text, size) => (
    <Wave
      text={text}
      speed="2.5"
      effect="stretch"
      effectChange={size}
      effectDirection="both"
    />
  );
  function CenterTitle() {
    return (
      <div id="text_div center_all">
        <h1 className='h'>Welcome to my website</h1>
        <div className="center_all">
            <img src= {ieeeLogo} alt="logo" height={150} width={400} className="logo" />
            <h1>{Title("IEEE STUDENT CHAPTER", 2)}</h1>
        </div>
        {/* <div className="center_btn">
          <button className="btn" heref="#Aboutus" >About IEEE</button>
          <button className="btn" heref="Aboutus" >Boad Members</button>
          <button className="btn" heref="Aboutus" >Activities</button>
        </div> */}
      </div>
    );
  }
//   function AboutUs() {
//     return (
//       <div id="Aboutus" >
//         <div className='abt'>
//         <h1>About IEEE</h1>
//         <p>IEEE is the world’s largest professional association dedicated to advancing technological
// innovation and excellence for the benefit of humanity. IEEE and its members inspire a global
// community through IEEE’s highly cited publications, conferences, technology standards, and
// professional and educational activities.</p>
// </div>
//       </div>
//     );
//   }
export default App;
