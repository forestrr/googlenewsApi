import React from 'react'
import './Search.css'

function Search() {
    return (
        <div>
          <div className="image">
              <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
          <div className='bar'>
          <input class="searchBar" type="text" title="Search"></input>
          </div>

         <div className="Buttons">

               <button className='Button'>Google Search</button>
               <button className='Button'>Im feeling lucky</button>
           
         </div>
         </div>
          
       </div>   
        
    )
}

export default Search
