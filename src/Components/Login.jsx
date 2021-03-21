import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Grid, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    avatarClass: {
        margin: 'auto',
        backgroundColor: "#3f50b5"
    },
    signintext: {
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        fontSize: 30,
        margin: 20,
    },
    lastintext: {
        color: 'blue',
        fontSize: 20,
        textDecoration: 'underline'
    }
}));



export default function Login() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return (
        <Box boxShadow={5} width={500} margin="auto" marginTop={25} padding={3} justifyContent="center">
            <Avatar className={classes.avatarClass}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h4" className={classes.signintext}>
                Sign in
            </Typography>
            <form  noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Sign in
                </Button>
                <Link href="#" variant="head2" color="#3f50b5" className={classes.lastintext} onClick={preventDefault} >
                    Forgot Password
                </Link>
                <Typography variant="h4" style={{ fontSize: 15, }} >
                    Don't have an account?
                            <Link href="#" variant="head2" color="#3f50b5" className={classes.lastintext} onClick={preventDefault} >
                        Signup
                    </Link>
                </Typography>
            </form>
        </Box>
    )
}