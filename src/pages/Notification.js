import React, { useState, useEffect } from 'react';
import { API } from '../api';
import Header from '../Header';
import LeftSidebar from '../LeftSidebar';
import moment from 'moment';
import { Button, Link } from '@material-ui/core';

const Notification = (props) => {
	const user = props?.userInfo;
	const profile = JSON.parse(localStorage.getItem('profile'));
	let id = profile?.user?._id;
	let token = profile?.token;
	const [count, setCount] = useState();
	const [notification, setNotification] = useState([]);

	useEffect(() => {
		loadNotification();
	}, [])

	const loadNotification = async () => {
		const { data } = await API.get(
			`/getAllNotificationByuser?user_id=${id}`, { headers: { "token": `Bearer ${token}` } }
		);
		console.log(data);
		setCount(data?.result?.length);
		setNotification(data?.result)
	}

	return (
		<div>
			<div className="pix-bg">
				<Header {...user} />
				<LeftSidebar {...props} />

				<div className="pix_main_explore col-md-9 col-lg-9">
					<div className=" pix-explore">
						<h2>Notifications<span class="circle-count bg-warning text-white font-xsssss rounded-3 ms-2 ls-3 fw-600 p-2  mt-0">{count}</span></h2>
					</div>

					<ul class="pix-notification-list">

						{notification?.[0] ?
							<>
								{notification.map((note) => {
									return (
										<>
											<li>
												<a href="#" class="d-flex align-items-center p-3 rounded-3 bg-lightblue theme-light-bg">
													<img src={note?.sender_id?.avatar || require("../components/imgs/s1.png")} class="w45 me-3" alt />
													{/* <i class="feather-heart text-white bg-red-gradiant me-2 font-xssss notification-react"></i> */}
													<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20">
														<strong>{note?.sender_id?.name}</strong>
														{note?.post_id ?
															<>
																like your loop
															</>
															:
															<>
																Started following You
															</>

														}
														<span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto p-l-5">{moment(note?.created_at).fromNow()}</span> </h6>
													<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
												</a>
												<div style={{ paddingLeft: '70px' }}>
													{note?.post_id &&
														<img src={note?.post_id?.url} width={45} height={65}></img>
													}
												</div>
											</li>
										</>
									)
								})

								}
							</>
							:
							<h3>No Notifications Yet</h3>
						}


						{/* <h4 class="fw-600 mb-4 mt-2 font-xssss text-grey-500 d-flex align-items-center mt-4">Yesterday</h4>
						<li>
							<a href="#" class="d-flex align-items-center p-3 rounded-3 bg-lightgrey theme-light-bg">
								<img src={require("../components/imgs/s5.png")} class="w45 me-3" alt />
								<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Goria Coast</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5">12:48PM</span> </h6>
								<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
							</a>
						</li>
						<li>
							<a href="#" class="d-flex align-items-center p-3 rounded-3">
								<img src={require("../components/imgs/s6.png")} class="w45 me-3" alt />
								<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Hurin Seary</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5">12:48PM</span> </h6>
								<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
							</a>
						</li>
						<li>
							<a href="#" class="d-flex align-items-center p-3 rounded-3">
								<img src={require("../components/imgs/s7.png")} class="w45 me-3" alt />
								<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5"> 12:48PM</span> </h6>
								<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
							</a>
						</li>
						<li>
							<a href="#" class="d-flex align-items-center p-3 rounded-3 bg-lightblue theme-light-bg">
								<img src={require("../components/imgs/s8.png")} class="w45 me-3" alt />
								<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Victor Exrixon</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5">  12:48PM</span> </h6>
								<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
							</a>
						</li>
						<h4 class="fw-600 mb-4 mt-2 font-xssss text-grey-500 d-flex align-items-center mt-4">12 July 2021</h4>
						<li>
							<a href="#" class="d-flex align-items-center p-3 rounded-3 bg-lightblue theme-light-bg">
								<img src={require("../components/imgs/s9.png")} class="w45 me-3" alt />
								<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5">12:48PM</span> </h6>
								<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
							</a>
						</li>
						<li>
							<a href="#" class="d-flex align-items-center p-3 rounded-3">
								<img src={require("../components/imgs/s2.png")} class="w45 me-3" alt />
								<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Goria Coast</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5">12:48PM</span> </h6>
								<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
							</a>
						</li>
						<li>
							<a href="#" class="d-flex align-items-center p-3 rounded-3">
								<img src={require("../components/imgs/s3.png")} class="w45 me-3" alt />
								<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Hurin Seary</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5">12:48PM</span> </h6>
								<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
							</a>
						</li>
						<li>
							<a href="#" class="d-flex align-items-center p-3 rounded-3">
								<img src={require("../components/imgs/s4.png")} class="w45 me-3" alt />
								<h6 class="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span class="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto p-l-5"> 12:48PM</span> </h6>
								<i class="ti-more-alt text-grey-500 font-xs ms-auto"></i>
							</a>
						</li> */}
					</ul>

				</div>

			</div>
		</div>


	);
}
export default Notification;