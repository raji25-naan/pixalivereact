import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, getTrendingPeople, getSuggestedFriends } from './actions/userInfo';
import Swal from 'sweetalert2';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import PageSpinner from './PageSpinner';
//import Login from './pages/AuthPage/Login/Login';
//import SignUp from './pages/AuthPage/SignUp/SignUp';
//import SignupDetail from './SignupDetail';
//import Home from './Home';
import Header from './Header';
import HomeFeed from './HomeFeed';
import CreatePost from './CreatePost';
import Stories from './Stories';
import StoriesPost from './StoriesPost';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Setting from './Settings';
import Footer from './Footer';

import ProfileEdit from './ProfileEdit';
import Searchresults from './Searchresults';
import Games from './Games';
import Myprofile from './Myprofile';
import Profile from './Profile';
import SocialLinks from './SocialLinks';
import Earnings from './Earnings';
import Passwordsettings from './Passwordsettings';

//import OtpVerify from './OtpVerify';

import Findfriend from './Findfriend';
import Findrequest from './Findrequest';
import Notification from './pages/Notification';
import Notificationsetting from './Notificationsetting';
import Changepassword from './Changepassword';
import Deactivateaccount from './Deactivateaccount';
import ExploreSidebar from './ExploreSidebar';
import Explore from './Explore';
import Discover from './Discover';
import DiscoverFeed from './DiscoverFeed';
import DiscoverVoice from './DiscoverVoice';
import DiscoverVideo from './DiscoverVideo';
import DiscoverPeople from './DiscoverPeople';
import Hashtag from './Hashtag';
import ChannelSidebar from './ChannelSidebar';
import Channel from './Channel';
import ChannelDetail from './ChannelDetail';
import Pixmash from './Pixmash';
import PixmashFeed from './PixmashFeed';
import Chat from './Chat';
import ChatFeed from './ChatFeed';
import ChatRightSidebar from './ChatRightSidebar';
import SuggestionsFriends from './SuggestionsFriends';
import About from './About';
import Friends from './Friends';
import Photos from './Photos';
import Videos from './Videos';
import StoryArchive from './StoryArchive';
import Settings from './Settings';
import TrendingPeoples from './TrendingPeoples';
import OtherProfile from './OtherProfile';
import AboutCompany from './AboutCompany';
import Privacy from './Privacy';
import TermConditions from './TermConditions';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getFeeds } from './actions/feeds';
//import Following from './Following';

import Home from './Home';
import Login from './pages/AuthPage/Login/Login02';
import SignUp from './pages/AuthPage/SignUp/SignUp';
import OtpVerify from './pages/AuthPage/SignUp/OtpVerify/OtpVerify';
import SignUpDetail from './pages/AuthPage/SignUp/SignUpDetail/SignUpDetail';
import ForgetPassword from './pages/AuthPage/Login/ForgotPassword/ForgotPassword';
import OtpCheck from './pages/AuthPage/Login/ForgotPassword/OtpCheck';
import ResetPassword from './pages/AuthPage/Login/ForgotPassword/ResetPassword';
import Followers from './Followers';
import Following from './Following';
import ViewProfile from './pages/ViewProfile/ViewProfile';
import ViewAbout from './pages/ViewProfile/ViewAbout';
import ViewFollowers from './pages/ViewProfile/ViewFollowers';
import ViewFollowing from './pages/ViewProfile/ViewFollowing';
import DiscoverByCategory from './DiscoverByCategory';



const App = () => {
   const dispatch = useDispatch();
   const profile = JSON.parse(localStorage.getItem('profile'));
   const userInfo = useSelector((state) => state?.userInfo?.userInfo);
   const trendingPeople = useSelector((state) => state?.trendingPeople);
   const suggestedFriends = useSelector((state) => state?.suggestedFriends);
   console.log(suggestedFriends)

   // console.log(trendingPeople);
   // console.log(suggestedFriends);

   useEffect(() => {
      dispatch(getUserInfo());
      //dispatch(getFeeds());
      // dispatch(getTrendingPeople());
      //dispatch(getSuggestedFriends());
   }, [])

   return (
      <Router>
         <div className="App">
            <Switch>


               <Route exact path="/Home"
                  render={(props) => (<Home userInfo={userInfo} suggest={suggestedFriends} trend={trendingPeople} />)}
               />
               {/* Login */}
               <Route exact path="/" component={Login} />

               {/* SignUp  */}
               <Route exact path="/signup" component={SignUp} />

               <Route exact path="/otpVerify" component={OtpVerify} />

               <Route exact path="/signUpDetail" component={SignUpDetail} />

               <Route exact path="/forgotPassword" component={ForgetPassword} />

               <Route exact path="/otpCheck" component={OtpCheck} />

               <Route exact path="/resetPassword" component={ResetPassword} />

               <Route path="/searchresults">
                  <Searchresults />
               </Route>

               {/*<Route path="/otpverify">
            <OtpVerify/>
          </Route>*/}


               <Route path="/passwordsettings">
                  <Passwordsettings />
               </Route>



               <Route path="/myprofile">
                  <Myprofile />
               </Route>

               <Route path="/Profile" render={(props) => (<Profile {...userInfo} />)} />

               <Route path="/earnings">
                  <Earnings />
               </Route>

               <Route path="/channel" render={() => (<Channel {...userInfo} />)} />

               <Route path="/sociallinks">
                  <SocialLinks />
               </Route>

               <Route path="/games">
                  <Games />
               </Route>

               <Route path="/profileedit">
                  <ProfileEdit />
               </Route>

               <Route path="/Setting" render={() => (<Setting {...userInfo} />)} />



               <Route path="/header" render={() => (<Header {...userInfo} />)} />

               <Route path="/home">
                  <Home />
               </Route>

               <Route path="/HomeFeed" render={(props) => (<HomeFeed />)} />

               <Route path="/stories">
                  <Stories />
               </Route>

               <Route path="/StoriesPost" render={(props) => (<StoriesPost {...userInfo} />)} />


               <Route path="/createpost" render={(props) => (<CreatePost />)} />
               <Route path="/LeftSidebar">
                  <LeftSidebar />
               </Route>

               <Route path="/rightsidebar">
                  <RightSidebar />
               </Route>

               <Route path="/Footer">
                  <Footer />
               </Route>

               <Route path="/Followers" render={(props) => (<Followers user={userInfo} />)} />

               <Route path="/Following" render={(props) => (<Following user={userInfo} />)} />

               <Route
                  path="/TrendingPeoples"
                  render={(props) => (<TrendingPeoples userInfo={userInfo} trend={trendingPeople} suggest={suggestedFriends} />)}
               />

               <Route
                  path="/Findfriend"
                  render={(props) => (<Findfriend userInfo={userInfo} suggest={suggestedFriends} trend={trendingPeople} />)} />


               <Route path="/Findrequest">
                  <Findrequest />
               </Route>

               <Route path="/Notification"
                  render={() => (<Notification userInfo={userInfo} suggest={suggestedFriends} trend={trendingPeople} />)}
               />

               <Route path="/Notificationsetting">
                  <Notificationsetting />
               </Route>

               <Route path="/Deactivateaccount">
                  <Deactivateaccount />
               </Route>

               <Route path="/Changepassword">
                  <Changepassword />
               </Route>

               <Route path="/ExploreSidebar">
                  <ExploreSidebar />
               </Route>

               <Route path="/Explore">
                  <Explore />
               </Route>

               <Route path="/Discover"
                  render={() => (<Discover userInfo={userInfo} suggest={suggestedFriends} trend={trendingPeople} />)}
               />

               <Route path="/DiscoverFeed" render={() => (<DiscoverFeed />)} />
               <Route path="/DiscoverByCategory" render={() => (<DiscoverByCategory />)} />



               <Route path="/DiscoverVideo">
                  <DiscoverVideo />
               </Route>

               <Route path="/DiscoverVoice">
                  <DiscoverVoice />
               </Route>

               <Route path="/DiscoverPeople">
                  <DiscoverPeople />
               </Route>

               <Route path="/Hashtag">
                  <Hashtag />
               </Route>

               <Route path="/ChannelSidebar">
                  <ChannelSidebar />
               </Route>

               {/*<Route path="/Channel">
            <Channel/>
         </Route>*/}

               <Route path="/ChannelDetail">
                  <ChannelDetail />
               </Route>

               <Route path="/Pixmash" render={() => (<Pixmash {...userInfo} />)} />

               <Route path="/PixmashFeed">
                  <PixmashFeed />
               </Route>

               <Route path="/Chat"
                  render={() => (<Chat userInfo={userInfo} suggest={suggestedFriends} trend={trendingPeople} />)}
               />

               <Route path="/ChatFeed">
                  <ChatFeed />
               </Route>

               <Route path="/ChatRightSidebar">
                  <ChatRightSidebar />
               </Route>

               <Route path="/SuggestionsFriends" render={() => (<SuggestionsFriends />)} />

               <Route path="/About" render={() => (<About user={userInfo} />)} />

               <Route path="/Friends" render={(props) => <Friends user={userInfo} />} />

               <Route path="/Photos" render={(props) => <Photos {...userInfo} />} />

               <Route path="/Videos" render={(props) => <Videos {...userInfo} />} />

               <Route path="/StoryArchive" render={(props) => <StoryArchive {...userInfo} />} />

               <Route
                  path="/TrendingPeoples"
                  render={(props) => (<TrendingPeoples userInfo={userInfo} trend={trendingPeople} />)}
               />

               <Route path="/Settings" render={(props) => <Setting user={userInfo} />} />

               <Route path="/OtherProfile">
                  <OtherProfile />
               </Route>

               <Route path="/AboutCompany">
                  <AboutCompany />
               </Route>

               <Route path="/Privacy">
                  <Privacy />
               </Route>

               <Route path="/TermConditions">
                  <TermConditions />
               </Route>

               <Route path="/ViewProfile/:id" render={(props) => <ViewProfile {...userInfo} />} />

               <Route path="/ViewAbout/:id" render={(props) => <ViewAbout {...userInfo} />} />

               <Route path="/ViewFollowers/:id" render={(props) => <ViewFollowers {...userInfo} />} />

               <Route path="/ViewFollowing/:id" render={(props) => <ViewFollowing {...userInfo} />} />

            </Switch>
         </div>

      </Router>

   );
}
export default App;