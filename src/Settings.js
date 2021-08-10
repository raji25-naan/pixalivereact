import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';
import Header from './Header';
import { Skeleton } from '@material-ui/lab';
import FileBase from 'react-file-base64';
import './Settings.css';
import Swal from 'sweetalert2';
import { getUserInfo } from './actions/userInfo';
import DatePicker from 'react-date-picker';

function Settings(props) {
    const profile = JSON.parse(localStorage.getItem('profile'));
    const userDetail = JSON.parse(localStorage.getItem('userDetail'));
    const byPhone = JSON.parse(localStorage.getItem('phone'));
    const userId = profile?.user?._id;
    let token = profile?.token;
    const dispatch = useDispatch();
    const history = useHistory();
    const userInfo = props?.user;
    //console.log(userDetail);
    const [value, onChange] = useState(userDetail?.user?.DOB);
    //console.log(value);
    const [user, setUser] = useState({
        name: userDetail?.user?.name,
        username: userDetail?.user.username,
        email: userDetail?.user?.email,
        phone: userDetail?.user?.phone,
        avatar: userDetail?.user?.avatar,
        DOB: userDetail?.user?.DOB,
        gender: userDetail?.user?.gender,
        Location: userDetail?.user?.Location,
        Website: userDetail?.user?.Website,
        profession: userDetail?.user?.profession,
        bio: userDetail?.user?.bio,
        user_id: userId,
        phone_verified: userDetail?.user?.phone_verified,
        isActive: userDetail?.user?.isActive,
        isQualification: userDetail?.user?.isQualification,
        isWorkExperience: userDetail?.user?.isWorkExperience,
        isemail: userDetail?.user?.isemail,
        isphone: userDetail?.user?.isphone,
        CurrentLocation: userDetail?.user?.CurrentLocation,
        MaritalStatus: userDetail?.user?.MaritalStatus,
        email_verified: userDetail?.user?.email_verified,
        facebook_signin: userDetail?.user?.facebook_signin,
        private: userDetail?.user?.private

    });


    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        console.log(user?.DOB);
        const { data } = await axios.post(
            "http://test.pixalive.me/api/user/updateProfile", user, { headers: { "token": `Bearer ${token}` } }
        );
        if (data?.success) {
            Swal.fire({
                icon: 'success',
                iconColor: '#f9751c',
                title: data?.message,
                showConfirmButton: false,
                timer: 1800
            })

            dispatch(getUserInfo());

            history.push('./Home');

        } else {
            Swal.fire({
                icon: 'error',
                title: data?.message,
                showConfirmButton: false,
                timer: 1800
            });
        }
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
                                            <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Followers">Followers</a></li>
                                            <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Following">Following</a></li>
                                            <li class="active list-inline-item me-5"><a class="active fw-700 me-sm-5 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href="/Settings">Settings</a></li>
                                            <div class="pro_edit_menu">
                                                <a href="#" class="pro_edit_menu_btn">Edit Profile</a>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-4 col-xxl-3 col-lg-4 pe-0">
                                <nav class="responsive-tab style-3 setting-menu  mt-16 pro-abt-tab" >
                                    <ul>
                                        <li class="pix-active"><a href="#update"> <i class="feather-settings"></i>General Information </a></li>
                                        <li><a href="#"> <i class="feather-user"></i>Profile </a></li>
                                        <li><a href="#"> <i class="feather-lock"></i>Password</a></li>
                                        <li><a href="#"> <i class="feather-shield"></i>Varified Account </a></li>
                                        <li><a href="#"> <i class="feather-bell"></i>Notification Settings</a></li>
                                        <li><a href="#"> <i class="feather-message-square"></i>Messages Settings</a></li>
                                        <li><a href="#"> <i class="feather-user-x"></i>Blocked Users</a></li>
                                        <li><a href="#"> <i class="feather-info"></i>Account Information</a></li>
                                        <li><a href="#"> <i class="feather-log-out"></i>Logout</a></li>
                                    </ul>
                                </nav>
                            </div>


                            <div class="col-xl-8 col-xxl-9 col-lg-8 col_pro_8" id="update">
                                <div class="card pro_card shadow-xss rounded-xxl border-0 mb-3 general_setting">
                                    <div class="card-body d-block p-4 bt-border">
                                        <h4 class="fw-700 mb-1 font-xsss text-grey-900 g-mb-0">General Information</h4>
                                    </div>

                                    {/* User Edit Form */}

                                    <form class="pix-child-width-1-2@s pix-grid-small p-4 pix-grid" onSubmit={onSubmit}>


                                        <div class="pd-cnt" style={{ paddingLeft: '0px' }}>
                                            <div
                                                style={{ margin: 'auto' }}
                                                class="bg-gradient-to-tr from-yellow-600 to-pink-600 p-1 rounded-full w-d-100">
                                                <a href="#">
                                                    {user.avatar ?
                                                        <img src={user.avatar || require("../src/components/imgs/default.png")} class="bg-gray-200 border-white rounded-full w-d-100" />
                                                        :
                                                        <img src={userInfo?.user?.avatar || require("../src/components/imgs/default.png")} class="bg-gray-200 border-white rounded-full w-d-100" />
                                                    }
                                                </a>
                                                <div
                                                    pix-dropdown="mode:click ; animation: pix-animation-slide-bottom-small"
                                                    className="dropdown-notifications rounded"
                                                    id="profile"
                                                >

                                                    <FileBase
                                                        type="file"
                                                        id="filebase"
                                                        multiple={false}
                                                        onDone={({ base64 }) =>
                                                            setUser({ ...user, avatar: base64 })
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="pix-first-column" style={{ width: "100%" }}>
                                            <h5 class="pix-text-bold mb-2"> Name </h5>
                                            <input
                                                type="text"
                                                style={{ marginBottom: '15px' }}
                                                class="pix-input"
                                                name="name"
                                                value={user?.name}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                        <div style={{ width: "100%" }}>
                                            <h5 class="pix-text-bold mb-2"> UserName </h5>
                                            <input
                                                type="text"
                                                class="pix-input"
                                                name="username"
                                                placeholder={userInfo?.user?.username}
                                                value={user.username}
                                                //onChange={(e) => handleChange(e)}
                                                readOnly
                                            />
                                        </div>
                                        {byPhone === true ?
                                            <>
                                                <div class="pix-grid-margin pix-first-column">
                                                    <h5 class="pix-text-bold mb-2"> Email ID </h5>
                                                    <input
                                                        type="text"
                                                        class="pix-input"
                                                        name="email"
                                                        placeholder={userInfo?.user?.email}
                                                        value={user.email}
                                                        onChange={(e) => handleChange(e)}
                                                    />
                                                </div>
                                                <div class="pix-grid-margin">
                                                    <h5 class="pix-text-bold mb-2"> Phone </h5>
                                                    <input
                                                        type="text"
                                                        class="pix-input"
                                                        name="phone"
                                                        value={userInfo?.user?.phone}
                                                        readOnly
                                                    />
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div class="pix-grid-margin pix-first-column">
                                                    <h5 class="pix-text-bold mb-2"> Email ID </h5>
                                                    <input
                                                        type="text"
                                                        class="pix-input"
                                                        name="email"
                                                        value={userInfo?.user?.email}
                                                        readOnly
                                                    />
                                                </div>
                                                <div class="pix-grid-margin">
                                                    <h5 class="pix-text-bold mb-2"> Phone </h5>
                                                    <input
                                                        type="text"
                                                        class="pix-input"
                                                        name="phone"
                                                        value={user.phone}
                                                        onChange={(e) => handleChange(e)}
                                                    />
                                                </div>
                                            </>
                                        }
                                        <div class="pix-first-column">
                                            <h5 class="pix-text-bold mb-2"> DOB </h5>
                                            <input
                                                type="date"
                                                name="DOB"
                                                placeholder="dd-mm-yyyy"
                                                min="1997-01-01" max="2021-12-31"
                                                class="pix-input"
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                        <div>
                                            <h5 class="pix-text-bold mb-2"> Gender </h5>
                                            <select
                                                type="text"
                                                name="gender"
                                                class="pix-input"
                                                //value={user.gender}
                                                onChange={(e) => handleChange(e)}
                                            >
                                                <option value="">--{user?.gender}--</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                        <div class="pix-first-column">
                                            <h5 class="pix-text-bold mb-2"> location </h5>
                                            <input
                                                type="text"
                                                name="Location"
                                                class="pix-input"
                                                value={user.Location}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                        <div>
                                            <h5 class="pix-text-bold mb-2"> website </h5>
                                            <input
                                                type="text"
                                                name="Website"
                                                class="pix-input"
                                                value={user.Website}
                                                onChange={(e) => handleChange(e)}
                                            />
                                        </div>
                                        <div class="pix-first-column" style={{ width: "100%" }}>
                                            <h5 class="pix-text-bold mb-2"> Profession </h5>
                                            <input
                                                type="text"
                                                name="profession"
                                                class="pix-input"
                                                value={user.profession}
                                                onChange={(e) => handleChange(e)}

                                            />
                                        </div>
                                        <div class="pix-grid-margin general_setting_wth">
                                            <h5 class="pix-text-bold mb-2"> Bio </h5>
                                            <textarea
                                                name="bio"
                                                class="h100 pix-input"
                                                cols="30"
                                                rows="10"
                                                value={user.bio}
                                                onChange={(e) => handleChange(e)}
                                                spellcheck="false">
                                            </textarea>
                                        </div>
                                        <div class="pix-first-column"></div>
                                        <div>
                                            {/*<button type="Submit" class="pro_general_btn">Save</button>*/}
                                            <button
                                                className="pix-btn pix-register-btn signup_wt ml-4"
                                                style={{ marginTop: '20px' }}
                                                type="submit"
                                            >
                                                {/*Agree &amp; Join*/}
                                                Submit
                                            </button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Settings;