import React from 'react';
import Header from './Header';
import LeftSidebar from './LeftSidebar';

class Notification extends React.Component{
render()
{
return (
<div>
	<div className="pix-bg">
		<Header/>
		<LeftSidebar />

		<div className="pix_main_explore col-md-9 col-lg-9">    
			<div className=" pix-explore">
				<h2>Notification<span class="circle-count bg-warning text-white font-xsssss rounded-3 ms-2 ls-3 fw-600 p-2  mt-0">23</span></h2>
			</div>

			<ul class="pix-notification-list">
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3 bg-lightblue theme-light-bg">
						<img src={ require("./components/imgs/s1.png")} class="w45 me-3" alt />
						<i class="feather-heart text-white bg-red-gradiant me-2 font-xssss notification-react"></i>
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Victor Exrixon</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto p-l-5"> 12 minutes ago</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3">
						<span class="btn-round-md me-3 bg-warning font-xs fw-700 text-white">M</span>
						<i class="feather-thumbs-up text-white bg-primary-gradiant me-2 font-xssss notification-react"></i>
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto p-l-5">30 minutes ago</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3">
						<img src={ require("./components/imgs/s2.png")} class="w45 me-3" alt />
						<i class="feather-thumbs-up text-white bg-primary-gradiant me-2 font-xssss notification-react"></i>
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Goria Coast</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto p-l-5">1 hours ago</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3">
						<img src={ require("./components/imgs/s3.png")} class="w45 me-3" alt />	
						<i class="feather-message-square text-white bg-mini-gradiant me-2 font-xssss notification-react"></i>
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Hurin Seary</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto p-l-5">2 hours ago</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3 bg-lightgreen theme-light-bg">
						<img src={ require("./components/imgs/s4.png")} class="w45 me-3" alt />
						<i class="feather-message-square text-white bg-mini-gradiant me-2 font-xssss notification-react"></i>
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Victor Exrixon</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto p-l-5">6 hours ago</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3">
						<span class="btn-round-md me-3 bg-danger font-xs fw-700 text-white">S</span>
						<i class="feather-thumbs-up text-white bg-primary-gradiant me-2 font-xssss notification-react"></i>
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto p-l-5">11 hours ago</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				<h4 class="fw-600 mb-4 mt-2 font-xssss text-grey-500 d-flex align-items-center mt-4">Yesterday</h4>
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3 bg-lightgrey theme-light-bg">
						<img src={ require("./components/imgs/s5.png")} class="w45 me-3" alt />
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Goria Coast</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5">12:48PM</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3">
					<img src={ require("./components/imgs/s6.png")} class="w45 me-3" alt />
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Hurin Seary</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5">12:48PM</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3">
					<img src={ require("./components/imgs/s7.png")} class="w45 me-3" alt />
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5"> 12:48PM</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3 bg-lightblue theme-light-bg">
					<img src={ require("./components/imgs/s8.png")} class="w45 me-3" alt />
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Victor Exrixon</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5">  12:48PM</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				<h4 class="fw-600 mb-4 mt-2 font-xssss text-grey-500 d-flex align-items-center mt-4">12 July 2021</h4>
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3 bg-lightblue theme-light-bg">
					<img src={ require("./components/imgs/s9.png")} class="w45 me-3" alt />
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5">12:48PM</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3">
					<img src={ require("./components/imgs/s2.png")} class="w45 me-3" alt />
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Goria Coast</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5">12:48PM</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3">
					<img src={ require("./components/imgs/s3.png")} class="w45 me-3" alt />
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Hurin Seary</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5">12:48PM</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				<li>
					<a href="#" class="d-flex align-items-center p-3 rounded-3">
					<img src={ require("./components/imgs/s4.png")} class="w45 me-3" alt />
						<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5"> 12:48PM</span> </h6>
						<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
					</a>
				</li>
				</ul>
		
		</div>

 	</div>
</div>

    
);
}
}
export default Notification;