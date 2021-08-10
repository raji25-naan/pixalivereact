import React from 'react';
import Header from './Header';
import CreatePost from './CreatePost';
import Stories from './Stories';
import RightSidebar from './RightSidebar';

function Searchresults() {
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
  <div className="main_content_inner">

    <div className="pix-grid-large pix-grid" pix-grid>

      <div className="pix-width-1-4@m fead-area pix-first-column">

        <h3 className="text-left">Photos</h3>

<div className="pix-width-1-2@m pix-first-column" style={{width: '100%'}}>


  <div className="pix-child-width-1-4@m pix-child-width-1-3@s pix-child-width-1-2 pix-grid-collapse pix-overflow-hidden pix-grid" style={{borderRadius:5, overflow: 'hidd en'}} pix-lightbox="animation: scale" pix-grid>
    
    <div className="pix-first-column">
      <a href="#" data-caption="Image caption">
        <div className="photo-card" pix-img>
        <img src={ require("./components/imgs/mahiraina01.jpg")}  />

        </div>
      </a>
    </div>

    <div className="pix-first-column">
      <a href="#" data-caption="Image caption">
        <div className="photo-card" pix-img>
        <img src={ require("./components/imgs/mahiraina01.jpg")}  />

        </div>
      </a>
    </div>
    

    <div className="pix-first-column">
      <a href="#" data-caption="Image caption">
        <div className="photo-card" pix-img>
        <img src={ require("./components/imgs/mahiraina01.jpg")}  />

        </div>
      </a>
    </div>

    
    <div className="pix-first-column">
      <a href="#" data-caption="Image caption">
        <div className="photo-card" pix-img>
        <img src={ require("./components/imgs/mahiraina01.jpg")}  />

        </div>
      </a>
    </div>

    <div className="pix-first-column">
      <a href="#" data-caption="Image caption">
        <div className="photo-card" pix-img>
        <img src={ require("./components/imgs/mahiraina01.jpg")}  />

        </div>
      </a>
    </div>


    <div className="pix-first-column">
      <a href="#" data-caption="Image caption">
        <div className="photo-card" pix-img>
        <img src={ require("./components/imgs/mahiraina01.jpg")}  />

        </div>
      </a>
    </div>


    <div className="pix-first-column">
      <a href="#" data-caption="Image caption">
        <div className="photo-card" pix-img>
        <img src={ require("./components/imgs/mahiraina01.jpg")}  />

        </div>
      </a>
    </div>


    <div className="pix-first-column">
      <a href="#" data-caption="Image caption">
        <div className="photo-card" pix-img>
        <img src={ require("./components/imgs/mahiraina01.jpg")}  />

        </div>
      </a>
    </div>


  </div>
</div>



        {/* <div className="post">


  <div className="pix-child-width-1-4 pix-grid-collapse pix-overflow-hidden pix-grid" 
 pix-grid>
  
  <div className="pix-first-column"> 
  <a href="#">
      <div>
            
      <img src={ require("./components/imgs/mahiraina.jpg")}  />
      </div>
    </a>
  </div>
  <div className="pix-first-column"> 
  <a href="#">
      <div>
            
      <img src={ require("./components/imgs/mahiraina.jpg")}  />
      </div>
    </a>
  </div>
  <div className="pix-first-column"> 
  <a href="#">
      <div>
            
      <img src={ require("./components/imgs/mahiraina.jpg")}  />
      </div>
    </a>
  </div>
  <div className="pix-first-column"> 
  <a href="#">
      <div>
            
      <img src={ require("./components/imgs/mahiraina.jpg")}  />
      </div>
    </a>
  </div>

  <div className="pix-first-column"> 
  <a href="#">
      <div>
            
      <img src={ require("./components/imgs/mahiraina.jpg")}  />
      </div>
    </a>
  </div>


</div>




        </div> */}


		
      </div>
	  
	  
      {/* sidebar */}

      <div className="pix-width-expand">
        <h3 className="mb-2 text-left"> Birthdays</h3>
        <a href="#" className="pix-link-reset">
          <div className="pix-flex pix-flex-top py-2 pb-0 pl-2 mb-2 bg-secondary-hover rounded">
            <img src={ require("./components/imgs/gift-icon.png")} width="35px" className="mr-3" alt />
            <p className="text-left"> <strong> karthikseven </strong> and <strong> two others </strong>
              have a birthdays to day .</p>
          </div>
        </a>
        <div className="p-5 mb-3 rounded pix-background-cover pix-light" 
        style={{backgroundBlendMode: 'color-burn', backgroundColor: 'rgba(0, 126, 255, 0.06)',
         backgroundImage: 'url("https://aniportalimages.s3.amazonaws.com/media/details/jadeja_aug12_uLTW6ny.jpg")'}} data-src="assets/images/events/img-2.jpg" pix-img>
          <div className="pix-width-4-5">
            <h3 className="mb-2 text-left">
              <i className="uil-users-alt p-1 text-dark bg-white circle icon-small" />
              Groups </h3>
            <p class="text-left"> New ways to find and join communications .</p>
          <div className="text-left"> <a href="#" className="button white small"> Create new group</a></div>  
          </div>
        </div>
        <h3 className="mb-1 text-left"> Contacts </h3>
        <div pix-sticky="offset:70 ; media : @m" className="pix-sticky" style={{}}>
         
          <div style={{height: 'calc(100vh - 150px)'}}>

            <a href="#" aria-expanded="false" >
              <div className="contact-list">
                <div className="contact-list-media">
                    <img src={ require("./components/imgs/mahiraina.jpg")} alt />
                  <span className="online-dot" /> </div>
                <h5> Suresh Raina</h5>
              </div>
            </a>

            <a href="#" aria-expanded="false" >
              <div className="contact-list">
                <div className="contact-list-media">
                    <img src={ require("./components/imgs/mahi.png")} alt />
                  <span className="online-dot" /> </div>
                <h5> Mahi7781</h5>
              </div>
            </a>

            <a href="#" aria-expanded="false" >
              <div className="contact-list">
                <div className="contact-list-media">
                    <img src={ require("./components/imgs/jaddu.jpg")} alt />
                  <span className="online-dot" /> </div>
                <h5> Ravintra Jadeja</h5>
              </div>
            </a>


          </div>
        </div><div className="pix-sticky-placeholder" style={{height: 242, margin: 0}} hidden />
      </div>


    </div>


  </div>
</div>


</div>
);
}
export default Searchresults;