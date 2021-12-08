import React from 'react';
function ChatRightSidebar() {
return (
<div className="rightsidebar">
     
    

   <div pix-sticky="offset:70 ; media : @m" className="pix-hashtag-people pix-sticky pix-active pix-sticky-below pix-sticky-fixed" style={{}}>  
      <div class="pix_trending_people pix_chat" >   
         <div class="pix-width-expand pix-sidebar-header pix-flex-middle pix-first-column">        
            <h4 class="mb-0">Contacts</h4>   
            <a href="/Findfriend" class="pix-see-all"> See All<i class="uil uil-angle-right"></i></a>     
         </div>

         <div class="pix-width-1-4@m pix-visible@m">

<div class="pix-padding pt-3 pr-0 pix-sticky" pix-sticky="offset:60:bottom:true ; media : @m">

    <div class="pix-grid-small pix-grid" pix-grid="">
        <div class="pix-width-auto pix-first-column">
        <img  src={ require("./components/imgs/store1.jpg")}  width="70" class="pix-border-circle" alt="" />
        </div>
        <div class="pix-width-expand">
            <h4 class="mb-1"> Jonathan Madano </h4>
            <p class="pix-text-small mb-2"> 2 days ago </p>
            <a href="#" class="pix-text-small"> Veiw profile </a>
        </div>
    </div>

    <hr class="mt-3 mb-2" />
    <p class="mb-0">Option</p>
    <ul class="dropdown-user-menu">
        <li><a href="#"> <i class="uil-user"></i> My Channal </a> </li>
        <li><a href="#"> <i class="uil-thumbs-up"></i> Liked Videos </a></li>
        <li><a href="#"> <i class="uil-cog"></i> Account Settings</a></li>
        <li><a href="#"> <i class="uil-sign-out-alt"></i>Sign Out</a> </li>
    </ul>

    <hr class="mt-3 mb-0" />

    <div class="section-header">
        <div class="section-header-left">
            <h3> Photos </h3>
        </div>
        <div class="section-header-right">
            <a href="#" class="see-all text-primary"> See all</a>
        </div>
    </div>

    <div class="pix-child-width-1-3 pix-grid-collapse pix-overflow-hidden pix-grid"  pix-grid="">
        <div class="pix-first-column"> <a href="#">
                <div class="photo-card xsmall" data-src="assets/images/post/img-1.jpg" pix-img="" >
                </div>
            </a>
        </div>
        <div> <a href="#">
                <div class="photo-card xsmall" data-src="assets/images/post/img-2.jpg" pix-img="" >
                </div>
            </a>
        </div>
        <div> <a href="#">
                <div class="photo-card xsmall" data-src="assets/images/post/img-3.jpg" pix-img="" >
                </div>
            </a>
        </div>
        <div class="pix-grid-margin pix-first-column"> <a href="#">
                <div class="photo-card xsmall" data-src="assets/images/category/img6.jpg" pix-img="" >
                </div>
            </a>
        </div>
        <div class="pix-grid-margin"> <a href="#">
                <div class="photo-card xsmall" data-src="assets/images/category/img3.jpg" pix-img="" >
                </div>
            </a>
        </div>
        <div class="pix-grid-margin"> <a href="#">
                <div class="photo-card xsmall" data-src="assets/images/category/img5.jpg" pix-img="">
                </div>
            </a>
        </div>

    </div>

</div>


</div>
         
      </div>
      
    


   </div>
</div>
);
}
export default ChatRightSidebar;