import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Utilities/Header/Header';
import Home from './Pages/Home/HomeMain/HomeMain';
import Footer from './Utilities/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import Medias from './Pages/AboutUs/Medias';
import Services from './Pages/Blog/Blog';
import Products from './Pages/Products/Products';
import ContactUs from './Pages/ContactUs/ContactUs';
import Error404 from './Pages/404/index';



const App = () => {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/media" component={Medias} />
          <Route exact path="/service" component={Services} />
          <Route exact path="/product" component={Products} />
          <Route exact path="/contact" component={ContactUs} />
          <Route path="*" component={Error404} />
        </Switch>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
