import React from 'react';

import './App.css';
import Navbar1 from "./components/navbarFolder/navbar1"
import Caro from "./components/carousel/caro"
import Multicaro from "./components/multicaro/multicaro"
import Carditem from "./components/carditems/carditem"
import Carditems from "./components/carditems/carditems"
import Footer from "./components/footer/footer"
import Category from "./components/category/category"



class App extends React.Component{
    render(){
  return (
    <div className="body">
    <Navbar1/>
   <Caro/>
   <Multicaro title="New Arrivals"/>
   <Multicaro title="Best Sellers"/>
   <Carditems/>
   <Footer/>
   
    </div>
  )
    }
}

export default App;

/* <div className="App container">
    <h1 className="bg-dark">React</h1>
      <p>BOOTSTRAP WORKING</p>
    </div> */