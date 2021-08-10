import React from 'react';
import Header from './Header';
import ExploreSidebar from './ExploreSidebar';

class DiscoverVideo extends React.Component{
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
					<li  className="pix-active"><a href="/DiscoverVideo">Video</a></li>              
					<li><a href="/DiscoverVoice">Voice</a></li>
					<li><a href="/DiscoverText">Text</a></li>
					<li><a href="/DiscoverPeople">People</a></li>
				</ul>
			</nav>
		</div>
			
		<section className="pb-4">      
			<div class="row" id="leukeVideos">	
				<div class="col-lg-3 col-md-6 col-12 video p-2" >
					<div className="pix-video-card">
						<div class="container_top_header" onclick="openModal('video_0')">
							<div className="video-item-user  mb-3">
								<div className="d-flex align-items-center">
									<div className="dropdown-list-image mr-3">
									<img  className="rounded-circle" src={ require("./components/imgs/s5.png")} />
									</div>
									<div className="font-weight-bold mr-2">
									<div className="text-truncate">Saloni <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
									<div className="small text-gray-500">5 mins ago</div>
									</div>
								</div>
							</div>
						</div>
						<div class="video-container">
							<video className="thevideo" id="video_0" data-toggle="modal" onmouseover="hoverVideo('0')" onmouseout="hideVideo('0')" class="img-responsive" loop                                 >
								<source src={ require("./components/imgs/video/7.mp4")} type="video/mp4" />
							</video>
						</div>
						<div class="user_name" onclick="openModal('video_0')">
							<div>#beautiful	</div>
							<div class="video_view"><i class="fa fa-eye"></i> 4.5k</div>
						</div>
						<div class="views row" >
							<div class="col-md-2 col-2 text-center">
								<i class="fa fa-whatsapp"></i> <span>381</span>
							</div>
							<div class="col-md-3 col-3 text-center">
								<i class="fa fa-star"></i> <span>234</span>
							</div>
							<div class="col-md-3 col-3 text-center">
								<i class="fa fa-comment"></i> <span>79</span>
							</div>                             
						</div>
					</div>								
				</div>

					<div class="col-lg-3 col-md-6 col-12 video p-2" >
						<div className="pix-video-card">
							<div class="container_top_header" onclick="openModal('video_0')">
								<div className="video-item-user  mb-3">
									<div className="d-flex align-items-center">
										<div className="dropdown-list-image mr-3">
											<img  className="rounded-circle" src={ require("./components/imgs/s1.png")} />
										</div>
										<div className="font-weight-bold mr-2">
											<div className="text-truncate">Krisha  <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
											<div className="small text-gray-500">22 mins ago</div>
										</div>
									</div>
								</div>
							</div>
							<div class="video-container">
								<video className="thevideo" id="video_0" data-toggle="modal"onmouseover="hoverVideo('0')" onmouseout="hideVideo('0')" class="img-responsive" loop                                 >
									<source src={ require("./components/imgs/video/7.mp4")} type="video/mp4" />
								</video>
							</div>
							<div class="user_name">
								<div>#smarttv😍	</div>
								<div class="video_view"><i class="fa fa-eye"></i>4.1k</div>
							</div>
							<div class="views row" >
								<div class="col-md-2 col-2 text-center">
									<i class="fa fa-whatsapp"></i> <span>381</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-star"></i> <span>234</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-comment"></i> <span>79</span>
								</div>                             
							</div>
						</div>								
					</div>
				
					<div class="col-lg-3 col-md-6 col-12 video p-2" >
						<div className="pix-video-card">
							<div class="container_top_header" onclick="openModal('video_0')">
								<div className="video-item-user  mb-3">
									<div className="d-flex align-items-center">
										<div className="dropdown-list-image mr-3">
											<img  className="rounded-circle" src={ require("./components/imgs/s6.png")} />
										</div>
										<div className="font-weight-bold mr-2">
										<div className="text-truncate">Hiya Hiya <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
										<div className="small text-gray-500">45 mins ago</div>
										</div>
									</div>
								</div>
							</div>
							<div class="video-container">
								<video className="thevideo" id="video_0" data-toggle="modal" onmouseover="hoverVideo('0')" onmouseout="hideVideo('0')" class="img-responsive" loop                                >
									<source src={ require("./components/imgs/video/7.mp4")} type="video/mp4" />
								</video>
							</div>
							<div class="user_name">
								<div>@tural	</div>
								<div class="video_view"><i class="fa fa-eye"></i> 37k</div>
							</div>
							<div class="views row" >
								<div class="col-md-2 col-2 text-center">
									<i class="fa fa-whatsapp"></i> <span>381</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-star"></i> <span>234</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-comment"></i> <span>79</span>
								</div>                             
							</div>
						</div>								
					</div>
				
					<div class="col-lg-3 col-md-6 col-12 video p-2" >
						<div className="pix-video-card">
							<div class="container_top_header" onclick="openModal('video_0')">
								<div className="video-item-user  mb-3">
									<div className="d-flex align-items-center">
										<div className="dropdown-list-image mr-3">
											<img  className="rounded-circle" src={ require("./components/imgs/s2.png")} />
										</div>
										<div className="font-weight-bold mr-2">
										<div className="text-truncate">Aaradhya  <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
										<div className="small text-gray-500">1 day ago</div>
										</div>
									</div>
								</div>
							</div>
							<div class="video-container">
								<video className="thevideo" id="video_0" data-toggle="modal" onmouseover="hoverVideo('0')" onmouseout="hideVideo('0')" class="img-responsive" loop                                 >
									<source src={ require("./components/imgs/video/7.mp4")} type="video/mp4" />
								</video>
							</div>
							<div class="user_name">
								<div>@mobile	</div>
								<div class="video_view"><i class="fa fa-eye"></i> 64k</div>
							</div>
							<div class="views row" >
								<div class="col-md-2 col-2 text-center">
									<i class="fa fa-whatsapp"></i> <span>381</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-star"></i> <span>234</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-comment"></i> <span>79</span>
								</div>                             
							</div>
						</div>								
					</div>




					<div class="col-lg-3 col-md-6 col-12 video p-2" >
						<div className="pix-video-card">
							<div class="container_top_header" onclick="openModal('video_0')">
								<div className="video-item-user  mb-3">
									<div className="d-flex align-items-center">
										<div className="dropdown-list-image mr-3">
											<img  className="rounded-circle" src={ require("./components/imgs/s2.png")} />
										</div>
										<div className="font-weight-bold mr-2">
											<div className="text-truncate">Manjula <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
											<div className="small text-gray-500">2 days ago</div>
										</div>
									</div>
								</div>
							</div>
							<div class="video-container">
								<video className="thevideo" id="video_0" data-toggle="modal" onmouseover="hoverVideo('0')" onmouseout="hideVideo('0')" class="img-responsive"                                 >
									<source src={ require("./components/imgs/video/7.mp4")} type="video/mp4" />
								</video>
							</div>
							<div class="user_name">
								<div>@tural	</div>
								<div class="video_view"><i class="fa fa-eye"></i> 20k</div>
							</div>
							<div class="views row" >
								<div class="col-md-2 col-2 text-center">
									<i class="fa fa-whatsapp"></i> <span>381</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-star"></i> <span>234</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-comment"></i> <span>79</span>
								</div>                             
							</div>
						</div>								
					</div>

					<div class="col-lg-3 col-md-6 col-12 video p-2" >
						<div className="pix-video-card">
							<div class="container_top_header" onclick="openModal('video_0')">
								<div className="video-item-user  mb-3">
									<div className="d-flex align-items-center">
										<div className="dropdown-list-image mr-3">
											<img  className="rounded-circle" src={ require("./components/imgs/s3.png")} />
										</div>
										<div className="font-weight-bold mr-2">
											<div className="text-truncate">Prisha  <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
											<div className="small text-gray-500">4 days ago</div>
										</div>
									</div>
								</div>
							</div>
							<div class="video-container">
								<video className="thevideo" id="video_0" data-toggle="modal" onmouseover="hoverVideo('0')" onmouseout="hideVideo('0')" class="img-responsive" loop                                >
									<source src={ require("./components/imgs/video/7.mp4")} type="video/mp4" />
								</video>
							</div>
							<div class="user_name">
								<div>@smarttv 😍	</div>
								<div class="video_view"><i class="fa fa-eye"></i> 21k</div>
							</div>
							<div class="views row" >
								<div class="col-md-2 col-2 text-center">
									<i class="fa fa-whatsapp"></i> <span>381</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-star"></i> <span>234</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-comment"></i> <span>79</span>
								</div>                             
							</div>
						</div>								
					</div>

				
					<div class="col-lg-3 col-md-6 col-12 video p-2" >
						<div className="pix-video-card">
							<div class="container_top_header" onclick="openModal('video_0')">
								<div className="video-item-user  mb-3">
									<div className="d-flex align-items-center">
										<div className="dropdown-list-image mr-3">
											<img  className="rounded-circle" src={ require("./components/imgs/s4.png")} />
										</div>
										<div className="font-weight-bold mr-2">
											<div className="text-truncate">Siva SS <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
											<div className="small text-gray-500">1 week ago</div>
										</div>
									</div>
								</div>
							</div>
							<div class="video-container">
								<video className="thevideo" id="video_0" data-toggle="modal" onmouseover="hoverVideo('0')" onmouseout="hideVideo('0')" class="img-responsive" loop                                 >
									<source src={ require("./components/imgs/video/7.mp4")} type="video/mp4" />
								</video>
							</div>
							<div class="user_name">
								<div>@tural	</div>
								<div class="video_view"><i class="fa fa-eye"></i> 14k</div>
							</div>
							<div class="views row" >
								<div class="col-md-2 col-2 text-center">
									<i class="fa fa-whatsapp"></i> <span>381</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-star"></i> <span>234</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-comment"></i> <span>79</span>
								</div>                             
							</div>
						</div>								
					</div>


				
					<div class="col-lg-3 col-md-6 col-12 video p-2" >
						<div className="pix-video-card">
							<div class="container_top_header" onclick="openModal('video_0')">
								<div className="video-item-user  mb-3">
									<div className="d-flex align-items-center">
										<div className="dropdown-list-image mr-3">
											<img  className="rounded-circle" src={ require("./components/imgs/s7.png")} />
										</div>
										<div className="font-weight-bold mr-2">
											<div className="text-truncate">Mahika  <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
											<div className="small text-gray-500">1 week ago</div>
										</div>
									</div>
								</div>
							</div>
							<div class="video-container">
								<video className="thevideo" id="video_0" data-toggle="modal" onmouseover="hoverVideo('0')" onmouseout="hideVideo('0')" class="img-responsive" loop                              >
									<source src={ require("./components/imgs/video/7.mp4")} type="video/mp4" />
								</video>
							</div>
							<div class="user_name">
								<div>@tural	</div>
								<div class="video_view"><i class="fa fa-eye"></i> 12k</div>
							</div>
							<div class="views row" >
								<div class="col-md-2 col-2 text-center">
									<i class="fa fa-whatsapp"></i> <span>381</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-star"></i> <span>234</span>
								</div>
								<div class="col-md-3 col-3 text-center">
									<i class="fa fa-comment"></i> <span>79</span>
								</div>                             
							</div>
						</div>								
					</div>
				</div>
         </section>


	</div>
 </div> 
</div>

);
}
}
export default DiscoverVideo;