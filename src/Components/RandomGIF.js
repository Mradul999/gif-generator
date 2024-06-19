import React from "react";

export function RandomGIF({ image, getRandomGIF, loading }) {
  return (
    <div className="flex flex-col justify-between items-center space-y-6 lg:w-[600px] md:w-[500px] sm:w-[400px] w-[90%] mx-auto py-4 px-4 bg-green-400 rounded-xl border-[1px] border-black">
      <h1 className="text-[20px] text-center font-semibold underline">Random GIF</h1>
      {loading ? (
        <p className="text-[20px] font-semibold">Loading...</p>
      ) : (
        <img src={image} alt="Random GIF" className="w-[80%]" />
      )}
      <button
        onClick={getRandomGIF}
        className="font-semibold bg-green-200 py-2 rounded-md w-full"
      >
        GENERATE
      </button>
    </div>
  );
}
