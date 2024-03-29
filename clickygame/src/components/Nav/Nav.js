import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple,cyan } from '@material-ui/core/colors/';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    third:{main:cyan[500]}
  },
});


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="static" color="primary" >
        <Toolbar color="primary">
          
          <Typography variant="h6" className={classes.title} >
            Clicky Game
          </Typography>
          <Button color="secondary">Score:{props.items.winScore}</Button>
          <Button color="third">maximum Record:{props.items.maximumRecord}</Button>
        </Toolbar>
      </AppBar>
      </div>
      </ThemeProvider>
  );
}