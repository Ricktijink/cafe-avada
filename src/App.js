// React
import React from 'react';
import {Route, Switch} from 'react-router-dom'
// import './index';

// Pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import FoodAndDrinks from './pages/FoodAndDrinks'
import OurStory from './pages/OurStory'
import Locations from './pages/Locations'
import Contact from './pages/Contact'
import BlogPost from './pages/BlogPost'

// Components
import Sidebar from './components/Sidebar';
// import Hero from './components/Hero'

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about-us/" component={AboutUs}/>
        <Route exact path="/food-and-drinks" component={FoodAndDrinks}/>
        <Route exact path="/our-story" component={OurStory}/>
        <Route exact path="/locations" component={Locations}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/blog/:slug" component={BlogPost}/>
        {/* Errorpage heeft een error */}
        {/* <Route component={Error}/> */}
      </Switch>
    </div>
  );
}

export default App;
