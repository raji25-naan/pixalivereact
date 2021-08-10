import React from 'react';
import Header from './Header';
import ChannelSidebar from './ChannelSidebar';
import video1 from "./components/videos/videoplayback.mp4";
import video2 from "./components/videos/mixkit-couple.mp4";
class Channel extends React.Component{
render()
{
return (
<div>

<div className="pix-bg">

<Header/>

<ChannelSidebar />


  <div className="pix_main_channel col-md-9 col-lg-9">  



  <div class="merged20 pix-channel-slider-content">
  <div class="section-header-left">
        <h4>Channel</h4>  
        <p>Groups you might be interested in</p>
    </div>
								<div class="tube-featurd-area">
									<div class="row merged-4px">
										<div class="col-lg-6 col-md-6">
											<figure class="featured-tube">
                                            <span class="vid-play"><i class="uil uil-play"></i></span>                                            
											<div class="more">
												<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
													<ul>
														<li class="send-mesg"><i class="fa fa-comment"></i>Send Message</li>
														<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
														<li class="share-pst"><i class="fa fa-share-alt"></i>Share</li>
														<li class="get-link"><i class="fa fa-link"></i>Copy Link</li>
													</ul>
												</div>
											</div>
                                                
                                            <img src={ require("./components/imgs/ch4.jpg")} className="" alt />	
												<div class="feature-title">
													{/* <h2><a href="pittube-detail.html" title="">Flying Over the Grand Canyon</a></h2> */}
													<div class="user-fig">
                                                    <img src={ require("./components/imgs/ch1.jpg")} alt />	
														<a title="" href="#">Frank</a>
													</div>
													<span class="upload-time">12:05</span>
												</div>
											</figure>
										</div>
										<div class="col-lg-6 col-md-6 pix-col-md-6">
											<div class="row merged-4px">
												<div class="col-lg-12 col-md-12">
													<figure class="featured-tube">
                                                    <span class="vid-play"><i class="uil uil-play"></i></span>                                            
											<div class="more">
												<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
													<ul>
														<li class="send-mesg"><i class="fa fa-comment"></i>Send Message</li>
														<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
														<li class="share-pst"><i class="fa fa-share-alt"></i>Share</li>
														<li class="get-link"><i class="fa fa-link"></i>Copy Link</li>
													</ul>
												</div>
											</div>
                                                    <img src={ require("./components/imgs/tube-user2.jpg")} alt />	
														<div class="feature-title">
															 {/* <h4><a href="pittube-detail.html" title="">Flying Over the Grand Canyonr</a></h4>  */}
															<div class="user-fig">
                                                            <img src={ require("./components/imgs/tube-user2.jpg")} alt />	
																<a title="" href="#">Xing Xong</a>
															</div>
															<span class="upload-time">08:15</span>
														</div>
													</figure>
												</div>
												<div class="col-lg-6 col-md-6 pix-col-inner-md-6">
													<figure class="featured-tube">
                                                        <span class="vid-play"><i class="uil uil-play"></i></span>                                            
                                                        <div class="more">
                                                            <div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
                                                                <ul>
                                                                    <li class="send-mesg"><i class="fa fa-comment"></i>Send Message</li>
                                                                    <li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
                                                                    <li class="share-pst"><i class="fa fa-share-alt"></i>Share</li>
                                                                    <li class="get-link"><i class="fa fa-link"></i>Copy Link</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <img src={ require("./components/imgs/tube-feature-small2.jpg")} alt />	
														<div class="feature-title">
															{/* <h6><a href="pittube-detail.html" title="">Flying Over the Grand Canyon</a></h6> */}
															<div class="user-fig">
                                                            <img src={ require("./components/imgs/tube-user3.jpg")} alt />	
																<a title="" href="#">Sara Hayat</a>
															</div>
															<span class="upload-time">02:54</span>
														</div>
													</figure>
												</div>
												<div class="col-lg-6 col-md-6 pix-col-inner-md-6 pix-position-relative">
													<figure class="featured-tube">
                                                        <span class="vid-play"><i class="uil uil-play"></i></span>                                            
                                                        <div class="more">
                                                            <div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
                                                                <ul>
                                                                    <li class="send-mesg"><i class="fa fa-comment"></i>Send Message</li>
                                                                    <li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
                                                                    <li class="share-pst"><i class="fa fa-share-alt"></i>Share</li>
                                                                    <li class="get-link"><i class="fa fa-link"></i>Copy Link</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <img src={ require("./components/imgs/ch3.png")} alt />	
														<div class="feature-title">
															 {/* <h6><a href="pittube-detail.html" title="">kadhal Ondru Kanden </a></h6>  */}
															<div class="user-fig">
                                                            <img src={ require("./components/imgs/tube-user4.jpg")} alt />	
																<a title="" href="#">Maria</a>
															</div>
															<span class="upload-time">04:37</span>
														</div>
													</figure>
												</div>
											</div>	
										</div>
									</div>
								</div>
						
						</div>



  
                <div class="row pix-mt-20">
					<div class="col-lg-5 pix-ads-col-6">
						<span class="ad-baner">Advertisment</span>
						<div class="ad-box"><img src={ require("./components/imgs/tube-baner1.jpg")} alt />	</div>
					</div>
					<div class="col-lg-5 pix-ads-col-6">
						<span class="ad-baner">Advertisment</span>
						<div class="ad-box"><img src={ require("./components/imgs/tube-baner2.jpg")} alt />	</div>
					</div>
				</div>
 

        <div class="section-header pb-0  pix-channel-slider-content" pix-slider="finite: true">
        <div class="section-header-left">
        <h4>Suggested for You</h4>  
        <p>Groups you might be interested in</p>
    </div>
    <div class="section-header-right">
        <a href="#" class="see-all"> See all</a>
    </div>
                    <div class="pix-slider-container pb-3 video-grid-slider ">
                        <ul class="pix-slider-items pix-child-width-1-3@m pix-child-width-1-3@s pix-grid">
                            
                        <li tabindex="-1" class="pix-active">
                                <a href="/ChannelDetail" class="video-post">
                                    <div class="video-post-thumbnail">
                                        <span class="video-post-time">23:00</span>
                                        <span class="play-btn-trigger"></span>
                                        <iframe width="100%" height="240" src="https://www.youtube.com/embed/eqVX2EfnUpY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                         </div>
                                    <div class="video-post-content">
                                        <h3>Smith, Zampa shine in high-scoring first ODI | Dettol ODI Series 2020</h3>
                                    </div>
                                </a>
                            </li>

                            <li tabindex="-1" class="pix-active">
                            <a href="/ChannelDetail" class="video-post">
                                    <div class="video-post-thumbnail">
                                        <span class="video-post-time">23:00</span>
                                        <span class="play-btn-trigger"></span>
                                        <iframe width="100%" height="240" src="https://www.youtube.com/embed/mg7FweYjasE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    <div class="video-post-content">
                                        <h3>Smith, Zampa shine in high-scoring first ODI | Dettol ODI Series 2020</h3>
                                    </div>
                                </a>
                            </li>

                            <li tabindex="-1" class="pix-active">
                            <a href="/ChannelDetail" class="video-post">
                                    <div class="video-post-thumbnail">
                                        <span class="video-post-time">23:00</span>
                                        <span class="play-btn-trigger"></span>
                                        <iframe width="100%" height="240" src="https://www.youtube.com/embed/8Di-l8-KruA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    <div class="video-post-content">
                                        <h3>Smith, Zampa shine in high-scoring first ODI | Dettol ODI Series 2020</h3>
                                    </div>
                                </a>
                            </li>

                            <li tabindex="-1" class="">
                            <a href="/ChannelDetail" class="video-post">
                                    <div class="video-post-thumbnail">
                                        <span class="video-post-time">23:00</span>
                                        <span class="play-btn-trigger"></span>
                                        <iframe width="100%" height="240" src="https://www.youtube.com/embed/5J7zE95UN_s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div class="video-post-content">
                                        <h3>Smith, Zampa shine in high-scoring first ODI | Dettol ODI Series 2020</h3>
                                    </div>
                                </a>
                            </li>

                            <li tabindex="-1" class="">
                            <a href="/ChannelDetail" class="video-post">
                                    <div class="video-post-thumbnail">
                                        <span class="video-post-time">23:00</span>
                                        <span class="play-btn-trigger"></span>
                                        <iframe width="100%" height="240" src="https://www.youtube.com/embed/RpaqImqr7Ts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    <div class="video-post-content">
                                        <h3> Smith, Zampa shine in high-scoring first ODI | Dettol ODI Series 2020</h3>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a class="pix-position-center-left-out pix-position-small pix-hidden-hover slidenav-prev pix-invisible" href="#" pix-slider-item="previous"></a>
                    <a class="pix-position-center-right-out pix-position-small pix-hidden-hover slidenav-next" href="#" pix-slider-item="next"></a>
                </div>


<hr/>

<div class="section-header pb-0  pix-channel-slider-content">
    <div class="section-header-left">
        <h4>Categories </h4>
        <p>Find a Video by browsing top Categories</p>
    </div>
    <div class="section-header-right">
        <a href="#" class="see-all"> See all</a>
    </div>


<div class="pix-position-relative pix-slider" pix-slider="finite: true">
                    <div class="pix-slider-container py-3">
                        <ul class="pix-slider-items pix-child-width-1-6@m pix-child-width-1-3@s pix-child-width-1-2 pix-grid-small pix-grid">
                             <li tabindex="-1" class="">
                             <a href="/ChannelDetail">
                                    <div class="group-catagroy-card animate-this">
                                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xF3Oot377uM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                     <div class="group-catagroy-card-content">
                                            <h4> Animals </h4>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li tabindex="-1" class="pix-active">
                                <a href="/ChannelDetail">
                                <div class="group-catagroy-card animate-this">
                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5J7zE95UN_s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                     <div class="group-catagroy-card-content">
                                            <h4> Sports </h4>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li tabindex="-1" class="pix-active">
                                <a href="/ChannelDetail">
                                <div class="group-catagroy-card animate-this">
                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5J7zE95UN_s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                     <div class="group-catagroy-card-content">
                                            <h4> Workout </h4>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li tabindex="-1" class="pix-active">
                                <a href="/ChannelDetail">
                                <div class="group-catagroy-card animate-this">
                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5J7zE95UN_s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <div class="group-catagroy-card-content">
                                            <h4> Motivation </h4>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li tabindex="-1" class="pix-active">
                                 <a href="/ChannelDetail">
                                <div class="group-catagroy-card animate-this">
                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5J7zE95UN_s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <div class="group-catagroy-card-content">
                                            <h4> Music </h4>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li tabindex="-1" class="pix-active">
                                <a href="/ChannelDetail">
                                <div class="group-catagroy-card animate-this">
                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5J7zE95UN_s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <div class="group-catagroy-card-content">
                                            <h4> Food </h4>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li tabindex="-1" class="pix-active">
                                <a href="/ChannelDetail">
                                <div class="group-catagroy-card animate-this">
                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5J7zE95UN_s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    <div class="group-catagroy-card-content">
                                            <h4> Sports </h4>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <a class="pix-position-center-left-out pix-position-small pix-hidden-hover slidenav-prev" href="#" pix-slider-item="previous"></a>
                        <a class="pix-position-center-right-out pix-position-small pix-hidden-hover slidenav-next pix-invisible" href="#" pix-slider-item="next"></a>

                    </div>
                </div>
                </div>

                <hr/>


<div class="section-header pb-0 pix-channel-slider-content" pix-slider="finite: true">
            <div class="section-header-left">
                <h4>Latest Videos</h4>
                <p>Groups you might be interested</p>
                </div>
                <div class="section-header-right">
                    <a href="#" class="see-all"> See all</a>
                </div>
                    <div class="pix-slider-container pb-3 video-grid-slider ">
                        <ul class="pix-slider-items pix-child-width-1-3@m pix-child-width-1-3@s pix-grid">
                            <li tabindex="-1" class="pix-active">
                                <a href="#" class="video-post">
                                    <div class="video-post-thumbnail">
                                        <span class="video-post-time">23:00</span>
                                        <span class="play-btn-trigger"></span>
                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8Di-l8-KruA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                         </div>
                                    <div class="video-post-content">
                                        <h3>Smith, Zampa shine in high-scoring first ODI | Dettol ODI Series 2020</h3>
                                    </div>
                                </a>
                            </li>

                            <li tabindex="-1" class="pix-active">
                                <a href="#" class="video-post">
                                    <div class="video-post-thumbnail">
                                        <span class="video-post-time">23:00</span>
                                        <span class="play-btn-trigger"></span>
                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/eqVX2EfnUpY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                       </div>
                                    <div class="video-post-content">
                                        <h3>Smith, Zampa shine in high-scoring first ODI | Dettol ODI Series 2020</h3>
                                    </div>
                                </a>
                            </li>

                            <li tabindex="-1" class="pix-active">
                                <a href="#" class="video-post">
                                    <div class="video-post-thumbnail">
                                        <span class="video-post-time">23:00</span>
                                        <span class="play-btn-trigger"></span>
                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/RpaqImqr7Ts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                         </div>
                                    <div class="video-post-content">
                                        <h3>Smith, Zampa shine in high-scoring first ODI | Dettol ODI Series 2020</h3>
                                    </div>
                                </a>
                            </li>

                            <li tabindex="-1" class="">
                                <a href="#" class="video-post">
                                    <div class="video-post-thumbnail">
                                        <span class="video-post-time">23:00</span>
                                        <span class="play-btn-trigger"></span>
                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5J7zE95UN_s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div class="video-post-content">
                                        <h3>Smith, Zampa shine in high-scoring first ODI | Dettol ODI Series 2020</h3>
                                    </div>
                                </a>
                            </li>

                            <li tabindex="-1" class="">
                                <a href="#" class="video-post">
                                    <div class="video-post-thumbnail">
                                        <span class="video-post-time">23:00</span>
                                        <span class="play-btn-trigger"></span>
                                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5J7zE95UN_s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    <div class="video-post-content">
                                        <h3> Smith, Zampa shine in high-scoring first ODI | Dettol ODI Series 2020</h3>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a class="pix-position-center-left-out pix-position-small pix-hidden-hover slidenav-prev pix-invisible" href="#" pix-slider-item="previous"></a>
                    <a class="pix-position-center-right-out pix-position-small pix-hidden-hover slidenav-next" href="#" pix-slider-item="next"></a>
                </div>

      </div>
  </div> 
</div>

);
}
}
export default Channel;