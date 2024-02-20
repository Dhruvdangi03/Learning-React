
function ClickButton(){

    // let count = 0;

    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} clicked me ${count} times`);
    //     }else{
    //         console.log(`${name} stop clicking!`);
    //     }
    // }

    // return(
    //     <button onClick={() => handleClick("Dhruv")}>Click Me 😌</button>
    // );

    const handleClick = (e) => {
        e.target.textContent = "Clicked";
    };

    return(
        <button onClick={(e) => handleClick(e)}>Click Me 😌</button>
    );
}

export default ClickButton;