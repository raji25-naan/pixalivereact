import React from 'react';
class ExploreSidebar extends React.Component{
  render()
    {
    return (

      <div className="main_sidebar">
       <div className="sidebar">
            <div className="sidebar_innr siderbar-p-15" data-simplebar >  
            <div className="pix-channel-sidebar">
                <h2>Explore</h2>
                <div className="pix_channels_category">
                    <ul>
                        <li><a href="/Discover"><i class="fa fa-cube"></i><h5>Discover</h5></a></li>
                        <li><a href="/Hashtag"><i class="fa fa-hashtag"></i><h5>Hashtag</h5></a></li>
                        {/* <li><a href="/Games"><i class="fa fa-gamepad"></i><h5>Games</h5></a></li> */}
                        <hr/>
                    </ul>
                </div>
            </div>

            <div class="px-sm-4 pix-grid pix_trending_people" >
                <div class="pix-width-expand pix-sidebar-header pix-flex-middle pix-first-column">
                    <h4 class="mb-0">Trending Peoples </h4>
                    <a href="#" class="pix-see-all"> See All<i class="uil uil-angle-right"></i></a>
                </div>
                <ul class="faved-page">
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                      <img  src={ require("./components/imgs/store1.jpg")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="John">
                      <img  src={ require("./components/imgs/store2.jpg")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                      <img  src={ require("./components/imgs/store3.jpg")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="John">
                      <img  src={ require("./components/imgs/store4.jpg")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                      <img  src={ require("./components/imgs/store5.jpg")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="John">
                      <img  src={ require("./components/imgs/store2.jpg")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="John">
                      <img  src={ require("./components/imgs/store4.jpg")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="Sophie">
                      <img  src={ require("./components/imgs/store5.jpg")}  alt />  
                      </a>
                    </li>
                    <li>
                      <a href="#" title="" data-toggle="tooltip" data-original-title="John">
                      <img  src={ require("./components/imgs/store2.jpg")}  alt />  
                      </a>
                    </li>
                    <li class="all-faved">
                      <a href="#">+20k</a>
                    </li>
                  </ul>
            </div>

            <hr/>

            <div class="advertisment-box">
              <h4 class="">advertisment</h4>
              <figure>
                <a href="#" title="Advertisment">
                  <img src={ require("./components/imgs/ad-widget.gif")} alt />                      
                </a>
              </figure>
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
export default ExploreSidebar;