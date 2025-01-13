import React, { useState } from "react";
import Card from "./Card";
import Loading from "./Loading";

function Home() {
  const [Image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list"
      );
      const data = await response.json();
      console.log(data)
      setImage(data);
      console.log("Image",Image);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Data not Found");
    } finally {
      setLoading(false);
    }
  };

  // var data = 20;
  // let data;
  // data = 20;
  // console.log(data);

  return (
    <div>
      <button
        onClick={fetchData}
        className="btn bg-indigo-500 text-white text-bold px-5 py-2 rounded-md m-5 border-none"
      >
        Fetch
      </button>
      <div className="flex items-center justify-center">
        {/* <Loading /> */}
        {/* <h1>{data}</h1> */}
        <Card Image={Image} loading={loading}/>
      </div>
    </div>
  );
}

export default Home;
