import React, { useState, useEffect } from 'react';
import './styles.css';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
  
    const handleSearchChange = event => {
      setSearchTerm(event.target.value);
    };
    
    const handleSortChange = event => {
      setSortOrder(event.target.value);
    };
  
    const filteredProducts = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const sortedProducts = filteredProducts.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  
    return (
      <div>
        <div className='fullgrid' style={{ display: "flex" }}>
          <div className='filters'>Filters
          </div>
          <div className='section' >
            <div className='search'>
              <div>
                <input
                  type="text"
                  placeholder="Search products"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>

              <div style={{ float: "right" }}>
                Sort by : {"  "}
                <select value={sortOrder} onChange={handleSortChange} >
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </select>
              </div>
              
            </div>
            <br></br>
            <br></br>
            <div className="products-grid" >
              {sortedProducts.map(product => (
                <div key={product.id} className="product-item">
                  <div className="image-card">
                    <img src={product.image} alt={product.title} />
                    
                  </div>
                  <div className="text-card">
                    <h4>{product.title}</h4>
                    <h4>AED {product.price}</h4>
                  </div>
                </div>
                
              ))}
            </div>
          </div>
          
        </div>
      </div>
    );
  };
  
  export default ProductsList;