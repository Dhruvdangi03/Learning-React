import React, {useState} from "react";

function ProfilePicture(){
    // let imgUrl = './src/assets/HerFace.jpg';

    // const handleClick = (e) => {
    //     e.target.setAttribute('src', './src/assets/anotherFace.jpg');
    //     console.log(e);
    // }

    const girls = ['./src/assets/One.jpg', './src/assets/Two.jpg','./src/assets/Three.jpg', './src/assets/Four.jpg', './src/assets/Five.jpg', './src/assets/Six.jpg', './src/assets/Seven.jpg'];
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
        <img onClick={(e) => handleClick(e)}
            style = {{
            maxWidth: '40%',
            height: 'auto',
            borderRadius: '10%',
            marginBottom: '10px'}} 
            src={imgUrl}></img>
    );
}

export default ProfilePicture;