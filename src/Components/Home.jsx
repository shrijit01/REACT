import React, { useState } from "react";
import Card from "./Card";
import Loading from "./Loading";
import { GrPowerReset } from "react-icons/gr";

function Home() {
  const [Image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rotation, setRotation] = useState(0);

  const fetchData = async () => {
    setRotation((prev) => prev + 360);
    setLoading(true);
    try {
      const response = await fetch("https://picsum.photos/v2/list");
      const data = await response.json();
      console.log(data);
      setImage(data);
      console.log("Image", Image);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Data not Found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={fetchData}
        className="btn absolute bottom-5 h-16 w-16 flex items-center right-5 bg-indigo-500 text-white text-bold px-5 py-2 rounded-full m-5 border-none"
      >
        <GrPowerReset
          size={24}
          className="transform transition-transform duration-[500ms]"
          style={{ transform: `rotate(${rotation}deg)` }} // Apply dynamic rotation
        />
      </button>
      <div className="flex items-center justify-center">
        <Card Image={Image} loading={loading} />
      </div>
    </div>
  );
}

export default Home;
