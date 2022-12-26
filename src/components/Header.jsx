import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Autocomplete, Box, Button, IconButton, MenuItem, Select, Toolbar, useTheme } from "@mui/material";
import { Badge } from "@mui/material";
import { Typography } from "@mui/material";

import { ShoppingCartSharp } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getItemCount } from "../utils";
import { styled, alpha } from "@mui/system";
import { fetchAllCategories } from "../feature/categories-slice";
import { useNavigate, useSearchParams } from "react-router-dom";

const StyleAutocomplete = styled(Autocomplete)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiTextField-root": {
      paddingRight: `calc(1em + ${theme.spacing(4)})`,
    },
    "& .MuiInputBase-input": {
      color: theme.palette.common.white,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiSvgIcon-root": {
      fill: theme.palette.common.white,
    },
  }));

const Search = styled("section")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),

    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%"
}))
function SearchBar() {
    const theme = useTheme();
    const products = useSelector((state) => state.products?.value)
    const categories = useSelector((state) => state.products?.value)
    const dispatch = useDispatch()
    const [selectedCategory, setselectedCategory] = useState("all")
    const navigate = useNavigate()
    const { searchParams } = useSearchParams()
    const category = searchParams.get("category")

    useEffect(() => {
        setselectedCategory(category ? category : "all")
    }, [category])


    if (!categories.length) {
        dispatch(fetchAllCategories())
    }

    function handleCategoryChange(event) {
        const value = event.target
        setselectedCategory(value)
        navigate(value === "all" ? "/" : `/?category/=${value}`)
    }


    return (<Search>
        <Select
            value={selectedCategory}
            size="small"
            sx={{
                m: 1,
                textTransform: "capitalize",
                "&": {
                    "::before": {
                        ":hover": {
                            border: "none",
                        },
                    },
                    "::before, &::after": {
                        border: "none",
                    },
                    ".MuiSelect-standard": {
                        color: "common.white",
                    },
                    ".MuiSelect-icon": {
                        fill: theme.palette.common.white,
                    },
                },
            }}
            variant="standard"
            labelId="selected-category"
            id="selected-category-id"
            onChange={handleCategoryChange}
        >
            <MenuItem
                sx={{
                    textTransform: "capitalize",
                }}
                value="all"
            >
                all
            </MenuItem>
            {categories?.map((category) => (
                <MenuItem
                    sx={{
                        textTransform: "capitalize",
                    }}
                    key={category}
                    value={category}
                >
                    {category}
                </MenuItem>
            ))}
        </Select>
        <StyleAutocomplete
            freeSolo
            id="selected-product"
            value={selectedProduct}
            onChange={(e, value) => {
                console.log(value);
                handleSearchChange(value?.label);
            }}
            disablePortal
            options={Array.from(
                selectedCategory === "all" ? products : products.filter((prod) => prod.category === selectedCategory),
                (prod) => ({ id: prod.id, label: prod.title })
            )}
            renderInput={(params) => <TextField {...params} />}
        />
    </Search>)
}

export default function Header() {
    const cartItems = useSelector((state) => state.cart?.value)
    const count = getItemCount(cartItems)
    console.log(count);
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography
                    variant="h6"
                    color="inherit"
                >E-Commerce</Typography>
                <SearchBar />
                <Box sx={{ display: { md: "flex" } }}>

                    <IconButton >
                        <Badge badgeContent={count} color="error">
                            <ShoppingCartSharp />

                        </Badge>
                    </IconButton>
                </Box>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>

    )
}