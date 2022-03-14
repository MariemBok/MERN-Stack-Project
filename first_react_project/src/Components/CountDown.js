import React, {useEffect, useState} from "react";

function Countdown(){
    const [date, setDate] = useState(new Date().toLocaleString());

    /*useEffect(() => {
        date.addEventListener('',)
    });

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize',handleResize);*/

    return(
        <h1>today is : {date}</h1>
    );
}

export default Countdown;