import { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { SignupUser } from "./firebaseMethod";
import { Link } from "react-router-dom";
import Login from "./login";

function Signup() {
    const [user, SetUser] = useState({})

    let CreateUser = () => {
        SignupUser(user)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err, alert(err))
            })
    }

    return (
        <>
            <Login />
            <Box
                sx={{ height: "100vh" }}
                className="d-flex justify-content-center align-items-center">

                <Box>
                    <Typography variant="h3">Signup</Typography>

                    <Box className="p-2">
                        <TextField
                            onChange={(e) => SetUser({ ...user, userName: e.target.value })}
                            variant="standard"
                            label="Username" />
                    </Box>

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
                            onClick={CreateUser}>
                            Signup
                        </Button>
                    </Box>

                    <Box className="text-center">
                    </Box>

                </Box>
            </Box>
        </>
    );
}

export default Signup;