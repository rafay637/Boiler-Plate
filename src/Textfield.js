import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { PropTypes } from '@mui/material';

export default function BasicTextFields(props) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <TextField id="outlined-basic" label={props.val} variant="outlined" />
        </Box>
    );
}