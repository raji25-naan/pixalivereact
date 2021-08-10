import React from 'react';
import Header from './Header';
import { Avatar } from '@material-ui/core';

function Videos(props) {
return (
<div>
    <div className="pix-bg">
    <Header {...props}/>

        <div class="pix-container profile_main_content">
            <div class="container pro-container m-auto">

            <div class="row">
                        <div class="col-lg-12">
                            <div class="card pro_card_top border-0 p-0 bg-white shadow-xss rounded-xxl">
                                <div class="card-body h250 p-0 rounded-xxl overflow-hidden m-3"></div>
                                <div class="card-body p-0 position-relative-pro">
                                 {props?.user?.avatar ? 
                                   <figure class="avatar_profile z-index-1">
                                         <img  src={props?.user?.avatar}  alt="image" class="rounded-circle" />
                                        </figure>
                                        :
                                        <figure class="avatar_profile z-index-1">
                                        <Avatar
                                          src={props?.user?.avatar} 
                                          class="unseen_story see_all_stories user-avatar"
                                          alt
                                         >
                                           {props?.user?.name.charAt(0)}
                                        </Avatar> 
                                        </figure>
                                       }
                                    <h4 class="pro_h4">{props?.user?.name}<span>@{props?.user?.username}</span></h4>
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
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block " href="/About">About</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Friends">Friends</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Photos">Photos</a></li>
                                        <li class="active list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block  active" href="/Videos">Videos</a></li>
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
                                <h3>Videos</h3>
                            </div>
                            <div class="pro_friend_list">
                                <a href="#">Add Photos/Video</a>
                                <div className="post-btn-action pro_friend_list_more">
                                    <span class="ms-auto mr-151" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="feather-more-horizontal pro_btn-round-md "></i>        
                                        <div className="mt-0 p-2 pix-dropdown" pix-dropdown="pos: bottom-right;mode:hover ">
                                            <ul className="pix-nav pix-dropdown-nav text-left">
                                                <li>
                                                    <div class="card-body p-0 d-flex">
                                                        <i class="feather-image text-grey-500 me-3 font-lg"></i>
                                                        <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">See Photos Hidden From Timeline
                                                            <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span>
                                                        </h4>
                                                    </div>                    
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </span>
                                </div>                                   
                            </div>


                            <div class="row">
                            <div class="cc_featured_second_section mt-0">
                                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12 vd_p0">
                                        <div class="prs_upcom_movie_box_wrapper">
                                            <div class="prs_upcom_movie_img_box prs_upcom_movie_img_box_video">
                                            <img  src={ require("./components/imgs/ws4.jpg")}  alt />  
                                            <div class="prs_upcom_movie_img_overlay"></div>
                                            <div class="prs_play_icon">
                                                <ul>
                                                    <li>
                                                        <a class="test-popup-link button" rel="external" href="#" title="title">
                                                        <i class="fa fa-play"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cactus-note ct-time font-size-1"><span>02:02</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12 vd_p0">
                                        <div class="prs_upcom_movie_box_wrapper">
                                            <div class="prs_upcom_movie_img_box prs_upcom_movie_img_box_video">
                                            <img  src={ require("./components/imgs/ws5.jpg")}  alt />  
                                            <div class="prs_upcom_movie_img_overlay"></div>
                                            <div class="prs_play_icon">
                                                <ul>
                                                    <li>
                                                        <a class="test-popup-link button" rel="external" href="#" title="title">
                                                        <i class="fa fa-play"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cactus-note ct-time font-size-1"><span>02:02</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12 vd_p0">
                                        <div class="prs_upcom_movie_box_wrapper">
                                            <div class="prs_upcom_movie_img_box prs_upcom_movie_img_box_video">
                                            <img  src={ require("./components/imgs/ws6.jpg")}  alt /> 
                                            <div class="prs_upcom_movie_img_overlay"></div>
                                            <div class="prs_play_icon">
                                                <ul>
                                                    <li>
                                                        <a class="test-popup-link button" rel="external" href="#" title="title">
                                                        <i class="fa fa-play"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cactus-note ct-time font-size-1"><span>02:02</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12 vd_p0">
                                        <div class="prs_upcom_movie_box_wrapper">
                                            <div class="prs_upcom_movie_img_box prs_upcom_movie_img_box_video">
                                            <img  src={ require("./components/imgs/ws7.jpg")}  alt /> 
                                            <div class="prs_upcom_movie_img_overlay"></div>
                                            <div class="prs_play_icon">
                                                <ul>
                                                    <li>
                                                        <a class="test-popup-link button" rel="external" href="#" title="title">
                                                        <i class="fa fa-play"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cactus-note ct-time font-size-1"><span>02:02</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12 vd_p0">
                                        <div class="prs_upcom_movie_box_wrapper">
                                            <div class="prs_upcom_movie_img_box prs_upcom_movie_img_box_video">
                                            <img  src={ require("./components/imgs/ws8.jpg")}  alt /> 
                                            <div class="prs_upcom_movie_img_overlay"></div>
                                            <div class="prs_play_icon">
                                                <ul>
                                                    <li>
                                                        <a class="test-popup-link button" rel="external" href="#" title="title">
                                                        <i class="fa fa-play"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cactus-note ct-time font-size-1"><span>02:02</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cc_featured_second_section mt-1">
                                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12 vd_p0">
                                        <div class="prs_upcom_movie_box_wrapper">
                                            <div class="prs_upcom_movie_img_box prs_upcom_movie_img_box_video">
                                            <img  src={ require("./components/imgs/ws8.jpg")}  alt />  
                                            <div class="prs_upcom_movie_img_overlay"></div>
                                            <div class="prs_play_icon">
                                                <ul>
                                                    <li>
                                                        <a class="test-popup-link button" rel="external" href="#" title="title">
                                                        <i class="fa fa-play"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cactus-note ct-time font-size-1"><span>02:02</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12 vd_p0">
                                        <div class="prs_upcom_movie_box_wrapper">
                                            <div class="prs_upcom_movie_img_box prs_upcom_movie_img_box_video">
                                            <img  src={ require("./components/imgs/ws2.jpg")}  alt />  
                                            <div class="prs_upcom_movie_img_overlay"></div>
                                            <div class="prs_play_icon">
                                                <ul>
                                                    <li>
                                                        <a class="test-popup-link button" rel="external" href="#" title="title">
                                                        <i class="fa fa-play"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cactus-note ct-time font-size-1"><span>02:02</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12 vd_p0">
                                        <div class="prs_upcom_movie_box_wrapper">
                                            <div class="prs_upcom_movie_img_box prs_upcom_movie_img_box_video">
                                            <img  src={ require("./components/imgs/ws3.jpg")}  alt /> 
                                            <div class="prs_upcom_movie_img_overlay"></div>
                                            <div class="prs_play_icon">
                                                <ul>
                                                    <li>
                                                        <a class="test-popup-link button" rel="external" href="#" title="title">
                                                        <i class="fa fa-play"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cactus-note ct-time font-size-1"><span>02:02</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12 vd_p0">
                                        <div class="prs_upcom_movie_box_wrapper">
                                            <div class="prs_upcom_movie_img_box prs_upcom_movie_img_box_video">
                                            <img  src={ require("./components/imgs/ws4.jpg")}  alt /> 
                                            <div class="prs_upcom_movie_img_overlay"></div>
                                            <div class="prs_play_icon">
                                                <ul>
                                                    <li>
                                                        <a class="test-popup-link button" rel="external" href="#" title="title">
                                                        <i class="fa fa-play"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cactus-note ct-time font-size-1"><span>02:02</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12 vd_p0">
                                        <div class="prs_upcom_movie_box_wrapper">
                                            <div class="prs_upcom_movie_img_box prs_upcom_movie_img_box_video">
                                            <img  src={ require("./components/imgs/ws5.jpg")}  alt /> 
                                            <div class="prs_upcom_movie_img_overlay"></div>
                                            <div class="prs_play_icon">
                                                <ul>
                                                    <li>
                                                        <a class="test-popup-link button" rel="external" href="#" title="title">
                                                        <i class="fa fa-play"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="cactus-note ct-time font-size-1"><span>02:02</span></div>
                                            </div>
                                        </div>
                                    </div>
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
export default Videos;