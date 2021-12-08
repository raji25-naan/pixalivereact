import React, { useEffect, useState } from 'react';
import { API } from './api';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTrendingPeople, getUserInfo } from './actions/userInfo';
import axios from 'axios';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import { Avatar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const TrendingPeoples = (props) => {
	const dispatch = useDispatch()
	const userInfo = props.userInfo;
	const trending = props.trend;
	const suggest = props?.suggest;
	console.log(trending);
	const loader = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const profile = JSON.parse(localStorage.getItem('profile'));
	let token = profile?.token;

	useEffect(() => {
		//dispatch(getSuggestedFrionds)
		dispatch(getTrendingPeople());
	}, [dispatch])

	const follow = async (id) => {
		let following_id = { following_id: id, type: '1' }
		const { data } = await axios.post(
			`http://test.pixalive.me/api/user/createFollowNew`, following_id, { headers: { "token": `Bearer ${token}` } }
		)
		dispatch(getTrendingPeople());
		dispatch(getUserInfo());
		alert(data?.message)
	}

	const unFollow = async (id) => {
		let following_id = { following_id: id, type: '0' }
		const { data } = await axios.post(
			`http://test.pixalive.me/api/user/createFollowNew`, following_id, { headers: { "token": `Bearer ${token}` } }
		)
		dispatch(getTrendingPeople());
		dispatch(getUserInfo());
		alert(data?.message);
	}

	return (
		<div>

			<div className="pix-bg">
				<Header {...userInfo} />
				<LeftSidebar userInfo={userInfo} trend={trending} suggest={suggest} />
				<div className="pix_main_trending col-md-9 col-lg-9">
					<div className=" pix-explore">
						<h2>Trending Peoples</h2>
					</div>

					<div className="explore_cnt">
						<div className="main_content_inner_pix">
							<div className="pix-grid-small1 pix-grid1" pix-grid>


								<div class="row">
									{trending.trendingPeople?.[0]?._id?.name ? (
										<>
											{trending.trendingPeople
												.map((people) => {
													return (
														<div class="col-lg-3 col-md-6 col-find-3">
															<div class="user-data full-width">
																<div class="user-profile user-profile_friends">
																	<div class="userbg-dt dpbg-1">
																		<div class="usr-pic" component={Link} to={`/ViewProfile/${people?._id?._id}`}>
																			{/* <a href={`/ViewProfile/${people?._id?._id}`}>
																		</a> */}
																			<img src={people?._id?.avatar || require("../src/components/imgs/default.png")} alt />
																		</div>
																	</div>
																	<div class="user-main-details">
																		<h4>{people?._id?.name}</h4>
																		<span>{people?.total_Points} points</span>
																	</div>

																	<ul class="follow-msg-dt">

																		<li>
																			<div class="follow-dt-sm">
																				{people?._id?._id !== profile?.user?._id ?
																					<>
																						{people?._id?.follow === 0 ?
																							<button class="follow-btn1" onClick={(e) => follow(people?._id?._id)}>
																								Follow
																							</button>
																							:
																							<button class="follow-btn2" onClick={(e) => unFollow(people?._id?._id)}>
																								following
																							</button>
																						}
																					</>
																					:
																					<button class="follow-btn1">
																						You
																					</button>
																				}
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													)
												})}
										</>
									) : (
										loader.map(() => (
											<div class="col-lg-3 col-md-6 col-find-3">
												<div class="user-data full-width">
													<div class="user-profile user-profile_friends">
														<div class="userbg-dt dpbg-1">
															<Skeleton
																variant="circle"
																height={90} width={90}
																style={{ margin: '0 auto', marginBottom: '-48px' }}
															/>
														</div>
														<div class="user-main-details">
															<h4><Skeleton width={100} style={{ margin: '0 auto' }} /></h4>
															<span><Skeleton width={60} style={{ margin: '0 auto' }} /></span>
														</div>
														<ul class="follow-msg-dt">
															<li>
																<Skeleton
																	width={85}
																	height={45}
																	style={{ margin: '0 auto', borderRadius: '24px' }}
																/>
															</li>
														</ul>
													</div>
												</div>
											</div>
										))
									)}

								</div>

							</div>
						</div>
					</div>

				</div>
			</div>

		</div>
	);
}
export default TrendingPeoples;