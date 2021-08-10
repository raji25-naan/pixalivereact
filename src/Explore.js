import React from 'react';
import Header from './Header';
import ExploreSidebar from './ExploreSidebar';

class Explore extends React.Component{
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
    <div>
        <nav className="responsive-tab pix-expole-tab">
        <ul>
            <li className="pix-active"><a href="#">Photos</a></li>
            <li><a href="#">Video</a></li>              
            <li><a href="#">Voice</a></li>
            <li><a href="#">Text</a></li>
            <li><a href="#">People</a></li>
        </ul>
        </nav>
    </div>
    </div>

      
            <div class="row masonry merged-8" >

                <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag11.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/hashtag/hashtag16.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag4.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    
                    
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag15.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag9.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag17.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag8.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>

                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag7.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    

                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag11.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag14.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag1.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    
                    
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag15.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag11.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    
                    
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag12.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag9.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag5.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag8.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>

                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag7.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    

                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag11.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag14.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    
                    <div class="col-lg-2 col-1-5" >
						<figure class="pitrest-post">
							<a class="user-avatr" href="#" title="Victoria">
                                <img src={ require("./components/imgs/ava.jpg")} alt /><span>Vaidehi Parshurami</span>
                            </a>
                            <div class="more">
								<div class="more-post-optns"><i class="uil uil-ellipsis-v"></i>
									<ul>
                                        <li><i class="fa fa-address-card-o"></i> Add favorites </li>
										<li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
										<li><i class="fa fa-trash-o"></i>Delete Post</li>										
										<li><i class="fa fa-clock-o"></i>Schedule Post</li>
									</ul>
								</div>
							</div>
                            <img src={ require("./components/imgs/hashtag/hashtag1.jpg")} alt />						
							<div class="over-photo">
                                <a href="#" class="likes heart" title="star"><i class="uil uil-star"></i> <span>3.6M</span></a>
								<a href="#" class="likes heart" title="comment"><i class="uil uil-comment-dots"></i> <span>1.6M</span></a>
                                <a href="#" class="likes heart" title="comment"><i class="uil uil-share-alt"></i> <span>1.2M</span></a>
							</div>
						</figure>
					</div>
                    




				</div>



  
 

    </div>

  </div> 
</div>

);
}
}
export default Explore;