import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { API } from './api';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import CreatePost from './CreatePost';
import Stories from './Stories';
import RightSidebar from './RightSidebar';
import Hastag02 from './components/imgs/create-post/hastag_Outlined.png';


function Searchresults(props) {
    const profile = JSON.parse(localStorage.getItem('profile'));
    let token = profile?.token;
    const { name } = useParams();
    const { id } = useParams();
    const [hashDetail, sethashDetail] = useState();
    console.log(hashDetail);
    console.log(name);
    console.log(id);

    useEffect(() => {
        getHashDetails();
        getHashPost();
    }, [])

    const getHashPost = async () => {
        let hash = { hashtag: name };
        const { data } = await API.post(`/getPostByhashtag`, hash, { headers: { "token": `Bearer ${token}` } });
        console.log(data);
    }

    const getHashDetails = async () => {
        let hastag = { search_hash: name };
        const { data } = await API.post(`/fetch_hashtag`, hastag, { headers: { "token": `Bearer ${token}` } });
        sethashDetail(data?.result?.[0]);
        console.log(data);
    }

    // Follow Hash Tags
    const follow = async (id) => {
        let following_id = { following_id: id, type: '1' }
        const { data } = await API.post(
            `/createFollowNew`, following_id, { headers: { "token": `Bearer ${token}` } }
        )
        alert(data?.message)

    }

    const followHash = async (id, name) => {
        let hash = {
            hashId: id,
            hashtag: name,
            type: '1'
        }
        const { data } = await API.post(
            `/follow_unfollow_hashtag`, hash, { headers: { "token": `Bearer ${token}` } }
        )
        alert(data?.message)
        console.log('Id : ', id);
        console.log('Name : ', name);
    }


    return (
        <div>

            <Header {...props} />

            <div class="pix-container profile_main_content">
                <div class="container pro-container m-auto">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card pro_card_top border-0 p-0 bg-white shadow-xss rounded-xxl">
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '8px' }}>
                                    <h3>#{name}</h3>
                                </div>
                                <hr style={{ marginTop: '0px' }} />
                                <div class="card-body p-0 position-relative-pro" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '10px' }}>
                                    <div class="d-flex">
                                        <div
                                            style={{
                                                width: '75px',
                                                height: '75px',
                                                border: '3px solid #f76531',
                                                borderRadius: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginLeft: '20px',
                                                marginRight: '20px'
                                            }}>
                                            <img src={Hastag02} width={45} />
                                        </div>
                                        <div>
                                            <h4>{hashDetail?.followerCount}  followers</h4>
                                            <h4>{hashDetail?.follow}  posts</h4>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }} >
                                        <a href="#" class="pro_btn" align="center">Follow</a>
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
export default Searchresults;
