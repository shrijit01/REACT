import React, { useState } from 'react'
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  const [Name, setName] = useState("Shrijit");

  return (
    <>
      <Header user={Name}/>
      <Home />
    </>
  );
}

export default App;