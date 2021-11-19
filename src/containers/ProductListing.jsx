import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";
const ProductListing = () => {
  const dispatch = useDispatch();
  const getProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((e) => console.log(e));
    dispatch(setProducts(response.data));
  };
  // eslint-disable-next-line
  useEffect(() => getProducts(), []);
  return <ProductComponent />;
};
export default ProductListing;
