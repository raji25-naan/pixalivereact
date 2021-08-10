import React from 'react';
import Header from './Header';
import CreatePost from './CreatePost';
import Stories from './Stories';
import RightSidebar from './RightSidebar';

function Myprofile() {
return (
<div>

<div className="pix-bg">

<Header/>


  <div className="pix-user-profile profile">
    <div className="pix-m-t-20">
      <div className="profile-cover">
      <img src={ require("./components/imgs/cover-bg.jpg")} alt />
        <a href="#"> <i className="uil-camera" /> Edit </a>
      </div>
      <div className="profile-details">
        <div className="profile-image">
      <img src={ require("./components/imgs/store1.jpg")} alt />
          <a href="#"> </a>
        </div>
        <div className="profile-details-info">
          <h1> Vaidehi Parshurami </h1>
        </div>
      </div>

      <div className="nav-profile pix-sticky pix-nav-profile" pix-sticky="offset:61;media : @s" style={{}}>
        <div className="py-md-2 pix-flex-last">
          <a href="#" className="button primary mr-2 pix-str-btn"> <i className="uil-plus" /> Add your story</a>
          <a href="#" className="button secondary button-icon mr-2"> <i className="uil-list-ul"> </i> </a>
          <a href="#" className="button secondary button-icon" aria-expanded="false"> <i className="uil-ellipsis-h"> </i> </a>
          <div pix-dropdown="pos: bottom-left ; mode:hover " className="pix-dropdown">
            <ul className="pix-nav pix-dropdown-nav">
              <li><a href="#"> View as guast </a></li>
              <li><a href="#"> Bloc this person </a></li>
              <li><a href="#"> Report abuse</a></li>
            </ul>
          </div>
        </div>
        <div>
          <nav className="responsive-tab">
            <ul>
              <li className="pix-active"><a className="active" href="#">Posts</a></li>
              <li><a href="#">Star</a></li>              
              <li><a href="#">Tag</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </nav>
        </div>
      </div>
  
    </div>
  </div>



  <div className="pix-profile-container pix-p-t-20">
  <div className="row">
    <div className="col-md-7">        
        <div className="post pix-post-radius">
          <div className="post-heading">
            <div className="post-avature pix-post-avature-profile">
              <img src={ require("./components/imgs/mahiraina.jpg")} alt />
            </div>
            <div className="post-title pix-post-name-title text-left">
              <h4 >Vaidehi Parshurami <span>visited</span> Dubai</h4>
              <img src={ require("./components/imgs/post-user.png")} alt />  <time>1 hr</time>
            </div>   
            <div className="post-btn-action">
              <span className="icon-more uil-ellipsis-h" aria-expanded="false" />
              <div className="mt-0 p-2 pix-dropdown" pix-dropdown="pos: bottom-right;mode:hover ">
                <ul className="pix-nav pix-dropdown-nav text-left">
                  <li><a href="#"> <i className="uil-share-alt mr-1" /> Share</a> </li>
                  <li><a href="#"> <i className="uil-edit-alt mr-1" /> Edit Post </a></li>
                  <li><a href="#"> <i className="uil-comment-slash mr-1" /> Disable comments</a></li>
                  <li><a href="#"> <i className="uil-favorite mr-1" /> Add favorites </a></li>
                  <li><a href="#" className="text-danger"> <i className="uil-trash-alt mr-1" /> Delete </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pix-feed-content"> <p>Had a great weekend with frndzz!!!</p></div>
          <div className="post-description">
            <div className="fullsizeimg">
              <img  src={ require("./components/imgs/feed.jpg")} alt />
            </div>        
          </div>
          <div className="post-state pix-post-options">
            <div className="post-state-btns">  <img  src={ require("./components/imgs/star.png")} alt /> <span> Star </span>
            </div>
            <div className="post-state-btns"> <img  src={ require("./components/imgs/comment.png")} alt />  <span> Comments</span>
            </div>
            <div className="post-state-btns">  <img  src={ require("./components/imgs/share.png")} alt /> <span> Share </span>
            </div>
            <div className="post-state-btns">  <img  src={ require("./components/imgs/download.png")} alt />  <span> Download</span>
            </div>
          </div>      
          <div className="post-comments">
            <a href="#" className="view-more-comment text-left"> Veiw  Comments</a>
            <div className="post-add-comment">
              <div className="post-add-comment-avature">
                <img src={ require("./components/imgs/mahiraina.jpg")} style={{width:"37px"}} alt />
              </div>
              <div className="post-add-comment-text-area">
                <input type="text" placeholder="Write your comment..." />
                <div className="icons">
                  <span className="uil-link-alt" />
                  <span className="uil-grin" />
                  <span className="uil-image" />
                </div>
              </div>
            </div>
          </div>
        </div>	

        <div className="post pix-post-radius">
          <div className="post-heading">
            <div className="post-avature pix-post-avature-profile">
              <img src={ require("./components/imgs/f2.png")} alt />
            </div>
            <div className="post-title pix-post-name-title text-left">
              <h4 >Jennifer</h4>
              <img src={ require("./components/imgs/post-user.png")} alt />  <time>1 hr</time>
            </div>         
            <div className="post-btn-action">
              <span className="icon-more uil-ellipsis-h" aria-expanded="false" />
              <div className="mt-0 p-2 pix-dropdown" pix-dropdown="pos: bottom-right;mode:hover ">
                <ul className="pix-nav pix-dropdown-nav text-left">
                  <li><a href="#"> <i className="uil-share-alt mr-1" /> Share</a> </li>
                  <li><a href="#"> <i className="uil-edit-alt mr-1" /> Edit Post </a></li>
                  <li><a href="#"> <i className="uil-comment-slash mr-1" /> Disable comments</a></li>
                  <li><a href="#"> <i className="uil-favorite mr-1" /> Add favorites </a></li>
                  <li><a href="#" className="text-danger"> <i className="uil-trash-alt mr-1" /> Delete </a></li>
                </ul>
              </div>
            </div>            
          </div>

          <div className="pix-feed-content"> <p>Had a great weekend with frndzz!!!</p></div>
         
          <div className="post-description">
            <div className="fullsizeimg">
              <img  src={ require("./components/imgs/post.jpg")} alt />
            </div>        
          </div>
          <div className="post-state pix-post-options">
            <div className="post-state-btns">  <img  src={ require("./components/imgs/star.png")} alt /> <span> Star </span>
            </div>
            <div className="post-state-btns"> <img  src={ require("./components/imgs/comment.png")} alt />  <span> Comments</span>
            </div>
            <div className="post-state-btns">  <img  src={ require("./components/imgs/share.png")} alt /> <span> Share </span>
            </div>
            <div className="post-state-btns">  <img  src={ require("./components/imgs/download.png")} alt />  <span> Download</span>
            </div>
          </div>      
          <div className="post-comments">
            <a href="#" className="view-more-comment text-left"> Veiw  Comments</a>
            <div className="post-add-comment">
              <div className="post-add-comment-avature">
                <img src={ require("./components/imgs/f2.png")} style={{width:"37px"}} alt />
              </div>
              <div className="post-add-comment-text-area">
                <input type="text" placeholder="Write your comment..." />
                <div className="icons">
                  <span className="uil-link-alt" />
                  <span className="uil-grin" />
                  <span className="uil-image" />
                </div>
              </div>
            </div>     	        
        </div>
        </div>

        {/* sidebar */}
        
    </div>

   <div class="col-md-4">
      <div class="pix-profile-detail-bg">
          <h3> About </h3>
          <div class="list-group-items">
              <i class="uil-heart"></i>
              <h5> UI Developer at <span>Pixalive</span> </h5>
          </div>
          <div class="list-group-items">
              <i class="uil-home-alt"></i>
              <h5> Live in<span>Coimbatore, Tamil Nadu</span> </h5>
          </div>
          <div class="list-group-items">
              <i class="uil-location-point"></i>
              <h5> From<span>Salem, India </span> </h5>
          </div>
         
          <div class="list-group-items">
              <i class="uil-rss"></i>
              <h5>Followed by<span>3,240 </span><span>people</span> </h5>
          </div>
          <a href="#" class="button soft-primary block my-3"> edit </a>
      </div>

      <div class="pix-profile-detail-bg">
   <div class="section-header">
      <div class="section-header-left">
         <h3 class="mb-0"> Friends </h3>
         <p class="pix-text-small"> 3,4510 friends</p>
      </div>
      <div class="section-header-right">
         <a href="#" class="see-all text-primary"> See all</a>
      </div>
   </div>
   <div class="pix-child-width-1-3 pix-grid-small pix-grid-match pix-grid" pix-grid="">
      <div class="pix-first-column">
         <a href="#" class="profile-friend-card">
            <div class="profile-friend-card-thumbnail">
            <img src={ require("./components/imgs/f2.png")}  alt />
            </div>
            <div class="profile-friend-card-content">
               <h4> Jonathan Ali </h4>
            </div>
         </a>
      </div>
      <div>
         <a href="#" class="profile-friend-card">
            <div class="profile-friend-card-thumbnail">
            <img src={ require("./components/imgs/f2.png")}  alt />
            </div>
            <div class="profile-friend-card-content">
               <h4>Alex Dolgove</h4>
            </div>
         </a>
      </div>
      <div>
         <a href="#" class="profile-friend-card">
            <div class="profile-friend-card-thumbnail">
            <img src={ require("./components/imgs/f2.png")}  alt />
            </div>
            <div class="profile-friend-card-content">
               <h4> Stella Johnson </h4>
            </div>
         </a>
      </div>
      <div class="pix-grid-margin pix-first-column">
         <a href="#" class="profile-friend-card">
            <div class="profile-friend-card-thumbnail">
            <img src={ require("./components/imgs/f2.png")}  alt />
            </div>
            <div class="profile-friend-card-content">
               <h4> Mohamed Khalif </h4>
            </div>
         </a>
      </div>
      <div class="pix-grid-margin">
         <a href="#" class="profile-friend-card">
            <div class="profile-friend-card-thumbnail">
            <img src={ require("./components/imgs/f2.png")}  alt />
            </div>
            <div class="profile-friend-card-content">
               <h4> Adrian Mohani </h4>
            </div>
         </a>
      </div>
      <div class="pix-grid-margin">
         <a href="#" class="profile-friend-card">
            <div class="profile-friend-card-thumbnail">
            <img src={ require("./components/imgs/f2.png")}  alt />
            </div>
            <div class="profile-friend-card-content">
               <h4>Alex Dolgove</h4>
            </div>
         </a>
      </div>
   </div>
   <a href="#" class="button secondary block my-3"> See All </a>
  </div>

  <div class="pix-profile-detail-bg">
  <div class="section-header">
      <div class="section-header-left">
         <h3> Photos </h3>
      </div>
      <div class="section-header-right">
         <a href="#" class="see-all text-primary"> See all</a>
      </div>
   </div>


   <div class="pix-child-width-1-3 pix-grid-collapse pix-overflow-hidden pix-grid" >
	<div class="pix-first-column"> <a href="#">
			<div class="photo-card small" data-src="assets/images/post/img-1.jpg" pix-img="" style={{backgroundImage:'url("https://www.kyrosports.com/wp-content/uploads/2020/05/How-MS-Dhoni-became-Thala-of-CSK-franchise.jpg")'}}>
			</div>
		</a>
	</div>
	<div> <a href="#">
			<div class="photo-card small" data-src="assets/images/post/img-2.jpg" pix-img="" style={{backgroundImage:'url("https://www.kyrosports.com/wp-content/uploads/2020/05/How-MS-Dhoni-became-Thala-of-CSK-franchise.jpg")'}}>
			</div>
		</a>
	</div>
	<div> <a href="#">
			<div class="photo-card small" data-src="assets/images/post/img-3.jpg" pix-img="" style={{backgroundImage:'url("https://www.kyrosports.com/wp-content/uploads/2020/05/How-MS-Dhoni-became-Thala-of-CSK-franchise.jpg")'}}>
			</div>
		</a>
	</div>
	<div class="pix-grid-margin pix-first-column"> <a href="#">
			<div class="photo-card small" data-src="assets/images/post/img-4.jpg" pix-img="" style={{backgroundImage:'url("https://www.kyrosports.com/wp-content/uploads/2020/05/How-MS-Dhoni-became-Thala-of-CSK-franchise.jpg")'}}>
			</div>
		</a>
	</div>
	<div class="pix-grid-margin"> <a href="#">
			<div class="photo-card small" data-src="assets/images/category/img6.jpg" pix-img="" style={{backgroundImage:'url("https://www.kyrosports.com/wp-content/uploads/2020/05/How-MS-Dhoni-became-Thala-of-CSK-franchise.jpg")'}}>
			</div>
		</a>
	</div>
	<div class="pix-grid-margin"> <a href="#">
			<div class="photo-card small" data-src="assets/images/category/img3.jpg" pix-img="" style={{backgroundImage:'url("https://www.kyrosports.com/wp-content/uploads/2020/05/How-MS-Dhoni-became-Thala-of-CSK-franchise.jpg")'}}>
			</div>
		</a>
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
export default Myprofile;