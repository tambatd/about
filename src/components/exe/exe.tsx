import "./exe.css";
import Application from "../application/application";
import { useState } from "react";

interface Exe {
  id: string;
  key: string;
  name: string;
  image: string;
  link?: string;
}

const Exe = (props: Exe) => {
  const [active, setActive] = useState(false);
  return (
    <div id={props.id}>
      <div
        className="exe"
        onClick={() => (!props.link ? setActive(!active) : null)}
      >
        <a href={props.link}>
          <img className="icons" alt="app icon" src={props.image} />
          <p className="">{props.name}</p>
        </a>
      </div>
      {!props.link && active && <Application status={active} />}
    </div>
  );
};

export default Exe;
