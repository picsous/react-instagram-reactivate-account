import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Redirect, Route, Switch} from 'react-router-dom';
import About from "../../pages/About";
import Core from "../../pages/Core";
import NotFound from "../../pages/NotFound";
import Header from "./Header";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            minHeight: '100vh',
        },
        app: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
        },
        main: {
            flex: 1,
            padding: theme.spacing(6, 4),
            background: '#eaeff1',
        },
        footer: {
            padding: theme.spacing(2),
            background: '#eaeff1',
        },
    }),
);

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Index() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.app}>
                <Header />
                <main className={classes.main}>
                    <Switch>
                        <Redirect path="/" exact to="/core"/>
                        <Route path="/core" component={Core}/>
                        <Route path="/about" component={About}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </main>
                <footer className={classes.footer}>
                    <Copyright/>
                </footer>
            </div>
        </div>
    );
}
