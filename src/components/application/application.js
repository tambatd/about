import './application.css'
import Draggable from 'react-draggable';
import { useState, useEffect } from 'react';

const Application = (props) => {
    const [active, setActive] = useState(props.status);
    useEffect(() => {
        setActive(props.status);
    }, [props]);
    return (
        <div className="application" id={props.id}>
            {active &&
                <Draggable handle=".banner">
                    <div className="window">
                        <button className="CloseButton" onClick={() => setActive(false)}>
                                <b>X</b>
                            </button>
                        <div className="banner">
                            <div><p className="title">Welcome</p></div>
                        </div>
                       
                        <div className="app">
                            <div className="content">
                                <h1>Hi! I'm Devendra!</h1>
                                <hr />
                                <p>I like creating websites in React.JS ⚛️ </p>
                                <p>Particularly websites that are fun to use 🎉</p>
                                <p>The sites I create are heavily inspired by the early work of Naoto Fukasawa and Sony's Akio Morita and Masaru Ibuka</p>
                                <p>Using websites/GUIs should be fun. When someone uses something you made, they should smile</p>
                                <hr />
                                <div className="skills">
                                    
                                    <p > <h2>Skills:</h2>JavaScript, TypeScript, React 🥰, React Native, Electron, Express, etc. </p>
                                    <hr />
                                   
                                    <p > <h2 >Languages:</h2> Japanese, English, Marathi</p>
                                    <hr />
                                    <p >ETH Address: iotambat.eth</p>
                                    <p>Contact me => <a href="mailto:devendra.tambat@outlook.com">📧</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Draggable>
            }
        </div>
    );
}

export default Application;