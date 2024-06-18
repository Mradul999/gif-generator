import React from "react";
export function RandomGIF({image,getRandomGIF,loading}){
    return(
        <div className="flex flex-col justify-between items-center space-y-6   w-[600px] mx-auto py-4 px-14 bg-green-400 rounded-xl border-[1px] border-black">
            <h1 className="text-[20px] text-center font-semibold underline ">Random GIF</h1>
            {loading===true?(<p className="text-[20px] font-semibold ">Loading...</p>):(<img src={image} className=" h-350px w-550px" ></img>)}
            
            <button onClick={()=>getRandomGIF()} className="font-semibold bg-green-200 py-2  rounded-md w-full  ">GENERATE</button>

        </div>
    );
}