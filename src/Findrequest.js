import React from 'react';
import Header from './Header';

class Findrequest extends React.Component{
render()
{
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
              <li><a href="#"> View as guest </a></li>
              <li><a href="#"> Block this person </a></li>
              <li><a href="#"> Report abuse</a></li>
            </ul>
          </div>
        </div>
        <div>
          <nav className="responsive-tab">
            <ul>
              <li><a href="#">Posts</a></li>
              <li><a href="#">Star</a></li>              
              <li><a href="#">Tag</a></li>
              <li className="pix-active"><a href="#">Settings</a></li>
            </ul>
          </nav>
        </div>
      </div>
  
    </div>
  </div>

      <div className="pix-profile-container pix-p-t-20">

        <div class="dash-tab-links">
        	<div class="container">
       		<div class="setting-page mb-20">
						<div class="row">
							<div class="col-lg-3 col-md-5">								
								<div class="user-data full-width">
									
									<div class="categories-items">
										<a class="tab-item-1" href="#">Personal Info</a>
										<a class="tab-item-1  active" href="#">All Friend Requests</a>
										<a class="tab-item-1" href="#">All Notifications</a>																			
										<a class="tab-item-1" href="#">Notification Setting</a>																			
										<a class="tab-item-1" href="#">Change Password</a>																			
										<a class="tab-item-1" href="#">Deactivate Account</a>																																														
									</div>
								</div>						
							</div>
							<div class="col-lg-8 col-md-7">	

              				<div class="setting-form">									
								<div class="user-data full-width mb-0">
									<div class="about-left-heading">
										<h3>All Friend Requests</h3>										
									</div>
									<div class="all-rqusts1">
										<div class="row">
											<div class="col-lg-12 col-md-12">													
												<div class="user-request-list">
													<div class="request-users">
														<div class="user-request-dt">
															<a href="#"><img  src={ require("./components/imgs/user-dp-1.jpg")}  alt="" /></a>
															<a href="#" class="user-title">Vishnu Unnikrishnan</a>
														</div>
														<button class="accept-btn">Accept</button>
													</div>											
												</div>
												<div class="user-request-list">
													<div class="request-users">
														<div class="user-request-dt">
															<a href="#"><img  src={ require("./components/imgs/user-dp-1.jpg")}  alt="" /></a>
															<a href="#" class="user-title">Suresh Kumar</a>
														</div>
														<button class="accept-btn">Accept</button>
													</div>											
												</div>
												<div class="user-request-list">
													<div class="request-users">
														<div class="user-request-dt">
															<a href="#"><img  src={ require("./components/imgs/user-dp-1.jpg")}  alt="" /></a>
															<a href="#" class="user-title">Jennifer</a>
														</div>
														<button class="accept-btn">Accept</button>
													</div>											
												</div>
												<div class="user-request-list">
													<div class="request-users">
														<div class="user-request-dt">
															<a href="#"><img  src={ require("./components/imgs/user-dp-1.jpg")}  alt="" /></a>
															<a href="#" class="user-title">Poonam Verma</a>
														</div>
														<button class="accept-btn">Accept</button>
													</div>											
												</div>
												<div class="user-request-list">
													<div class="request-users">
														<div class="user-request-dt">
															<a href="#"><img  src={ require("./components/imgs/user-dp-1.jpg")}  alt="" /></a>
															<a href="#" class="user-title">Vaidehi Parshurami</a>
														</div>
														<button class="accept-btn">Accept</button>
													</div>											
												</div>
												<div class="user-request-list">
													<div class="request-users">
														<div class="user-request-dt">
															<a href="#"><img  src={ require("./components/imgs/user-dp-1.jpg")}  alt="" /></a>
															<a href="#" class="user-title">Lucy William</a>
														</div>
														<button class="accept-btn">Accept</button>
													</div>											
												</div>
												<div class="user-request-list">
													<div class="request-users">
														<div class="user-request-dt">
															<a href="#"><img  src={ require("./components/imgs/user-dp-1.jpg")}  alt="" /></a>
															<a href="#" class="user-title">Johnson Dua</a>
														</div>
														<button class="accept-btn">Accept</button>
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
        </div>
    </div>
  </div>
</div>

    
);
}
}
export default Findrequest;