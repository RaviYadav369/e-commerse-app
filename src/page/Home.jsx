import {
  CardContent,
  Container,
  Grid,
  Rating,
  Card,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";

export default function Home() {
  const theme = useTheme();

  const [products, setproducts] = useState([]);

  const response = async () => {
    let result = await fetch("https://fakestoreapi.com/products");
    result = await result.json();
    console.log(result);
    setproducts(result);
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {products.map(({ title, id, price, description, rating, image }) => (
          <Grid item key={id} xs={12} sm={6} md={3}>
            <Card
              sm={{ height: "100%", dispaly: "flex", flexDirection: "column" }}
            >
              <CardContent
                component="img"
                sx={{
                  alignSelf: "center",
                  width: theme.spacing(30),
                  height: theme.spacing(30),
                  objectFit: "contain",
                  pt: theme.spacing(),
                }}
                image={image}
                alt={title}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    dispaly: "-webkit-box",
                    "-webkit-line-clamp": "1",
                    "-webkit-box-orient": "vertical",
                  }}
                >
                  {" "}
                  {title}{" "}
                </Typography>
                <Typography paragraph color="text.secondary"   sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    dispaly: "-webkit-box",
                    "-webkit-line-clamp": "2",
                    "-webkit-box-orient": "vertical",
                  }}>{description}</Typography>
                <Typography>{price}</Typography>
                <Rating readOnly precision={0.5} value={rating.rate} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
