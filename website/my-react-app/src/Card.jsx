// import randomImage from './assets/HerFace.jpg';
import React, {useState} from "react";

function Card(){
    const girls = ['./src/assets/HerFace.jpg', './src/assets/anotherFace.jpg'];
    let [imgUrl, setUrl] = useState(girls[0]);

    const handleClick = (e) => {
        if(imgUrl === girls[0]){
            setUrl(girls[1]);
        }else{
            setUrl(girls[0]);
        }
        
        // e.target.setAttribute('src', imgUrl);
        // console.log(e);
    }   

    return(
        <div className="card">
            {/* <img src={imgUrl}></img> */}
            <img className='card-image' onClick={(e) => handleClick(e)} src={imgUrl} alt="Random Picture"></img>
            <h2 className='card-title'>A Random Image</h2>
            <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos architecto numquam consequuntur corrupti! Labore nostrum sequi minus enim vel ea nobis porro quo quidem laboriosam, consequatur, eius assumenda repellat?</p>
        </div>
    );
}

export default Card;