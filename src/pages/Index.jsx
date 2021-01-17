import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '../components/Appbar';
import Description from '../components/Description';
import Card from '../components/Card';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {new Date().getFullYear()}
            {' '}
            {'©'}
            {' '}
            <Link color="inherit" href="https://material-ui.com/">
                <b>CREATIVESOLUTION™</b>
            </Link>
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: 27,
        display: 'flex',
        flexDirection: 'column',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();

    const card = [1, 2, 3, 4, 5, 6]

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <AppBar />
            <div className={classes.paper}>
                <Description />
                <div style={{ paddingTop: 32 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            {
                                card.map(x => (
                                    <div key={x} style={{ marginBottom: 20 }}>
                                        <Card />
                                    </div>
                                ))
                            }
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}