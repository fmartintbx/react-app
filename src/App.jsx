import { useState } from "react"
import Header from "./components/Header"

function App() {
   const[cantidad, setCantidad] = useState();

   function handleChange(e){ 
          console.log(+e.target.value);
   }
   
  return (
   <div className="my-20 max-w-lg mx-auto bg-white shadow p-10"> 
        < Header />

        <input 
            type="range"
            className="w-full h-6 bg-gray-200 accent-line-500 hover:accent-line-600"
            onChange={handleChange}
        />
   </div>
  )
}

export default App
