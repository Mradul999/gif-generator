import React, { useEffect, useState } from "react";
import { RandomGIF } from "./Components/RandomGIF";
import { Tag } from "./Components/Tag";
import "./App.css";
import axios from "axios";

function App() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [outputGif, setOutputGif] = useState("");


  async function getRandomGIF() {
    try {
      setLoading(true);
      const response = await axios.get("https://api.giphy.com/v1/gifs/random", {
        params: {
          api_key: "ehsrInxNgBILRfo2zeTmzMPczU5S3V2a",
        },
      });
      const gifPath = response.data.data.images.original.url;
      setImage(gifPath);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
     
    }
  }

  useEffect(() => {
    getRandomGIF();
  }, []);

  async function getSearchedGIF(searchedGIF) {
    try {
      setLoading(true);
      const response = await axios.get("https://api.giphy.com/v1/gifs/random", {
        params: {
          api_key: "ehsrInxNgBILRfo2zeTmzMPczU5S3V2a",
          tag: searchedGIF,
        },
      });
      const gifPath = response.data.data.images.original.url;
      setOutputGif(gifPath);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      
    }
  }
  useEffect(() => {
    getSearchedGIF();
  }, []);

  return (
    <div className="bg-slate-500 w-full h-full flex flex-col space-y-16 py-2 pb-[20px]">
      <h1 className="mt-[40px] text-center font-bold text-[27px] bg-white mx-14 rounded-lg py-1">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col gap-3">
        <RandomGIF
          image={image}
          getRandomGIF={getRandomGIF}
          loading={loading}
        />
        <Tag
          getSearchedGIF={getSearchedGIF}
          outputGif={outputGif}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
