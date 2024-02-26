import React, {useState, useEffect} from "react";

function DigitalClock(){

    let [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return() => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${addZero(hours)}:${addZero(min)}:${addZero(sec)} ${meridiem}`;
    }

    function addZero(number){
        return number < 10 ? '0' + number : number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;
