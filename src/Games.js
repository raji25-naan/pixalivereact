import React from 'react';
import Header from './Header';
import ExploreSidebar from './ExploreSidebar';

class Pixmash extends React.Component{
render()
{
return (
<div>
<div className="pix-bg">

<Header/>

<ExploreSidebar />

<div className="pix_main_explore col-md-9 col-lg-9"> 
  <div className="section-header-left">
    <h4>Suggested for You</h4>  
    <p>Groups you might be interested in</p>
  </div>
  <div className="pix-position-relative pix-slider" pix-slider="finite: true">
   <div className="pix-slider-container pb-3">
      <ul className="pix-slider-items pix-child-width-1-3@m pix-child-width-1-3@s pix-child-width-1-2 pix-grid pix-grid-small">
         <li tabIndex="-1" className="pix-active">
            <a href="#">
               <div className="mov-card">
                  <div className="game_poster">
                    <img src={ require("./components/imgs/pubg.jpg")} alt />
                  </div>
                  <div className="mov-card-details ">
                  <h2> Pubg </h2>
                     <div className="mov-card-rating">
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <span>5/5</span>
                     </div>
                     <div className="mov-card-tags">
                        <span className="fantasy">Play Now</span>                      
                     </div>
                     {/* <div className="mov-card-info">
                        <p>When the of issues a decree that one man per</p>
                     </div> */}
                  </div>
               </div>
            </a>
         </li>
         <li tabIndex="-1" className="pix-active">
            <a href="#">
               <div className="mov-card">
               <div className="game_poster">
                  <img src={ require("./components/imgs/pubg.jpg")} alt />
                  </div>
                  <div className="mov-card-details ">
                  <h2> Pubg </h2>
                     <div className="mov-card-rating">
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <span>5/5</span>
                     </div>
                     <div className="mov-card-tags">
                     <span className="fantasy">Play Now</span>      
                     </div>
                     
                  </div>
               </div>
            </a>
         </li>
         <li tabIndex="-1" className="pix-active">
            <a href="#">
               <div className="mov-card">
               <div className="game_poster">
                  <img src={ require("./components/imgs/pubg.jpg")} alt />
                  </div>
                  <div className="mov-card-details">
                      <h2> Pubg </h2>
                     <div className="mov-card-rating">
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <span>5/5</span>
                     </div>
                     <div className="mov-card-tags">
                        <span className="fantasy">Play Now</span>      
                     </div>
                     
                  </div>
               </div>
            </a>
         </li>
         <li tabIndex="-1" className="pix-active">
            <a href="#">
               <div className="mov-card">
               <div className="game_poster">
                  <img src={ require("./components/imgs/pubg.jpg")} alt />
                  </div>
                  <div className="mov-card-details ">
                  <h2> Pubg </h2>
                     <div className="mov-card-rating">
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <span>5/5</span>
                     </div>
                     <div className="mov-card-tags">
                       <span className="fantasy">Play Now</span>      
                     </div>
                    
                  
                  </div>
               </div>
            </a>
         </li>
         <li tabIndex="-1" className="pix-active">
            <a href="movies-single.html">
               <div className="mov-card">
                  <div className="poster">
                  <img src={ require("./components/imgs/pubg.jpg")} alt />
                  </div>
                  <div className="mov-card-details">
                  <h2>Pubg </h2>
                     <div className="mov-card-rating">
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <span>5/5</span>
                     </div>
                     <div className="mov-card-tags">
                     <span className="fantasy">Play Now</span>      
                     </div>                    
                  </div>
               </div>
            </a>
         </li>
         <li tabIndex="-1" className="">
            <a href="movies-single.html">
               <div className="mov-card">
                  <div className="poster">
                  <img src={ require("./components/imgs/pubg.jpg")} alt />
                  </div>
                  <div className="mov-card-details ">
                     <h2>Pubg </h2>
                     <div className="mov-card-rating">
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <i className="icon-material-outline-star"></i>
                        <span>5/5</span>
                     </div>
                     <div className="mov-card-tags">
                        <span className="fantasy">Play Now</span>      
                     </div>
                    
                  
                  </div>
               </div>
            </a>
         </li>
      </ul>
      <a className="pix-position-center-left-out pix-position-small pix-hidden-hover slidenav-prev pix-invisible" href="#" pix-slider-item="previous"></a>
      <a className="pix-position-center-right-out pix-position-small pix-hidden-hover slidenav-next" href="#" pix-slider-item="next"></a>
   </div>
</div>

</div>
  
  </div> 
</div>

);
}
}
export default Pixmash;