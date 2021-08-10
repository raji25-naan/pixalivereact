import React from 'react';
import Header from './Header';
import CreatePost from './CreatePost';
import Stories from './Stories';
import RightSidebar from './RightSidebar';


function ProfileEdit() {
return (
<div>

<Header/>
<div class="dashboard-mp">	





<div class="dash-tab-links">
  	<div class="container">
       		<div class="setting-page mb-20">
						<div class="row">
							<div class="col-lg-3 col-md-5">								
								<div class="user-data full-width">
									<div class="categories-left-heading">
										<h3>Your Details</h3>							
									</div>
									<div class="categories-items">
										<a class="tab-item-1 active" href="#">Personal Info</a>
										<a class="tab-item-1" href="#">Profile</a>
										<a class="tab-item-1" href="#">All Friend Requests</a>
										<a class="tab-item-1" href="#">All Notifications</a>
										<a class="tab-item-1" href="#">Social Networks</a>																				
										<a class="tab-item-1" href="#">Email Setting</a>																				
										<a class="tab-item-1" href="#">Notification Setting</a>																			
										<a class="tab-item-1" href="#">Change Password</a>																			
										<a class="tab-item-1" href="#">Deactivate Account</a>																																														
									</div>
								</div>						
							</div>
							<div class="col-lg-8 col-md-7">	
              <div class="setting-form">
									<form>
										<div class="user-data full-width">
											<div class="about-left-heading">
												<h3>Personal Info</h3>										
											</div>
											<div class="prsnl-info">
												<div class="row">
													<div class="col-lg-5 col-md-12">													
														<div class="form-group-profile">
															<label>Full Name*</label>
															<input class="payment-input" type="text" placeholder="John Doe"/>
														</div>												
													</div>
													<div class="col-lg-5 col-md-12">
														<div class="form-group-profile">
															<label>Date of Birth*</label>
															<input class="payment-input datepicker-here" data-language="en" type="text" placeholder="08/29/1991"/>
														</div>										
													</div>
													<div class="col-lg-5 col-md-12">													
														<div class="form-group-profile">
															<label>Email Address*</label>
															<input class="payment-input" type="email" placeholder="Email Address*"/>
														</div>												
													</div>
													<div class="col-lg-5 col-md-12">
														<div class="form-group-profile">
															<label>Phone Number*</label>
															<input class="payment-input" type="tel" placeholder="+91 123 456 7890"/>
														</div>										
													</div>
													<div class="col-lg-5 col-md-12">													
														<div class="form-group-profile">
															<label>Gender*</label>
															<div class="select-bg">									
																<select class="wide pix-wide">																
																	<option>Male</option>	
																	<option>Female</option>	
																	<option>Other</option>																																																			
																</select><div class="nice-select wide" tabindex="0"><span class="current">Male</span><ul class="list"><li data-value="Male" class="option selected">Male</li><li data-value="Female" class="option">Female</li><li data-value="Other" class="option">Other</li></ul></div>
															</div>
														</div>												
													</div>
													<div class="col-lg-5 col-md-12">													
														<div class="form-group-profile">
															<label>Status*</label>
															<div class="select-bg">									
																<select class="wide pix-wide">
																	<option>Single</option>	
																	<option>Married</option>	
																	<option>In a relationship</option>	
																	<option>Engaged</option>																																																			
																	<option>Divorced</option>																																																			
																	<option>It's complicated</option>																																																			
																	<option>Widowed</option>																																																			
																</select><div class="nice-select wide" tabindex="0"><span class="current">Single</span><ul class="list"><li data-value="Single" class="option selected">Single</li><li data-value="Married" class="option">Married</li><li data-value="In a relationship" class="option">In a relationship</li><li data-value="Engaged" class="option">Engaged</li><li data-value="Divorced" class="option">Divorced</li><li data-value="It's complicated" class="option">It's complicated</li><li data-value="Widowed" class="option">Widowed</li></ul></div>
															</div>
														</div>												
													</div>
													<div class="col-lg-3 col-md-12">													
														<div class="form-group-profile">
															<label>Country*</label>
															<div class="select-bg">									
																<select class="wide pix-wide">
																	<option>India</option>	
																	<option>Australia</option>	
																	<option>Canada</option>	
																	<option>Nepal</option>																																																			
																	<option>Pakistan</option>																																																			
																	<option>Bangladesh</option>																																																			
																	<option>England</option>																																																			
																	<option>United States</option>																																																			
																</select><div class="nice-select wide" tabindex="0"><span class="current">India</span><ul class="list"><li data-value="India" class="option selected">India</li><li data-value="Australia" class="option">Australia</li><li data-value="Canada" class="option">Canada</li><li data-value="Nepal" class="option">Nepal</li><li data-value="Pakistan" class="option">Pakistan</li><li data-value="Bangladesh" class="option">Bangladesh</li><li data-value="England" class="option">England</li><li data-value="United States" class="option">United States</li></ul></div>
															</div>
														</div>												
													</div>
													<div class="col-lg-3 col-md-12">													
														<div class="form-group-profile">
															<label>State*</label>
															<div class="select-bg">									
																<select class="wide pix-wide">
																	<option>Punjab</option>	
																	<option>Delhi</option>	
																	<option>Rajasthan</option>	
																	<option>Uttar Pardesh</option>																																																			
																	<option>Bihar</option>																																																			
																	<option>Gujrat</option>																																																			
																	<option>Ladakh</option>																																																			
																	<option>Maharastar</option>																																																			
																	<option>Karnatank</option>																																																			
																	<option>Channai</option>																																																			
																	<option>Jharkhand</option>																																																		
																	<option>Tamilnadu</option>																																																		
																</select><div class="nice-select wide" tabindex="0"><span class="current">Punjab</span><ul class="list"><li data-value="Punjab" class="option selected">Punjab</li><li data-value="Delhi" class="option">Delhi</li><li data-value="Rajasthan" class="option">Rajasthan</li><li data-value="Uttar Pardesh" class="option">Uttar Pardesh</li><li data-value="Bihar" class="option">Bihar</li><li data-value="Gujrat" class="option">Gujrat</li><li data-value="Ladakh" class="option">Ladakh</li><li data-value="Maharastar" class="option">Maharastar</li><li data-value="Karnatank" class="option">Karnatank</li><li data-value="Channai" class="option">Channai</li><li data-value="Jharkhand" class="option">Jharkhand</li><li data-value="Tamilnadu" class="option">Tamilnadu</li></ul></div>
															</div>
														</div>												
													</div>
													<div class="col-lg-3 col-md-12">													
														<div class="form-group-profile">
															<label>City*</label>
															<div class="select-bg">									
																<select class="wide pix-wide">
																	<option>Ludhiana</option>	
																	<option>Amritsar</option>	
																	<option>Moga</option>	
																	<option>Rajpura</option>																																																			
																	<option>Mohali</option>																																																			
																	<option>Jalandhar</option>																																																			
																	<option>Beas</option>																																																			
																	<option>Kapurthala</option>																																																			
																	<option>Fagwara</option>																																																			
																	<option>Husharpur</option>																																																			
																	<option>Gurdaspur</option>																																																		
																	<option>Fatehgrah</option>																																																		
																</select><div class="nice-select wide" tabindex="0"><span class="current">Ludhiana</span><ul class="list"><li data-value="Ludhiana" class="option selected">Ludhiana</li><li data-value="Amritsar" class="option">Amritsar</li><li data-value="Moga" class="option">Moga</li><li data-value="Rajpura" class="option">Rajpura</li><li data-value="Mohali" class="option">Mohali</li><li data-value="Jalandhar" class="option">Jalandhar</li><li data-value="Beas" class="option">Beas</li><li data-value="Kapurthala" class="option">Kapurthala</li><li data-value="Fagwara" class="option">Fagwara</li><li data-value="Husharpur" class="option">Husharpur</li><li data-value="Gurdaspur" class="option">Gurdaspur</li><li data-value="Fatehgrah" class="option">Fatehgrah</li></ul></div>
															</div>
														</div>												
													</div>
												</div>
											</div>
										</div>
										<div class="user-data full-width">
											<div class="about-left-heading">
												<h3>About Description</h3>										
											</div>
											<div class="prsnl-info">
												<div class="row">
													<div class="col-lg-12 col-md-12">													
														<div class="form-group-profile">
															<label>Description Here*</label>
															<textarea class="replt-comnt" placeholder="Description"></textarea>
														</div>												
													</div>																																				
												</div>
											</div>
										</div>	
										<div class="user-data full-width">
											<div class="about-left-heading">
												<h3>Hobbies</h3>										
											</div>
											<div class="prsnl-info">
												<div class="row">
													<div class="col-lg-12 col-md-12">													
														<div class="form-group-profile">
															<label>Favourite Music*</label>
															<input class="payment-input" type="text" placeholder="Folk, Rap, Solo, Hiphop"/>
														</div>												
													</div>												
													<div class="col-lg-12 col-md-12">													
														<div class="form-group-profile">
															<label>Favourite Books*</label>
															<input class="payment-input" type="email" placeholder="Novel, Comics, Jokes, Love Stories, Secience, History"/>
														</div>												
													</div>
													<div class="col-lg-12 col-md-12">
														<div class="form-group-profile">
															<label>Favourite Movies*</label>
															<input class="payment-input" type="tel" placeholder="Dangle, Na Peru Suriya, Raja the Great, Bahubali 2"/>
														</div>										
													</div>
													<div class="col-lg-12 col-md-12">
														<div class="form-group-profile">
															<label>Favourite Tv Shows*</label>
															<input class="payment-input" type="tel" placeholder="The Kapil Sharma Show, Kulfi, CID, Big Boss"/>
														</div>										
													</div>
													<div class="col-lg-12 col-md-12">
														<div class="form-group-profile">
															<label>Favourite Games*</label>
															<input class="payment-input" type="tel" placeholder="Cricket, Football, Hockey, Kabaddi"/>
														</div>										
													</div>
													<div class="col-lg-12 col-md-12">
														<div class="form-group-profile">
															<label>Favourite Brands*</label>
															<input class="payment-input" type="tel" placeholder="Apple, Oppo, Nike, Addidas, Puma. Jack &amp; Jone, Nokia"/>
														</div>										
													</div>
													<div class="col-lg-12 col-md-12">
														<div class="form-group-profile">
															<label>Favourite Artists*</label>
															<input class="payment-input" type="tel" placeholder="Babbu Maan, Salman Khan, Kapil Sharma, Priyanka Chopra"/>
														</div>										
													</div><div class="col-lg-12 col-md-12">
														<div class="form-group-profile">
															<label>Other Insterests*</label>
															<input class="payment-input" type="tel" placeholder="Travel, Hiking, Web designing"/>
														</div>										
													</div>
												</div>
											</div>
										</div>
										<div class="user-data full-width">
											<div class="about-left-heading">
												<h3>Education</h3>
												<a href="#">Add New</a>
											</div>
											<div class="prsnl-info">
												<div class="row">
													<div class="col-lg-12 col-md-12">													
														<div class="form-group-profile">
															<label>Title*</label>
															<input class="payment-input" type="text" placeholder="Master of Science in Information Technology"/>
														</div>												
													</div>	
													<div class="col-lg-5 col-md-6">													
														<div class="form-group-profile">														
															<input class="payment-input" type="text" placeholder="From"/>
														</div>												
													</div>
													<div class="col-lg-5 col-md-6">													
														<div class="form-group-profile">														
															<input class="payment-input" type="text" placeholder="to"/>
														</div>												
													</div>
													<div class="col-lg-12 col-md-12">													
														<div class="form-group-profile">														
															<input class="payment-input" type="text" placeholder="www.college/institute.com"/>
														</div>												
													</div>	
												</div>
											</div>
										</div>
										<div class="user-data full-width">
											<div class="about-left-heading">
												<h3>Employment</h3>
												<a href="#">Add New</a>
											</div>
											<div class="prsnl-info">
												<div class="row">
													<div class="col-lg-12 col-md-12">													
														<div class="form-group-profile">
															<label>Title*</label>
															<input class="payment-input" type="text" placeholder="Graphic Designer"/>
														</div>												
													</div>	
													<div class="col-lg-5 col-md-6">													
														<div class="form-group-profile">														
															<input class="payment-input" type="text" placeholder="From"/>
														</div>												
													</div>
													<div class="col-lg-5 col-md-6">													
														<div class="form-group-profile">														
															<input class="payment-input" type="text" placeholder="to"/>
														</div>												
													</div>
													<div class="col-lg-12 col-md-12">													
														<div class="form-group-profile">														
															<input class="payment-input" type="text" placeholder="www.company.com"/>
														</div>												
													</div>												
												</div>
											</div>
										</div>
										<div class="add-crdt-amnt">
											<button class="setting-save-btn" type="submit">Save Changes</button>
										</div>
									</form>
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
export default ProfileEdit;