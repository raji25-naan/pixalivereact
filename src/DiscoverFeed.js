import React from 'react';
import CreatePost from './CreatePost';
import Stories from './Stories';
import video1 from "./components/videos/v-1.mp4";
import video2 from "./components/videos/v-2.mp4";
import video3 from "./components/videos/kavin1.mp4";
import SuggestionsFriends from './SuggestionsFriends';

const DiscoverFeed = (props) => {
  const suggest = props?.suggest;

return (
    
<div className="explore_cnt">
  <div className="main_content_inner_pix">
    <div className="pix-grid-small1 pix-grid1" pix-grid>
      <div className="">

                  <div className="post pix-post-radius">
                    <div className="your_looped"><i class="feather-repeat"></i><span>You've Re-looped</span></div>                                 
                              
                      <div className="post-heading">
                          <div className="post-avature pix-post-avature-profile">
                              <img src={ require("./components/imgs/img1.jpg")} alt />
                          </div>
                          <div className="post-title pix-post-name-title text-left">
                              <h4 >Kevin Williamson</h4>
                              <i class="feather-globe "></i> <time>20 mins</time>
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
                      <div className="post-relooped">
                        <div className="post-heading">
                            <div className="post-avature pix-post-avature-profile">
                                <img src={ require("./components/imgs/img3.jpg")} alt />
                            </div>
                            <div className="post-title pix-post-name-title text-left">
                                <h4>John Smith</h4>
                                <i class="feather-globe "></i> <time>35 mins</time>
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
                          <video src={video3}  controls="controls" />
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
                                  143
                              </a>
                              <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                                  <i class="feather-repeat icon-white text-grey-900 btn-round-sm font-lg"></i>
                                  81 
                              </a>
                              <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                                  <i class="feather-message-square icon-white text-grey-900 btn-round-sm font-lg"></i>
                                  76
                              </a>
                              <a href="#" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
                                  <i class="feather-share-2 text-grey-900 icon-white btn-round-sm font-lg"></i>
                                  <span class="d-none-xs">Share</span>
                              </a>
                          </div>
                      </div> 
                      </div>           
                  </div>	


       <div className="post pix-post-radius">
          <div className="post-heading">
            <div className="post-avature pix-post-avature-profile">
              <img src={ require("./components/imgs/img3.jpg")} alt />
            </div>
            <div className="post-title pix-post-name-title text-left">
              <h4 >Johnson Smith</h4>
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
                      143
                  </a>
                  <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                      <i class="feather-repeat icon-white text-grey-900 btn-round-sm font-lg"></i>
                      81 
                  </a>
                  <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                      <i class="feather-message-square icon-white text-grey-900 btn-round-sm font-lg"></i>
                      76
                  </a>
                  <a href="#" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
                      <i class="feather-share-2 text-grey-900 icon-white btn-round-sm font-lg"></i>
                      <span class="d-none-xs">Share</span>
                  </a>
              </div>
          </div>            
      </div>	

        <SuggestionsFriends {...suggest}/>      

        <div className="post pix-post-radius">
          <div className="post-heading">
            <div className="post-avature pix-post-avature-profile">
              <img src={ require("./components/imgs/post.png")} alt />
            </div>
            <div className="post-title pix-post-name-title text-left">
              <h4 >Johnson Smith</h4>
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

          <div className="pix-post-bt">
                <div class="card-body d-flex p-0 mt-1">
                    <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                    <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss "></i>
                        143
                    </a>
                    <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                        <i class="feather-repeat icon-white text-grey-900 btn-round-sm font-lg"></i>
                        81 
                    </a>
                    <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                        <i class="feather-message-square icon-white text-grey-900 btn-round-sm font-lg"></i>
                        76
                    </a>
                    <a href="#" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
                        <i class="feather-share-2 text-grey-900 icon-white btn-round-sm font-lg"></i>
                        <span class="d-none-xs">Share</span>
                    </a>
                </div>
            </div> 
        </div>   

          <div className="post-comments">
            <a href="#" className="view-more-comment text-left"> Veiw  Comments</a>
            <div className="post-add-comment">
              <div className="post-add-comment-avature">
                <img src={ require("./components/imgs/post.png")} style={{width:"37px"}} alt />
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



        <div className="post pix-post-radius">
          <div className="post-heading">
            <div className="post-avature pix-post-avature-profile">
              <img src={ require("./components/imgs/user-11.png")} alt />
            </div>
            <div className="post-title pix-post-name-title text-left">
              <h4 >Johnson Smith</h4>
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
                      143
                  </a>
                  <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                      <i class="feather-repeat icon-white text-grey-900 btn-round-sm font-lg"></i>
                      81 
                  </a>
                  <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                      <i class="feather-message-square icon-white text-grey-900 btn-round-sm font-lg"></i>
                      76
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
                <img src={ require("./components/imgs/user-11.png")} style={{width:"37px"}} alt />
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



        <div className="post pix-post-radius">
          <div className="post-heading">
            <div className="post-avature pix-post-avature-profile">
              <img src={ require("./components/imgs/user-12.png")} alt />
            </div>
            <div className="post-title pix-post-name-title text-left">
              <h4 >Johnson Smith</h4>
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
              <video src={video2}  controls="controls" />
            </div>        
          </div>
          <div className="post-counts">
          <div class="flex items-center space-x-3"> 
                <div class="flex items-center">
                    <img src={ require("./components/imgs/user-12.png")} alt="" class="w-6 h-6 rounded-full border-2 border-white border-gray-900" />
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
                      143
                  </a>
                  <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                      <i class="feather-repeat icon-white text-grey-900 btn-round-sm font-lg"></i>
                      81 
                  </a>
                  <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                      <i class="feather-message-square icon-white text-grey-900 btn-round-sm font-lg"></i>
                      76
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
                <img src={ require("./components/imgs/user-12.png")} style={{width:"37px"}} alt />
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


);
}
export default DiscoverFeed;