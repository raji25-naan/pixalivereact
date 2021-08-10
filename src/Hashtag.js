import React from 'react';
import Header from './Header';
import ExploreSidebar from './ExploreSidebar';
import RightSidebar from './RightSidebar';

class Hashtag extends React.Component{
render()
{
return (
<div>

<div className="pix-bg">

<Header/>

<ExploreSidebar />

<div className="main_content_pix col-md-5 col-lg-5">  
        <div class="row row_rl">
       		<div class="pitred-links pix-hashtag_card">							
					<ul className="pix_hash_list">
						<li><a href="#" title="">All</a></li>
						<li><a href="#" title="">Trending</a></li>
						<li><a href="#" className="active" title="">India Trends</a></li>
						<li><a href="#" title="">Covid-19</a></li>
						<li><a href="#" title="">Entertainment</a></li>
						<li><a href="#" title="">Sports</a></li>
					</ul>
						
					</div>
					<div class="con-pts">
						<div class="pit-points">
							<h4>India Trends</h4>
						</div>
					</div>
					<div class="pix-hashtag_card item">
						<div class="pit-post">
							<figure>
							<img src={ require("./components/imgs/red-post1.jpg")} alt />
								<span>#1</span>
								<i class="uil uil-scenery"></i>
							</figure>
							<div class="pit-post-deta">
								<h4><a href="#" title="">#Internationalmensday</a></h4>
								<ul class="post-up-time">
									<li>
										<div class="usr-fig">
										<img src={ require("./components/imgs/red-post1.jpg")}  alt />
											<a href="#" title="">Viji Vaithi</a>
										</div>
									</li>									
								</ul>
								<span>89.4K Likes</span>
								<p>Nov 19 is recognised as International Men’s Day</p>
							</div>
							
							<div class="number">
							<button class="btn pix-hshtag-post-btn btn-sm" title="Create a Post">Post</button>
							</div>
						</div>
					</div>

					<div class="pix-hashtag_card item">
						<div class="pit-post">
							<figure>
							<img src={ require("./components/imgs/ModiNaukarAmbaniKa.jpg")} alt />
								<span>#2</span>
								<i class="uil uil-scenery"></i>
							</figure>
							<div class="pit-post-deta">
								<h4><a href="#" title="">#ModiNaukarAmbaniKa</a></h4>
								<ul class="post-up-time">
									<li>
										<div class="usr-fig">
										<img src={ require("./components/imgs/ModiNaukarAmbaniKa.jpg")}  alt />
											<a href="#" title="">Suresh Kumar</a>
										</div>
									</li>
								</ul>
								<span>86.2K Likes</span>
								<p>Nov 19 is recognised as International Men’s Day</p>
							</div>
							
							<div class="number">
							<button class="btn pix-hshtag-post-btn btn-sm" title="Create a Post">Post</button>
							</div>
						</div>
					</div>


					<div class="pix-hashtag_card item">
						<div class="pit-post">
							<figure>
							<img src={ require("./components/imgs/cover-bg2.jpg")} alt />
								<span>#3</span>
								<i class="uil uil-video"></i>
							</figure>
							<div class="pit-post-deta">
								<h4><a href="#" title="">#nature #naturelovers #Naturel</a></h4>
								<ul class="post-up-time">
									<li>
										<div class="usr-fig">
										<img src={ require("./components/imgs/red-post1.jpg")}  alt />
											<a href="#" title="">Vishnu Unnikrishnan</a>
										</div>
									</li>
									
								</ul>
								<span>78.5K Likes</span>
								<p>Nov 19 is recognised as International Men’s Day</p>
							</div>
							
							<div class="number">
							<button class="btn pix-hshtag-post-btn btn-sm" title="Create a Post">Post</button>
							</div>
						</div>
					</div>


					<div class="pix-hashtag_card item">
						<div class="pit-post">
							<figure>
							<img src={ require("./components/imgs/jaddu.jpg")} alt />
								<span>#4</span>
								<i class="uil uil-scenery"></i>
							</figure>
							<div class="pit-post-deta">
								<h4><a href="#" title="">#INDvsAUS #AUSvsIND #Jaddu</a></h4>
								<ul class="post-up-time">
									<li>
										<div class="usr-fig">
										<img src={ require("./components/imgs/red-post1.jpg")}  alt />
											<a href="#" title="">John Smith</a>
										</div>
									</li>
								</ul>
								<span>74.1K Likes</span>
								<p>Nov 19 is recognised as International Men’s Day</p>
							</div>
							
							<div class="number">
							<button class="btn pix-hshtag-post-btn btn-sm" title="Create a Post">Post</button>
							</div>
						</div>
					</div>

					<div class="pix-hashtag_card item">
						<div class="pit-post">
							<figure>
							<img src={ require("./components/imgs/store4.jpg")} alt />
								<span>#5</span>
								<i class="uil uil-video"></i>
							</figure>
							<div class="pit-post-deta">
								<h4><a href="#" title="">#Internationalmensday</a></h4>
								<ul class="post-up-time">
									<li>
										<div class="usr-fig">
										<img src={ require("./components/imgs/red-post1.jpg")}  alt />
											<a href="#" title="">Jennifer</a>
										</div>
									</li>
								</ul>
								<span>68.4K Likes</span>
								<p>Nov 19 is recognised as International Men’s Day</p>
							</div>
							
							<div class="number">
							<button class="btn pix-hshtag-post-btn btn-sm" title="Create a Post">Post</button>
							</div>
						</div>
					</div>


					<div class="pix-hashtag_card item">
						<div class="pit-post">
							<figure>
							<img src={ require("./components/imgs/store5.jpg")} alt />
								<span>#6</span>
								<i class="uil uil-scenery"></i>
							</figure>
							<div class="pit-post-deta">
								<h4><a href="#" title="">#fruits</a></h4>
								<ul class="post-up-time">
									<li>
										<div class="usr-fig">
										<img src={ require("./components/imgs/red-post1.jpg")}  alt />
											<a href="#" title="">Gopi</a>
										</div>
									</li>
								</ul>
								<span>61.5K Likes</span>
								<p>Nov 19 is recognised as International Men’s Day</p>
							</div>
							
							<div class="number">
							<button class="btn pix-hshtag-post-btn btn-sm" title="Create a Post">Post</button>
							</div>
						</div>
					</div>


					<div class="pix-hashtag_card item">
						<div class="pit-post">
							<figure>
							<img src={ require("./components/imgs/feed1.jpg")} alt />
								<span>7</span>
								<i class="uil uil-scenery"></i>
							</figure>
							<div class="pit-post-deta">
								<h4><a href="#" title="">#Bike</a></h4>
								<ul class="post-up-time">
									<li>
										<div class="usr-fig">
										<img src={ require("./components/imgs/red-post1.jpg")}  alt />
											<a href="#" title="">Vaithi</a>
										</div>
									</li>
								
								</ul>
								<span>58.5K Likes</span>
								<p>Nov 19 is recognised as International Men’s Day</p>
							</div>
							
							<div class="number">
							<button class="btn pix-hshtag-post-btn btn-sm" title="Create a Post">Post</button>
							</div>
						</div>
					</div>

  
		</div>

    </div>

	
    <RightSidebar />

  </div> 
</div>

);
}
}
export default Hashtag;