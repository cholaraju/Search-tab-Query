import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  const handleAdd = (Product) => {
    dispatch(add(Product));
  };
  return (
    <div className="productwrapper">
      {Products.map((Product) => (
        <div className="cartCard" key={Product.id}>
          <img src={Product.image} alt="" />
          <h4> {Product.title}</h4>
          <h5> {Product.price}</h5>
          <button onClick={() => handleAdd(Product)} className="btn">
            Add Cart Items{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
