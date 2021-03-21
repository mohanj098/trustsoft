import { Switch, Table, TableBody, TableCell, TableHead, TableRow, Fab, TableContainer } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    table: {
        margin: 'auto',
        width: 1200,
        borderColor: '#3f50b5',
        borderWidth: 2,
        borderStyle: 'solid',
        marginBottom: 20,
    },
    fab:{
        backgroundColor: 'white',
        boxShadow: 'none',

    },
})

const StyledTableCell = withStyles(() => ({

    head: {
        backgroundColor: "#3f50b5",
        color: "white",
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


export default function Final() {
    const classes = useStyles();
    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <StyledTableCell>Product</StyledTableCell>
                    <StyledTableCell>Amount</StyledTableCell>
                    <StyledTableCell>Description</StyledTableCell>
                    <StyledTableCell>Active</StyledTableCell>
                    <StyledTableCell>Action</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <StyledTableCell>Pant</StyledTableCell>
                    <StyledTableCell>30%</StyledTableCell>
                    <StyledTableCell>Flat 30% off on all pants</StyledTableCell>
                    <StyledTableCell>
                        <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
                    </StyledTableCell>
                    <StyledTableCell>
                        <Fab size="small" className={classes.fab}><VisibilityIcon /></Fab>
                        <Fab size="small" className={classes.fab}><EditIcon/></Fab>
                        <Fab size="small" className={classes.fab}><DeleteIcon /></Fab>
                    </StyledTableCell>
                </TableRow>
                <TableRow>
                    <StyledTableCell>Pant</StyledTableCell>
                    <StyledTableCell>30%</StyledTableCell>
                    <StyledTableCell>Flat 30% off on all pants</StyledTableCell>
                    <StyledTableCell>
                        <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
                    </StyledTableCell>
                    <StyledTableCell>
                        <Fab size="small" className={classes.fab}><VisibilityIcon /></Fab>
                        <Fab size="small" className={classes.fab}><EditIcon/></Fab>
                        <Fab size="small" className={classes.fab}><DeleteIcon /></Fab>
                    </StyledTableCell>
                </TableRow>
                <TableRow>
                    <StyledTableCell>Pant</StyledTableCell>
                    <StyledTableCell>30%</StyledTableCell>
                    <StyledTableCell>Flat 30% off on all pants</StyledTableCell>
                    <StyledTableCell>
                        <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
                    </StyledTableCell>
                    <StyledTableCell>
                        <Fab size="small" className={classes.fab}><VisibilityIcon /></Fab>
                        <Fab size="small" className={classes.fab}><EditIcon/></Fab>
                        <Fab size="small" className={classes.fab}><DeleteIcon /></Fab>
                    </StyledTableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}