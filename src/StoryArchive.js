import React from 'react';
import Header from './Header';
import { Avatar } from '@material-ui/core';

function StoryArchive(props) {
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
                                        <li class=" list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/About">About</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Friends">Friends</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Photos">Photos</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Videos">Videos</a></li>
                                        <li class="active list-inline-item me-5"><a class="active fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/StoryArchive">StoryArchive</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 me-sm-5 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Settings">Settings</a></li>
                                        <div class="pro_edit_menu">
                                            <a href="#" class="pro_edit_menu_btn">Edit Profile</a>
                                        </div>                                            
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                           
                        </div>

                        <div class="col-xl-8 col-xxl-9 col-lg-8 col_pro_8">
                           
                                
                        </div>                        
                                                     
                </div>                            
            </div>
        </div>
    </div>
</div>

);
}
export default StoryArchive;