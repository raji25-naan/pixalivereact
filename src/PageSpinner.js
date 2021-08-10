import React from 'react';
import Logo from './components/Icons/logo.png'
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Swal from 'sweetalert2';
import './PageSpinner.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));


const PageSpinner = (props) => {
  const profile = true;
  const classes = useStyles();


  // if(profile) {
  //   let timerInterval
  //   Swal.fire({
  //     timer: 2000,
  //     timerProgressBar: true,
  //     IconColor: 'red',
  //     didOpen: () => {
  //       Swal.showLoading()
  //       timerInterval = setInterval(() => {
  //         const content = Swal.getHtmlContainer()
  //         if (content) {
  //           const b = content.querySelector('b')
  //           if (b) {
  //             b.textContent = Swal.getTimerLeft()
  //           }
  //         }
  //       }, 100)
  //     },
  //     willClose: () => {
  //       clearInterval(timerInterval)
  //     }
  //   })
  // }

return true;
}
export default PageSpinner;
