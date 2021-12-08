import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import { Skeleton } from '@material-ui/lab'

const Followers = (props) => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    let id = profile?.user?._id;
    let token = profile?.token;
    const userInfo = props?.user;
    const loader = [1, 2, 3, , 4, 5, 6];
    const [followers, steFollowers] = useState([]);


    useEffect(() => {
        getFollowers();
    }, [])

    const getFollowers = async () => {
        const { data } = await axios.get(
            `http://test.pixalive.me/api/user/get_followers?id=${id}`, { headers: { "token": `Bearer ${token}` } }
        )
        steFollowers(data?.result);
    }

    return (
        <div>
            <div className="pix-bg">
                <Header {...userInfo} />

                <div class="pix-container profile_main_content">
                    <div class="container pro-container m-auto">

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card pro_card_top border-0 p-0 bg-white shadow-xss rounded-xxl">
                                    <div class="card-body h250 p-0 rounded-xxl overflow-hidden m-3"></div>
                                    <div class="card-body p-0 position-relative-pro">
                                        {userInfo?.user?.username ?
                                            <figure class="avatar_profile z-index-1">
                                                <img
                                                    src={userInfo?.user?.avatar || require("../src/components/imgs/default.png")}
                                                    alt="image" class="rounded-circle"
                                                />
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
                                            <a href="#" class="pro_btn">Add to Story</a>
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
                                            <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Profile">All Loop</a></li>
                                            <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/About">About</a></li>
                                            <li class="active list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active" href="/Followers">Followers</a></li>
                                            <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Following">Following</a></li>
                                            <li class="list-inline-item me-5"><a class="fw-700 me-sm-5 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Settings">Settings</a></li>
                                            <div class="pro_edit_menu">
                                                <a href="#" class="pro_edit_menu_btn">Edit Profile</a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                            <div class="col-xl-12 col-xxl-12 col-lg-12">
                                <div class="section-small profile_friends">
                                    <div class="pro_friend_title">
                                        <h3>Followers {followers.length}</h3>
                                    </div>
                                    <div class="pro_friend_list">
                                        <a href="#">Friend Requests</a>
                                        <a href="#">Find Friends</a>
                                        <div className="post-btn-action pro_friend_list_more">
                                            <span class="ms-auto mr-151" id="dropdownMenu4" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="feather-more-horizontal pro_btn-round-md "></i>
                                                <div className="mt-0 p-2 pix-dropdown" pix-dropdown="pos: bottom-right;mode:hover ">
                                                    <ul className="pix-nav pix-dropdown-nav text-left">
                                                        <li>
                                                            <div class="card-body p-0 d-flex">
                                                                <i class="feather-shield text-grey-500 me-3 font-lg"></i>
                                                                <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">Edit Privacy
                                                                    <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Add this to your saved items</span>
                                                                </h4>
                                                            </div>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="row  ml-101 ">
                                        {followers?.[0]?.name ?
                                            <>
                                                {followers
                                                    .map((people) => {
                                                        return (
                                                            <div class="col-2">
                                                                <a href={`/ViewProfile/${people?._id}`}>
                                                                    <div class="user-data animate-this">
                                                                        <div class="user-data-media">
                                                                            <img src={people?.avatar || require("../src/components/imgs/default.png")} alt="image" />
                                                                        </div>
                                                                        <div class="user-data-content">
                                                                            <h4> {people?.name} </h4>
                                                                            <span>26 mutual friends</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </>
                                            :
                                            <>
                                                {loader.map(() => {
                                                    return (
                                                        <Skeleton style={{ width: '16%', height: '250px', marginLeft: '2px', marginRight: '2px' }} />
                                                    )
                                                })
                                                }
                                            </>
                                        }
                                    </div>


                                    {/* <div class="pix-flex pix-flex-center mt-4 mt-lg-8">
                                <a href="#" class="button secondary small px-11 circle"> Veiw more </a>
                            </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Followers;