import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Home";
import AboutUs from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import QuickContact from "./components/QuickContact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <QuickContact />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
