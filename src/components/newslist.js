import React, { useState,useEffect } from 'react'
import Axios from 'axios'
import Newsitem from './Newsitem'
import './newslist.css'
const Newslist=()=> {
    const [articles,setArticles]=useState([])
    useEffect(() => {
        const getArticles = async ()=>{
            const res = await Axios.get ("https://newsapi.org/v2/top-headlines?country=in&apiKey=75e03c1fdff94460ae5d3f130e4bf09b")
            setArticles(res.data.articles)
            console.log(res)
        }
        getArticles();
        },[])
    return (
        <div className='news'>
            <div  className="image1">
            {articles.map(({title,desription,url,urlToImage})=>(
                <Newsitem  title={title} 
                description={desription}
                url={url}
                urlToImage={urlToImage} />
            ))}
            </div>
        </div>
    )
}


export default Newslist;
