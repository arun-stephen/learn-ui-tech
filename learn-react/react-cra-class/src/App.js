import './App.css';
import Main from "./component/main";
import Header from "./component/header";
import Footer from "./component/footer";
import React, { Component } from "react";

class App extends Component {

    render() {
      const CardData = [
          { img:"./images/adidas-shoe.png", name:"Adidas Shoe", price:50 },
          { img:"./images/adidas-football.png", name:"Adidas Football", price:350.75 },
          { img:"./images/adidas_perfume.png", name:"Adidas Perfume", price:150 },
          { img:"./images/adidas-jackets.png", name:"Adidas Jackets", price:200.50 },
          { img:"./images/adidas-bags.png", name:"Adidas Bags", price:170.0 },
          { img:"./images/adidas-jacket-mens-black.png", name:"Adidas Jacket", price:50 },
          { img:"./images/adidas-hockey-stick.png", name:"Adidas Hockey Stick", price:50 },
          { img:"./images/adidas-tracks.png", name:"Adidas Track Suits", price:50 }
      ];

      return (
          <div>
              <Header />
              <Main data={CardData} />
              <Footer />
          </div>
      );
    }
}

export default App;