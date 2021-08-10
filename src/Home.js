import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { getUserInfo, getTrendingPeople, getSuggestedFriends } from './actions/userInfo';
import { getFeeds } from './actions/feeds';
import axios from 'axios';
import Header from './Header';
import HomeFeed from './HomeFeed';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { Paper, Grid, Typography } from '@material-ui/core';
import './Header.css';


const Home = (props) => {
  const dispatch = useDispatch();
  const profile = JSON.parse(localStorage.getItem('profile'));
  const user = props.userInfo;
  const trend = props.trend;
  const suggest = props.suggest;
  const feeds = useSelector((state) => state?.feeds);
  //console.log(feeds);

  useEffect(() => {
    //dispatch(getTrendingPeople());
    //dispatch(getSuggestedFriends());
    //dispatch(getFeeds());
  }, [])


return (!profile?.user?.name ? (
<>
<Paper>
           <Grid container justify="center">
             <Grid item xs={12}  sm={4} className="text-center userNone">
                  <Typography variant="h3" className="signInHead" color="inherit">
                    You're not Logged In please Login to View the Application
                  </Typography>
             </Grid>
           </Grid>
      </Paper>
</>
) : (

    <>

<div id="wrapper" className="pix-bg">

    <Header {...user} />
    <LeftSidebar userInfo={user} suggest={suggest} trend={trend}/>
    <RightSidebar />
    <HomeFeed user={user} feeds={feeds} suggest={suggest}/>

</div>

</>
)
    
);
}
export default Home;