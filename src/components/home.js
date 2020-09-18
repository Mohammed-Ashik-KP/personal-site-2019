import React from 'react';
import Footer from './footer';
import LandingPage from './landingPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './about';
const Home = () => {
    return ( 
        <React.Fragment>
    <BrowserRouter>
     
              <Switch>
                    <Route path="/" exact component={LandingPage}/>
                    <Route path="/about" exact component={About}/>
              </Switch>
       
    </BrowserRouter>
            <Footer/>
        </React.Fragment>
     );
}
 
export default Home;