import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from './actions/userInfo';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Skeleton } from '@material-ui/lab';


const Header = (props) => {
   const history = useHistory();
   const dispatch = useDispatch();
   const profile = JSON.parse(localStorage.getItem('profile'));
   const userInfo = props;


   const userCheck = () => {
      if (profile == null) {
         history.push('/Login')
      }
   }

   const logout = () => {
      Swal.fire({
         title: 'Are you sure you want to Log out?',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes'
      }).then((result) => {
         if (result.isConfirmed) {
            localStorage.clear();
            sessionStorage.clear();

            history.push('/')
            Swal.fire({
               icon: 'success',
               iconColor: '#f9751c',
               title: 'Successfully Logged out',
               showConfirmButton: false,
               timer: 1500
            })
         }
      })
   }
   //
   //  if(profile == null) {
   //     return (
   //        <>
   //        <h3>Sorry youare not signed in</h3>
   //        </>
   //     )
   //  }

   return (
      <div>
         <div id="main_header">
            <header>
               <div className="header-innr">
                  <div id="logo">
                     <a href="/Home"> <img src={require("./components/imgs/logo.png")} style={{ width: "160px" }} alt="true" /></a>
                  </div>

                  <div className="pix-top-nav">
                     {/* <Navbar /> */}
                     <ul className="main-menu">
                        <li>
                           <a href="/Home" title="">
                              <i class="feather-home" ></i>
                              {/* <img src={ require("./components/imgs/feed.png")} style={{width:"23px"}}  class="menuicon" /> */}
                              Feeds
                           </a>
                        </li>

                        <li>
                           <a href="/Discover" title="">
                              <i class="feather-compass"></i>
                              {/* <img src={ require("./components/imgs/Trending.png")} style={{width:"28px"}}  alt="true"/> */}
                              Explore</a>
                        </li>

                        <li>
                           <a href="/TrendingPeoples" title="">
                              {/* <img src={ require("./components/imgs/Channel.png")} style={{width:"25px"}}  alt="true"/> */}
                              <i class="feather-zap"></i>
                              Trending</a>
                        </li>

                        <li>
                           <a href="/Pixmash" title="">
                              <i class="uil uil-parking-square" style={{ fontSize: "23px" }}></i>
                              {/* <img src={ require("./components/imgs/chatroom.png")} style={{width:"26px"}} alt="true"/> */}
                              Pixmash</a>
                        </li>
                     </ul>
                  </div>
                  <div className="head_user">
                     {/* <div className="head_search">
                  <form>
                     <div className="head_search_cont" aria-expanded="false">
                        <input  type="text" className="form-control" placeholder="Search"  />
                        <i className="s_icon uil-search-alt" />
                     </div>
                  </form>
               </div> */}
                     <a href="/Chat" className="opts_account pix-menu-icon">
                        <i className="feather-search font-xl text-current"></i>
                        {/* <img src={ require("./components/imgs/chat.svg")}  alt="true" /> */}
                     </a>

                     <a href="/Chat" className="opts_account pix-menu-icon">
                        <span className="dot-count bg-warning"></span>
                        <i className="uil-comment-message"></i>
                        {/* <img src={ require("./components/imgs/chat.svg")}  alt="true" /> */}
                     </a>

                     <a href="/Notification" className="opts_account pix-menu-icon">
                        <span className="dot-count bg-warning"></span>
                        <i className="uil-bell"></i>
                        {/* <img src={ require("./components/imgs/notification.svg")}  alt="true" /> */}
                     </a>
                     <div>
                        {userInfo?.user?.username ? (
                           <>
                              <a className="opts_account" href="#">
                                 <img src={profile?.user?.avatar || require("../src/components/imgs/default.png")} alt="true" />
                              </a>
                              <div pix-dropdown="mode:click ; animation: pix-animation-slide-bottom-small" className="dropdown-notifications rounded">
                                 <a href="/Profile">
                                    <div className="dropdown-user-details">
                                       <div className="dropdown-user-avatar">
                                          <img src={userInfo?.user?.avatar || require("../src/components/imgs/default.png")} alt="true" />
                                          {/*<Avatar
                               alt={userInfo?.user?.name}
                               src={userInfo?.user?.avatar}
                               style={{background: 'linear-gradient( 262deg, #f93164, #f97f13)'}}
                             >
                                {userInfo?.user?.name.charAt(0)}
                             </Avatar>*/}
                                       </div>
                                       <div className="dropdown-user-name text-left">
                                          {userInfo?.user?.name}
                                          {/*<span>{user?.email ? user?.email : (user?.username + "@gmail.com")}</span>*/}
                                          <span>@{userInfo?.user?.username}</span>
                                       </div>
                                    </div>
                                 </a>
                                 <hr className="m-0" />
                                 <ul className="dropdown-user-menu">
                                    <li><a href="/Profile"> <i className="uil-user" /> My Account </a> </li>
                                    <li><a href="/Settings"> <i className="uil-cog" /> Account Settings</a></li>
                                    <li><a onClick={logout}> <i className="uil-sign-out-alt" />Log Out</a></li>
                                 </ul>
                              </div>
                           </>
                        )
                           :
                           <Skeleton
                              variant="circle"
                              height={32} width={32}
                              style={{ marginLeft: '20px', lineHeight: '40px', padding: '0px 0' }}
                           />
                        }
                     </div>
                  </div>
               </div>
            </header>
         </div>
      </div>
   );
}
export default Header;