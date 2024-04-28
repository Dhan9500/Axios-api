import axios from "axios";
import ProductList from "./ProductList";
import { useState } from "react";
import Loader from "./Loader";
export default function Show() {
  const [products, setProducts] = useState([]);
  const [btnStatus,setBtnStatus]=useState(false);

  const getProducts = () => {
    setBtnStatus(true);
    const apiUrl = "https://fakestoreapi.com/products";
    // const apiUrl="https://api.escuelajs.co/api/v1/products";
    axios
      .get(apiUrl)
      .then((response) => {
        // console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(products);
  return (
    <div className="flex flex-col items-center ">
      <button
        onClick={getProducts}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 rounded"
      >
        Call API
      </button>
      {
        products.length===0 && btnStatus?<Loader/>:<ProductList data={products}/>
      }
    </div>
  );
}
