import React from 'react';
import Header from "../Components/header.js"
import Menu from "../Components/navbar.js"
import ProductsList from "../Components/productlist.js"
import './styles.css';

const Shop = () => {
    return (
      <html>
        <header>
          <Header/>
          <Menu/>
        </header>
        <body>
          <div>
            <h1>HOME &gt; SHOP</h1>
            <h4>Shop</h4>
            <div>
              <ProductsList />
            </div>
            
          </div>
        </body>
      </html>
     
    );
}

export default Shop;