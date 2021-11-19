import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
export default function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.map((element) => (
          <Grid item xs={2} sm={4} md={4} key={element.id}>
            <Link to={`/product/${element.id}`}>
              <Card sx={{ maxWidth: 345, height: 380, borderRadius: "200" }}>
                <CardActionArea style={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={element.image}
                    alt={element.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      ₹ {element.price * 10}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {element.title}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                      {element.category}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
