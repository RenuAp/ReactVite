import { useState } from "react";

const BackgroundChanger = () =>{
    const [color, setColor]= useState("red");
   
     return(
    <>
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor:color} }>

       
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 

     <div className="flex flex-wrap justify-center shadow-lg gap-3
     bg-white px-3 py-2 rounded-3xl ">
        <button 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        onClick={()=>{setColor("red")}} 
        style={{backgroundColor:"red"}}>
            Red
        </button>
        <button 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        onClick={()=>{setColor("yellow")}} 
         style={{backgroundColor:"yellow"}}>
             yellow
         </button>
         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          onClick={()=>{setColor("green")}} 
         style={{backgroundColor:"green"}}>
             green
         </button>

        
        </div> 
     </div>  
     
       
  
   
      
    </div>
    </>

     )
 };
 export default BackgroundChanger;