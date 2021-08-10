import React from 'react';
import { Row, Col } from 'reactstrap';
import {  Grid,  Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Footer.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#ffffff',
      paddingTop: '20px',
      marginTop: '45px',
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Footer = () => {
    const classes = useStyles();

return (
    <>
      <div className={classes.root}>
      <Grid container className={classes.paper} id="Footer-Grid">
        <Grid item xs={12} sm={6}>
          <ul className="Footer-Left">
            <li><a href="AboutCompany">About</a></li>
            <li><a href="/Privacy">Privacy</a></li>
            <li><a href="TermConditions">Term and Conditions</a></li>							
          </ul>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ul className="Footer-Right">
             <li><a href="index.html"><img src="images/logo-2.svg/" alt=""/></a></li>
             <li><div className="ftr-1"><i class="feather-at-sign"></i> 2021 Pixalivei by <a href="https://pixalive.me"> Pixalive </a>. All Rights Reserved.</div></li>
          </ul>
        </Grid>
        </Grid>
    </div>
    </>

);
}
export default Footer;