import { CssBaseline, Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import Login from "./Components/Login";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://ak.picdn.net/shutterstock/videos/17865847/thumb/5.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

export default function One() {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={3} md={6} className={classes.image} />
      <Grid item xs={12} sm={8} md={6} component={Paper}>
        <div>
          <Login />
        </div>
      </Grid>
    </Grid>
  );
}
