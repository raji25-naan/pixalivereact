
import React from 'react';

function Stories() {
  return (

    <div>

      <div className=" pt-0 pb-2">
        <div className="pix-position-relative pix-slider" pix-slider="finite: true">
          <div className="pix-slider-container pb-3 user-status-home wow_home_stories">
            <ul className="status-list pix-slider-items pix-child-width-1-5@m pix-child-width-1-3@s pix-child-width-1-3 story-slider pix-grid"
              style={{ transform: 'translate3d(0px, 0px, 0px)' }}>

              <li>
                <a href="/StoriesPost" className="see_all_stories" data_story_user_id="980" data_story_type="friends">

                  <p>Create a story</p>
                  <div className="create-story" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <i className="uil-plus"></i>
                  </div>
                </a>
              </li>

              <li>
                <a href="#ex1" rel="modal:open" className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/p1.jpg")} alt />
                  <p>Deepak Panwar</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/s2.png")} alt />
                  </div>
                </a>
              </li>
              <li>
                <div id="ex1" class="modal" style={{ margin: '100px' }}>
                  <p>Thanks for clicking. That felt good.</p>
                  <a href="#" rel="modal:close">Close</a>
                </div>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/p3.jpg")} alt />
                  <p>Viji Vaithi</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/s3.png")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/p2.jpg")} alt />
                  <p>Ambikapathi</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/s4.png")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/p4.jpg")} alt />
                  <p>James Lewis</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/s5.png")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store1.jpg")} alt />
                  <p>vviji</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/s6.png")} alt />
                  </div>
                </a>
              </li>



              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store2.jpg")} alt />
                  <p>Deepak Panwar</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store2.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store3.jpg")} alt />
                  <p>Viji Vaithi</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store3.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store4.jpg")} alt />
                  <p>Ambikapathi</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store4.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store5.jpg")} alt />
                  <p>James Lewis</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store5.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store1.jpg")} alt />
                  <p>vviji</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store1.jpg")} alt />
                  </div>
                </a>
              </li>

              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store2.jpg")} alt />
                  <p>Deepak Panwar</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store2.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store3.jpg")} alt />
                  <p>Viji Vaithi</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store3.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store4.jpg")} alt />
                  <p>Ambikapathi</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store4.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store5.jpg")} alt />
                  <p>Bala Subramanian</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store5.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store1.jpg")} alt />
                  <p>vviji</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store1.jpg")} alt />
                  </div>
                </a>
              </li>

              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store2.jpg")} alt />
                  <p>Deepak Panwar</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store2.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store3.jpg")} alt />
                  <p>Viji Vaithi</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store3.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store4.jpg")} alt />
                  <p>Ambikapathi</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store4.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store5.jpg")} alt />
                  <p>Bala Subramanian</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store5.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store1.jpg")} alt />
                  <p>vviji</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store1.jpg")} alt />
                  </div>
                </a>
              </li>

              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store2.jpg")} alt />
                  <p>Deepak Panwar</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store2.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store3.jpg")} alt />
                  <p>Viji Vaithi</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store3.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store4.jpg")} alt />
                  <p>Ambikapathi</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store4.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store5.jpg")} alt />
                  <p>Bala Subramanian</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store5.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store1.jpg")} alt />
                  <p>vviji</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store1.jpg")} alt />
                  </div>
                </a>
              </li>

              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store2.jpg")} alt />
                  <p>Deepak Panwar</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store2.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store3.jpg")} alt />
                  <p>Viji Vaithi</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store3.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store4.jpg")} alt />
                  <p>Ambikapathi</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store4.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store5.jpg")} alt />
                  <p>Bala Subramanian</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store5.jpg")} alt />
                  </div>
                </a>
              </li>
              <li>
                <a className="see_all_stories" data_story_user_id="980" data_story_type="friends">
                  <img src={require("./components/imgs/store1.jpg")} alt />
                  <p>vviji</p>
                  <div className="story-thumb" data-toggle="tooltip" title="" data-original-title="Adam James">
                    <img src={require("./components/imgs/store1.jpg")} alt />
                  </div>
                </a>
              </li>

            </ul>
            <div className="pix-visible@m">
              <a className="pix-position-center-left-out slidenav-prev pix-invisible" href="#" pix-slider-item="previous" />
              <a className="pix-position-center-right-out slidenav-next" href="#" pix-slider-item="next" />
            </div>
            <div className="pix-hidden@m">
              <a className="pix-position-center-left slidenav-prev pix-invisible" href="#" pix-slider-item="previous" />
              <a className="pix-position-center-right slidenav-next" href="#" pix-slider-item="next" />
            </div>
          </div>
        </div>
      </div>



    </div>





  );
}

export default Stories;




