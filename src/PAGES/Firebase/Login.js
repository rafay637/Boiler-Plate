import { Button, TextField, Typography, Box } from "@mui/material";
import { useState } from "react";
import { LoginUser } from "./firebaseMethod";

function Login() {
    const [user, SetUser] = useState({});
    const [loader, SetLoader] = useState(false)

    let Login = () => {
        SetLoader(true)
        LoginUser(user)
            .then((res) => {
                console.log(res,
                alert('User logged In'))
            })
            .catch((err) => {
                SetLoader(false)
                console.log(err,
                alert('this User Does not exist'))
            })
    }

    return (
        <>
            <Box
                sx={{ height: "100vh" }}
                className="d-flex justify-content-center align-items-center">
                <Box>
                    <Typography variant="h3">Login</Typography>

                    <Box className="p-2">
                        <TextField
                            onChange={(e) => SetUser({ ...user, email: e.target.value, })}
                            variant="standard"
                            label="Email" />
                    </Box>

                    <Box className="p-2">
                        <TextField
                            onChange={(e) => SetUser({ ...user, password: e.target.value })}
                            variant="standard"
                            label="Password" />
                    </Box>

                    <Box className="p-2 text-center">
                        <Button variant="contained"
                            onClick={Login}>
                            Login
                        </Button>
                    </Box>

                </Box>
                
            </Box>
        </>
    );
}

export default Login;