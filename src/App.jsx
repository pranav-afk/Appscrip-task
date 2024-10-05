import React, { useState, useEffect } from 'react';
import Header from './component/header.jsx';
import Footer from './component/footer.jsx';


export const App=()=> {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortproducts, setsortedProducts] = useState([]);
  const [setIsLoading] = useState(true);
  const [setError] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const response2= await fetch('https://fakestoreapi.com/products?sort=desc')
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        const data2= await response2.json();
        setProducts(data);
        setDisplayedProducts(data);
        setsortedProducts(data2)
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSort = (e) => {
    const value = e.target.value;

    if (value === "Price: High to Low") {
      setDisplayedProducts(sortproducts);
    } 
    else{
      setDisplayedProducts(products);
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters); 
  };

  return (
    <React.Fragment>
      <Header/>
      <main>
        <section>
          <h1 style={{textAlign:'center',fontSize: '50px'}}>DISCOVER OUR PRODUCTS</h1>
          <p style={{textAlign:'center',fontSize: '20px'}}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br />
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </section>

        <section className="product-list">
          <div className="filters-sort-container">
            <div className="filters">
              <span>3425 ITEMS </span>
              <button onClick={toggleFilters} class="button">SHOW FILTER</button>
            </div>

            <div className="sort">
              <select onChange={handleSort} id="sort">
                <option value="Recommended">Recommended</option>
                <option>Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option>Newest Arrivals</option>
                <option>Customer Rating</option>
              </select>
            </div>
          </div>
          {showFilters && (
            <div className="filter-menu">
              <h3>Filters</h3>
              <div>
                <label>
                  <input type="checkbox" />
                  Customizable
                </label>
                <label>
                  Ideal for:<br/>
                  <select>
                    <option>All</option>
                    <option>Men</option>
                    <option>Women</option>
                  </select>
                </label>
                <label>
                  Occasion:<br/>
                  <select>
                    <option>All</option>
                    <option>Casual</option>
                    <option>Formal</option>
                  </select>
                </label>
                <label>
                  Work:<br/>
                  <select>
                    <option>All</option>
                    <option>Buisness Formal</option>
                    <option>Office Workwear</option>
                  </select>
                </label>
                <label>
                  Fabric:<br/>
                  <select>
                    <option>All</option>
                    <option>Cotton</option>
                    <option>Wool</option>
                  </select>
                </label>
              </div>
              <button onClick={toggleFilters}>Close Filter</button>
            </div>
          )}

          <div className="product-grid">
            {displayedProducts.map(product => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                {/* <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                <p>Description: {product.description}</p> */}
              </div>
            ))}
          </div>
          
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
