// import randomImage from './assets/HerFace.jpg';

function Card(){
    const imgUrl = './src/assets/HerFace.jpg';

    return(
        <div className="card">
            {/* <img src={imgUrl}></img> */}
            <img className='card-image' src={imgUrl} alt="Random Picture"></img>
            <h2 className='card-title'>A Random Image</h2>
            <p className='card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quos architecto numquam consequuntur corrupti! Labore nostrum sequi minus enim vel ea nobis porro quo quidem laboriosam, consequatur, eius assumenda repellat?</p>
        </div>
    );
}

export default Card;