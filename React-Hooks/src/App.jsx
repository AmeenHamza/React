import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavigationBar from './Components/MyComponent'
import CardItem from './Components/CardItem'
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function App() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .then(err => console.log(err))
  }, []);

  return (
    <>
    <NavigationBar />
      <div className="container">
        <h1 className="text-center mt-5 mb-3 text-success my-product">Products</h1>
        <div className="row">

        {
          products.length > 0 ? (
           <> {
            products.map((product, index) => <CardItem data={product} key={index} />

            )
          }</>
          ) 
          :
          (
            <div className="d-flex justify-content-center align-items-center"
                style={{ width: '100vw', height: '60vh' }}>
                <Spinner animation="grow" />
              </div>
          )
        }
          

        </div>
      </div>

    </>
  )
}

export default App
