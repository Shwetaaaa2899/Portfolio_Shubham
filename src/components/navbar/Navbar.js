
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar=()=> {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <NavLink to="/" className="span">

              <h2 className="span">  
                <span>S</span>K.
              </h2>
            </NavLink>
          </div>

          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/"className={({ isActive }) =>
            isActive?"span":"span-i"}> Home</NavLink>
              </li>

              <li>
                <div >
                  <NavLink to="/projects" className={({ isActive }) =>
            isActive?"span":"span-i"}>Projects</NavLink>
                </div>
              </li>
              <li>
                <NavLink to="/resume" className={({ isActive }) =>
            isActive?"span":"span-i"}>Resume</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar