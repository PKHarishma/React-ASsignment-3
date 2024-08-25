import React from 'react'; 
import ReactDOM from "react-dom/client"
import "./index.css";


const Logo=()=>
{
    return(
        <>
        <img
         src="https://ik.imagekit.io/1rpg1lzbz/mern1/logos-png-8.png"
          alt="apple logo"
          className="w-9 h-9" />
          
        
        </>
    )
}
const Search=()=>{
    return(
        <>
        <input 
        type="search"
        className='border-black rounded-md w-72 p-2' 
        placeholder='search'
        />
        </>
    )
}
const Right=()=>
{
    return(
        <>
       
        <div className="flex justify-start ">
        <p className='ml-1'>Home</p>
        <p className='ml-2'>Product</p>
        <p className='ml-2'>cart</p>
        </div>
        </>
)}




const App=()=>
{
    return(
        <div className='flex justify-evenly items-center bg-yellow-700 h-16'>
        <Logo/>
        <Search/>
        <Right/>
        
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<App/>);