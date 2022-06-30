import React from 'react'

function UnsplashImg(props){

    const {images} = props;

    console.log(images)

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        
                        <div className="row">
                        {images.map((item, index)=>(
                            <div className="col-md-3 mycol" key={index}>
                            <img src={item.urls.regular} className="myImg"/>
                        
                            </div>
                           ))}  
                        </div>
                   
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default UnsplashImg