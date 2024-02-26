import React, {useState} from "react";

function Card(){
    const girls = ['./src/assets/One.jpg', './src/assets/Two.jpg','./src/assets/Three.jpg', './src/assets/Four.jpg', './src/assets/Five.jpg', './src/assets/Six.jpg', './src/assets/Seven.jpg'];

    const generateNumber = (min, max) => {
        if (min === max) {
          return min;
        }
    
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    let index = generateNumber(0, 6);

    let [imgUrl, setUrl] = useState(girls[index]);

    const handleClick = (e) => {
        // if(imgUrl === girls[0]){
        //     setUrl(girls[1]);
        // }else{
        //     setUrl(girls[0]);
        // }
        
        // e.target.setAttribute('src', imgUrl);
        // console.log(e);

        setUrl(girls[generateNumber(0, 6)]);
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