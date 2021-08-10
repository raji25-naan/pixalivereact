import React from 'react';
import Header from './Header';
import CreatePost from './CreatePost';
import video1 from "./components/videos/kavin.mp4";
import video2 from "./components/videos/kavin1.mp4";

function OtherProfile() {
return (
<div>
    <div className="pix-bg">
    <Header/>

        <div class="pix-container profile_main_content">
            <div class="container pro-container m-auto">

            <div class="row">
                        <div class="col-lg-12">
                            <div class="card pro_card_top border-0 p-0 bg-white shadow-xss rounded-xxl">
                                <div class="card-body h250 p-0 rounded-xxl overflow-hidden m-3"></div>
                                <div class="card-body p-0 position-relative-pro">
                                    <figure class="avatar_profile z-index-1">
                                    <img  src={ require("./components/imgs/img1.jpg")}  alt="image" class="rounded-circle" /></figure>
                                    <h4 class="pro_h4">Kevin Williamson <span>kevinwilliamson@gmail.com</span></h4>
                                    <div class="d-flex align-items-center justify-content-center position-absolute-md right-15 top-0 me-2 m-15">
                                        <a href="#" class="pro_btn">Messages</a>
                                        {/* <a href="#" class="pro_mess"><i class="feather-mail font-md"></i></a>       */}

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
                                        <li class="active list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active" href="/Profile">All Loop</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/About">About</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Friends">Friends 257</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Photos">Photos</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Videos">Videos</a></li>
                                        <div class="pro_edit_menu">
                                            <a href="#" class="pro_edit_menu_btn"> <i class="feather-user-plus other_profile_add_friend"></i>Add Friends</a>
                                        </div>                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-4 col-xxl-3 col-lg-4 pe-0">

                        <div class="card pro_card shadow-xss rounded-xxl border-0 mb-3 mt-3">
                                <div class="card-body p-3 border-0">
                                    <div class="row">                                        
                                        <div class="flex justify-around w-full items-center text-center pix-link-reset">
                                            <div>
                                                <a href="/Profile">                                
                                                    <h4> 730</h4>
                                                    <p>Post</p>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="/Profile">                               
                                                    <h4> 4,510</h4>
                                                    <p>Following</p>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="/Profile">                                
                                                    <h4> 2,186</h4>
                                                    <p>Followers</p>
                                                </a>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>

                            <div class="card  pro_card shadow-xss rounded-xxl border-0 mb-3">
                                <div class="card-body d-block p-4">
                                    <h4 class="fw-700 mb-3 font-xsss text-grey-900">About</h4>
                                    <p class="text-grey-500 lh-24 font-xssss mb-0">
                                    Kane Stuart Williamson is a New Zealand international cricketer who is currently the captain of the New Zealand.
                                    </p>
                                </div>
                                <div class="card-body border-top-xs d-flex p_5">
                                    <i class="feather-briefcase text-grey-500 me-3 font-lg"></i>
                                    <h4 class="fw-700 text-grey-500 font-xssss mt-0">Cricketer at <strong> New Zealand   </strong> 
                                    </h4>
                                </div>

                                <div class="card-body d-flex pt-0 p_5">
                                    <i class="feather-award text-grey-500 me-3 font-lg"></i>
                                    <h4 class="fw-700 text-grey-500 font-xssss mt-0">Studied at Mahendra Engineering College, Mallasamudram</h4>
                                </div>
                                <div class="card-body d-flex pt-0 p_5">
                                    <i class="feather-map-pin text-grey-500 me-3 font-lg"></i>
                                    <h4 class="fw-700 text-grey-500 font-xssss mt-1">Lives in <strong>New Zealand </strong> </h4>
                                </div>
                                <div class="card-body d-flex pt-0 p_5">
                                    <i class="feather-clock text-grey-500 me-3 font-lg"></i>
                                    <h4 class="fw-700 text-grey-500 font-xssss mt-1">Joined <strong>March 2021</strong></h4>
                                </div>

                                <div class="card-body d-flex pt-0 p_5">
                                    <i class="feather-rss text-grey-500 me-3 font-lg"></i>
                                    <h4 class="fw-700 text-grey-500 font-xssss mt-1">Followed by <strong>2,183 people</strong></h4>
                                </div>                                
                            </div>

                            <div class="card pro_card shadow-xss rounded-xxl border-0 mb-3 ">
                                <div class="card-body pix_photo ">
                                    <h4 class="fw-700 mb-0 font-xssss text-grey-900">Photos</h4>
                                    <a href="#" class="pix-see-all">See all</a>
                                </div>
                                <div class="card-body  d-block pt-0 pb-2">                                    
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/photo1.jpg")} class="img-fluid rounded-3 " alt />  
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s2.png")} class="img-fluid rounded-3 " alt />  
                                        </a>
                                    </div>
                                    
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s3.png")} class="img-fluid rounded-3 " alt />  
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s4.png")}  class="img-fluid rounded-3 "  alt />  
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s5.png")} class="img-fluid rounded-3 " alt />  
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s6.png")}  class="img-fluid rounded-3 "  alt />  
                                        </a>
                                    </div> 
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s7.png")}  class="img-fluid rounded-3 "  alt />  
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s9.png")} class="img-fluid rounded-3 " alt />  
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s1.png")}  class="img-fluid rounded-3 "  alt />  
                                        </a>
                                    </div>                                     
                                </div>
                            </div>  

                            <div class="card pro_card shadow-xss rounded-xxl border-0 mb-3 ">
                                <div class="card-body pix_photo ">
                                    <h4 class="fw-700 mb-0 font-xssss text-grey-900">Friends 257</h4>
                                    <a href="#" class="pix-see-all">See all</a>
                                </div>
                                <div class="card-body main_friend_lst d-block pt-0 pb-2">                                    
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/photo1.jpg")} class="img-fluid rounded-3 " alt />  
                                            <h4> Jonathan Ali </h4>
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s9.png")} class="img-fluid rounded-3 " alt />  
                                            <h4> John Doe </h4>
                                        </a>
                                    </div>
                                    
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s7.png")} class="img-fluid rounded-3 " alt />
                                            <h4>Rock Smith </h4> 
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s1.png")}  class="img-fluid rounded-3 "  alt /> 
                                            <h4>Joy William </h4> 
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s2.png")} class="img-fluid rounded-3 " alt /> 
                                            <h4>Johnson </h4> 
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s3.png")}  class="img-fluid rounded-3 "  alt /> 
                                            <h4> Davinder  </h4> 
                                        </a>
                                    </div>  
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s4.png")}  class="img-fluid rounded-3 "  alt /> 
                                            <h4>Simon Doe </h4> 
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s5.png")} class="img-fluid rounded-3 " alt /> 
                                            <h4> Gaggu Smith </h4> 
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s6.png")}  class="img-fluid rounded-3 "  alt /> 
                                            <h4>Amritpal </h4> 
                                        </a>
                                    </div>                                
                                </div>
                            </div>                          
                            
                        </div>

                        <div class="col-xl-8 col-xxl-9 col-lg-8 col_pro_8">

                        <CreatePost/>
                        
                            <div className="post pix-post-radius">
                                <div className="post-heading">
                                    <div className="post-avature pix-post-avature-profile">
                                        <img src={ require("./components/imgs/img1.jpg")} alt />
                                    </div>
                                    <div className="post-title pix-post-name-title text-left">
                                        <h4 >Kevin Williamson</h4>
                                     <i class="feather-globe "></i> <time>3 hour ago</time>
                                    </div>   
                                    <div className="post-btn-action">
                                        <span class="ms-auto mr-151" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="feather-more-horizontal text-grey-900 btn-round-md bg-greylight font-xss"></i>             
                                                        
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
                                <div className="pix-feed-content"> 
                                    <p><a href="#">#KaneWilliamson</a> is the <a href="#">#CWC19</a> Player of the Tournament!</p>
                                </div>
                                <div className="pix-feed-category"> 
                                    <a href="#">Sports,</a>  <a href="#">Cricketer,</a>  <a href="#">Finesse</a>  
                                </div>
                                <div className="post-description">
                                    <div className="fullsizeimg">
                                    <video src={video2}  controls="controls" />
                                    </div>        
                                </div>
                                <div className="post-counts">
                                    <div class="flex items-center space-x-3"> 
                                        <div class="flex items-center">
                                            <img src={ require("./components/imgs/post.png")} alt="" class="w-6 h-6 rounded-full border-2 border-white border-gray-900" />
                                            <img src={ require("./components/imgs/s8.png")} alt="" class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2" />
                                            <img src={ require("./components/imgs/s5.png")} alt="" class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2" />
                                        </div>
                                        <div class="text-gray-100 like_list">
                                            Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                                        </div>
                                        <a href="#" className="ft-right ms-auto ">13 Comments</a>
                                    </div>           
                                </div>
                                <div className="pix-post-bt">
                                    <div class="card-body d-flex p-0 mt-1">
                                        <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                                        <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss "></i>
                                            143 Like
                                        </a>
                                        <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
                                            <i class="feather-message-square icon-white text-grey-900 btn-round-sm font-lg"></i>
                                            76 Comment
                                        </a>
                                        <a href="#" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
                                            <i class="feather-share-2 text-grey-900 icon-white btn-round-sm font-lg"></i>
                                            <span class="d-none-xs">Share</span>
                                        </a>
                                    </div>
                                </div>            
                            </div>	

                            <div className="post pix-post-radius">
                                <div className="post-heading">
                                    <div className="post-avature pix-post-avature-profile">
                                    <img src={ require("./components/imgs/img1.jpg")} alt />
                                    </div>
                                    <div className="post-title pix-post-name-title text-left">
                                    <h4 >Kevin Williamson</h4>
                                    <i class="feather-globe "></i> <time>3 hour ago</time>
                                    </div>   
                                    <div className="post-btn-action">
                                    <span class="ms-auto mr-151" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="feather-more-horizontal text-grey-900 btn-round-md bg-greylight font-xss"></i>             
                                                        
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
                                <div className="pix-feed-content"> <p>Had a great weekend with frndzz!!!</p></div>
                                <div className="post-description">
                                    <div className="fullsizeimg">
                                    <video src={video1}  controls="controls" />
                                    </div>        
                                </div>
                                <div className="post-counts">
                                <div class="flex items-center space-x-3"> 
                                        <div class="flex items-center">
                                            <img src={ require("./components/imgs/post.png")} alt="" class="w-6 h-6 rounded-full border-2 border-white border-gray-900" />
                                            <img src={ require("./components/imgs/s8.png")} alt="" class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2" />
                                            <img src={ require("./components/imgs/s5.png")} alt="" class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2" />
                                        </div>
                                        <div class="text-gray-100 like_list">
                                            Liked <strong> Johnson</strong> and <strong> 209 Others </strong>
                                        </div>
                                        <a href="#" className="ft-right ms-auto ">13 Comments</a>
                                    </div>
                                
                                </div>
                                <div className="pix-post-bt">

                                <div class="card-body d-flex p-0 mt-1">
                                    <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                                    <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss "></i>
                                        143 Like
                                    </a>
                                    <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
                                        <i class="feather-message-square icon-white text-grey-900 btn-round-sm font-lg"></i>
                                        76 Comment
                                    </a>
                                    <a href="#" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
                                        <i class="feather-share-2 text-grey-900 icon-white btn-round-sm font-lg"></i>
                                        <span class="d-none-xs">Share</span>
                                    </a>
                                </div>
                                </div>   

                                <div className="post-comments">
                                    <a href="#" className="view-more-comment text-left"> Veiw  Comments</a>
                                    <div className="post-add-comment">
                                    <div className="post-add-comment-avature">
                                        <img src={ require("./components/imgs/img1.jpg")} style={{width:"37px"}} alt />
                                    </div>
                                    <div className="post-add-comment-text-area">
                                        <input type="text" placeholder="Write your comment..." />
                                        <div className="icons">
                                        <span className="feather-paperclip" />
                                        <span className="feather-smile" />
                                        <span className="feather-image" />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>	

                                
                        </div>                        
                                                     
                    </div>                            
            </div>
        </div>
    </div>
</div>

);
}
export default OtherProfile;