import "./Home.css"
import Hero from "../../images/Hero.jpg"
const Home = () => {
  return (
    <main>
      <div className="flex-row">
        <div  className="flex-child-hero">
          Hi There !<p>I'M Shubham Karmokar</p>
          <span>SOftware/FrontEnd Developer</span>
        </div>

        <div className="flex-child">
            {/* img for right side */}
            <img  className = "hero-img" src= {Hero} alt = "hero" />

        </div>
      </div>

      {/* intro section */}
      <div className="hero-main">
      <h3>LET ME INTRODUCE MYSELF.</h3>
      <p>  My name is Shubham Karmokar. I’m a frontend software engineer  in Mumbai


My work currently consists of a full time engineering role at Tata Consultancy Services . I find this balancing act to be super resourceful in terms my learning as a web developer, as well as for keeping up with the rapid expansion of developer tools, libraries, frameworks, etc.

My freelance web development roots are in Wordpress & Shopify, of which I'm self taught. In 2017, I started at UCLA to broaden my knowledge of the Node.js ecosystem. Since then, I fell in love with & have been primarily using React & Redux in web applications. For static sites, I love using Gatsby for creating blazing fast, SEO-driven headless frontend user interfaces.

Whether you're a business owner looking to get started on a app or web development project with a freelance web developer, a developer looking to collaborate on something cool, or just wanting to say hi, shoot me a message and let's work together.</p>
        </div>
    </main>
  );
};
export default Home;
