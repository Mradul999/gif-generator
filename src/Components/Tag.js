import { useState } from "react";

export function Tag({getSearchedGIF,outputgif}) {

    const[searchedGIF,setSearchedGIF]=useState('');

    function changeHandler(event){
        setSearchedGIF(event.target.value)
    }
  return (
    <div className="flex flex-col justify-between items-center space-y-6   w-[600px] mx-auto py-4 px-14 bg-green-400 rounded-xl border-[1px] border-black">
            <h1 className="text-[20px] text-center font-semibold underline ">Random GIF</h1>
            <img src={outputgif} className=" h-350px w-550px" ></img>
            <input onChange={changeHandler} className="w-full py-2 rounded-md text-center text-[20px]" name="searchedGIF" value={searchedGIF}></input>
            <button onClick={()=>getSearchedGIF(searchedGIF)} className="font-semibold bg-green-200 py-2  rounded-md w-full  ">GENERATE</button>

        </div>
  );
}
