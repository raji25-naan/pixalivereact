import React from 'react';
import Header from './Header';
import PixmashFeed from './PixmashFeed';

const Pixmash = (props) => {

return (
<div>

    <div className="pix-bg">
        <Header {...props} />
               <PixmashFeed/>
    </div> 

</div>

);
}
export default Pixmash;