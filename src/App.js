import React, { useEffect, useState } from "react";
import { RandomGIF } from "./Components/RandomGIF";
import { Tag } from "./Components/Tag";
import "./App.css";
import axios from "axios";

function App() {
  const [image, setImage] = useState("");
  const [randomLoading, setRandomLoading] = useState(false); 
  const [outputGif, setOutputGif] = useState("");
  const [searchLoading, setSearchLoading] = useState(false); 

  async function getRandomGIF() {
    try {
      setRandomLoading(true);
      const response = await axios.get("https://api.giphy.com/v1/gifs/random", {
        params: {
          api_key: "ehsrInxNgBILRfo2zeTmzMPczU5S3V2a",
        },
      });
      const gifPath = response.data.data.images.original.url;
      setImage(gifPath);
      setRandomLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setRandomLoading(false);
    }
  }

  useEffect(() => {
    getRandomGIF();
  }, []);

  async function getSearchedGIF(searchedGIF) {
    try {
      setSearchLoading(true);
      const response = await axios.get("https://api.giphy.com/v1/gifs/random", {
        params: {
          api_key: "ehsrInxNgBILRfo2zeTmzMPczU5S3V2a",
          tag: searchedGIF,
        },
      });
      const gifPath = response.data.data.images.original.url;
      setOutputGif(gifPath);
      setSearchLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setSearchLoading(false);
    }
  }

  useEffect(() => {
    getSearchedGIF("Cute Cat");
  }, []);

  return (
    <div className="bg-slate-500 w-full h-[100%] flex flex-col space-y-16 py-2 pb-[20px]">
      <h1 className="mt-[40px] text-center font-bold text-[20px] sm:text-[27px] bg-white mx-14 rounded-lg py-1">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col gap-3 ">
        <RandomGIF
          image={image}
          getRandomGIF={getRandomGIF}
          loading={randomLoading}
        />
        <Tag
          getSearchedGIF={getSearchedGIF}
          outputgif={outputGif}
          loading={searchLoading}
        />
      </div>
    </div>
  );
}

export default App;
