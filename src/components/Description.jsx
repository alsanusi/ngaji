import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Description() {

    return (
        <div>
            <Typography variant="h6" align="left" gutterBottom>
                <b>Assalamualaikum,</b>
            </Typography>
            <Typography variant="subtitle1" align="left" style={{ opacity: '0.5' }}>
                18 November 2021
            </Typography>
        </div>
    );
}