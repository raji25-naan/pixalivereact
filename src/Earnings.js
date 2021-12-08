import React from 'react';
import Header from './Header';
import CreatePost from './CreatePost';
import Stories from './Stories';
import RightSidebar from './RightSidebar';

function Earnings() {
return (
<div>

<Header/>


<div className="main_sidebar">
  
  <div className="side-overlay" pix-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible" />

  <div className="sidebar-header">
    <h4> Navigation</h4>
    <span className="btn-close" pix-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible" />
  </div>

  <div className="sidebar">
    <div className="sidebar_innr" data-simplebar>

      
      
      <div className="sections">
        <ul>
          <li className="active">
            <a href="#"> <img src={ require("./components/imgs/home-feed-color.png")} alt />
              <span> Home </span>
            </a>
          </li>

          <li>
            <a href="#"> <img src={ require("./components/imgs/Recommended.png")} alt />
              <span> Recommended </span>
            </a>
          </li>
          <li>
            <a href="#"> <img src={ require("./components/imgs/following.png")} alt />
              <span> Following </span>
            </a>
          </li>
          <li>
            <a href="#"> <img src={ require("./components/imgs/photo.png")} alt />
              <span> Photo </span>
            </a>
          </li>
          <li>
            <a href="#"> <img src={ require("./components/imgs/video.png")}alt />
              <span> Video </span> </a>
          </li>
          <li>
            <a href="#"> <img src={ require("./components/imgs/people.png")} alt />
              <span> People </span>
            </a>
          </li>
          <li>
            <a href="#"> <img src={ require("./components/imgs/Contest-color.png")} alt />
              <span> Contest </span>
            </a>
          </li>

        </ul>
     
      </div>


  
      <div id="foot">
        <ul className="text-left">
          <li> <a href="#"> About Us </a></li>
          <li> <a href="#"> Setting </a></li>
          <li> <a href="#"> Privacy Policy </a></li>
          <li> <a href="#"> Terms - Conditions </a></li>
        </ul>

        <div className="foot-content text-left">
          <p>© 2019 <strong>Pixalive.me</strong></p>
        </div>

      </div> 
    </div>
  </div>
</div>

<div className="main_content">
<div className="main_content_inner p-sm-0 ml-sm-1">
  <div className="pix-position-relative pix-grid" pix-grid>
    <div className="pix-width-1-3@m pix-flex-last@m pl-sm-0">
      <nav className="responsive-tab style-3 setting-menu pix-sticky">
        <ul>
          <li className="pix-active">
            <a href="#"> <i className="uil-cog" /> General </a></li>
          <li><a href="#"> <i className="uil-user" /> Profile </a></li>
          <li><a href="#"> <i className="uil-globe" /> Social Account </a></li>
          <li><a href="#"> <i className="uil-unlock-alt" /> Password </a></li>  
          <li><a href="#"> <i className="uil-scenery" /> Avatar &amp; Cover</a></li>
          <li><a href="#"> <i className="uil-trash-alt" /> Delete account</a></li>
        </ul>
      </nav>
      <div className="pix-sticky-placeholder" style={{height: 520, margin: 0}} hidden />
    </div>


<div className="pix-width-2-3@m mt-sm-3 pl-sm-0 p-sm-4 pix-first-column">

<div className="course-intro-banner">

  <img src={ require("./components/imgs/cover.jpeg")} className="course-intro-banner-img" alt />

  <div className="course-intro-banner-info pix-light main_content_inner" style={{maxWidth: 1160}}>
    <h3>@karthiksevenlive</h3>
    <h6> Earnings </h6>

  </div>
</div>



      <div className="pix-card-default rounded mt-4">
     

        <img src={ require("./components/imgs/earnings.svg")} style={{height:"280px",width:"280px"}} />

        <div className="mt-4">
        <h4 className="text-center">Earn up to $10 for each user your refer to us !</h4>

        </div>

        <nav class="footer-nav-icon">
          <span>Share to</span>
                            <ul>
                                <li><a href="#"><i class="icon-brand-facebook"></i></a></li>
                                <li><a href="#"><i class="icon-brand-dribbble"></i></a></li>
                                <li><a href="#"><i class="icon-brand-youtube"></i></a></li>
                                <li><a href="#"><i class="icon-brand-twitter"></i></a></li>
                            </ul>
                        </nav>
      </div>
    </div>
  </div>


  
</div>

</div>



</div>
);
}
export default Earnings;