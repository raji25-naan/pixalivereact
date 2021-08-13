import React, { useState, useEffect } from 'react';
import { API } from './api';
import { userInfo, getTrendingPeople, getSuggestedFriends, getUserInfo } from './actions/userInfo';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Avatar, Tooltip } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const LeftSidebar = (props) => {
  const profile = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch()
  const userInfo = props.userInfo;
  const trend = props.trend;
  const suggested = props.suggest;
  let token = profile?.token;
  const loader = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const loader2 = [1, 2, 3, 4, 5];
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    dispatch(getTrendingPeople());
    dispatch(getSuggestedFriends());
  }, [dispatch])



  const follow = async (id) => {
    let following_id = { following_id: id, type: '1' }
    const { data } = await API.post(
      `/createFollowNew`, following_id, { headers: { "token": `Bearer ${token}` } }
    )
    dispatch(getSuggestedFriends());
    dispatch(getUserInfo());
    dispatch(getTrendingPeople());
    alert(data?.message)
  }

  const unFollow = async (id) => {
    // let following_id = { following_id: id, type: '1' }
    //  const { data } = await axios.post(
    //  `http://dev.pixalive.me/api/user/createFollowNew`, following_id, { headers: {"token" : `Bearer ${token}`}}
    //  )
    // console.log(data)
    // alert(data?.message)
  }


  return (
    <div className="main_sidebar">
      <div className="sidebar">
        <div className="sidebar_innr siderbar-p-15" data-simplebar >
          <div class="pix_content pix_side_loggd_usr">
            <div class="pix_side_loggd_usr_hdr">
              <div class="user-profile">
                {userInfo?.user?.name ?
                  <img
                    src={profile?.user?.avatar || require("../src/components/imgs/default.png")}
                    class="unseen_story see_all_stories" alt
                  />
                  :
                  <Skeleton variant="circle" width={55} height={55} />
                }
              </div>
              <div class="pix-profile-title">
                <a id="user-full-name" data-ajax="?link1=timeline&amp;u=vviji" href="/Profile">
                  {userInfo?.user?.name ?
                    userInfo?.user?.name
                    :
                    <Skeleton animation="wave" height={14} width={100} style={{ marginBottom: '10px' }} />}
                </a>
                <p>{userInfo?.user?.username ?
                  '@' + userInfo?.user?.username
                  :
                  <Skeleton animation="wave" height={14} width={60} style={{ marginBottom: '10px' }} />}</p>
              </div>
            </div>


            {/* <div class="pix_user_side_description">
                <div class="list-group-items"><i class="uil-bag-alt"></i><h5>UI/UX Designer</h5></div>
                <div class="list-group-items"><i class="uil-location-point"></i><h5>From Coimbatore</h5></div>
            </div> */}
            <div class="flex justify-around w-full items-center text-center pix-link-reset">
              <div>
                <a href="/Profile">
                  <h4>{userInfo?.user?.name ? userInfo?.user?.posts : <Skeleton />}</h4>
                  <p>Loop</p>
                </a>
              </div>
              <div>
                <a href="/Following">
                  <h4>{userInfo?.user?.name ? userInfo?.user?.followingCount : <Skeleton />}</h4>
                  <p>Following</p>
                </a>
              </div>
              <div>
                <a href="/Followers">
                  <h4>{userInfo?.user?.name ? userInfo?.user?.followersCount : <Skeleton />}</h4>
                  <p>Followers</p>
                </a>
              </div>
            </div>

          </div>

          <hr />

          <div class="px-sm-4 pix-grid pix_trending_people" >
            <div class="pix-width-expand pix-sidebar-header pix-flex-middle pix-first-column">
              <h4 class="mb-0">Trending Peoples </h4>
              <a href="/TrendingPeoples" class="pix-see-all"> See All<i class="uil uil-angle-right"></i></a>
            </div>
            {trend.trendingPeople?.[0]?._id?._id ? (
              <ul class="faved-page">
                {trend.trendingPeople
                  .slice(0, 9)
                  .map((people) => {
                    return (
                      <li>
                        <Tooltip title={people?._id?.username}>
                          {people?._id?.avatar ?
                            <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                              <img src={people?._id?.avatar || require("../src/components/imgs/default.png")} alt />
                            </a>
                            :
                            <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                              <Avatar
                                style={{
                                  width: '45px', height: '45px',
                                  background: 'linear-gradient( 262deg, #f93164, #f97f13)'
                                }}
                                alt >
                                {people?._id?.name.charAt(0)}
                              </Avatar>
                            </a>
                          }
                        </Tooltip>
                      </li>
                    )
                  })}
                <li class="all-faved">
                  <a href="/TrendingPeoples">+{trend?.trendingPeople?.length - 9}</a>
                </li>
              </ul>
            ) : (
              <ul class="faved-page">
                {loader.map(() => (
                  <li class="all-faved">
                    <Skeleton variant="circle" style={{ marginTop: '12px' }} width={47} height={47} />
                  </li>
                ))}
              </ul>
            )}

          </div>

          <hr />


          <div class="pix_trending_people">
            <div class="pix-width-expand pix-sidebar-header pix-flex-middle pix-first-column">
              <h4 class="mb-0">Suggest Friends</h4>
              <a href="/Findfriend" class="pix-see-all"> See All<i class="uil uil-angle-right"></i></a>
            </div>
            <div class="suggestions-list suggestions_friends_list">
              {suggested.suggestedFriends?.[0]?._id?._id ? (
                <>
                  {suggested.suggestedFriends
                    .slice(0, 5)
                    .map((suggest) => {
                      return (
                        <>
                          {suggest?._id?._id !== userInfo?.user?._id &&
                            <div class="sgt-text_friends_list">
                              <img src={suggest?._id?.avatar || require("../src/components/imgs/default.png")} alt />
                              <div class="sgt-text_friends">
                                <a href={`/ViewProfile/${suggest?._id?._id}`}><h6>{suggest?._id?.name}</h6></a>
                                <span>8 mutual friends</span>
                              </div>
                              <span>
                                {following === false ?
                                  <a onClick={(e) => follow(suggest?._id?._id)} class="button primary small circle pix-channel-subscribers">
                                    Follow
                                  </a>
                                  :
                                  <a onClick={(e) => unFollow()} class="button primary small circle pix-channel-subscribers">
                                    Following
                                  </a>
                                }

                              </span>
                            </div>
                          }

                        </>
                      )
                    })
                  }
                </>
              ) : (
                loader2.map(() => (
                  <div class="sgt-text_friends_list">
                    <Skeleton variant="circle" width={45} height={45} />
                    <div class="sgt-text_friends">
                      <a href=""><h6><Skeleton /></h6></a>
                      <span><Skeleton /></span>
                    </div>
                  </div>
                ))
              )}

            </div>
          </div>

          <hr />
          <div id="foot">
            <ul className="text-left">
              <li> <a href="#"> About Us </a></li>
              <li> <a href="#"> Privacy Policy </a></li>
              <li> <a href="#"> Terms and Conditions </a></li>
            </ul>
            <div className="foot-content text-left">
              <p>© 2021 <strong>Pixalive.me</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default LeftSidebar;









{/*{trendingPeople?.[0]?._id?.avatar ? (
                      <>
                      <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                      <img  src={trendingPeople?.[0]?._id?.avatar || require("../src/components/imgs/default.png")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                      <img  src={trendingPeople?.[2]?._id?.avatar || require("../src/components/imgs/default.png")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                      <img  src={trendingPeople?.[3]?._id?.avatar || require("../src/components/imgs/default.png")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                      <img  src={trendingPeople?.[4]?._id?.avatar || require("../src/components/imgs/default.png")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                      <img  src={trendingPeople?.[5]?._id?.avatar || require("../src/components/imgs/default.png")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                      <img  src={trendingPeople?.[6]?._id?.avatar || require("../src/components/imgs/default.png")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                      <img  src={trendingPeople?.[7]?._id?.avatar || require("../src/components/imgs/default.png")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                      <img  src={trendingPeople?.[8]?._id?.avatar || require("../src/components/imgs/default.png")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                      <img  src={trendingPeople?.[9]?._id?.avatar || require("../src/components/imgs/default.png")}  alt />  
                      </a>
                    </li>
                    <li class="all-faved">
                      <a href="#">+{trendingPeople?.length - 9}</a>
                    </li>
                    </>
                    ): (
                      <div>
                      <h1><Skeleton count={2} style={{height: '52px'}}/></h1>
                    </div> 
                    )} */}