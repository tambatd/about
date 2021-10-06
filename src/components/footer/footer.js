import "./footer.css";
import Clock from "../clock/clock"

const Footer = (props) => {
  return(
    <div className="footer">
      <div>
        <p className="title start">
            <a href="https://twitter.com/iotambat">@iotambat</a>
        </p>
    </div>
    <div>
    <a href="https://glitch.com/@tambatd">  <img
            className="title" alt="Glitch Link"
            src="https://cdn.glitch.com/7ede87d0-4da8-4129-b65f-88a6926c3e83%2FGlitchLogo_Color.svg?v=1632251790271"
        /></a>

    <a href="https://github.com/tambatd">  <img
            className="title"  alt="Github Link"
            src="https://cdn.glitch.com/7ede87d0-4da8-4129-b65f-88a6926c3e83%2FGitHub-Mark-64px.png?v=1632252020860"
        /></a>
        
    </div>
  
    <Clock/>
    
</div>
  );
}

export default Footer;