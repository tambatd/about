import "./application.css";
import Draggable from "react-draggable";
import { useState, useEffect } from "react";

const Application = (props: any) => {
  const [active, setActive] = useState(props.status);
  useEffect(() => {
    setActive(props.status);
  }, [props]);
  return (
    <div className="application" id={props.id}>
      {active && (
        <Draggable handle=".banner">
          <div className="window">
            <button className="CloseButton" onClick={() => setActive(false)}>
              <b>X</b>
            </button>
            <div className="banner">
              <div>
                <p className="title">Welcome</p>
              </div>
            </div>

            <div className="app">
              <div className="content">
                <h1>Hi! I'm Devendra!</h1>
                <hr />
                <p>I like engineering and designing 😌 </p>
                <p>Particularly <i>anything</i> that is fun to use 🎉</p>
                <p>
                  The sites and objects I create are heavily inspired by the early work of
                  Naoto Fukasawa and Sony's original design team.
                  Using websites/GUIs or physical devices should be fun. When someone uses something
                  you made, they should smile
                </p>
                <hr />
                <div className="skills">
                  <p>
                    <h2>Skills:</h2>JavaScript, TypeScript, React 🥰, React
                    Native, Electron, Express, etc.
                  </p>
                  <hr />
                  <p>
                    <h2>Languages:</h2> Japanese, English, Kazakh
                  </p>
                  <hr />
                  <h2>Links:</h2>
                  <p>
                    Vienna Hypertext: 
                    <a href="https://vienna.earth/page/iotambat/Artists"> 🎨 </a>
                  </p>
                  <p>
                    Contact me:
                    <a href="mailto:devendra.tambat@outlook.com"> 📧 </a>
                  </p>
                  <p>
                    Twitter: 
                    <a href="https://twitter.com/iotambat"> 🐦 </a>
                  </p>
                  <p>
                    ETH Address: iotambat.eth
                  </p>
            
                </div>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default Application;
