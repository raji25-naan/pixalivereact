import React, { useState, useEffect } from 'react';
import { API } from './api/index';
import FileBase from 'react-file-base64';
import Stories from 'react-insta-stories';
import axios from 'axios';
import { app } from './firebase';
import Swal from 'sweetalert2';
import moment from 'moment';
const StoriesPost = (props) => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    let id = profile?.user?._id;
    let token = profile?.token;
    const [selected, setSelected] = useState(false);
    const [story, setStory] = useState({ url: '' });
    const [video, setVideo] = useState(false);
    const [isStory, setIsStory] = useState(false);
    const [stories, setStories] = useState();
    // const stories = [
    //     { url: 'https://picsum.photos/1080/1920', seeMore: '', header: { heading: 'Mohit Karekar', subheading: 'Posted 5h ago', profileImage: 'https://picsum.photos/1000/1000' } },
    //     { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } },
    //     { url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', header: { heading: 'mohitk05/react-insta-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' } },
    //     { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video', duration: 1000 },
    //     { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', type: 'video', seeMore: <h2>Swipe Up</h2> },
    //     { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video' },
    //     'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80']

    useEffect(() => {
        getStory();
    }, [])

    const getStory = async () => {
        const { data } = await API.get(
            `/getStoryById?user_id=${id}`, { headers: { "token": `Bearer ${token}` } }
        );
        let CustData = data?.stories;
        if (CustData.length > 0) {
            setIsStory(true)
            // eslint-disable-next-line array-callback-return
            CustData.map(function (e, i) {

                let checkType = e['url'].includes('.mp4')
                console.log(checkType);
                if (checkType) {
                    e['type'] = 'video';
                    e['duration'] = 1000;
                }
                e['header'] = { heading: e['user_id']['name'], subheading: moment(e['created_at']).fromNow(), profileImage: e['user_id']['avatar'] }
                if (i == CustData.length - 1) {

                    console.log(CustData);
                    setStories(CustData)
                }
            })
        } else {

        }
    }

    const getFollowingStories = async () => {
        const { data } = await API.get(`/getStory`, { headers: { "token": `Bearer ${token}` } });
        console.log(data);
    }

    const onChange = async (e) => {
        setSelected(false);
        const file = e.target.files[0];
        const storageRef = app.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setStory({ ...story, url: await fileRef.getDownloadURL() });
        let link = await fileRef.getDownloadURL();
        if (link.includes('mp4')) {
            setVideo(true);
        }
    }

    const onHandleSubmit = async () => {
        console.log(story);
        console.log();
        const { data } = await API.post(
            "/addStories", story, { headers: { "token": `Bearer ${token}` } }
        );
        console.log(data)
        getStory();
        setStory({ ...story, url: '' })
    }

    const viewStory = () => setSelected((prevSetSelected) => !prevSetSelected);

    return (

        <div>


            <section className="element-modal section-pt-space section-pb-space ratio2_3">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="modal-box">
                                <div className="card">
                                    <div className="img-section">
                                        <img src="../assets/images/modal-img/story.jpg"
                                            className="img-fluid blur-up lazyload bg-img" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">story modal</h5>
                                        <a href="#" className="btn btn-solid" data-bs-toggle="modal" data-bs-target="#storyModel">
                                            open modal
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>



            <div className="modal story-model hide" data-backdrop="static" id="storyModel" tabindex="-1" role="dialog" aria-hidden="fasle">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="story-bg">
                                <div className="store-container p-0">
                                    <div className="row m-0">
                                        <div className="left-box col-xl-3 col-lg-4">
                                            <div className="model-title">
                                                <div className="title-main">
                                                    <h2>stories</h2>
                                                </div>
                                                <div className="title-setting">
                                                    <ul>
                                                        <li><a href="#">archive</a></li>
                                                        <li><a href="#">settings</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="modal-flex">
                                                <div className="add-story">
                                                    <h4 className="story-title">your story</h4>
                                                    <div className="media list-media">
                                                        <div className="story-img" data-bs-toggle="modal" data-bs-target="#addStory">
                                                            <div className="user-img">
                                                                <img src={require("./components/imgs/s7.png")}
                                                                    className="img-fluid blur-up  bg-img" alt="user" />
                                                            </div>
                                                            <div className="add-icon">
                                                                <div className="icon">
                                                                    <img src={require("./components/imgs/plus.png")}
                                                                        className="img-fluid blur-up " alt="plus" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <h5>add story</h5>
                                                            <h6>share your photos or video</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="friend-story">
                                                    <h4 className="story-title">all stories</h4>
                                                    <div className="slider-nav">
                                                        <div>
                                                            <div className="media list-media mtb-8">
                                                                <div className="story-img seen">
                                                                    <div className="user-img">
                                                                        <img src={require("./components/imgs/s1.png")}
                                                                            className="img-fluid blur-up lazyload bg-img"
                                                                            alt="user" />
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h5>Petey Cruiser</h5>
                                                                    <h6>2 hours ago</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="media list-media mtb-8">
                                                                <div className="story-img seen">
                                                                    <div className="user-img">
                                                                        <img src={require("./components/imgs/s2.png")}
                                                                            className="img-fluid blur-up lazyload bg-img"
                                                                            alt="user" />
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h5>Anna Sthesia</h5>
                                                                    <h6>3 hours ago</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="media list-media mtb-8">
                                                                <div className="story-img">
                                                                    <div className="user-img">
                                                                        <img src={require("./components/imgs/s3.png")}
                                                                            className="img-fluid blur-up lazyload bg-img"
                                                                            alt="user" />
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h5>Paul Molive</h5>
                                                                    <h6>5 hours ago</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="media list-media mtb-8">
                                                                <div className="story-img">
                                                                    <div className="user-img">
                                                                        <img src={require("./components/imgs/s4.png")}
                                                                            className="img-fluid blur-up lazyload bg-img"
                                                                            alt="user" />
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h5>Anna Mull</h5>
                                                                    <h6>5 hours ago</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="media list-media mtb-8">
                                                                <div className="story-img">
                                                                    <div className="user-img">
                                                                        <img src={require("./components/imgs/s5.png")}
                                                                            className="img-fluid blur-up lazyload bg-img"
                                                                            alt="user" />
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h5>Paige Turner</h5>
                                                                    <h6>5 hours ago</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="media list-media mtb-8">
                                                                <div className="story-img">
                                                                    <div className="user-img">
                                                                        <img src={require("./components/imgs/s6.png")}
                                                                            className="img-fluid blur-up lazyload bg-img"
                                                                            alt="user" />
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h5>Bob Frapples</h5>
                                                                    <h6>5 hours ago</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="media list-media mtb-8">
                                                                <div className="story-img">
                                                                    <div className="user-img">
                                                                        <img src={require("./components/imgs/s6.png")}
                                                                            className="img-fluid blur-up lazyload bg-img"
                                                                            alt="user" />
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h5>Bob Frapples</h5>
                                                                    <h6>5 hours ago</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="media list-media mtb-8">
                                                                <div className="story-img">
                                                                    <div className="user-img">
                                                                        <img src={require("./components/imgs/s6.png")}
                                                                            className="img-fluid blur-up lazyload bg-img"
                                                                            alt="user" />
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h5>Bob Frapples</h5>
                                                                    <h6>5 hours ago</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="media list-media mtb-8">
                                                                <div className="story-img">
                                                                    <div className="user-img">
                                                                        <img src={require("./components/imgs/s6.png")}
                                                                            className="img-fluid blur-up lazyload bg-img"
                                                                            alt="user" />
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h5>Bob Frapples</h5>
                                                                    <h6>5 hours ago</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="media list-media mtb-8">
                                                                <div className="story-img">
                                                                    <div className="user-img">
                                                                        <img src={require("./components/imgs/s6.png")}
                                                                            className="img-fluid blur-up lazyload bg-img"
                                                                            alt="user" />
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h5>Bob Frapples</h5>
                                                                    <h6>5 hours ago</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="media list-media mtb-8">
                                                                <div className="story-img">
                                                                    <div className="user-img">
                                                                        <img src={require("./components/imgs/s6.png")}
                                                                            className="img-fluid blur-up lazyload bg-img"
                                                                            alt="user" />
                                                                    </div>
                                                                </div>
                                                                <div className="media-body">
                                                                    <h5>Bob Frapples</h5>
                                                                    <h6>5 hours ago</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="right-box col-xl-9 col-lg-8 p-0">
                                            <a href="#" data-bs-dismiss="modal">
                                                <i className="feather-x close"></i></a>
                                            <div className="sliderContainer">
                                                <div className="slider pix-single-item">
                                                    <div>
                                                        <div className="story-image"><img src={require("./components/imgs/store.jpg")}
                                                            className="img-fluid blur-up lazyload" alt="" /></div>
                                                    </div>
                                                    <div>
                                                        <div className="story-image"><img src={require("./components/imgs/store1.jpg")}
                                                            className="img-fluid blur-up lazyload" alt="" /></div>
                                                    </div>
                                                    <div>
                                                        <div className="story-image"><img src={require("./components/imgs/store2.jpg")}
                                                            className="img-fluid blur-up lazyload" alt="" /></div>
                                                    </div>
                                                    <div>
                                                        <div className="story-image"><img src={require("./components/imgs/store3.jpg")}
                                                            className="img-fluid blur-up lazyload" alt="" /></div>
                                                    </div>
                                                    <div>
                                                        <div className="story-image"><img src={require("./components/imgs/store.jpg")}
                                                            className="img-fluid blur-up lazyload" alt="" /></div>
                                                    </div>

                                                </div>
                                                <div className="progressBarContainer">
                                                    <div className="item">
                                                        <span data-slick-index="0" className="progressBar"></span>
                                                    </div>
                                                    <div className="item">
                                                        <span data-slick-index="1" className="progressBar"></span>
                                                    </div>
                                                    <div className="item">
                                                        <span data-slick-index="2" className="progressBar"></span>
                                                    </div>
                                                    <div className="item">
                                                        <span data-slick-index="3" className="progressBar"></span>
                                                    </div>
                                                    <div className="item">
                                                        <span data-slick-index="4" className="progressBar"></span>
                                                    </div>
                                                    <div className="item">
                                                        <span data-slick-index="5" className="progressBar"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reply-section">
                                                <div className="reply-form">
                                                    <input className="form-control" placeholder="reply..." />
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div >

    );
}
export default StoriesPost;