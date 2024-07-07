import "./Project.css";
import { NavLink } from "react-router-dom";
import Proj1 from "../../images/Proj1.png";
import Proj2 from "../../images/Proj2.png";
const Project = () => {
  return (
    <div className="project-parent-container">
      <h2>MY PROJECTS</h2>

      <div className="flex-proj-parent">
        <div className="proj-child">
        <p>ECommerce Website</p>
          <small>
            Description: HTML5, CSS3, JS, React used to create the website. For
            backend, MockBee is used and hosting done on Netlify. The website
            includes Cart management, Wishlist management, Authentication.
            Filter management, profile etc.
          </small>
          <a href="https://shopkart-eco.netlify.app/" target="_blank" rel="noopener noreferrer">

          <img className="proj1-img" src={Proj1} alt="ecomemrce-projec" />
          </a>   
        </div>
        <div className="proj-child">
       
          <p>Social Media App</p>
          <small>
          Description: HTML5, CSS3, JS, React used to create the website. For backend, MockBee is used and hosting done on Netlify. The website includes
          Authentication, User can like, share or create a post, follow or unfollow a user, explore the feeds etc.
          </small>
          <a href="https://social-addaa.netlify.app/" target="_blank" rel="noopener noreferrer">

          <img className="proj2-img" src={Proj2} alt="ecomemrce-projec" />
          </a>   
          
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Project;
