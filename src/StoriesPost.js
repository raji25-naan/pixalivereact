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
    const [stories, setStories] = useState([]);
    const [followingStory, setFollowingStory] = useState([]);
    console.log(followingStory);
    console.log(stories);

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
        getFollowingStories();
    }, [])


    // user Story
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
                e['header'] = {
                    heading: e['user_id']['name'],
                    subheading: moment(e['created_at']).fromNow(),
                    profileImage: e['user_id']['avatar'],
                    seeMore: 'SeeMore',
                }
                if (i == CustData.length - 1) {

                    console.log(CustData);
                    setStories(CustData)
                }
            })
        } else {
            //dummy
            // viewStory();
            return false;
        }
    }

    // Following Stories
    const getFollowingStories = async () => {
        const { data } = await API.get(`/getStory`, { headers: { "token": `Bearer ${token}` } });
        setFollowingStory(data?.result);
    }

    const viewFollowStory = async (_id) => {
        const { data } = await API.get(
            `/getStoryById?user_id=${_id}`, { headers: { "token": `Bearer ${token}` } }
        );
        setSelected(true);
        console.log(data?.stories);
        let CustData = data?.stories;
        console.log(CustData);
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
                e['header'] = {
                    heading: e['user_id']['name'],
                    subheading: moment(e['created_at']).fromNow(),
                    profileImage: e['user_id']['avatar']
                }
                if (i == CustData.length - 1) {

                    console.log(CustData);
                    setStories(CustData)
                }
            })
        } else {
            // Some Actions here if Story is not available
            return false;
        }
    }

    // OnChange for getting the url of the Selected file from firebase
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
        setStory({ ...story, url: '' });
        viewStory();
    }

    const viewStory = () => setSelected((prevSetSelected) => !prevSetSelected);

    return (

        <div>

            <div class="stories-wraper active">
                <div class="status-story">
                    <a href="/Home" class="close-story"><i class="uil uil-times"></i></a>
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="stories-users">
                                <h5>Stories</h5>
                                <div class="my-status">
                                    <figure><img src={profile?.user?.avatar || require("../src/components/imgs/default.png")} alt /></figure>
                                    <span href="#" title="" class="main-btn  pix-btn-upload">
                                        Add New
                                        <input type="file" onChange={onChange} id="publisher-photo" name="postMusic" accept="All" />
                                        {/* <FileBase 
                                   type="file"
                                   id="filebase"
                                   multiple={false}
                                   onDone={({ base64 }) =>
                                    setStory({ ...story, media: base64 })
                                   }
                                 /> */}
                                    </span>
                                    {isStory ?
                                        <div class="story-user" onClick={() => viewFollowStory(id)}>
                                            <span>My Story</span>
                                            <ins>No updates</ins>
                                        </div>
                                        :
                                        <div class="story-user">
                                            <span>My Story</span>
                                            <ins>No updates</ins>
                                        </div>
                                    }
                                </div>
                                <div class="my-status">
                                    <span onClick={onHandleSubmit} title="" class="main-btn  pix-btn-upload">
                                        Set
                                    </span>
                                </div>
                                <ul class="frnds-stories ps-container ps-theme-default ps-active-y" data-ps-id="d411c160-c98b-9148-b7e5-d81b332e4247">
                                    {followingStory.map((story) => {
                                        return (
                                            <li>
                                                <figure><img src={story?.[0]?.user_id?.avatar || require("./components/imgs/store2.jpg")} alt /></figure>
                                                <div class="story-user" onClick={() => viewFollowStory(story?.[0]?.user_id?._id)}>
                                                    <span>{story?.[0]?.user_id?.name}</span>
                                                    <ins>yesterday</ins>
                                                </div>
                                            </li>
                                        )
                                    })}
                                    <hr />
                                    <li>
                                        <figure><img src={require("./components/imgs/store2.jpg")} alt /></figure>
                                        <div class="story-user" onClick={getFollowingStories}>
                                            <span>Emily doll</span>
                                            <ins>yesterday</ins>
                                        </div>
                                    </li>
                                    <li>
                                        <figure><img src={require("./components/imgs/store3.jpg")} alt /></figure>
                                        <div class="story-user">
                                            <span>Jhon Borny</span>
                                            <ins>3 days ago</ins>
                                        </div>
                                    </li>
                                    <li>
                                        <figure><img src={require("./components/imgs/store4.jpg")} alt /></figure>
                                        <div class="story-user">
                                            <span>Sarah Khan</span>
                                            <ins>2 days ago</ins>
                                        </div>
                                    </li>
                                    <li>
                                        <figure><img src={require("./components/imgs/store5.jpg")} alt /></figure>
                                        <div class="story-user">
                                            <span>Zara Hayat</span>
                                            <ins>1 day ago</ins>
                                        </div>
                                    </li>
                                    <li>
                                        <figure><img src={require("./components/imgs/store1.jpg")} alt /></figure>
                                        <div class="story-user">
                                            <span>Zing Jang</span>
                                            <ins>2 days ago</ins>
                                        </div>
                                    </li>

                                    <li>
                                        <figure><img src={require("./components/imgs/store1.jpg")} alt /></figure>
                                        <div class="story-user">
                                            <span>Emma watson</span>
                                            <ins>jan,12 2020</ins>
                                        </div>
                                    </li>
                                    <li>
                                        <figure><img src={require("./components/imgs/store4.jpg")} alt /></figure>
                                        <div class="story-user">
                                            <span>Sarah Khan</span>
                                            <ins>2 days ago</ins>
                                        </div>
                                    </li>
                                    <li>
                                        <figure><img src={require("./components/imgs/store5.jpg")} alt /></figure>
                                        <div class="story-user">
                                            <span>Zara Hayat</span>
                                            <ins>1 day ago</ins>
                                        </div>
                                    </li>
                                    <li>
                                        <figure><img src={require("./components/imgs/store1.jpg")} alt /></figure>
                                        <div class="story-user">
                                            <span>Zing Jang</span>
                                            <ins>2 days ago</ins>
                                        </div>
                                    </li>

                                    <li>
                                        <figure><img src={require("./components/imgs/store1.jpg")} alt /></figure>
                                        <div class="story-user">
                                            <span>Emma watson</span>
                                            <ins>jan,12 2020</ins>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {selected ?
                            <div class="col-lg-8" style={{ display: 'flex', justifyContent: 'center' }}>
                                <Stories
                                    stories={stories}
                                    defaultInterval={1000}
                                    width={432}
                                    height={800}
                                    loop={true}
                                />
                            </div>
                            :
                            <>
                                <div class="col-lg-8">
                                    {/* <div id="btns-wrapper"><button class="selector-btn selected-btn" id="selector0"></button><div class="prog-bar">
                                        <span id="prog-bar0"></span></div><button class="selector-btn" id="selector1"></button>
                                        <div class="prog-bar"><span id="prog-bar1"></span></div><button class="selector-btn" id="selector2">
                                        </button><div class="prog-bar"><span id="prog-bar2"></span></div><button class="selector-btn" id="selector3"></button></div> */}
                                    <div id="slideshow" style={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
                                        {video ?
                                            <video autoplay controls style={{ height: '500px', width: '400px' }} class="slide fade-in" src={story?.url} alt="" />
                                            :
                                            <img style={{ height: '500px' }} class="slide fade-in" src={story?.url} alt="" />
                                        }
                                        <img class="slide fade-in" src="https://placehold.it/856x380/6FC6F7/FFFFFF&amp;text=2" alt="" />
                                        <img class="slide fade-out" src="https://placehold.it/856x380/f3e686/FFFFFF&amp;text=3" alt="" />
                                        <img class="slide fade-out" src="https://placehold.it/856x380/71eea3/FFFFFF&amp;text=4" alt="" />

                                    </div>
                                </div>
                            </>
                        }

                        {/* <Stories
			stories={stories}
			defaultInterval={1500}
			width={432}
			height={768}
            loop={true}
		/>           */}
                    </div>
                </div>
            </div>


        </div >

    );
}
export default StoriesPost;