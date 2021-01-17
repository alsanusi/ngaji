import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReadMore from '../assets/img/read.png';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '15px'
    },
});

export default function SimpleCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent style={{ paddingTop: 19, paddingBottom: 19 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Typography variant="h6">
                            <b>1</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="h6" align="left">
                            <b>Al Fatihah</b>
                        </Typography>
                        <Typography variant="subtitle2" align="left" style={{ marginTop: '-5px', opacity: '0.5' }}>
                            Surat Pembuka
                        </Typography>
                    </Grid>
                    <Grid item xs={3} style={{ alignSelf: 'center' }}>
                        <img src={ReadMore} alt="Ngaji" style={{ width: "50%" }} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}