import React from 'react';
import Header from './Header';
import {Avatar} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

function Friends(props) {
    const userInfo = props?.user;
return (
<div>
    <div className="pix-bg">
    <Header {...userInfo}/>

        <div class="pix-container profile_main_content">
            <div class="container pro-container m-auto">

            <div class="row">
                        <div class="col-lg-12">
                            <div class="card pro_card_top border-0 p-0 bg-white shadow-xss rounded-xxl">
                                <div class="card-body h250 p-0 rounded-xxl overflow-hidden m-3"></div>
                                <div class="card-body p-0 position-relative-pro">
                                {userInfo?.user?.username ? 
                                   <figure class="avatar_profile z-index-1">
                                         <img
                                           src={userInfo?.user?.avatar || require("../src/components/imgs/default.png")}
                                           alt="image" class="rounded-circle"
                                         />
                                        </figure>
                                        :
                                        <Skeleton
                                          variant="circle"
                                          animation="wave"  
                                          style={{left: '14px', margin: '0 0 1rem'}}
                                          width={100} height={100}
                                        />
                                        }
                                       {userInfo?.user?.username ? 
                                        <h4 class="pro_h4">
                                          {userInfo?.user?.name}<span>@{userInfo?.user?.username}</span>    
                                        </h4>
                                        :
                                        <React.Fragment>
                                        <h4 class="pro_h4">
                                         <Skeleton animation="wave" height={10} style={{width: '100px'}}/>
                                         <Skeleton animation="wave" height={10} style={{width: '70px'}} />
                                        </h4>
                                      </React.Fragment>
                                       }
                                    <div class="d-flex align-items-center justify-content-center position-absolute-md right-15 top-0 me-2 m-15">
                                        <a href="#" class="pro_btn">Add to Story</a>
                                        <a href="#" class="pro_mess"><i class="feather-mail font-md"></i></a>      

                                        <div className="post-btn-action">
                                            <span class="ms-auto mr-151" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="feather-more-horizontal pro_btn-round-md "></i>             
                                                                
                                            <div className="mt-0 p-2 pix-dropdown" pix-dropdown="pos: bottom-right;mode:hover ">
                                                <ul className="pix-nav pix-dropdown-nav text-left">
                                                <li>
                                                    <div class="card-body p-0 d-flex">
                                                        <i class="feather-bookmark text-grey-500 me-3 font-lg"></i>
                                                        <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Save Link <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span></h4>
                                                    </div>                    
                                                </li>
                                                <li>
                                                    <div class="card-body p-0 d-flex mt-2">
                                                        <i class="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                                                        <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide Post <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="card-body p-0 d-flex mt-2">
                                                        <i class="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                                                        <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide all from Group <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="card-body p-0 d-flex mt-2">
                                                        <i class="feather-lock text-grey-500 me-3 font-lg"></i>
                                                        <h4 class="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">Unfollow Group <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                                                    </div>
                                                </li>
                                                </ul>
                                            </div>
                                            </span>
                                        </div>                                      
                                                                      
                                    </div>
                                </div>

                                <div class="card-body d-block  pro_card shadow-none mb-0 p-0 border-top-xs">
                                    <ul class="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4 mt-0">
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Profile">All Loop</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/About">About</a></li>
                                        <li class="active list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active" href="/Friends">Friends</a></li>
                                        {/*<li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Photos">Photos</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Videos">Videos</a></li>*/}
                                        <li class="list-inline-item me-5"><a class="fw-700 me-sm-5 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Settings">Settings</a></li>
                                        <div class="pro_edit_menu">
                                            <a href="#" class="pro_edit_menu_btn">Edit Profile</a>
                                        </div>                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                       

                    <div class="col-xl-12 col-xxl-12 col-lg-12">
                        <div class="section-small profile_friends">
                            <div class="pro_friend_title">
                                <h3>Friends 257</h3>
                            </div>
                            <div class="pro_friend_list">
                                <a href="#">Friend Requests</a>
                                <a href="#">Find Friends</a> 
                                <div className="post-btn-action pro_friend_list_more">
                                    <span class="ms-auto mr-151" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="feather-more-horizontal pro_btn-round-md "></i>        
                                        <div className="mt-0 p-2 pix-dropdown" pix-dropdown="pos: bottom-right;mode:hover ">
                                            <ul className="pix-nav pix-dropdown-nav text-left">
                                                <li>
                                                    <div class="card-body p-0 d-flex">
                                                        <i class="feather-shield text-grey-500 me-3 font-lg"></i>
                                                        <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Edit Privacy
                                                            <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span>
                                                        </h4>
                                                    </div>                    
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </span>
                                </div>                                   
                            </div>

                            <div class="row  ml-101 ">
                             <div class="col-2">
                                    <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/s1.png")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Dennis Han </h4>
                                                <span>26 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-2">
                                <a href="#">
                                    <div class="user-data animate-this">
                                    <div class="user-data-media"> 
                                            <img src={ require("./components/imgs/s2.png")}  alt="image" />
                                        </div>
                                        <div class="user-data-content">
                                            <h4> Stella Johnson </h4>
                                            <span>51 mutual friends</span>
                                        </div>
                                    </div>
                                </a>
                                </div>
                             <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                        <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/s3.png")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Erica Jones </h4>
                                                <span>39 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                 <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/s4.png")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Jonathan Ali </h4>
                                                <span>12 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                 <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/s5.png")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Alex Dolgove </h4>
                                                <span>07 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                 <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/s6.png")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Sarah Farah </h4>
                                                <span>89 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-2">
                                    <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/s7.png")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Erica Jones </h4>
                                                <span>14 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                 <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/avatar-3.jpg")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Dennis Han </h4>
                                                <span>63 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                 <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/avatar-5.jpg")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Stella Johnson </h4>
                                                <span>31 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                 <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/ch1.png")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Erica Jones </h4>
                                                <span>18 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                 <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                        <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/ava1.jpg")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Jonathan Ali </h4>
                                                <span>23 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                 <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/s1.png")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Sarah Farah </h4>
                                                <span>70 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-2">
                                    <a href="#">
                                        <div class="user-data animate-this">
                                        <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/ws6.jpg")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Erica Jones </h4>
                                                <span>13 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                 <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/img2.jpg")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Alex Dolgove </h4>
                                                <span>50 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                 <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/img3.jpg")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Dennis Han </h4>
                                                <span>98 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                 <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/edit.jpg")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Stella Johnson </h4>
                                                <span>26 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                 <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/e-3.jpg")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Erica Jones </h4>
                                                <span>02 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                 <div class="col-2">
                                <a href="#">
                                        <div class="user-data animate-this">
                                            <div class="user-data-media"> 
                                                <img src={ require("./components/imgs/t-11.jpg")}  alt="image" />
                                            </div>
                                            <div class="user-data-content">
                                                <h4> Jonathan Ali </h4>
                                                <span>09 mutual friends</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>


                            {/* <div class="pix-flex pix-flex-center mt-4 mt-lg-8">
                                <a href="#" class="button secondary small px-11 circle"> Veiw more </a>
                            </div> */}

                            </div>                                
                        </div>                      
                    </div>                            
            </div>
        </div>
    </div>
</div>

);
}
export default Friends;