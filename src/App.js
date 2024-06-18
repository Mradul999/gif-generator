import React, { useEffect, useState } from "react";
import { RandomGIF } from "./Components/RandomGIF";
import {Tag} from "./Components/Tag.js"
import "./App.css";
import axios from "axios";

function App() {
  const [image, setImage] = useState('');

  async function getRandomGIF() {
    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/random', {
        params: {
          api_key: 'ehsrInxNgBILRfo2zeTmzMPczU5S3V2a' 
        }
      });
      const gifPath = response.data.data.images.original.url;
      console.log(gifPath); 
      setImage(gifPath);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  useEffect(() => {
    getRandomGIF();
  }, []);

  // const[searchedGIF ,setSearchedGIF]=useState('');
  const[outputgif,setoutputgif]=useState('');



  async function getSearchedGIF(searchedGIF){
    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/random', {
        params: {
          api_key: 'ehsrInxNgBILRfo2zeTmzMPczU5S3V2a' ,
          tag:searchedGIF
        }
      });
      const gifPath = response.data.data.images.original.url;
      // console.log(gifPath); 
      setoutputgif(gifPath);
      
    } catch (error) {
      console.error('Error fetching data: ', error);
      
    }

  }

  return (
    <div className="bg-slate-500 w-full h-full flex flex-col space-y-16 py-2 pb-[20px]">
      <h1 className="mt-[40px] text-center font-bold text-[27px] bg-white mx-14 rounded-lg py-1">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col gap-3">
        <RandomGIF image={image} getRandomGIF={getRandomGIF}/>
        <Tag getSearchedGIF={getSearchedGIF} outputgif={outputgif}></Tag>
      </div>
    </div>
  );
}

export default App;
