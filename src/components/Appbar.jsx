import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../assets/img/Logo.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: 32
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#FAFAFA', boxShadow: 'none' }}>
                <Toolbar style={{ paddingLeft: '0px' }}>
                    <img src={Logo} alt="Ngaji" style={{ width: "50%" }} />
                </Toolbar>
            </AppBar>
        </div>
    );
}