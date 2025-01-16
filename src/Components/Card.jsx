import React, { useState } from "react";
import Loading from "./Loading";

function Card({ Image, loading }) {
  // console.log("Console from CARD",Image);

  return (
    <>
      {loading ? (
        <Loading />
      ) : Image ? (
        <>
          <div className="grid grid-cols-4 gap-4 bg-custom-400 snap-x h-lvh w-full px-5 py-5 overflow-auto overeflow-scroll">
            {Image.map((image, index) => {
              return (
                <div
                  key={index}
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                  className="bg-zinc-400 transition-transform duration-500 ease-in animate-fade-in"
                >
                  <img
                    src={image.download_url}
                    alt="image"
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="flex items-center absolute top-[50%] justify-center h-100% w-100%">
          <h1>Images not Found</h1>
        </div>
      )}
    </>
  );
}

export default Card;
