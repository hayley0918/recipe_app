import React from 'react';
import './App.css';

const App = () =>{

  const APP_ID = 'a50e3aac'
  const APP_KEY = process.env.REACT_APP_SECRET_KEY

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  return(
    <div className="App">
      <h1>Hello React</h1>
    </div>
  )
}

export default App;
