import React from 'react';
import Header from './Header';
import ExploreSidebar from './ExploreSidebar';
import voice1 from "./components/voice/drumsolo.mp3";

class DiscoverPeople extends React.Component{
render()
{
return (

<div>

    <div className="pix-bg">

    <Header/>

    <ExploreSidebar />

        <div className="pix_main_explore col-md-9 col-lg-9">    
            <div className="pix-explore-head">
                <h4>Discover</h4>
                <p>Groups you might be interested in</p>
            </div>
            <div className="nav-profile pix-sticky pix-nav-Explor" pix-sticky="offset:61;media : @s" style={{}}>     
                <nav className="responsive-tab pix-expole-tab">
                    <ul>
                        <li><a href="/Discover">Photos</a></li>
                        <li><a href="/DiscoverVideo">Video</a></li>              
                        <li><a href="/DiscoverVoice">Voice</a></li>
                        <li><a href="/DiscoverText">Text</a></li>
                        <li className="pix-active"><a href="/DiscoverPeople">People</a></li>
                    </ul>
                </nav>
            </div>                
            <div class="row masonry merged-8 pix-voice-gap" >		
                
            <div class="all-search-events">
					<div class="container">
						<div class="row">
                        <div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-1">
											<div class="usr-pic">
                                               <img src={ require("./components/imgs/keer.png")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Vaidehi Parshurami</h4>
											<span><i class="uil-location-point"></i>India</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-2">
											<div class="usr-pic">
                                            <img src={ require("./components/imgs/store2.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Vishnu Unnikrishnan</h4>
											<span><i class="uil-location-point"></i>Canada</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-3">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/ch1.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Joy William</h4>
											<span><i class="uil-location-point"></i>Australia</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-4">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/ch2.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Suresh Kumar</h4>
											<span><i class="uil-location-point"></i>India</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-5">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/store4.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Jennifer</h4>
											<span><i class="uil-location-point"></i>India</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-6">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/store5.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Davinder Singh</h4>
											<span><i class="uil-location-point"></i>Los Angels</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div> 
                            <div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-1">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/photo-hashtag.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>John Doe</h4>
											<span><i class="uil-location-point"></i>India</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-2">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/pitrest28.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Rock Smith</h4>
											<span><i class="uil-location-point"></i>Canada</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-3">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/store3.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Joy William</h4>
											<span><i class="uil-location-point"></i>Australia</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-4">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/store4.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Johnson Smith</h4>
											<span><i class="uil-location-point"></i>Newyork</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-5">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/store1.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Joginder Singh</h4>
											<span><i class="uil-location-point"></i>India</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-6">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/store2.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Davinder Singh</h4>
											<span><i class="uil-location-point"></i>Los Angels</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div> 
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-1">
											<div class="usr-pic">
                                           		<img src={ require("./components/imgs/store1.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>John Doe</h4>
											<span><i class="uil-location-point"></i>India</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-2">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/store2.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Rock Smith</h4>
											<span><i class="uil-location-point"></i>Canada</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-3">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/store3.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Joy William</h4>
											<span><i class="uil-location-point"></i>Australia</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-4">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/store4.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Johnson Smith</h4>
											<span><i class="uil-location-point"></i>Newyork</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-5">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/store1.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Joginder Singh</h4>
											<span><i class="uil-location-point"></i>India</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
									</div>							
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 col-people-lg-3">								
								<div class="user-data full-width">
									<div class="user-profile">
										<div class="userbg-dt dpbg-6">
											<div class="usr-pic">
                                            	<img src={ require("./components/imgs/store2.jpg")} alt />
											</div>
										</div>
										<div class="user-main-details">
											<h4>Davinder Singh</h4>
											<span><i class="uil-location-point"></i>Los Angels</span>
										</div>
										<ul class="follow-msg-dt">
											<li>
												<div class="msg-dt-sm">
													<button class="msg-btn1">Message</button>
												</div>
											</li>
											<li>
												<div class="follow-dt-sm">
													<button class="follow-btn1">Follow</button>
												</div>
											</li>
										</ul>									
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
export default DiscoverPeople;