import React from 'react';
class ChannelSidebar extends React.Component{
  render()
    {
    return (

      <div className="main_sidebar">
       <div className="sidebar">
            <div className="sidebar_innr siderbar-p-15" data-simplebar >  
            <div className="pix-channel-sidebar">
                <h2>Pixtube</h2>
                <div class="pix_channels_category">
                    <ul>
                        <li><a href="#"><i class="uil-bag-alt"></i><h5>Trending Videos</h5></a></li>
                        <li><a href="#"><i class="uil-location-point"></i><h5>Subscriptions</h5></a></li>
                        <li><a href="#"><i class="uil-location-point"></i><h5>History</h5></a></li>
                        {/* <hr/>
                        <li><a href="#"><i class="uil-bag-alt"></i><h5>Your videos</h5></a></li>
                        <li><a href="#"><i class="uil-location-point"></i><h5>Liked videos</h5></a></li> */}
                    </ul>
                </div>
            </div>
            <hr/>

            <div class="px-sm-2 pix-grid pix_chat_room" >
                  <div class="pix-width-expand pix-flex pix-flex-middle pix-first-column">
                      <h4 class="mb-0"> Create New Channel</h4>
                  </div>
                  <div class="pix-width-auto"> <a href="#" class="button primary small circle pix-room-btn"> <i class="uil-plus"> </i> Create</a>
                  </div>
              </div>

            <hr/>

              <div class="px-sm-4 pix-grid pix_trending_people" >
                  <div class="pix-width-expand pix-flex pix-flex-middle pix-first-column">
                      <h4 class="mb-2">Subscriptions </h4>
                  </div>   

                  <div class="suggestions-list">
											<div class="suggestion-usd">
                      <img  src={ require("./components/imgs/c1.jpg")}  alt />  
												<div class="sgt-text">
													<a href="#"><h6>MV Technologly</h6></a>
													<span>3.63M subscribers</span>
												</div>
												<span><a href="#" class="button primary small circle pix-channel-subscribers">Subscribe</a></span>
											</div>
											<div class="suggestion-usd">
                      <img  src={ require("./components/imgs/c3.jpg")}  alt />  
												<div class="sgt-text">
                        <a href="#"><h6>Madras Central</h6></a>
													<span>3.18M subscribers</span>
												</div>
												<span><a href="#" class="button primary small circle pix-channel-subscribers">Subscribe</a></span>
											</div>
											<div class="suggestion-usd">
                      <img  src={ require("./components/imgs/c4.jpg")}  alt />  
												<div class="sgt-text">
                        <a href="#"><h6>Nakkalites</h6></a>
													<span>2.78M subscribers</span>
												</div>
												<span><a href="#" class="button primary small circle pix-channel-subscribers">Subscribe</a></span>
											</div>
											<div class="suggestion-usd">
                      <img  src={ require("./components/imgs/c2.jpg")}  alt />  
												<div class="sgt-text">
                        <a href="#"><h6>Parithabangal</h6></a>
													<span>2.33M subscribers</span>
												</div>
                        <span><a href="#" class="button primary small circle pix-channel-subscribers">Subscribe</a></span>
											</div>
									
										</div>
              </div>

              <hr/>

              
            <div id="foot">
              <ul className="text-left">
                <li> <a href="#"> About Us </a></li>
                <li> <a href="#"> Setting </a></li>
                <li> <a href="#"> Privacy Policy </a></li>
                <li> <a href="#"> Terms - Conditions </a></li>
              </ul>
              <div className="foot-content text-left">
                <p>© 2020 <strong>Pixalive.me</strong></p>
              </div>
            </div>   
         </div>
        </div>
      </div>

    );
  }
}
export default ChannelSidebar;