import React, { useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import DiscoverFeed from './DiscoverFeed';


const Discover = (props) => {
   const profile = JSON.parse(localStorage.getItem('profile'));
   let id = profile?.user?._id;
   let token = profile?.token;
   const user = props.userInfo;
   const trend = props.trend;
   const suggest = props.suggest;

   useEffect(() => {
      getPostByCategory()
   }, [])

   const getPostByCategory = async () => {
      const { data } = await axios.get(
         `http://test.pixalive.me/api/user/trending_post`, { headers: { "token": `Bearer ${token}` } }
      )
      console.log(data);
   }

   return (
      <div>
         <div className="pix-bg">
            <Header {...user} />
            <LeftSidebar userInfo={user} suggest={suggest} trend={trend} />
            <div className="pix_main_explore col-md-9 col-lg-9">
               <div className=" pix-explore">
                  <h2>Explore</h2>
               </div>
               <div class="flex space-x-3 pix-ex-list">
                  <ul>
                     <li> <a href="#" className="exp-active">Trending</a></li>
                     <li> <a href="#"> Love </a></li>
                     <li> <a href="#">Serials</a></li>
                     <li> <a href="#">Status</a></li>
                     <li> <a href="#">Challenges </a></li>
                     <li> <a href="#">Others</a></li>
                     <li> <a href="#">Dance</a></li>
                     <li> <a href="#" >Comedy </a></li>
                     <li> <a href="#" >Politics   </a></li>
                     <li> <a href="#" >News </a></li>
                     <li> <a href="#" >Movie </a></li>
                     <li> <a href="#" >Music </a></li>
                     <li> <a href="#" >Health and Fitness  </a></li>
                     <li> <a href="#" >Fashion </a></li>
                     <li> <a href="#" >Education </a> </li>
                     <li> <a href="#" >Learning </a> </li>
                     <li> <a href="#" >Cooking </a> </li>
                     <li> <a href="#" >Travel </a> </li>
                     <li> <a href="#" >Technology  </a> </li>
                     <li> <a href="#" >Quotes </a> </li>
                     <li> <a href="#" >Sports </a> </li>
                     <li> <a href="#" >Nature </a> </li>
                     <li> <a href="#" >Art and Crafts </a> </li>
                     <li> <a href="#" >Life Style </a> </li>
                     <li> <a href="#" >Design  </a> </li>
                     <li> <a href="#" >Gaming  </a> </li>
                     <li> <a href="#" >Food </a> </li>
                     <li> <a href="#" >Troll </a> </li>
                     <li> <a href="#" >Economic </a> </li>
                     <li> <a href="#" >Science </a> </li>
                     <li> <a href="#" >Poetry </a> </li>
                     <li> <a href="#" >Handcraft </a> </li>
                     <li> <a href="#" >Social Issues  </a> </li>
                     <li> <a href="#" >Animals  </a> </li>
                     <li> <a href="#" >Devotion </a> </li>
                     <li> <a href="#" >Poetry </a> </li>
                     <li> <a href="#" >Reviews </a> </li>
                     <li> <a href="#" >Automobiles </a> </li>
                     <li> <a href="#" >Q&A </a> </li>
                  </ul>
               </div>
               <div className="explore_select_head">
                  <h4>Trending</h4>
               </div>

               <DiscoverFeed suggest={suggest} />

            </div>

         </div>
      </div>
   );
}
export default Discover;