import React, { useEffect } from 'react';
import { API } from './api';
import Header from './Header';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getSuggestedFriends, getUserInfo } from './actions/userInfo';
import { Skeleton } from '@material-ui/lab';

const Findfriend = (props) => {
	const dispatch = useDispatch();
	const profile = JSON.parse(localStorage.getItem('profile'));
	let token = profile?.token;
	const user = props.userInfo;
	const suggested = props.suggest;
	console.log(props);
	console.log(typeof (suggested));
	console.log(suggested?.suggestedFriends);
	const loader = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	useEffect(() => {
		dispatch(getSuggestedFriends());
	}, [dispatch])

	const follow = async (id) => {
		let following_id = { following_id: id, type: '1' }
		const { data } = await API.post(
			`/createFollowNew`, following_id, { headers: { "token": `Bearer ${token}` } }
		)
		dispatch(getSuggestedFriends());
		dispatch(getUserInfo());
		alert(data?.message)
	}

	return (
		<div>

			<Header {...user} />

			<main class="Search-results ">
				<div class="main-section">
					{/* <div class="container">
					<div class="row justify-content-md-center">
						<div class="col-lg-4 col-md-12">	
							<div class="search-bar-main">
								<input type="text" class="search-1" placeholder="Search peoples..." />
								<i class="fas fa-search srch-ic"></i>
							</div>
						</div>																		
					</div>					
				</div>			 */}
					<div class="all-search-events">
						<div class="pix-container profile_main_content">
							<div class=" pix-explore"><h2>Suggested Friends</h2></div>
							<div class="row">
								{suggested.suggestedFriends?.[0]?._id?.name ? (
									<>
										{suggested.suggestedFriends
											.map((people) => {
												return (
													<>
														{people?._id?._id !== user?.user?._id &&
															<div class="col-lg-3 col-md-6 col-find-3">
																<div class="user-data full-width">
																	<div class="user-profile user-profile_friends">
																		<div class="userbg-dt dpbg-1">
																			<div class="usr-pic">
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
																					<button class="follow-btn1" onClick={(e) => follow(people?._id?._id)}>
																						Follow
																					</button>
																				</div>
																			</li>
																		</ul>

																	</div>
																</div>
															</div>
														}
													</>
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
															<Skeleton width={75} height={35} style={{ margin: '0 auto', borderRadius: '50px' }} />
														</li>
													</ul>
												</div>
											</div>
										</div>
									))
								)
								}


							</div>
						</div>
					</div>
				</div>
			</main>


		</div>

	);
}
export default Findfriend;