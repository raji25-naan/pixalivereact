import React, { useState } from 'react';
import { app } from './firebase';
import axios from 'axios';
import { getFeeds } from './actions/feeds';
import Swal from 'sweetalert2';

function CreatePost(props) {
   const profile = JSON.parse(localStorage.getItem('profile'));
   let token = profile?.token;
   const [text, setText] = useState(false);
   const userInfo = props?.user;
   let userId = userInfo?.user?._id;
   const [fileUrl, setFileUrl] = useState('')
   const [file, setFile] = useState({ link: '' })
   console.log(fileUrl);
   const [loop, setLoop] = useState({
      body: "",
      text: "",
      place: "",
      type: 3,
      thumbnail: "",
      privacyType: "",
      url: '',
      category: "Fashion",
      tagged_userId: ""
   })
   console.log(loop);

   const onChange = async (e) => {
      const file = e.target.files[0];
      const storageRef = app.storage().ref()
      const fileRef = storageRef.child(file.name)
      await fileRef.put(file)
      setLoop({ ...loop, url: await fileRef.getDownloadURL() });

   }

   const onHandleSubmit = async () => {
      console.log(loop);
      console.log(file);
      const { data } = await axios.post(
         "http://dev.pixalive.me/api/user/post_new", loop, { headers: { "token": `Bearer ${token}` } }
      );
      console.log(data)
      getFeeds();
   }
   const setChange = () => setText((prevSetText) => !prevSetText);
   return (
      <div>
         <div class="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3 create_post_width">
            <div class="card-body p-0 position-relative">
               <>
                  <figure class="avatar position-absolute ms-2 mt-1 top-5">
                     <img src={userInfo?.user?.avatar || require("../src/components/imgs/default.png")} class="shadow-sm rounded-circle w30" />
                  </figure>

                  <textarea name="message" class="h100 bor-0 w-100 rounded-xxl p-2 ps-5 text-grey-500 fw-500 border-light-md theme-dark-bg" cols="30" rows="10" placeholder="What's on your mind?" spellcheck="false"></textarea>
               </>

               {/* {text &&
                } */}
               {/* {!text &&
               <>
                <span class="btn pix-btn-upload d-flex">
                {/* <i class="feather-plus btn-round-md bg-dark font-xss" style={{ width: '30px', height: '30px', marginBottom: '15px', lineHeight: '28px'}}></i>
                  <span><h3>Create loop</h3></span>
               </span>
               </>
               } */}
            </div>

            <div class="card-body d-flex p-0 mt-1">
               <span class="btn pix-btn-upload">
                  <i class="font-md text-success feather-image me-2"></i>
                  <span>Photo</span>
                  <input type="file" onChange={onChange} id="publisher-photo" name="postMusic" accept="Photo" />
               </span>
               <span class="btn pix-btn-upload">
                  <i class="font-md text-danger feather-video me-2"></i>
                  <span>Video</span>
                  {/* <input type="file" onChange={onChange}  id="publisher-video" name="postMusic" accept="video" /> */}
               </span>
               <span class="btn pix-btn-upload">
                  <i class="font-md text-warning feather-mic me-2"></i>
                  <span>Audio</span>
                  {/* <input type="file" id="publisher-audio" name="postMusic" accept="audio" /> */}
               </span>
               <span class="btn pix-btn-upload" onClick={() => setChange()}>
                  <i class="font-md text-warning feather-type me-2"></i>
                  <span>Text</span>
               </span>
               <a onClick={() => onHandleSubmit()} class="ms-auto"><i class="feather-send btn-round-md bg-dark font-xss"></i></a>

            </div>
         </div>
      </div>

   );
}
export default CreatePost;