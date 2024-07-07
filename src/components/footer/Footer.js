import "./Footer.css";
import {
  AiFillGithub,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="text">Made with <FaHeart  size ="10" color="red"/>  by Shubham</div>
      <div className="social-icons">
        <a
          href="https://github.com/shubham7111/"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub  size ="25" color="black"/>
        </a>
      </div>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/shubham-karmokar-42baa8122/"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size ="25" color="black"/>
        </a>
      </div>
      
    </div>
  );
};
export default Footer;
