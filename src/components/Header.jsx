import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Button, IconButton, Toolbar } from "@mui/material";
import { Badge } from "@mui/material";
import { Typography } from "@mui/material";

import { ShoppingCartSharp } from "@mui/icons-material";
export default function Header() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography
                    variant="h6"
                    color="inherit"
                    sx={{ flexGrow: 1 }}
                >E-Commerce</Typography>
                <Box sx={{ display: { md: "flex" } }}>

                    <IconButton >
                        <Badge badgeContent={1} color="error">
                            <ShoppingCartSharp  />

                        </Badge>
                    </IconButton>
                </Box>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>

    )
}