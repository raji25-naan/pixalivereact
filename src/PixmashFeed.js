import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PixmashFeed = () => {
  const [users, setUser] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await axios.get('http://dev.pixalive.me/api/admin/getAllUsers')
    setUser(result.data.result)
	console.log(result)
  }

return (
     <div>  
		<section className="pb-4 p-11 container">   
		<div className="pixmash_head"><h2>Pixmash</h2></div>   
			<div className="row" id="leukeVideos">	
				<div class="col-lg-3 col-md-6 col-12 video p-2" >
					<div className="pix-video-card">
						<div class="container_top_header" onclick="openModal('video_0')">
							<div className="video-item-user  mb-3">
								<div className="d-flex align-items-center">
									<div className="dropdown-list-image mr-3">
									  <img className="rounded-circle" src={ require("./components/imgs/s5.png")} />
									</div>
									<div className="font-weight-bold mr-2">
									<div className="text-truncate">Saloni <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
									<div className="pixmash_time">5 mins ago</div>
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
											<img className="rounded-circle" src={ require("./components/imgs/s1.png")} />
										</div>
										<div className="font-weight-bold mr-2">
											<div className="text-truncate">Krisha  <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
											<div className="pixmash_time">22 mins ago</div>
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
											<img className="rounded-circle" src={ require("./components/imgs/s6.png")} />
										</div>
										<div className="font-weight-bold mr-2">
										<div className="text-truncate">Hiya Hiya <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
										<div className="pixmash_time">45 mins ago</div>
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
											<img className="rounded-circle" src={ require("./components/imgs/s2.png")} />
										</div>
										<div className="font-weight-bold mr-2">
											<div className="text-truncate">Aaradhya  <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
											<div className="pixmash_time">1 day ago</div>
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
											<img className="rounded-circle" src={ require("./components/imgs/s2.png")} />
										</div>
										<div className="font-weight-bold mr-2">
											<div className="text-truncate">Manjula <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
											<div className="pixmash_time">2 days ago</div>
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
											<img className="rounded-circle" src={ require("./components/imgs/s3.png")} />
										</div>
										<div className="font-weight-bold mr-2">
											<div className="text-truncate">Prisha  <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
											<div className="pixmash_time">4 days ago</div>
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
								<div>@smarttv 😍</div>
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
											<img className="rounded-circle" src={ require("./components/imgs/s4.png")} />
										</div>
										<div className="font-weight-bold mr-2">
											<div className="text-truncate">Siva SS <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
											<div className="pixmash_time">1 week ago</div>
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
											<img className="rounded-circle" src={ require("./components/imgs/s7.png")} />
										</div>
										<div className="font-weight-bold mr-2">
											<div className="text-truncate">Mahika  <i data-toggle="tooltip" data-placement="top" title="" className="fa fa-check-circle text-success" data-original-title="Verified"></i></div>
											<div className="pixmash_time">1 week ago</div>
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


);
}
export default PixmashFeed;