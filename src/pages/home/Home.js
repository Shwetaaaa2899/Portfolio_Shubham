import "./Home.css"
import { FaReact } from "react-icons/fa";
import Hero from "../../images/Hero.jpg"
import { AiOutlineDotNet } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiTcs } from "react-icons/si";
const Home = () => {
  return (
    <main>
      <div className="flex-row">
        <div  className="flex-child-hero">
          Hi There !<p>I'M Shubham Karmokar</p>
          <span>Software/FrontEnd Developer</span>
        </div>

        <div className="flex-child">
            {/* img for right side */}
            <img  className = "hero-img" src= {Hero} alt = "hero" />

        </div>
      </div>

      {/* intro section */}
      <div className="hero-main">
      <h3>LET ME INTRODUCE MYSELF.</h3>
      <p>  My name is Shubham Karmokar. I’m a frontend software engineer  from Mumbai.<br/>


My work currently consists of a full time engineering role at Tata Consultancy Services .<br/>
I have a total of 3+ years of Industrial Experience as a full time System engineer in TCS.<br/>
<div className="tech">
<FaReact size="30" /> 
<AiOutlineDotNet size="30"  /> 
<IoLogoJavascript size="30"  />
<FaJava size="30"  />
<DiMysql size="30"  />



</div>

</p>
  </div>
    </main>
  );
};
export default Home;
