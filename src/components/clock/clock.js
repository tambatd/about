import { useState, useEffect, useRef } from 'react';
import './clock.css'

const Clock = () => {
    const timerID = useRef(null);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }
    useEffect(() => {
        timerID.current = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
          }   
    }, []);
    return (
        <div className="clock">
            <h2>{date.toLocaleTimeString().split(':')[0]}:{date.toLocaleTimeString().split(':')[1]} {date.toLocaleTimeString().substr(-2)}</h2>
        </div>
    );
}

export default Clock;