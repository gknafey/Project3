import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Home";
import AboutUs from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import FormInfo from "./pages/Form";
import NoMatch from "./pages/NoMatch";
import LoginInfo from "./pages/Login";
import SignUpInfo from "./pages/Signup";
import Nav from "./components/Nav";
import QuickContact from "./components/QuickContact";
import Footer from "./components/Footer";
import JobManagement from "./pages/JobManagement";
import HiddenLink from "./components/Hidden";
import Archived from "./pages/Archived";
import ImagesPortfolio from "./pages/FullImages";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <HiddenLink />
        <QuickContact />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/PortfolioImages" component={ImagesPortfolio}/>
          <Route exact path="/Services" component={Services} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path='/RequestForm' component={FormInfo} />
          <Route exact path='/Login' component={LoginInfo} />
          <Route exact path='/SignUp' component={SignUpInfo} />
          <Route exact path='/JobManagement' component={JobManagement} />
          <Route exact path='/Archived' component={Archived} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
