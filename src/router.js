
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import services from "./pages/services";
import Details from "./pages/servicedetails";

function Router() {
  return (
    <div>
      <BrowserRouter>
      <div className='nav-body'>
        <Link className='nav-link' to="/">Go to Home</Link>
        <Link className='nav-link' to="/About">Go to About</Link>
        <Link className='nav-link' to="/Contact">Go to Contact</Link>
        <Link className='nav-link' to="/Services">Go to Services</Link>
      </div>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={services} />
        <Route path="/servicedetails/:id/:name" component={Details} />
      </BrowserRouter>
    </div>
  );
}

export default Router;