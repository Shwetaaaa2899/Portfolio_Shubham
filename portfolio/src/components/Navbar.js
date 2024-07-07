
import "./navbar.css";
const Navbar=()=> {
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <NavLink to="/">

              <h2>  
                <span>S</span>hubham
              </h2>
            </NavLink>
          </div>

          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <div onClick={logoutHandler}>
                  <NavLink to="/projects">Projects</NavLink>
                </div>
              </li>
              <li>
                <NavLink to="/resume">Resume</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar