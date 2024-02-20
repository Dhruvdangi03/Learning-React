
function ProfilePicture(){
    let imgUrl = './src/assets/HerFace.jpg';

    const handleClick = (e) => {
        e.target.setAttribute('src', './src/assets/anotherFace.jpg');
        console.log(e);
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