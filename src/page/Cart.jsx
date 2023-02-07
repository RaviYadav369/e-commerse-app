import React from 'react'
import Container from '@mui/system/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import { useSelector } from 'react-redux'
import { Button, CardContent, CardMedia, Rating, TextField } from '@mui/material'
import { useTheme } from '@emotion/react'
import { Box } from '@mui/system'
import { getSumTotal } from '../utils'
import { CenterFocusStrong } from '@mui/icons-material'

const Cart = () => {
  const cart = useSelector(state => state.cart?.value)
  const theme = useTheme();
  const subTotal = getSumTotal(cart);
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={2}>
        <Grid item container spacing={2} md={8} >
          {cart?.map(({ product, quantity }) => {
            const { title, id, price, description, rating, image } = product;
            return <Grid item key={id} xs={12}>
              <Card sx={{
                display: "flex",
                py: 2,
              }}>
                <CardMedia component={"img"} image={image} sx={{
                  width: theme.spacing(30),
                  height: theme.spacing(30),
                  objectFit: "contain",
                  pt: theme.spacing(),
                }} alt={title} />
                <CardContent sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flex: 1,

                }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Typography variant='h5' >{title}</Typography>
                    <Rating readOnly precision={0.5} value={rating.rate} />
                    <form>
                      <TextField sx={{
                        width: theme.spacing(8),
                      }} id={`${id}-product-id`} inputProps={{
                        min: 0, max: 10,
                      }} type="number" variant='standard' label="Quantity" value={quantity}>

                      </TextField>
                    </form>
                  </Box>
                  <Box >
                    <Typography variant='h5' paragraph>
                      {getSumTotal([{ product, quantity }])}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          })}
        </Grid>
        <Grid item container md={4} sx={{
          display: "flex",
          justifyContent: "center",

        }}>
          <Box sx={{
            width:"100%"
          }}>
            <Card sx={{
              display:"flex",
              padding:2,
              flexDirection:"column",
              gap:2,
            }}>

              <Typography variant='h4'>SubTotal</Typography>
              <Typography variant='h4'>{subTotal}</Typography>
              {subTotal>0 ? <Button variant='contained'>Buy Now</Button> : <Button variant='contained'> Shop Products</Button>}
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cart