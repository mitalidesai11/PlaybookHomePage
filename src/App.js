import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';

function App() {
  const myStyle= 
    {
    backgroundImage: "url(./Images/background_image.png)",
    height:'50vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    }
  return <div>  
  <div style={myStyle}>
</div>
<div style={{textAlign:"center"}}> <h1>Please click here to go to Playbook </h1><a href="https://nflplaybook.nfl.net/">
         <img src=".\Images\playbook.png" alt=""></img></a></div>
</div>
}

export default App;
