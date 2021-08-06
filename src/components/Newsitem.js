import React from 'react'
import './newsitem.css'

const Newsitem =({title,description,url,urlToImage})=> {
    return (
        <div className='news-item'> 
        <div className='news-dec'> 
            <img className='news-image' src={urlToImage} alt="" />
            <h3 className=''> <a href={url}></a> {title}</h3>
            <p className='D'> {description} </p>
        </div>
        </div>
    )
}

export default Newsitem
