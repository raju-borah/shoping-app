import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../redux/actions/productActions";
export default function ProductDetail() {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { id, title, category, image, price } = product;
  const dispatch = useDispatch();
  console.log(productId);
  const getProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((e) => console.log(e));
    dispatch(setSelectedProduct(response.data));
  };
  // eslint-disable-next-line
  useEffect(() => getProduct(), [productId]);
  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>Loading Data</div>
      ) : (
        <Card sx={{ maxWidth: 345, height: 380, borderRadius: "200" }}>
          <CardActionArea style={{ height: "100%" }}>
            <CardMedia component="img" height="200" image={image} alt={title} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                ₹ {price * 10}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {title}
              </Typography>
              <Typography variant="h6" color="text.primary">
                {category}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </>
  );
}
