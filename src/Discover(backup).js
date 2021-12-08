import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API } from './api';
import { getTrendingPost, getPostByCategories } from './actions/feeds';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import DiscoverFeed from './DiscoverFeed';


const Discover = (props) => {
    const dispatch = useDispatch();
    const profile = JSON.parse(localStorage.getItem('profile'));

    let token = profile?.token;
    const user = props.userInfo;
    const trend = props.trend;
    const suggest = props.suggest;
    const [category, setCategory] = useState()
    const feedss = useSelector((state) => state?.trendingPosts?.trendingPost);;

    useEffect(() => {
        dispatch(getTrendingPost());
    }, [])



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
                            <li> <a onClick={() => dispatch(getTrendingPost())} className="exp-active">Trending</a></li>
                            <li> <a onClick={(e) => dispatch(getPostByCategories(e))} name="Love"> Love </a></li>
                            <li> <a onClick={(e) => dispatch(getPostByCategories(e))} name="Serials">Serials</a></li>
                            <li> <a onClick={(e) => dispatch(getPostByCategories(e))} name="Status">Status</a></li>
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

                    <DiscoverFeed user={user} suggest={suggest} feeds={feedss} />

                </div>

            </div>
        </div>
    );
}
export default Discover;