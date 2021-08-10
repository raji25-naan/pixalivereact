import React from 'react';
import Header from './Header';
import ChannelSidebar from './ChannelSidebar';
import video1 from "./components/videos/videoplayback.mp4";
import video2 from "./components/videos/mixkit-couple.mp4";

const Channel = (props) => {


return (
<div>

<div className="pix-bg">

<Header {...props}/>

<ChannelSidebar />


  <div className="pix_main_channel col-md-9 col-lg-9">  


  <div class="section-header pb-0  video-block section-padding " pix-slider="finite: true">
   <div class="section-header-left pix-channel-head">
      <h4>Top Pixtube Trending Channels</h4>
      <p>Groups you might be interested in</p>
   </div>
   <div class="section-header-right">
      <a href="#" class="see-all"> See all</a>
   </div>
   <div class="pix-slider-container pb-3 video-grid-slider ">
      <ul class="pix-slider-items pix-child-width-1-5@m pix-child-width-1-3@s pix-grid">
         <li tabindex="-1" class="pix-active">
                <div class="channels-card">
                    <div class="channels-card-image">
                    <a href="#">      <img src={ require("./components/imgs/s4.png")} alt /></a>
                    <div class="channels-card-image-btn"><button type="button" class="channels-btn btn-outline-danger">Subscribe <strong>1.4M</strong></button></div>
                    </div>
                    <div class="channels-card-body">
                    <div class="channels-title">
                        <a href="#">Sothanaigal</a>
                    </div>
                    <div class="channels-view">
                        382,323 subscribers
                    </div>
                    </div>
                </div>
         </li>
         <li tabindex="-1" class="pix-active">
                <div class="channels-card">
                    <div class="channels-card-image">
                    <a href="#">      <img src={ require("./components/imgs/store1.jpg")} alt /></a>
                    <div class="channels-card-image-btn"><button type="button" class="channels-btn btn-outline-danger">Subscribe <strong>1.4M</strong></button></div>
                    </div>
                    <div class="channels-card-body">
                    <div class="channels-title">
                        <a href="#">Put Chutney</a>
                    </div>
                    <div class="channels-view">
                        382,323 subscribers
                    </div>
                    </div>
                </div>
         </li>
         <li tabindex="-1" class="pix-active">
                <div class="channels-card">
                    <div class="channels-card-image">
                    <a href="#">      <img src={ require("./components/imgs/store2.jpg")} alt /></a>
                    <div class="channels-card-image-btn"><button type="button" class="channels-btn btn-outline-secondary">Subscribed <strong>1.4M</strong></button></div>
                    </div>
                    <div class="channels-card-body">
                    <div class="channels-title">
                        <a href="#">Mic Set <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i class="fa fa-check-circle"></i></span></a>
                    </div>
                    <div class="channels-view">
                        382,323 subscribers
                    </div>
                    </div>
                </div>
         </li>

         <li tabindex="-1" class="pix-active">
                <div class="channels-card">
                    <div class="channels-card-image">
                    <a href="#">      <img src={ require("./components/imgs/store3.jpg")} alt /></a>
                    <div class="channels-card-image-btn"><button type="button" class="channels-btn btn-outline-danger">Subscribe <strong>1.4M</strong></button></div>
                    </div>
                    <div class="channels-card-body">
                    <div class="channels-title">
                        <a href="#">Eruma Saani</a>
                    </div>
                    <div class="channels-view">
                        382,323 subscribers
                    </div>
                    </div>
                </div>
         </li>
         <li tabindex="-1" class="pix-active">
                <div class="channels-card">
                    <div class="channels-card-image">
                    <a href="#">      <img src={ require("./components/imgs/store4.jpg")} alt /></a>
                    <div class="channels-card-image-btn"><button type="button" class="channels-btn btn-outline-danger">Subscribe <strong>1.4M</strong></button></div>
                    </div>
                    <div class="channels-card-body">
                    <div class="channels-title">
                        <a href="#">Eruma Saani</a>
                    </div>
                    <div class="channels-view">
                        382,323 subscribers
                    </div>
                    </div>
                </div>
         </li>
         <li tabindex="-1" class="pix-active">
                <div class="channels-card">
                    <div class="channels-card-image">
                    <a href="#">      <img src={ require("./components/imgs/s4.png")} alt /></a>
                    <div class="channels-card-image-btn"><button type="button" class="channels-btn btn-outline-secondary">Subscribed <strong>1.4M</strong></button></div>
                    </div>
                    <div class="channels-card-body">
                    <div class="channels-title">
                        <a href="#">Eruma Saani</a>
                    </div>
                    <div class="channels-view">
                        382,323 subscribers
                    </div>
                    </div>
                </div>
         </li>

         <li tabindex="-1" class="pix-active">
                <div class="channels-card">
                    <div class="channels-card-image">
                    <a href="#">      <img src={ require("./components/imgs/s4.png")} alt /></a>
                    <div class="channels-card-image-btn"><button type="button" class="channels-btn btn-outline-danger">Subscribe <strong>1.4M</strong></button></div>
                    </div>
                    <div class="channels-card-body">
                    <div class="channels-title">
                        <a href="#">Eruma Saani</a>
                    </div>
                    <div class="channels-view">
                        382,323 subscribers
                    </div>
                    </div>
                </div>
         </li>
         <li tabindex="-1" class="pix-active">
                <div class="channels-card">
                    <div class="channels-card-image">
                    <a href="#">      <img src={ require("./components/imgs/s4.png")} alt /></a>
                    <div class="channels-card-image-btn"><button type="button" class="channels-btn btn-outline-danger">Subscribe <strong>1.4M</strong></button></div>
                    </div>
                    <div class="channels-card-body">
                    <div class="channels-title">
                        <a href="#">Eruma Saani</a>
                    </div>
                    <div class="channels-view">
                        382,323 subscribers
                    </div>
                    </div>
                </div>
         </li>
         <li tabindex="-1" class="pix-active">
                <div class="channels-card">
                    <div class="channels-card-image">
                    <a href="#">      <img src={ require("./components/imgs/s4.png")} alt /></a>
                    <div class="channels-card-image-btn"><button type="button" class="channels-btn btn-outline-secondary">Subscribed <strong>1.4M</strong></button></div>
                    </div>
                    <div class="channels-card-body">
                    <div class="channels-title">
                        <a href="#">Eruma Saani</a>
                    </div>
                    <div class="channels-view">
                        382,323 subscribers
                    </div>
                    </div>
                </div>
         </li>
        
        
      </ul>
   </div>
</div>


  <div class="merged20 pix-channel-slider-content">
    <div class="section-header-left">
        <h4>Pixtube Channel</h4>  
        <p>Groups you might be interested in</p>
    </div>

    <div class="prs_video_section_main_wrapper">
        <div class="prs_upcom_movie_video_overlay"></div>
			<div class="row">               
                <div class="col-lg-6 col-md-6 col-sm-5 col-xs-6">
                    <div class="pix-channel-banner">                   
                        <img src={ require("./components/imgs/img1.png")} alt />
                        <h2>One Men Army</h2>
                        <span>Rating :&nbsp;&nbsp;<i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i></span>
                        <p>strange black entity from another world bonds with Peter Parker and causes inner turmoil as he contends with new villains, temptations, and revenge.</p>
                        <div class="d-md-flex">
                            <a href="#" class="pix-channel-video">WATCH NOW</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-6 prs_video_sec_icon_wrapper">
                    <ul>
                        <li>
                            <a class="test-popup-link button" rel="external" href="#" title="title">
                                <i class="fa fa-play"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
		</div>

        <div class="section-header-left">
        <h4>Latest Channel</h4>  
        <p>Groups you might be interested in</p>
    </div>

    <div class="row">

   

        <div class="col-lg-5 col-md-5 col-sm-5 col-xs-6">
            <div class="prs_upcom_movie_box_wrapper prs_upcom_movie_video_box_wrapper">
            <div class="prs_upcom_movie_video_overlay"></div>
                <div class="prs_upcom_movie_img_box prs_webseri_movie_img_box">
                    <div class="prs_webseri_video_img_sec_icon_wrapper">
                        <ul>
                            <li>
                                <a class="test-popup-link button" rel="external" href="#" title="title">
                                    <i class="fa fa-play"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="cactus-note ct-time font-size-1"><span>02:02</span></div>
                    <div class="prs_upcom_video_img_cont_over">
                        <ul>
                            <li>2020, Drama, Action, Comedy</li>
                            <li>Rating :&nbsp;&nbsp;<i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i></li>
                        </ul>
                        <h2>terrorise of the year</h2>
                        <p>Release on cinema : 27 june 2018</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 prs_upcom_slide_first">
            <div class="prs_upcom_movie_box_wrapper">
                <div class="prs_upcom_movie_img_box">
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
                <div class="prs_upcom_movie_content_box">
                    <div class="prs_upcom_movie_content_box_inner">
                        <a href="#">Busting Car</a>
                        <p>Drama , Acation</p>	<i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 hidden-sm prs_upcom_slide_second">
            <div class="prs_upcom_movie_box_wrapper">
                <div class="prs_upcom_movie_img_box">
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
                <div class="prs_upcom_movie_content_box">
                    <div class="prs_upcom_movie_content_box_inner">
                        <a href="#">Busting Car</a>
                        <p>Drama , Acation</p>	<i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                        <i class="fa fa-star-o"></i>
                    </div>
                </div>
            </div>
        </div>

        
    <div class="row">
        <div class="col-lg-12 cc_featured_second_section">                            
            <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                <div class="prs_upcom_movie_box_wrapper">
                    <div class="prs_upcom_movie_img_box">
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
                    <div class="prs_upcom_movie_content_box">
                        <div class="prs_upcom_movie_content_box_inner">
                            <a href="#">Busting Car</a>
                            <p>Drama , Acation</p>	<i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                <div class="prs_upcom_movie_box_wrapper">
                    <div class="prs_upcom_movie_img_box">
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
                    <div class="prs_upcom_movie_content_box">
                        <div class="prs_upcom_movie_content_box_inner">
                            <a href="#">Busting Car</a>
                            <p>Drama , Acation</p>	<i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                <div class="prs_upcom_movie_box_wrapper">
                    <div class="prs_upcom_movie_img_box">
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
                    <div class="prs_upcom_movie_content_box">
                        <div class="prs_upcom_movie_content_box_inner">
                            <a href="#">Busting Car</a>
                            <p>Drama , Acation</p>	<i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                <div class="prs_upcom_movie_box_wrapper">
                    <div class="prs_upcom_movie_img_box">
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
                    <div class="prs_upcom_movie_content_box">
                        <div class="prs_upcom_movie_content_box_inner">
                            <a href="#">Busting Car</a>
                            <p>Drama , Acation</p>	<i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                    </div>
                </div>
            </div>

                        <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                            <div class="prs_upcom_movie_box_wrapper">
                                <div class="prs_upcom_movie_img_box">
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
                                <div class="prs_upcom_movie_content_box">
                                    <div class="prs_upcom_movie_content_box_inner">
                                        <a href="#">Busting Car</a>
                                        <p>Drama , Acation</p>	<i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-o"></i>
                                        <i class="fa fa-star-o"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                 </div>
            </div>        
          </div>

       



    {/* <div class="section-header pb-0  pix-channel-slider-content" pix-slider="finite: true">
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
            <div class="owl-item">
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                        <img src={ require("./components/imgs/s4.png")} alt />
                            <h6>Singing</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
            </div>
        </li>
        <li tabindex="-1" class="pix-active">
            <div class="owl-item">
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                        <img src={ require("./components/imgs/s4.png")} alt />
                            <h6>Comedy <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified">
                                <i class="fa fa-check-circle text-success"></i></span></h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
            </div>
        </li>
        <li tabindex="-1" class="pix-active">
            <div class="owl-item">
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                        <img src={ require("./components/imgs/s4.png")} alt />
                            <h6>Singing</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
            </div>
        </li>
        <li tabindex="-1" class="pix-active">
            <div class="owl-item">
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                        <img src={ require("./components/imgs/s4.png")} alt />
                            <h6>Singing</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
            </div>
        </li>
        <li tabindex="-1" class="pix-active">
            <div class="owl-item">
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                        <img src={ require("./components/imgs/s4.png")} alt />
                            <h6>Singing</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
            </div>
        </li>

        <li tabindex="-1" class="pix-active">
            <div class="owl-item">
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                        <img src={ require("./components/imgs/s4.png")} alt />
                            <h6>Singing</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
            </div>
        </li>
        <li tabindex="-1" class="pix-active">
            <div class="owl-item">
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                        <img src={ require("./components/imgs/s4.png")} alt />
                            <h6>Singing</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
            </div>
        </li>
        <li tabindex="-1" class="pix-active">
            <div class="owl-item">
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                        <img src={ require("./components/imgs/s4.png")} alt />
                            <h6>Singing</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
            </div>
        </li>
        <li tabindex="-1" class="pix-active">
            <div class="owl-item">
                <div class="item">
                    <div class="category-item">
                        <a href="#">
                        <img src={ require("./components/imgs/s4.png")} alt />
                            <h6>Singing</h6>
                            <p>74,853 views</p>
                        </a>
                    </div>
                </div>
            </div>
        </li>

    </ul>
    </div>

    <a class="pix-position-center-left-out pix-position-small pix-hidden-hover slidenav-prev pix-invisible" href="#" pix-slider-item="previous"></a>
                    <a class="pix-position-center-right-out pix-position-small pix-hidden-hover slidenav-next" href="#" pix-slider-item="next"></a>
                </div> */}

  
                {/* <div class="row pix-mt-20">
					<div class="col-lg-5 pix-ads-col-6">
						<span class="ad-baner">Advertisment</span>
						<div class="ad-box"><img src={ require("./components/imgs/tube-baner1.jpg")} alt />	</div>
					</div>
					<div class="col-lg-5 pix-ads-col-6">
						<span class="ad-baner">Advertisment</span>
						<div class="ad-box"><img src={ require("./components/imgs/tube-baner2.jpg")} alt />	</div>
					</div>
				</div> */}
 





      </div>
  </div> 
</div>

);
}
export default Channel;