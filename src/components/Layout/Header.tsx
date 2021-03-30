import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Link} from "react-router-dom";

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
        secondAppBar: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            filter: 'grayscale(40%)',
        },
    }),
);

export default function Header() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Grid container alignItems="center" spacing={1}>
                        <Grid item xs>
                            <Typography color="inherit" variant="h5" component="h1">
                                Instagram Reactive Account
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AppBar className={classes.secondAppBar} position="static">
                <Tabs value={value} centered onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Core" {...a11yProps(0)} component={Link} to="/core" />
                    <Tab label="About" {...a11yProps(1)} component={Link} to="/about" />
                </Tabs>
            </AppBar>
        </div>
    );
}
