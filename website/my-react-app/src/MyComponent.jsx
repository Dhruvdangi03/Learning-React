import React, {useState, useEffect, useRef} from "react";

function MyComponent(){
    // let [name, setName] = useState("Guest");
    // let [age, setAge] = useState(0);
    // let [employeed, setEmployeed] = useState(false);

    // const updateName = () => {
    //     setName("Dhruv");
    // }

    // const incrementAge = () => {
    //     setAge(age +1);
    // }

    // const updateEmployeed = () => {
    //     setEmployeed(!employeed);
    // }

    // return(
    //     <div>
    //         <p>Name: {name}</p>
    //         <button onClick={updateName}>Set Name</button>

    //         <p>Age: {age}</p>
    //         <button onClick={incrementAge}>Inc Age</button>

    //         <p>Is Employeed: {employeed ? "Yes" : "No"}</p>
    //         <button onClick={updateEmployeed}>Job</button>
    //     </div>
    // );

    // let [name, setName] = useState("");
    // let [quantity, setQuantity] = useState(1);
    // let [comment, setComment] = useState("");
    // let [payment, setPayment] = useState("");
    // let [shipping, setShipping] = useState("");

    // function handleNameChange(event){
    //     setName(event.target.value);
    // }

    // function handleQuantityChange(event){
    //     setQuantity(event.target.value);
    // }
    
    // function handleCommentChange(event){
    //     setComment(event.target.value);
    // }

    // function handlePaymentChange(event){
    //     setPayment(event.target.value);
    // }

    // function handleShippingChange(event){
    //     setShipping(event.target.value);
    // }

    // return(
    //     <div>
    //         <input value={name} onChange={handleNameChange}/>
    //         <p>Name: {name}</p>

    //         <input value={quantity} onChange={handleQuantityChange} type="number"/>
    //         <p>Quantity: {quantity}</p>

    //         <textarea value={comment} onChange={handleCommentChange}
    //         placeholder="Enter delivery instructions" />
    //         <p>Comment: {comment}</p>

    //         <select value={payment} onChange={handlePaymentChange}>
    //             <option value="">Select an option</option>
    //             <option value="Visa">Visa</option>
    //             <option value="UPI">UPI</option>
    //             <option value="Mastercard">Mastercard</option>
    //             <option value="Giftcard">Giftcard</option>
    //         </select>
    //         <p>Payment: {payment}</p>

    //         <label>
    //             <input type="radio" value="Pick Up"
    //                     checked={shipping === "Pick Up"}
    //                     onChange={handleShippingChange}
    //             />
    //             Pick Up
    //         </label><br/>
    //         <label>
    //             <input type="radio" value="Delivery"
    //                     checked={shipping === "Delivery"}
    //                     onChange={handleShippingChange}
    //             />
    //             Delivery
    //         </label>
    //         <p>Shipping: {shipping}</p>
    //     </div>
    // );


    // Working with the object.
    // let [phone, setPhone] = useState({year: 2023, make: "Pixel", model: "8 Pro"});

    // function handleYearChange(event){
    //     setPhone(p => ({...p, year: event.target.value}));
    // }
    // function handleMakeChange(event){
    //     setPhone(p => ({...p, make: event.target.value}));
    // }
    // function handleModelChange(event){
    //     setPhone(p => ({...p, model: event.target.value}));
    // }

    // return(
    //         <div>
    //             <p>Your Favorite Phone is: {phone.make} {phone.model} {phone.year}</p>

    //             <input type="number" value={phone.year} onChange={handleYearChange}></input><br/>
    //             <input type="text" value={phone.make} onChange={handleMakeChange}></input><br/>
    //             <input type="text" value={phone.model} onChange={handleModelChange}></input><br/>
    //         </div>
    // );

    // Working with arrays status in react
    // let [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

    // function handleAddFood(){
    //     const newFood = document.getElementById("foodTnput").value;
    //     document.getElementById("foodTnput").value = "";

    //     setFoods(f => [...f, newFood]);
    // }

    // function handleRemoveFood(index){
    //     setFoods(foods.filter((_, i) => i != index));
    // }

    // return(
    //     <div>
    //         <h2>List of Food</h2>
    //         <ul className="remove-food">
    //             {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
    //         </ul>
    //         <input type="text" id="foodTnput" placeholder="Enter food name"/>
    //         <button onClick={handleAddFood}>Add Food</button>
    //     </div>
    // );

    // Updating the Object Array
    // let [phones, setPhone] = useState([]);
    // let [phoneYear, setPhoneYear] = useState(new Date().getFullYear());
    // let [phoneMake, setPhoneMake] = useState("");
    // let [phoneModel, setPhoneModel] = useState("");

    // function handleAddPhone(){
    //     const newPhone = {  year: phoneYear,
    //                         make: phoneMake,
    //                         model: phoneModel};

    //     setPhone(p => [...p, newPhone]);

    //     setPhoneYear(new Date().getFullYear());
    //     setPhoneMake("");
    //     setPhoneModel("");
    // }

    // function handleRemovePhone(index){
    //     setPhone(p => p.filter((_, i) => i !== index));
    // }

    // function handleYearChange(event){
    //     setPhoneYear(event.target.value);
    // }

    // function handleMakeChange(event){
    //     setPhoneMake(event.target.value);
    // }

    // function handleModelChange(event){
    //     setPhoneModel(event.target.value);
    // }

    // return(
    //     <div>
    //         <h2>List of Phones</h2>
    //         <ul>
    //             {phones.map((phone, index) => 
    //                 <li key={index} onClick={() => handleRemovePhone(index)}>
    //                     {phone.year} {phone.make} {phone.model}
    //                 </li>
    //             )}  
    //         </ul>

    //         <input type="number" value={phoneYear} onChange={handleYearChange}/><br/>
    //         <input type="text" value={phoneMake} onChange={handleMakeChange} placeholder="Enter Phone Company"/><br/>
    //         <input type="text" value={phoneModel} onChange={handleModelChange} placeholder="Enter Phone Model"/><br/>
    //         <button onClick={handleAddPhone}>Add Phone</button>
    //     </div>
    // );

    // Using useEffect now
    // let [count, setCount] = useState(0);
    // let [color, setColor] = useState("green");

    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`;
    // }, [color, count]);

    // function addCount(event){
    //     setCount(c => c + 1);
    // }

    // function substractCount(event){
    //     setCount(c => c - 1);
    // }

    // function changeColor(event){
    //     setColor(c => c === "green" ? "red" : "green");
    // }

    // return(
    //     <>
    //         <p style={{color: color}}>Count: {count}</p>
    //         <button onClick={addCount}>Add</button>
    //         <button onClick={substractCount}>Substract</button><br/>

    //         <button onClick={changeColor}>Change Color</button>
    //     </>
    // );

    // let [width, setWidth] = useState(window.innerWidth);
    // let [height, setHeight] = useState(window.innerHeight);

    // Without useEffect this will run everytime the component re-renders
    // window.addEventListener("resize", handleResize);
    // console.log("Event Listener Added");

    // useEffect(() => {
    //     window.addEventListener("resize", handleResize);
    //     console.log("Event Listener Added");

    //     return() => {
    //         window.removeEventListener("resize", handleResize);
    //         console.log("Event Listener Removed");
    //     };
    // }, []);

    // useEffect(() => {
    //     document.title = `Size ${width} x ${height}`;
    // }, [width, height]);


    // function handleResize(){
    //     setWidth(window.innerWidth);
    //     setHeight(window.innerHeight);
    // }

    // return(
    //     <>
    //         <p>Window Width: {width}</p>
    //         <p>Window Height: {height}</p>
    //     </>
    // );

    // let [number, setNumber] = useState(0);

    // const ref = useRef(0);

    const inputRef1 = useRef(null);
    const inputRef2= useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED")
    });

    function handleClick1(){
        // setNumber(n => n + 1);
        // ref.current++;
        // console.log(ref.current);
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "Gray";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "Yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "Blue";
    }

    return(
        <div>
            <button onClick={handleClick1}>
                Click Me 1!
            </button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>
                Click Me 2!
            </button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>
                Click Me 3!
            </button>
            <input ref={inputRef3}/>
        </div>
    );
}

export default MyComponent;