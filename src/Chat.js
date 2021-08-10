import React from 'react';
import Header from './Header';
import ChatFeed from './ChatFeed';
import LeftSidebar from './LeftSidebar';
import ChatRightSidebar from './ChatRightSidebar';

const Chat = (props) => {
    const user = props.userInfo;

return (
<div id="wrapper" className="pix-bg">

    <Header {...user}/>
    <LeftSidebar {...props}/>
    {/* <ChatRightSidebar /> */}
    <ChatFeed/>

</div>
    
);
}
export default Chat;