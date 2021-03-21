import React from "react";
import Table from "./Components/Table";
import {
  AppBar,
  Button,
  CssBaseline,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  list: {
    backgroundColor: "#3f50b5",
    color: "white",
  },
});

export default function Two() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" style={{boxShadow:6}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Fashion Factory
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Grid container layout={"coloumn"} component="main">
        <Grid item xs={8} sm={8} md={2} component={Paper} direction={"coloumn"}>
          <List
            component="nav"
            aria-label="mailbox folders"
            className={classes.list}
          >
            <ListItem button divider className={classes.listitem}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button divider className={classes.listitem}>
              <ListItemText primary="Offers" />
            </ListItem>
            <ListItem button divider className={classes.listitem}>
              <ListItemText primary="Products" />
            </ListItem>
            <ListItem button divider className={classes.listitem}>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button divider className={classes.listitem}>
              <ListItemText primary="Following" />
            </ListItem>
            <ListItem button divider className={classes.listitem}>
              <ListItemText primary="Feedbacks" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8} sm={8} md={10} component={Paper}>
          <Typography variant="h4" style={{ margin: 20 }}>
            Offer Details
          </Typography>
          <Divider />
          <Button variant="contained" color="primary" style={{margin:25}}>
            ADD OFFER
          </Button>
          <Table />
        </Grid>
      </Grid>
    </div>
  );
}
