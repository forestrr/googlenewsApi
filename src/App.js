import React from "react";
import Newslist from '../src/components/newslist'
import Search from "./components/Search";
import './App.css'
import Newsitem from "./components/Newsitem";
function App()
 {
  return (
    <div className="App">
     <Search/> 
     <h1 className='headline' >Trending</h1>
    <Newslist/>
    
    </div>
      )
}
export default App;
