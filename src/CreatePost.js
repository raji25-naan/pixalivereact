import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { API } from "./api";
import { app } from "./firebase";
import axios from "axios";
import { getFeeds } from "./actions/feeds";
import Swal from "sweetalert2";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import ReactAudioPlayer from "react-audio-player";

function CreatePost(props) {
   const profile = JSON.parse(localStorage.getItem("profile"));
   let token = profile?.token;
   const userInfo = props?.user;
   const dispatch = useDispatch();
   let userId = userInfo?.user?._id;
   const [text, setText] = useState(true);
   const [selected, setSelected] = useState();
   const [videos, setVideos] = useState();
   const [audios, setAudios] = useState();
   const [isAudio, setIsAudio] = useState(false);

   const [publicc, setPublicc] = useState("public");
   const [privatee, setPrivatee] = useState("private");
   const [me, setMe] = useState("me");

   const changeField = () => setText((prevSetText) => !prevSetText);

   const [loop, setLoop] = useState({
      body: "",
      text: "put something",
      place: "",
      type: null,
      thumbnail: "",
      privacyType: "public",
      url: "",
      category: "",
      tagged_userId: "",
   });

   // Privacy Option
   const handlePrivacyClick = (privacyType) => {
      setLoop({
         ...loop,
         privacyType,
      });
   };
   console.log("loop", loop);

   const onHandleChange = (e) => {
      setLoop({ ...loop, [e.target.name]: e.target.value })
   }

   // OnChange for Choosing Media
   const onChange = async (e) => {
      const profile = JSON.parse(localStorage.getItem("profile"));
      const file = e.target.files[0];
      console.log("file on change", file);
      console.log(file?.name)

      if (
         file?.type == "image/jpg" ||
         file?.type == "image/jpeg" ||
         file?.type == "image/png"
      ) {
         loop.type = 3;
         setText(false);
         //setLoop({ ...loop, type: 3, file: file });
      }

      if (file?.type == "video/mp4") {
         loop.type = 1;
         setText(false);
         //setSelected({ ...selected, video: file?.name })
      }

      if (file?.type == "audio/mp3" || file?.type == "audio/mpeg" || file?.type == "audio/ogg") {
         loop.type = 2;
         setText(false);
         setIsAudio(true)
      }

      //setLoop({ ...loop, [e.target.name]: e.target.value });
      const storageRef = app.storage().ref();
      const fileRef = storageRef.child(file.name);
      const response = await fileRef.put(file);
      //const data = fileRef.getDownloadURL().then((data) => console.log("data", data) );
      const res = await fileRef.getDownloadURL();
      console.log("res", res);
      setLoop({ ...loop, url: res });
      let image = res.includes('.jpg' || 'png' || 'jpeg');
      let video = res.includes('.mp4');
      let audio = res.includes('.mp3');
      if (image) {
         setSelected(res);
      }
      if (video) {
         setVideos(res)
      }
      if (audio) {
         setAudios(res);
      }

   };
   console.log("loop", loop);

   const onHandleSubmit = async () => {
      const { data } = await API.post("/post_new", loop, {
         headers: { token: `Bearer ${token}` },
      });
      console.log(data);
      setSelected('');
      setVideos('');
      changeField();
      dispatch(getFeeds());
   };

   //const setChange = () => setText((prevSetText) => !prevSetText);
   return (
      <div>
         <div class="create-post shadow-xss">
            <div class="static-section">
               <div class="card-title">
                  <h3>create Loop</h3>

                  <div class="settings">
                     <div class="setting-btn ms-2 setting-dropdown no-bg">
                        <div className="post-btn-action">
                           <span
                              class="ms-auto mr-151"
                              id="dropdownMenu4"
                              aria-expanded="false"
                           >
                              <h5>
                                 {loop.privacyType}{" "}
                                 <i class="iw-15 feather-chevron-down me-2"></i>
                              </h5>

                              <div
                                 className="mt-0 pix-dropdown custom-dropdown"
                                 pix-dropdown="pos: bottom-right;mode:hover "
                                 style={{ cursor: "pointer" }}
                              >
                                 <ul className="pix-nav pix-dropdown-nav text-left">
                                    <li onClick={() => handlePrivacyClick("public")}>
                                       <div class="card-body p-0 d-flex">
                                          <i class="feather-globe"></i>
                                          <h4>Public</h4>
                                       </div>
                                    </li>
                                    <li onClick={() => handlePrivacyClick("private")}>
                                       <div class="card-body p-0 d-flex mt-2">
                                          <i class="feather-user"></i>
                                          <h4>Private</h4>
                                       </div>
                                    </li>
                                    <li onClick={() => handlePrivacyClick("onlyForMe")}>
                                       <div class="card-body p-0 d-flex mt-2">
                                          <i class="feather-lock"></i>
                                          <h4>Only for Me</h4>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               {text ?
                  <>
                     <div class="search-input input-style icon-right">
                        <div class="card-body p-0 position-relative">

                           <figure class="avatar position-absolute ms-2 mt-1 top-5">
                              <img
                                 src={
                                    profile?.user?.avatar ||
                                    require("../src/components/imgs/default.png")
                                 }
                                 class="shadow-sm rounded-circle w30"
                              />
                           </figure>

                           <textarea
                              name="message"
                              class="h100 bor-0 w-100 rounded-xxl p-2 ps-5 text-grey-500 fw-500 border-light-md theme-dark-bg"
                              cols="30"
                              rows="10"
                              placeholder="What's on your mind?"
                              spellcheck="false"
                           >

                           </textarea>


                        </div>
                     </div>
                  </>
                  :
                  <>
                     {!isAudio ?
                        <div>
                           {selected ?
                              <>
                                 {selected?.includes('http') ?
                                    <div>
                                       <img src={selected} width={100} height={100} style={{ borderRadius: '10px', marginLeft: '14px' }}></img>
                                       <br />
                                       <TextField autoFocus id="standard-basic" label="Category" name="category" onChange={(e) => onHandleChange(e)} />
                                    </div>
                                    :
                                    <CircularProgress color="secondary" style={{ marginLeft: '14px' }} />

                                 }
                              </>
                              :
                              <>
                                 {videos?.includes('.mp4') ?
                                    <>
                                       <video src={videos} width={100} height={100} style={{ borderRadius: '10px', marginLeft: '14px' }}></video>
                                       <br />
                                       <TextField
                                          autoFocus
                                          id="standard-basic"
                                          label="Category"
                                          name="category"
                                          style={{ marginBottom: '8px', marginTop: '10px' }}
                                          onChange={(e) => onHandleChange(e)}
                                       />

                                    </>
                                    :
                                    <CircularProgress color="secondary" style={{ marginLeft: '14px' }} />

                                 }
                              </>
                           }
                        </div>
                        :
                        <>
                           {audios?.includes('.mp3') ?
                              <>
                                 <ReactAudioPlayer
                                    src={audios}
                                    style={{ width: '185px', height: '42px' }}
                                    autoPlay
                                    controls
                                 />
                                 <br />
                                 <TextField
                                    autoFocus
                                    id="standard-basic"
                                    label="Category"
                                    name="category"
                                    style={{ marginBottom: '8px', marginTop: '10px' }}
                                    onChange={(e) => onHandleChange(e)}
                                 />
                              </>
                              :
                              <CircularProgress color="secondary" style={{ marginLeft: '14px' }} />

                           }
                        </>

                     }
                  </>
               }
            </div>
            {text &&
               <div class="create-bg">
                  <div class="bg-post" id="bg-post">

                     <div class="input-sec">
                        <input
                           type="text"
                           class="form-control enable"
                           placeholder="write something here.."
                        />
                        <div class="close-icon">
                           <a href="javascript:void(0)">
                              <i class="iw-20 ih-20" data-feather="x"></i>
                           </a>
                        </div>
                     </div>
                  </div>
                  <ul class="gradient-bg">
                     <li onclick="clickGradient('gr-1')" class="gr-1"></li>
                     <li onclick="clickGradient('gr-2')" class="gr-2"></li>
                     <li onclick="clickGradient('gr-3')" class="gr-3"></li>
                     <li onclick="clickGradient('gr-4')" class="gr-4"></li>
                     <li onclick="clickGradient('gr-5')" class="gr-5"></li>
                     <li onclick="clickGradient('gr-6')" class="gr-6"></li>
                     <li onclick="clickGradient('gr-7')" class="gr-7"></li>
                     <li onclick="clickGradient('gr-8')" class="gr-8"></li>
                     <li onclick="clickGradient('gr-9')" class="gr-9"></li>
                     <li onclick="clickGradient('gr-10')" class="gr-10"></li>
                     <li onclick="clickGradient('gr-11')" class="gr-11"></li>
                     <li onclick="clickGradient('gr-12')" class="gr-12"></li>
                     <li onclick="clickGradient('gr-13')" class="gr-13"></li>
                     <li onclick="clickGradient('gr-14')" class="gr-14"></li>
                     <li onclick="clickGradient('gr-15')" class="gr-15"></li>
                     <li onclick="clickGradient('gr-1')" class="gr-1"></li>
                     <li onclick="clickGradient('gr-2')" class="gr-2"></li>
                     <li onclick="clickGradient('gr-3')" class="gr-3"></li>
                     <li onclick="clickGradient('gr-4')" class="gr-4"></li>
                     <li onclick="clickGradient('gr-5')" class="gr-5"></li>
                     <li onclick="clickGradient('gr-6')" class="gr-6"></li>
                     <li onclick="clickGradient('gr-7')" class="gr-7"></li>
                     <li onclick="clickGradient('gr-8')" class="gr-8"></li>
                     <li onclick="clickGradient('gr-9')" class="gr-9"></li>
                  </ul>
               </div>
            }

            <ul class="create-btm-option">
               <span class="btn pix-btn-upload">
                  <i class="font-md text-success feather-image me-2"></i>
                  <span>Image/Video</span>
                  <input
                     type="file"
                     onChange={onChange}
                     id="publisher-photo"
                     name="postMusic"
                     accept="Photo"
                  />
               </span>
               <span class="btn pix-btn-upload">
                  <i class="font-md text-warning feather-mic me-2"></i>
                  <span>Audio</span>
                  <input
                     type="file"
                     onChange={onChange}
                     id="publisher-audio"
                     name="postMusic"
                     accept="audio"
                  />
               </span>
               <li id="friends-btn" onClick={() => setText(true)}>
                  <h5>
                     <i class="iw-15 feather-type me-2"></i>Text
                  </h5>
               </li>
               <li id="friends-btn">
                  <h5>
                     <i class="iw-15 feather-tag me-2"></i>Tag friends
                  </h5>
               </li>
            </ul>
            <div class="post-btn1">
               <a href="#" class="ms-auto">
                  {loop?.type === null ?
                     <i
                        class="feather-send btn-round-md bg-dark font-xss"
                        onClick={() => alert("You have'nt choosed any file")}>
                     </i>
                     :
                     <i
                        class="feather-send btn-round-md bg-dark font-xss"
                        onClick={() => onHandleSubmit()}
                     >
                     </i>
                  }
               </a>
            </div>
         </div>
      </div>
   );
}

export default CreatePost;
