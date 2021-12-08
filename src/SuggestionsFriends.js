import React from 'react';
import { Skeleton } from '@material-ui/lab';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getTrendingPeople, getSuggestedFriends, getUserInfo } from './actions/userInfo';


function SuggestionsFriends(props) {
   const dispatch = useDispatch();
   const suggest = props?.suggestedFriends;
   const loader = [1, 2, 3, 4];

   const follow = async (id) => {
      const profile = JSON.parse(localStorage.getItem('profile'));
      let token = profile?.token;
      let following_id = { following_id: id, type: '1' }
      const { data } = await axios.post(
         `http://test.pixalive.me/api/user/createFollowNew`, following_id, { headers: { "token": `Bearer ${token}` } }
      )
      dispatch(getSuggestedFriends());
      dispatch(getUserInfo());
      dispatch(getTrendingPeople());
      alert(data?.message)
   }

   return (
      <div>
         <div class="sf-p-0 pb-0  video-block section-padding" pix-slider="finite: true">
            {/* 
      <div class="section-header-left pix-channel-head">
         <h4>Suggestions Friends</h4>
      </div>
      */}
            <div class="pix-slider-container pb-3 sugg_friend">
               <ul class="pix-slider-items col-md-4">
                  {suggest?.[0]?._id?._id ? (
                     <>
                        {suggest
                           .map((people) => {
                              return (
                                 <li tabindex="-1" class="pix-active">
                                    <div class="channels-card">
                                       <div class="channels-card-image">
                                          {/* <a href={`/ViewProfile/${people?._id?._id}`}>
                                          </a> */}
                                          <img src={people?._id?.avatar || require("../src/components/imgs/default.png")} alt />
                                          <div class="channels-card-body">
                                             <div class="channels-title">
                                                <a href="#">{people?._id?.name}</a>
                                             </div>
                                             <div class="channels-view">
                                                {"@" + people?._id?.username}
                                             </div>
                                          </div>
                                          <div class="channels-card-image-btn">
                                             <button
                                                type="button"
                                                class="channels-btn btn-outline-danger"
                                                onClick={(e) => follow(people?._id?._id)}
                                             >
                                                Follow
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 </li>
                              )
                           })
                        }
                     </>
                  ) : (
                     loader.map(() => (
                        <li tabindex="-1" class="pix-active">
                           <div class="channels-card">
                              <div class="channels-card-image">
                                 <a href="#">
                                    <Skeleton variant="circle" width={45} height={45} style={{ margin: 'auto' }} />
                                 </a>
                                 <div class="channels-card-body">
                                    <div class="channels-title">
                                       <a href="#"><Skeleton /></a>
                                    </div>
                                    <div class="channels-view">
                                       <Skeleton />
                                    </div>
                                 </div>
                                 <div class="channels-card-image-btn">

                                    <Skeleton width={60} height={40} style={{ margin: 'auto' }} />

                                 </div>
                              </div>
                           </div>
                        </li>
                     ))
                  )}
               </ul>
            </div>
         </div>
      </div>
   );
}
export default SuggestionsFriends;