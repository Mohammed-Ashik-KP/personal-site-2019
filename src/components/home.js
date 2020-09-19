import React from 'react';
import Footer from './footer';
import LandingPage from './landingPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
const Home = () => {
    return ( 
        <React.Fragment>
    <BrowserRouter>
     
              <Switch>
                    <Route path="/" exact component={LandingPage}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/portfolio" exact component={Portfolio}/>
                    <Route path="/contact" exact component={Contact}/>
              </Switch>
       
    </BrowserRouter>
            <Footer/>
        </React.Fragment>
     );
}
 
export default Home;