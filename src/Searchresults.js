import React, { useEffect, useState } from 'react';
import { API } from './api';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import CreatePost from './CreatePost';
import Stories from './Stories';
import RightSidebar from './RightSidebar';
import FindPeople from './components/imgs/create-post/selection-process.png';
import Hastag from './components/imgs/create-post/hastag.png';
import Hastag02 from './components/imgs/create-post/hastag_Outlined.png';

function Searchresults(props) {
  const profile = JSON.parse(localStorage.getItem('profile'));
  let id = profile?.user?._id;
  let token = profile?.token;
  const userInfo = props?.userInfo;
  const suggest = props?.suggest;
  const trend = props?.trend;
  const [people, setPeople] = useState([]);
  const [hashtag, setHashtag] = useState([]);
  const [IsHashtag, setIsHashtag] = useState(false);
  const [noUser, setNoUser] = useState();

  useEffect(() => {
    // users();
  }, [])

  const users = async () => {
    const { data } = await API.get(`/search_user`, { headers: { "token": `Bearer ${token}` } });
    console.log(data);
    setPeople(data?.result);
  }

  const getHastag = async (hash) => {
    const { data } = await API.post(`/fetch_hashtag=${hash}`, { headers: { "token": `Bearer ${token}` } });
    console.log(data);
    setHashtag(data?.result);
  }

  const searchPeople = async (e) => {
    const { data } = await API.get(`/search_user?search_user=${e.target.value}`, { headers: { "token": `Bearer ${token}` } });
    console.log(data);
    if (data?.success) {
      setPeople(data?.result);
    } else {
      setPeople('');
    }
  }

  const searchHastag = async (e) => {
    if (IsHashtag) {
      let hastag = { search_hash: e.target.value };
      const { data } = await API.post(`/fetch_hashtag`, hastag, { headers: { "token": `Bearer ${token}` } });
      console.log(data);
      if (data?.success) {
        setHashtag(data?.result);
      } else {
        setHashtag('');
      }
    } else {
      const { data } = await API.get(`/search_user?search_user=${e.target.value}`, { headers: { "token": `Bearer ${token}` } });
      console.log(data);
      if (data?.success) {
        setPeople(data?.result);
      } else {
        setPeople('');
      }
    }
  }

  const Search = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("peopleList");
    tr = table.getElementsByTagName("a");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("h6")[0];

      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  // Follow Hash Tags
  const follow = async (id) => {
    let following_id = { following_id: id, type: '1' }
    const { data } = await API.post(
      `/createFollowNew`, following_id, { headers: { "token": `Bearer ${token}` } }
    )
    users();
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
    getHastag(name);
    alert(data?.message)
    console.log('Id : ', id);
    console.log('Name : ', name);
  }


  return (
    <div>

      <Header {...userInfo} />
      <LeftSidebar userInfo={userInfo} suggest={suggest} trend={trend} />
      <RightSidebar />


      <div className="main_content">
        <div className="main_content_inner">

          <div className="pix-grid-large pix-grid" pix-grid>

            <div className="pix-width-1-4@m fead-area pix-first-column">

              <div class="input-with-icon">
                <input
                  class="pix-input"
                  type="text"
                  style={{ background: 'white' }}
                  placeholder="Search"
                  id="searchInput"
                  onChange={(e) => searchHastag(e)}
                />
              </div>


              <div className="pix-top-nav" style={{ marginTop: '20px' }}>
                <ul className="main-menu" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <li onClick={() => setIsHashtag(false)} style={{ cursor: 'pointer' }}>
                    <h4
                      align="center"
                      className={IsHashtag === false && 'searchType-bg'}
                    >
                      People
                    </h4>
                  </li>

                  <li onClick={() => setIsHashtag(true)} style={{ cursor: 'pointer' }}>
                    <h4
                      align="center"
                      className={IsHashtag === true && 'searchType-bg'}
                    >Hastag</h4>
                  </li>
                </ul>
              </div>


              {!IsHashtag ?
                <div id="peopleList">
                  {people?.[0] ?
                    //  People
                    <>
                      {people.map((user) => {
                        return (
                          <div class="sgt-text_friends_list" >
                            <img src={require("../src/components/imgs/default.png")} alt />
                            <div class="sgt-text_friends">
                              <a href={`/ViewProfile/${user?._id}`} id="name">
                                <h6>{user?.name}</h6>
                              </a>
                              <span>{user?.username}</span>
                            </div>
                            <span>
                              {user?.follow === 0 ?
                                <a onClick={(e) => follow(user?._id)} class="button primary small circle pix-channel-subscribers">
                                  Follow
                                </a>
                                :
                                ''
                              }

                            </span>
                          </div>
                        )
                      })}
                    </>
                    :
                    <div
                      style={{
                        height: '300px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <div style={{ display: 'block', marginBottom: '15px' }}>
                        <img src={FindPeople} width={145} />
                      </div>
                      <div>
                        <h2 align="center">People</h2>
                        <span align="center">Find your favourite people</span>
                      </div>
                    </div>
                  }
                </div>
                :

                // Hastag
                <div id="peopleList">
                  {hashtag?.[0] ?
                    <>
                      {hashtag.map((hash) => {
                        return (
                          <div class="sgt-text_friends_list" >
                            <div
                              style={{
                                width: '58px',
                                height: '44px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '100%',
                                border: '2px solid #f97f13'
                              }}
                            >
                              <img src={Hastag02} alt style={{ paddingLeft: '5px', width: '30px', height: '30px', borderRadius: '0%' }} />
                            </div>
                            <div class="sgt-text_friends">
                              <a href={`/searchHash/${hash?.hashtag}/${hash?._id}`} id="name">
                                <h6 style={{ paddingTop: '12px' }}>{hash?.hashtag}</h6>
                              </a>
                            </div>
                            <span>
                              {hash?.follow === 0 ?
                                <a onClick={(e) => followHash(hash?._id, hash?.hashtag)} class="button primary small circle pix-channel-subscribers">
                                  Follow
                                </a>
                                :
                                ''
                              }

                            </span>
                          </div>
                        )
                      })}
                    </>
                    :
                    <div
                      style={{
                        height: '300px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <div style={{ display: 'block', marginBottom: '15px' }}>
                        <img src={Hastag} width={120} />
                      </div>
                      <div>
                        <h2 align="center">Hastag</h2>
                        <span align="center">Find your favourite hastag</span>
                      </div>
                    </div>
                  }
                </div>
              }


            </div>

          </div>


        </div>
      </div>


    </div >
  );
}
export default Searchresults;



{/* <h3 className="text-left">Photos</h3>

              <div className="pix-width-1-2@m pix-first-column" style={{ width: '100%' }}>


                <div className="pix-child-width-1-4@m pix-child-width-1-3@s pix-child-width-1-2 pix-grid-collapse pix-overflow-hidden pix-grid" style={{ borderRadius: 5, overflow: 'hidd en' }} pix-lightbox="animation: scale" pix-grid>

                  <div className="pix-first-column">
                    <a href="#" data-caption="Image caption">
                      <div className="photo-card" pix-img>
                        <img src={require("./components/imgs/mahiraina01.jpg")} />

                      </div>
                    </a>
                  </div>

                  <div className="pix-first-column">
                    <a href="#" data-caption="Image caption">
                      <div className="photo-card" pix-img>
                        <img src={require("./components/imgs/mahiraina01.jpg")} />

                      </div>
                    </a>
                  </div>


                  <div className="pix-first-column">
                    <a href="#" data-caption="Image caption">
                      <div className="photo-card" pix-img>
                        <img src={require("./components/imgs/mahiraina01.jpg")} />

                      </div>
                    </a>
                  </div>


                  <div className="pix-first-column">
                    <a href="#" data-caption="Image caption">
                      <div className="photo-card" pix-img>
                        <img src={require("./components/imgs/mahiraina01.jpg")} />

                      </div>
                    </a>
                  </div>

                  <div className="pix-first-column">
                    <a href="#" data-caption="Image caption">
                      <div className="photo-card" pix-img>
                        <img src={require("./components/imgs/mahiraina01.jpg")} />

                      </div>
                    </a>
                  </div>


                  <div className="pix-first-column">
                    <a href="#" data-caption="Image caption">
                      <div className="photo-card" pix-img>
                        <img src={require("./components/imgs/mahiraina01.jpg")} />

                      </div>
                    </a>
                  </div>


                  <div className="pix-first-column">
                    <a href="#" data-caption="Image caption">
                      <div className="photo-card" pix-img>
                        <img src={require("./components/imgs/mahiraina01.jpg")} />

                      </div>
                    </a>
                  </div>


                  <div className="pix-first-column">
                    <a href="#" data-caption="Image caption">
                      <div className="photo-card" pix-img>
                        <img src={require("./components/imgs/mahiraina01.jpg")} />

                      </div>
                    </a>
                  </div>


                </div>
              </div> */}