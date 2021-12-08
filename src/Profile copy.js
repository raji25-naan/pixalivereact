import React from 'react';
import Header from './Header';
import CreatePost from './CreatePost';
import Stories from './Stories';
import LeftSidebar from './LeftSidebar';

function Profile() {
return (
<div>

    <div className="pix-bg">

    <Header/>
    <LeftSidebar />

        <div class="pix-container Chat_main_content">
            <div class="container pro-container m-auto">

            <div class="flex lg:flex-row flex-col items-center lg:py-8 lg:space-x-8 mt-20">

<div>
    <div class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full m-0.5 mr-2  w-56 h-56 relative overflow-hidden uk-transition-toggle">  
      <img  src={ require("./components/imgs/ch2.png")}  class="bg-gray-200 border-4 border-white rounded-full w-full h-full dark:border-gray-900" />
           {/* <div class="absolute -bottom-3 custom-overly1 flex justify-center pt-4 pb-7 space-x-3 text-2xl text-white uk-transition-slide-bottom-medium w-full">
                <a href="#" class="hover:text-white">
                    <i class="uil-camera"></i>
                </a>
                <a href="#" class="hover:text-white">
                    <i class="uil-crop-alt"></i>
                </a>
            </div> */}
    </div>
</div>

<div class="lg:w/8/12 flex-1 flex flex-col lg:items-start items-center"> 

    <h2 class="font-semibold lg:text-2xl text-lg mb-2">Vaidehi Parshurami</h2>
    <p class="lg:text-left mb-2  dark:text-gray-100"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet 
        doming id quod mazim placerat facer possim assum</p>

        {/* <div class="flex font-semibold mb-3 space-x-2  dark:text-gray-10">
            <a href="#">Travailing</a> , <a href="#">Sports</a>  , <a href="#">Movies</a> 
        </div> */}

        
        <div class="capitalize flex font-semibold space-x-3 text-center text-sm my-2">
            <a href="#" class="bg-gray-300 shadow-sm p-2 px-6 rounded-md "> Add friend</a>
            <a href="#" class="bg-pink-500 shadow-sm p-2 pink-500 px-6 rounded-md text-white "> Send message</a>
            <div>

            <a href="#" class="bg-gray-300 flex h-12 h-full items-center justify-center rounded-full text-xl w-9" aria-expanded="false"> 
                <i class="icon-feather-chevron-down"></i> 
            </a>
                
            <div class="bg-white w-56 shadow-md mx-auto p-2 mt-12 rounded-md text-gray-500 hidden text-base dark:bg-gray-900 uk-drop" uk-drop="mode: click">
          
              <ul class="space-y-1">
                <li> 
                    <a href="#" class="flex items-center px-3 py-2">
                     <i class="uil-user-minus mr-2"></i>Unfriend
                    </a> 
                </li>
                <li> 
                    <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200">
                     <i class="uil-eye-slash  mr-2"></i>Hide Your Story
                    </a> 
                </li>
                <li> 
                    <a href="#" class="flex items-center px-3 py-2 hover:bg-gray-200 ">
                     <i class="uil-share-alt mr-2"></i> Share This Profile
                    </a> 
                </li>
                <li>
                  <hr class="-mx-2 my-2 " />
                </li>
                <li> 
                    <a href="#" class="flex items-center px-3 py-2 text-red-500">
                     <i class="uil-stop-circle mr-2"></i> Block
                    </a> 
                </li>
              </ul>
          
            </div>

            </div>

        </div>

        <div class="divide-gray-300 divide-transparent divide-x grid grid-cols-3 lg:text-left lg:text-lg mt-3 text-center w-full dark:text-gray-100">
            <div class="flex lg:flex-row flex-col"> 120k <strong class="lg:pl-2">Posts</strong></div>
            <div class="lg:pl-4 flex lg:flex-row flex-col"> 420k <strong class="lg:pl-2">Followers</strong></div>
            <div class="lg:pl-4 flex lg:flex-row flex-col"> 530k <strong class="lg:pl-2">Following</strong></div>
        </div>

</div>

<div class="w-20"></div>

</div>
                            
            </div>

        </div>
    </div>
</div>

);
}
export default Profile;