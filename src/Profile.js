import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUserInfo } from './actions/userInfo';
import Header from './Header';
import CreatePost from './CreatePost';
import Like from './components/Icons/like.png';
import unLike from './components/Icons/unlike.png';
import video2 from "./components/videos/v-2.mp4";
import { getFeeds } from './actions/feeds';
import { Skeleton } from '@material-ui/lab';
import ReactAudioPlayer from 'react-audio-player';
import moment from 'moment';
import Picture from './components/imgs/create-post/picture.png';
import Picture2 from './components/imgs/create-post/picture2.png';

function Profile(props) {
    const profile = JSON.parse(localStorage.getItem('profile'));
    const userDetail = JSON.parse(localStorage.getItem('userDetail'));
    let id = profile?.user?._id;
    let token = profile?.token;
    const dispatch = useDispatch();
    const userInfo = props;
    const [loops, setloops] = useState([]);
    const loader = [1];

    useEffect(() => {
        dispatch(getUserInfo());
        getUserPosts();
    }, [dispatch])

    const getUserPosts = async () => {
        const { data } = await axios.get(
            `http://test.pixalive.me/api/user/user_allpost?user_id=${id}`, { headers: { "token": `Bearer ${token}` } }
        )
        console.log(data)
        setloops(data?.feeds);
    }

    const likePost = async (e, id) => {
        e.preventDefault();
        let post = { post_id: id, type: 1 }
        const { data } = await axios.post(
            'http://test.pixalive.me/api/user/likePost', post, { headers: { "token": `Bearer ${token}` } }
        )
        getUserPosts();
    }

    const unLikePost = async (e, id) => {
        e.preventDefault();
        let post = { post_id: id, type: 0 }
        const { data } = await axios.post(
            'http://test.pixalive.me/api/user/likePost', post, { headers: { "token": `Bearer ${token}` } }
        )
        try {
            getUserPosts();
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <div className="pix-bg">
                <Header {...props} />

                <div class="pix-container profile_main_content">
                    <div class="container pro-container m-auto">

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card pro_card_top border-0 p-0 bg-white shadow-xss rounded-xxl">
                                    <div class="card-body h250 p-0 rounded-xxl overflow-hidden m-3"></div>
                                    <div class="card-body p-0 position-relative-pro">
                                        {userInfo?.user?.username ?
                                            <figure class="avatar_profile z-index-1">
                                                <img src={userInfo?.user?.avatar || require("../src/components/imgs/default.png")} alt="image" class="rounded-circle" />
                                            </figure>
                                            :
                                            <Skeleton animation="wave" variant="circle" style={{ left: '14px', margin: '0 0 1rem' }} width={100} height={100} />
                                        }
                                        {userInfo?.user?.username ?
                                            <h4 class="pro_h4">
                                                {userInfo?.user?.name}<span>@{userInfo?.user?.username}</span>
                                            </h4>
                                            :
                                            <React.Fragment>
                                                <h4 class="pro_h4">
                                                    <Skeleton animation="wave" height={10} style={{ width: '100px' }} />
                                                    <Skeleton animation="wave" height={10} style={{ width: '70px' }} />
                                                </h4>
                                            </React.Fragment>
                                        }
                                        <div class="d-flex align-items-center justify-content-center position-absolute-md right-15 top-0 me-2 m-15">
                                            <a href="/StoriesPost" class="pro_btn">Add to Story</a>
                                            <a href="#" class="pro_mess"><i class="feather-mail font-md"></i></a>

                                            <div className="post-btn-action">
                                                <span class="ms-auto mr-151" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="feather-more-horizontal pro_btn-round-md "></i>

                                                    <div className="mt-0 p-2 pix-dropdown" pix-dropdown="pos: bottom-right;mode:hover ">
                                                        <ul className="pix-nav pix-dropdown-nav text-left">
                                                            <li>
                                                                <div class="card-body p-0 d-flex">
                                                                    <i class="feather-bookmark text-grey-500 me-3 font-lg"></i>
                                                                    <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Save Link <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span></h4>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="card-body p-0 d-flex mt-2">
                                                                    <i class="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                                                                    <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide Post <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="card-body p-0 d-flex mt-2">
                                                                    <i class="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                                                                    <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide all from Group <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="card-body p-0 d-flex mt-2">
                                                                    <i class="feather-lock text-grey-500 me-3 font-lg"></i>
                                                                    <h4 class="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">Unfollow Group <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </span>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="card-body d-block  pro_card shadow-none mb-0 p-0 border-top-xs">
                                        <ul class="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4 mt-0">
                                            <li class="active list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active" href="/Profile">All Loop</a></li>
                                            <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/About">About</a></li>
                                            {/*<li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Friends">Friends</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Photos">Photos</a></li>
                                        <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Videos">Videos</a></li>*/}
                                            <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Followers">Followers</a></li>
                                            <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Following">Following</a></li>
                                            <li class="list-inline-item me-5"><a class="fw-700 me-sm-5 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Settings">Settings</a></li>
                                            <div class="pro_edit_menu">
                                                <a href="/Settings" class="pro_edit_menu_btn">Edit Profile</a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-4 col-xxl-3 col-lg-4 pe-0">

                                <div class="card pro_card shadow-xss rounded-xxl border-0 mb-3 mt-3">
                                    <div class="card-body p-3 border-0">
                                        <div class="row">
                                            <div class="flex justify-around w-full items-center text-center pix-link-reset">
                                                <div>
                                                    <a href="#loops">
                                                        <h4>
                                                            {userInfo?.user?.posts > -1 ?
                                                                userInfo?.user?.posts : <Skeleton width={40} />
                                                            }
                                                        </h4>
                                                        <p>Loop</p>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="/Profile">
                                                        <h4>
                                                            {userInfo?.user?.followingCount > -1 ?
                                                                userInfo?.user?.followingCount : <Skeleton width={40} style={{ margin: 'auto' }} />
                                                            }
                                                        </h4>
                                                        <p>Following</p>
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="/Profile">
                                                        <h4>
                                                            {userInfo?.user?.followersCount > -1 ?
                                                                userInfo?.user?.followersCount : <Skeleton width={40} style={{ margin: 'auto' }} />
                                                            }
                                                        </h4>
                                                        <p>Followers</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="card pro_card shadow-xss rounded-xxl border-0 mb-3 mt-3">
                                    <div class="card-body p-3 border-0">
                                        <div class="row">
                                            <div class="col-12 ps-1">
                                                <h4 class="font-xsss d-block fw-700 mt-2 mb-0">Profile Completion
                                                    <span class="profile_process">87%</span></h4>
                                                <p class="font-xssss fw-500 text-grey-500 lh-26 mb-0">Please complete your profile</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card  pro_card shadow-xss rounded-xxl border-0 mb-3">
                                    <div class="card-body d-block p-4">
                                        <h4 class="fw-700 mb-3 font-xsss text-grey-900">About</h4>
                                        <p class="text-grey-500 lh-24 font-xssss mb-0">
                                            User interface design or user interface engineering is the design of user interfaces for machines and software.
                                        </p>
                                    </div>
                                    <div class="card-body border-top-xs d-flex p_5">
                                        <i class="feather-briefcase text-grey-500 me-3 font-lg"></i>
                                        <h4 class="fw-700 text-grey-500 font-xssss mt-0">UI Designer at <strong> Tripalive Private Limited </strong>
                                        </h4>
                                    </div>

                                    <div class="card-body d-flex pt-0 p_5">
                                        <i class="feather-award text-grey-500 me-3 font-lg"></i>
                                        <h4 class="fw-700 text-grey-500 font-xssss mt-0">Studied at Mahendra Engineering College, Mallasamudram</h4>
                                    </div>
                                    <div class="card-body d-flex pt-0 p_5">
                                        <i class="feather-map-pin text-grey-500 me-3 font-lg"></i>
                                        <h4 class="fw-700 text-grey-500 font-xssss mt-1">Lives in <strong>Coimbatore, Tamil Nadu </strong> </h4>
                                    </div>
                                    <div class="card-body d-flex pt-0 p_5">
                                        <i class="feather-clock text-grey-500 me-3 font-lg"></i>
                                        <h4 class="fw-700 text-grey-500 font-xssss mt-1">Joined <strong>March 2021</strong></h4>
                                    </div>

                                    <div class="card-body d-flex pt-0 p_5">
                                        <i class="feather-rss text-grey-500 me-3 font-lg"></i>
                                        <h4 class="fw-700 text-grey-500 font-xssss mt-1">Followed by <strong>103 people</strong></h4>
                                    </div>
                                    <a href="#" class="pro_edit">Edit Profile</a>
                                    <a href="#" class="pro_edit">Add Work Experience</a>
                                    <a href="#" class="pro_edit mt-50">Add Qualification</a>
                                </div>


                                {/*<div class="card pro_card shadow-xss rounded-xxl border-0 mb-3 ">
                                <div class="card-body pix_photo ">
                                    <h4 class="fw-700 mb-0 font-xssss text-grey-900">Followers 257</h4>
                                    <a href="/Followers" class="pix-see-all">See all</a>
                                </div>
                                <div class="card-body main_friend_lst d-block pt-0 pb-2">                                    
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/photo1.jpg")} class="img-fluid rounded-3 " alt />  
                                            <h4> Jonathan Ali </h4>
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s9.png")} class="img-fluid rounded-3 " alt />  
                                            <h4> John Doe </h4>
                                        </a>
                                    </div>
                                    
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s7.png")} class="img-fluid rounded-3 " alt />
                                            <h4>Rock Smith </h4> 
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s1.png")}  class="img-fluid rounded-3 "  alt /> 
                                            <h4>Joy William </h4> 
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s2.png")} class="img-fluid rounded-3 " alt /> 
                                            <h4>Johnson </h4> 
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s3.png")}  class="img-fluid rounded-3 "  alt /> 
                                            <h4> Davinder  </h4> 
                                        </a>
                                    </div>  
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s4.png")}  class="img-fluid rounded-3 "  alt /> 
                                            <h4>Simon Doe </h4> 
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s5.png")} class="img-fluid rounded-3 " alt /> 
                                            <h4> Gaggu Smith </h4> 
                                        </a>
                                    </div>
                                    <div class="col-6-6 mb-2">
                                        <a href="#" >
                                            <img  src={ require("./components/imgs/s6.png")}  class="img-fluid rounded-3 "  alt /> 
                                            <h4>Amritpal </h4> 
                                        </a>
                                    </div>                                
                                </div>
                                                    </div>  */}

                            </div>

                            <div class="col-xl-8 col-xxl-9 col-lg-8 col_pro_8">

                                <CreatePost user={userInfo} />

                                <>
                                    {loops?.[0]?.url ? (
                                        <>
                                            {loops.map((post) => {
                                                return (
                                                    <div className="post pix-post-radius" id="loops">
                                                        <div className="post-heading">
                                                            <div className="post-avature pix-post-avature-profile">
                                                                <img src={post?.user_id?.avatar || require("../src/components/imgs/default.png")} alt />
                                                            </div>
                                                            <div className="post-title pix-post-name-title text-left">
                                                                <h4 >{post?.user_id?.name}</h4>
                                                                <i class="feather-globe"></i> <time>{moment(post?.created_at).fromNow()}</time>
                                                            </div>
                                                            <div className="post-btn-action">
                                                                <span class="ms-auto mr-151" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <i class="feather-more-horizontal text-grey-900 btn-round-md bg-greylight font-xss"></i>

                                                                    <div className="mt-0 p-2 pix-dropdown" pix-dropdown="pos: bottom-right;mode:hover ">
                                                                        <ul className="pix-nav pix-dropdown-nav text-left">
                                                                            <li>
                                                                                <div class="card-body p-0 d-flex">
                                                                                    <i class="feather-bookmark text-grey-500 me-3 font-lg"></i>
                                                                                    <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Save Link <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span></h4>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div class="card-body p-0 d-flex mt-2">
                                                                                    <i class="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                                                                                    <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide Post <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div class="card-body p-0 d-flex mt-2">
                                                                                    <i class="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                                                                                    <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Hide all from Group <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Save to your saved items</span></h4>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div class="card-body p-0 d-flex mt-2" onClick={() => alert("Unfollowed Succesfully")}>
                                                                                    {post?.user_id?.follow === 1 &&
                                                                                        <>
                                                                                            <i class="feather-lock text-grey-500 me-3 font-lg"></i>
                                                                                            <h4 class="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4" >
                                                                                                Unfollow<span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Unfolow this account</span>
                                                                                            </h4>
                                                                                        </>
                                                                                    }
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </span>
                                                            </div>

                                                        </div>
                                                        <div className="pix-feed-content">
                                                            {/*<p><a href="#">#KaneWilliamson</a> is the <a href="#">#CWC19</a> Player of the Tournament!</p>*/}
                                                            {post?.hashtag?.[0] &&
                                                                <p><a href="#">#{post?.hashtag?.join(' #')}</a></p>
                                                            }
                                                        </div>
                                                        <div className="pix-feed-category">

                                                            <a href="#">{post?.category.join(",")}</a>
                                                        </div>

                                                        <div className="post-description">
                                                            <div className="fullsizeimg">
                                                                {post?.post_type === 1 &&
                                                                    <video src={post?.url} controls="controls" />
                                                                }

                                                                {post?.post_type === 2 &&
                                                                    <div style={{ height: '100px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                                                        <ReactAudioPlayer
                                                                            src={post?.url}
                                                                            autoPlay
                                                                            controls
                                                                        />
                                                                    </div>
                                                                }
                                                                {post?.post_type === 3 &&
                                                                    <img src={post?.url} alt="post" />
                                                                }
                                                                {post?.post_type === 4 &&
                                                                    <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                                                        {post?.text_content?.text}
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>

                                                        {/* Post Action Counts */}
                                                        <div className="post-counts">
                                                            <div class="flex items-center space-x-3">
                                                                <div class="flex items-center">
                                                                    {(post?.isLiked === 1 && post?.likeCount > 2) &&
                                                                        <>
                                                                            <img src={post?.user_id?.avatar || require("../src/components/imgs/default.png")}
                                                                                alt=""
                                                                                class="w-6 h-6 rounded-full border-2 border-white border-gray-900"
                                                                            />
                                                                            <img src={require("./components/imgs/s8.png")} alt="" class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2" />
                                                                            <img src={require("./components/imgs/s5.png")} alt="" class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2" />
                                                                        </>
                                                                    }
                                                                    {(post?.isLiked === 0 && post?.likeCount > 2) &&
                                                                        <>
                                                                            <img src={require("../src/components/imgs/default.png")}
                                                                                alt=""
                                                                                class="w-6 h-6 rounded-full border-2 border-white border-gray-900"
                                                                            />
                                                                            <img src={require("./components/imgs/s8.png")} alt="" class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2" />
                                                                            <img src={require("./components/imgs/s5.png")} alt="" class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2" />
                                                                        </>
                                                                    }
                                                                    {(post?.isLiked === 1 && post?.likeCount === 1) &&
                                                                        <>
                                                                            <img src={post?.user_id?.avatar || require("../src/components/imgs/default.png")}
                                                                                alt=""
                                                                                class="w-6 h-6 rounded-full border-2 border-white border-gray-900"
                                                                            />
                                                                        </>
                                                                    }
                                                                    {(post?.isLiked === 0 && post?.likeCount === 1) &&
                                                                        <>
                                                                            <img src={require("./components/imgs/s5.png")} alt="" class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2" />
                                                                        </>
                                                                    }
                                                                    {(post?.isLiked === 1 && post?.likeCount === 2) &&
                                                                        <>
                                                                            <img src={post?.user_id?.avatar || require("../src/components/imgs/default.png")}
                                                                                alt=""
                                                                                class="w-6 h-6 rounded-full border-2 border-white border-gray-900"
                                                                            />
                                                                            <img src={require("./components/imgs/s5.png")} alt="" class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2" />
                                                                        </>
                                                                    }
                                                                </div>
                                                                <div class="text-gray-100 like_list">
                                                                    {(post?.isLiked === 1 && post?.likeCount > 2) &&
                                                                        <>
                                                                            Liked by <strong> You </strong> and <strong> {post?.likeCount - 1} Others </strong>
                                                                        </>
                                                                    }
                                                                    {(post?.isLiked === 0 && post?.likeCount > 1) &&
                                                                        <>
                                                                            Liked by  <strong> {post?.likeCount} Others </strong>
                                                                        </>
                                                                    }
                                                                    {(post?.isLiked === 1 && post?.likeCount === 1) &&
                                                                        <>
                                                                            Liked by  <strong> You </strong>
                                                                        </>
                                                                    }
                                                                    {(post?.isLiked === 0 && post?.likeCount === 1) &&
                                                                        <>
                                                                            Liked by  <strong> {post?.likeCount} other </strong>
                                                                        </>
                                                                    }
                                                                    {(post?.isLiked === 1 && post?.likeCount === 2) &&
                                                                        <>
                                                                            Liked by <strong>You</strong> and <strong> {post?.likeCount} other </strong>
                                                                        </>
                                                                    }
                                                                </div>
                                                                <a href="#" className="ft-right ms-auto ">{post?.commentCount} Comments</a>
                                                            </div>
                                                        </div>
                                                        <div className="pix-post-bt">
                                                            <div class="card-body d-flex p-0 mt-1">
                                                                <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                                                                    {post?.isLiked === 0 ?
                                                                        <i
                                                                            onClick={(e) => likePost(e, post?._id)}
                                                                            style={{ marginRight: '8px' }}
                                                                        //class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss "
                                                                        >
                                                                            <img src={unLike} width={17} style={{ paddingBottom: '5px' }} />
                                                                        </i>
                                                                        :
                                                                        <i
                                                                            onClick={(e) => unLikePost(e, post?._id)}
                                                                            style={{ marginRight: '8px' }}
                                                                        //class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss "
                                                                        >
                                                                            <img src={Like} width={17} style={{ paddingBottom: '5px' }} />
                                                                        </i>

                                                                    }
                                                                    {post?.likeCount} Like
                                                                </a>
                                                                <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
                                                                    <i class="feather-message-square icon-white text-grey-900 btn-round-sm font-lg"></i>
                                                                    {post?.commentCount} Comment
                                                                </a>
                                                                <a href="#" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
                                                                    <i class="feather-share-2 text-grey-900 icon-white btn-round-sm font-lg"></i>
                                                                    <span class="d-none-xs">Share</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="post-comments">
                                                            <a href="#" className="view-more-comment text-left"> Veiw  Comments</a>
                                                            <div className="post-add-comment">
                                                                <div className="post-add-comment-avature">
                                                                    <img src={post?.user_id?.avatar || require("../src/components/imgs/default.png")} style={{ width: "37px" }} alt />
                                                                </div>
                                                                <div className="post-add-comment-text-area">
                                                                    <input type="text" placeholder="Write your comment..." />
                                                                    <div className="icons">
                                                                        <span className="feather-paperclip" />
                                                                        <span className="feather-smile" />
                                                                        <span className="feather-image" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </>
                                    ) : (
                                        <>
                                            {userDetail?.user?.posts > 0 ?
                                                <div className="post pix-post-radius">
                                                    <div className="post-heading">

                                                        <Skeleton variant="circle" width={45} height={45} />
                                                        <div className="post-title pix-post-name-title text-left">
                                                            <h4><Skeleton animation="wave" height={10} style={{ width: '100px' }} /></h4>
                                                            <i class=""></i> <time><Skeleton animation="wave" height={10} style={{ width: '160px' }} /></time>
                                                        </div>

                                                    </div>
                                                    <Skeleton
                                                        animation="wave"
                                                        height={280} style={{ width: '100%', transform: 'scale(1, 0.9)' }} />
                                                    <div className="post-counts">
                                                        <div class="flex items-center space-x-3">
                                                            <div class="flex items-center">
                                                                <Skeleton variant="circle" height={25} width={25} />
                                                            </div>
                                                            <div class="text-gray-100 like_list">
                                                                <Skeleton animation="wave" height={10} style={{ width: '160px' }} />
                                                            </div>
                                                            <a href="#" className="ft-right ms-auto "><Skeleton animation="wave" height={10} style={{ width: '40px' }} /></a>
                                                        </div>

                                                    </div>
                                                    <div className="pix-post-bt">

                                                        <div class="card-body d-flex p-0 mt-1">
                                                            <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr">
                                                                <i class=""></i>
                                                                <Skeleton animation="wave" height={20} style={{ width: '40px' }} />
                                                            </a>
                                                            <a href="#" class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
                                                                <i class=""></i>
                                                                <Skeleton animation="wave" height={20} style={{ width: '40px' }} />
                                                            </a>
                                                            <a href="#" class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss">
                                                                <i class=""></i>
                                                                <span class="d-none-xs"><Skeleton animation="wave" height={20} style={{ width: '40px' }} /></span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div
                                                    className="post pix-post-radius"
                                                    style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                >
                                                    <div style={{ display: 'block' }}>
                                                        <img src={Picture2} width={145} style={{}} />
                                                    </div>
                                                    <div>
                                                        <h3>No Loops Yet</h3>
                                                    </div>
                                                </div>
                                            }
                                        </>
                                    )
                                    }
                                </>
                            </div>

                            {/* <Stories
			stories={stories}
			defaultInterval={1500}
			width={432}
			height={768}
            loop={true}
		/>                     */}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Profile;