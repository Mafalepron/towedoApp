import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import SelectLanguage from "./SelectLanguage";


function Header() {
    return  (
        <AppBar position="static">
            <Toolbar>
                    <SelectLanguage />
            </Toolbar>
        </AppBar>
    );

}

export {Header};