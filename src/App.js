import axios from 'axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import './App.css';
import Heading from './Components/Heading';
import Loader from './Components/Loader';
import UnsplashImg from './Components/UnsplashImg';

//access key has used for this project

function App() {

  const [images, setImages] = useState([])
  //const [page, setPage] = useState([])

  useEffect(()=>{
    fetchImages()



  },[])

  const fetchImages = async()=>{
    //const apiRoot = "https://api.unsplash.com/random";
    const mykey = '9BjQ-D3zHLtc5IlllvQCH2uAStDDVCZ_tHd7tpED56I'
    
    axios.get(`https://api.unsplash.com/photos?client_id=${mykey}&count=6`)
   // .then(res => console.log(res.data))
   .then(res => setImages([...images, ...res.data])
   )



  }



 

  return (
    <div>
        <Heading />
       
        {/* {images.map(img =>(
        <UnsplashImg url={img.urls.thumb} key={img.id}/>
        ))} */}

        <InfiniteScroll
       
        dataLength = {images.length}
        next = {fetchImages}
        hasMore = {true}    
     
        style={{ display: 'flex', flexDirection: 'column' }} 
   
  
        loader = { <Loader />}       
        >

        <UnsplashImg images={images}/>
      
        </InfiniteScroll>
        
    </div>
  );
}

export default App;
