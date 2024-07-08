import { useState } from "react";
import axios from "axios";
function App() {

  const [excuse,setExcuse]=useState("The alarm betrayed me today.")
  
  const fetchData=async (reoson)=>{
    const {data}=await axios.get(`https://excuser-three.vercel.app/v1/excuse/${reoson}/`)
    setExcuse(data[0].excuse)
  console.log(excuse);

  }
  
  return (
    <div className="App h-screen  flex flex-col justify-center items-center bg-black text-white gap-6">
     <div>
     <h1 className='text-4xl  text-blue-400 font-thin flex justify-center items-center '>Generate an excuse</h1>
     </div>
     <div className="flex flex-col  items-center gap-2 ">
      <button className="bg-blue-600 rounded-lg  py-1 font-semibold w-[100px]" onClick={()=>{fetchData("funny")}} >Funny</button>
      <button className="bg-pink-600 rounded-lg  py-1  font-semibold w-[130px]" onClick={()=>{fetchData("office")}}>Office</button>
      <button className="bg-red-600 rounded-lg px-5 py-1 font-semibold w-[150px]" onClick={()=>{fetchData("developers")}}>Developers</button>
     </div>
     <h1 className="text-blue-400 text-2xl font-semibold text-center">{excuse}</h1>
    </div>
  );
}

export default App;
