import React from 'react';

import './App.css';
import Navbar from "./components/navbarFolder/navbar"
import Caro from "./components/carousel/caro"
import Multicaro from "./components/multicaro/multicaro"
import Carditem from "./components/carditems/carditem"
import Carditems from "./components/carditems/carditems"
import Footer from "./components/footer/footer"
import Category from "./components/category/category"
function App() {
  return (
    <div className="body">
    <Navbar/>
   <Caro/>
   <Multicaro/>
   <Multicaro/>
   <Carditems/>
   {/*<Category/>*/}
   <Footer/>
   
    </div>
  );
}

export default App;

/* <div className="App container">
    <h1 className="bg-dark">React</h1>
      <p>BOOTSTRAP WORKING</p>
    </div> */