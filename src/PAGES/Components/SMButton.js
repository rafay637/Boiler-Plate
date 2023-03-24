import { Button } from "@mui/material";
import React from "react";

function SMButton(props) {
    const { label, onclick, className } = props;

    return (
        <Button
            onclick={onclick} className = {'p-2 m-2'}
            variant="contained" >{label}</Button>
    );
}

export default SMButton;