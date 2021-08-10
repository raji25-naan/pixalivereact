import React from 'react';
import Header from './Header';
import ChannelSidebar from './ChannelSidebar';
import video1 from "./components/videos/videoplayback.mp4";

class ChannelDetail extends React.Component{
render()
{
return (
<div>

<div className="pix-bg">
    
<Header/>
<ChannelSidebar />

    <div className="pix_main_channel col-md-9 col-lg-9 pix_main_channelDetails">  
                     
    
    </div>
  </div> 
</div>

);
}
}
export default ChannelDetail;