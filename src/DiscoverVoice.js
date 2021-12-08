import React from 'react';
import Header from './Header';
import ExploreSidebar from './ExploreSidebar';
import voice1 from "./components/voice/drumsolo.mp3";

class DiscoverVoice extends React.Component{
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
				<li  className="pix-active"><a href="/DiscoverVoice">Voice</a></li>
				<li><a href="/DiscoverText">Text</a></li>
				<li><a href="/DiscoverPeople">People</a></li>
			</ul>
		</nav>
    </div>
        
	<div class="row masonry merged-8 pix-voice-gap" >
		<div>
			<div class="central-meta audio-box">
				<div class="audio-post">
					<div class="audio-user">
						<figure><img src={ require("./components/imgs/ava.jpg")} alt /></figure>
						<div class="audio-user-name">
							<h6><a href="#" title="">Nati Natasha</a></h6>
							<span><img src={ require("./components/imgs/post-user.png")} alt />  <time>1 hr</time></span>
						</div>
					</div>

					<div class="sound-track-area">
						<div class="music-track">
							<audio src={voice1}  controls  loop autoplay />
							</div>						
					</div>
				</div>
			</div>
		</div>

		<div>
			<div class="central-meta audio-box">
				<div class="audio-post">
					<div class="audio-user">
						<figure><img src={ require("./components/imgs/ava.jpg")} alt /></figure>
						<div class="audio-user-name">
							<h6><a href="#" title="">Nati Natasha</a></h6>
							<span><img src={ require("./components/imgs/post-user.png")} alt />  <time>1 hr</time></span>
						</div>
					</div>

					<div class="sound-track-area">
						<div class="music-track">
							<audio src={voice1}  controls  loop autoplay />
						</div>						
					</div>
				</div>
			</div>
		</div>

		<div>
			<div class="central-meta audio-box">
				<div class="audio-post">
					<div class="audio-user">
						<figure><img src={ require("./components/imgs/ava.jpg")} alt /></figure>
						<div class="audio-user-name">
							<h6><a href="#" title="">Nati Natasha</a></h6>
							<span><img src={ require("./components/imgs/post-user.png")} alt />  <time>1 hr</time></span>
						</div>
					</div>

					<div class="sound-track-area">
						<div class="music-track">
							<audio src={voice1}  controls  loop autoplay />
							</div>						
					</div>
				</div>
			</div>
		</div>
		
		<div>
			<div class="central-meta audio-box">
				<div class="audio-post">
					<div class="audio-user">
						<figure><img src={ require("./components/imgs/ava.jpg")} alt /></figure>
						<div class="audio-user-name">
							<h6><a href="#" title="">Nati Natasha</a></h6>
							<span><img src={ require("./components/imgs/post-user.png")} alt />  <time>1 hr</time></span>
						</div>
					</div>

					<div class="sound-track-area">
						<div class="music-track">
							<audio src={voice1}  controls  loop autoplay />
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
export default DiscoverVoice;