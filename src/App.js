import React, { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("");

document.title = title;
  useEffect(() => {
    
    // Fetch data from the backend
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title); // Set the title from the backend
        // console.log(data)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>{title ? title :"Loading"}</h1> {/* Display title or loading message */}
      <>
        {/* <Header user={Name}/> */}
        {/* <Home /> */}
      </>
    </div>
  );
}

export default App;
