import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/UserSlice";

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
  const user = useSelector(selectUser);
  const [load, setload] = useState(true)
  const [value, setvalue] = useState("");
  const classes = useStyle();
  const dispatch = useDispatch();
  useEffect(() => {
    setload(true);
    axios({
      method: "get",
      url: " http://52.66.70.51:3000/storeadmin/products",
      headers: {
        Authorization: `bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    })
    .then(res=>{
      setvalue(res.data.products);
      setload(false);
    })
    .catch(e=>{console.log(e); setload(false)})
  }, []);
  if(!load){
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" style={{ boxShadow: 6 }}>
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
          <Button variant="contained" color="primary" style={{ margin: 25 }}>
            ADD OFFER
          </Button>
          <Table data={value} />
        </Grid>
      </Grid>
    </div>
  );
  }
  else{
    return(
      <h1> loading.. </h1>
    )
  }
}
