import "./App.css";
import { useState } from "react";

function App() {
  const[count,setCount] = useState(0);
  function Increament(){
    setCount(count+1);

  }
  function Decreament(){
    setCount(count-1);

  }
  function Reset(){
    setCount(0);

  }

  return (
    // <main class="flex justify-center gap-4 flex-col min-h-screen">
    //   <h1 class="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
    //   <p class="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
    //   <img src="https://bit.ly/3wsmzTy" alt="meme" class="mx-auto" />
    // </main>
    <div className="flex justify-center flex-col items-center h-[100vh] bg-slate-600 gap-10">
      <div className=" text-[#0398d4] text-xl">
        <h3>Increament And Decreament</h3>
      </div>
      <div className="flex flex-row justify-center bg-white gap-12 py-3 rounded-sm text-[25px]">
        <button onClick={Decreament} className="border-r-2 text-center w-20 text-5xl border-[#bfbfbf]">-</button>
        <p className="font-bold gap-12 text-5xl">{count}</p>
        <button onClick={Increament} className="border-l-2 text-center w-20 text-5xl border-[#bfbfbf]">+</button>
      </div>
      <div>
        <button onClick={Reset} className="bg-blue-400 text-white px-5 py-2 rounded-sm">Reset</button>
      </div>
    </div>
  );
}

export default App;
