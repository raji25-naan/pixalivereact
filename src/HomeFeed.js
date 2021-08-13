import React, { useState, useEffect } from "react";
import { API } from "./api";
import CreatePost from "./CreatePost";
import Stories from "./Stories";
import Like from "./components/Icons/like.png";
import unLike from "./components/Icons/unlike.png";
import SuggestionsFriends from "./SuggestionsFriends";
import ReactAudioPlayer from "react-audio-player";
import { getFeeds } from "./actions/feeds";
import { useDispatch } from "react-redux";
import moment from "moment";
import { Skeleton } from "@material-ui/lab";
import Swal from "sweetalert2";

const HomeFeed = (props) => {
  const dispatch = useDispatch();
  const profile = JSON.parse(localStorage.getItem("profile"));
  let token = profile?.token;
  const user = props?.user;
  const feedss = props?.feeds?.feeds;
  console.log(feedss);
  const suggest = props?.suggest;
  const loader = [1, 2, 3, 4];
  console.log(feedss);
  const [feed, setFeed] = useState([]);
  const [liked, setLiked] = useState(false);

  const [report, setReport] = useState("Bad content");
  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(getFeeds());
  }, [dispatch]);

  const likePost = async (e, id) => {
    e.preventDefault();
    let post = { post_id: id, type: 1 };
    const { data } = await API.post("/likePost", post, {
      headers: { token: `Bearer ${token}` },
    });

    dispatch(getFeeds());
  };

  const unLikePost = async (e, id) => {
    e.preventDefault();
    let post = { post_id: id, type: 0 };
    const { data } = await API.post("/likePost", post, {
      headers: { token: `Bearer ${token}` },
    });
    dispatch(getFeeds());
  };

  const hidePost = async (e, id) => {
    e.preventDefault();
    let user_id = profile?.user?._id;
    let post = { post_id: id, user_id };
    //console.log(post);
    const { data } = await API.post("/hidePost", post, {
      headers: { token: `Bearer ${token}` },
    });
    if (data?.success) {
      Swal.fire({
        icon: "success",
        iconColor: "#f9751c",
        title: data?.message,
        showConfirmButton: false,
        timer: 1800,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: data?.message,
        showConfirmButton: false,
        timer: 1800,
      });
    }
    dispatch(getFeeds());
  };

  const reportPost = async (e, id) => {
    e.preventDefault();
    let user_id = profile?.user?._id;
    let post = { post_id: id, user_id: user_id, report: report };
    //console.log(post);
    const { data } = await API.post("/createReport", post, {
      headers: { token: `Bearer ${token}` },
    });
    if (data?.success) {
      Swal.fire({
        icon: "success",
        iconColor: "#f9751c",
        title: data?.message,
        showConfirmButton: false,
        timer: 1800,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: data?.message,
        showConfirmButton: false,
        timer: 1800,
      });
    }
    dispatch(getFeeds());
  };

  const sharePost = async (e, encryptId) => {
    e.preventDefault();
    const result = await API.get(
      "/createShare",
      { params: { encryptId: encryptId } },
      { headers: { token: `Bearer ${token}` } }
    );
    console.log(result);
    dispatch(getFeeds());
  };

  const commentPost = async (e, post_id) => {
    e.preventDefault();
    let user_id = profile?.user?._id;
    console.log(post_id);
    let post = { _id: post_id, user_id: user_id, comment: comment };
    console.log(post);
    const result = await API.post("/comment", post, {
      headers: { token: `Bearer ${token}` },
    });
    console.log(result);
    dispatch(getFeeds());
  };

  const getComments = async (e, post_id) => {
    e.preventDefault();
    let user_id = profile?.user?._id;
    console.log(token);
    const result = await API.get(
      "/getpost_comments",
      { params: { post_id: post_id, user_id: user_id } },
      { headers: { token: `Bearer ${token}` } }
    );
    console.log(result);
    dispatch(getFeeds());
  };
  return (
    <div className="main_content_pix col-md-5 col-lg-5">
      <div className="main_content_inner_pix">
        <div className="pix-grid-small1 pix-grid1" pix-grid>
          <div className="">
            <Stories />
            <CreatePost user={user} />

            {feedss?.[0]?.user_id?.name ? (
              <>
                {feedss.map((post) => {
                  return (
                    <>
                      {/* Posts */}
                      {!post?.reloopPostId?.url ? (
                        <div className="post pix-post-radius">
                          <div className="post-heading">
                            <div className="post-avature pix-post-avature-profile">
                              <img
                                src={
                                  post?.user_id?.avatar ||
                                  require("../src/components/imgs/default.png")
                                }
                                alt
                              />
                            </div>
                            <div className="post-title pix-post-name-title text-left">
                              <h4>{post?.user_id?.name}</h4>
                              <i class="feather-globe"></i>{" "}
                              <time>{moment(post?.created_at).fromNow()}</time>
                            </div>
                            <div className="post-btn-action">
                              <span
                                class="ms-auto mr-151"
                                id="dropdownMenu4"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="feather-more-horizontal text-grey-900 btn-round-md bg-greylight font-xss"></i>

                                <div
                                  className="mt-0 p-2 pix-dropdown"
                                  pix-dropdown="pos: bottom-right;mode:hover "
                                >
                                  <ul className="pix-nav pix-dropdown-nav text-left">
                                    <li>
                                      <div
                                        class="card-body p-0 d-flex"
                                        onClick={() =>
                                          navigator.clipboard
                                            .writeText(post?.url)
                                            .then(
                                              Swal.fire({
                                                icon: "success",
                                                iconColor: "#f9751c",
                                                title: "Copied to ClipBoard",
                                                showConfirmButton: false,
                                                timer: 1800,
                                              })
                                            )
                                        }
                                        style={{ cursor: "pointer" }}
                                      >
                                        <i class="feather-bookmark text-grey-500 me-3 font-lg"></i>
                                        <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                          Copy Link
                                          <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                            Copy Link for the post
                                          </span>
                                        </h4>
                                      </div>
                                    </li>
                                    <li>
                                      <div
                                        class="card-body p-0 d-flex mt-2"
                                        onClick={(e) => hidePost(e, post?._id)}
                                        style={{ cursor: "pointer" }}
                                      >
                                        <i class="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                                        <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                          Hide Post
                                          <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                            Save to your saved items
                                          </span>
                                        </h4>
                                      </div>
                                    </li>
                                    <li>
                                      <div
                                        class="card-body p-0 d-flex mt-2"
                                        onClick={(e) =>
                                          reportPost(e, post?._id)
                                        }
                                        style={{ cursor: "pointer" }}
                                      >
                                        <i class="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                                        <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                          Report Post
                                          <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                            Save to your saved items
                                          </span>
                                        </h4>
                                      </div>
                                    </li>
                                    <li>
                                      <div
                                        class="card-body p-0 d-flex mt-2"
                                        onClick={() =>
                                          alert("Unfollowed Succesfully")
                                        }
                                        style={{ cursor: "pointer" }}
                                      >
                                        {post?.user_id?.follow === 1 && (
                                          <>
                                            <i class="feather-lock text-grey-500 me-3 font-lg"></i>
                                            <h4 class="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                              Unfollow
                                              <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                                Unfolow this account
                                              </span>
                                            </h4>
                                          </>
                                        )}
                                      </div>
                                      {/* {post?.url} */}
                                    </li>
                                  </ul>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="pix-feed-content">
                            {/*<p><a href="#">#KaneWilliamson</a> is the <a href="#">#CWC19</a> Player of the Tournament!</p>*/}
                            {post?.hashtag?.[0] && (
                              <p>
                                <a href="#">#{post?.hashtag?.join(" #")}</a>
                              </p>
                            )}
                          </div>
                          <div className="pix-feed-category">
                            <a href="#">{post?.category.join(",")}</a>
                          </div>

                          <div className="post-description">
                            <div className="fullsizeimg">
                              {post?.post_type === 1 && (
                                <video src={post?.url} controls="controls" />
                              )}

                              {post?.post_type === 2 && (
                                <div
                                  style={{
                                    height: "100px",
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  <ReactAudioPlayer
                                    src={post?.url}
                                    autoPlay
                                    controls
                                  />
                                </div>
                              )}
                              {post?.post_type === 3 && (
                                <img src={post?.url} alt="post" />
                              )}
                              {post?.post_type === 4 && (
                                <div
                                  style={{
                                    height: "100%",
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                >
                                  {post?.text_content?.text}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Post Action Counts */}
                          <div className="post-counts">
                            <div class="flex items-center space-x-3">
                              <div class="flex items-center">
                                {post?.isLiked === 1 && post?.likeCount > 2 && (
                                  <>
                                    <img
                                      src={
                                        user?.user?.avatar ||
                                        require("../src/components/imgs/default.png")
                                      }
                                      alt=""
                                      class="w-6 h-6 rounded-full border-2 border-white border-gray-900"
                                    />
                                    <img
                                      src={require("./components/imgs/s8.png")}
                                      alt=""
                                      class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2"
                                    />
                                    <img
                                      src={require("./components/imgs/s5.png")}
                                      alt=""
                                      class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2"
                                    />
                                  </>
                                )}
                                {post?.isLiked === 0 && post?.likeCount > 2 && (
                                  <>
                                    <img
                                      src={require("../src/components/imgs/default.png")}
                                      alt=""
                                      class="w-6 h-6 rounded-full border-2 border-white border-gray-900"
                                    />
                                    <img
                                      src={require("./components/imgs/s8.png")}
                                      alt=""
                                      class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2"
                                    />
                                    <img
                                      src={require("./components/imgs/s5.png")}
                                      alt=""
                                      class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2"
                                    />
                                  </>
                                )}
                                {post?.isLiked === 1 && post?.likeCount === 1 && (
                                  <>
                                    <img
                                      src={
                                        user?.user?.avatar ||
                                        require("../src/components/imgs/default.png")
                                      }
                                      alt=""
                                      class="w-6 h-6 rounded-full border-2 border-white border-gray-900"
                                    />
                                  </>
                                )}
                                {post?.isLiked === 0 && post?.likeCount === 1 && (
                                  <>
                                    <img
                                      src={require("./components/imgs/s5.png")}
                                      alt=""
                                      class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2"
                                    />
                                  </>
                                )}
                                {post?.isLiked === 1 && post?.likeCount === 2 && (
                                  <>
                                    <img
                                      src={
                                        user?.user?.avatar ||
                                        require("../src/components/imgs/default.png")
                                      }
                                      alt=""
                                      class="w-6 h-6 rounded-full border-2 border-white border-gray-900"
                                    />
                                    <img
                                      src={require("./components/imgs/s5.png")}
                                      alt=""
                                      class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2"
                                    />
                                  </>
                                )}
                              </div>
                              <div class="text-gray-100 like_list">
                                {post?.isLiked === 1 && post?.likeCount > 2 && (
                                  <>
                                    Liked by <strong> You </strong> and{" "}
                                    <strong>
                                      {" "}
                                      {post?.likeCount - 1} Others{" "}
                                    </strong>
                                  </>
                                )}
                                {post?.isLiked === 0 && post?.likeCount > 1 && (
                                  <>
                                    Liked by{" "}
                                    <strong> {post?.likeCount} Others </strong>
                                  </>
                                )}
                                {post?.isLiked === 1 && post?.likeCount === 1 && (
                                  <>
                                    Liked by <strong> You </strong>
                                  </>
                                )}
                                {post?.isLiked === 0 && post?.likeCount === 1 && (
                                  <>
                                    Liked by{" "}
                                    <strong> {post?.likeCount} other </strong>
                                  </>
                                )}
                                {post?.isLiked === 1 && post?.likeCount === 2 && (
                                  <>
                                    Liked by <strong>You</strong> and{" "}
                                    <strong> {post?.likeCount} other </strong>
                                  </>
                                )}
                              </div>
                              <a href="#" className="ft-right ms-auto ">
                                {post?.commentCount} Comments
                              </a>
                            </div>
                          </div>
                          <div className="pix-post-bt">
                            <div class="card-body d-flex p-0 mt-1">
                              <a
                                href="#"
                                class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr"
                              >
                                {post?.isLiked === 0 ? (
                                  <i
                                    onClick={(e) => likePost(e, post?._id)}
                                    style={{ marginRight: "8px" }}
                                  //class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss "
                                  >
                                    <img
                                      src={unLike}
                                      width={17}
                                      style={{ paddingBottom: "5px" }}
                                    />
                                  </i>
                                ) : (
                                  <i
                                    onClick={(e) => unLikePost(e, post?._id)}
                                    style={{ marginRight: "8px" }}
                                  //class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss "
                                  >
                                    <img
                                      src={Like}
                                      width={17}
                                      style={{ paddingBottom: "5px" }}
                                    />
                                  </i>
                                )}
                                {post?.likeCount} Like
                              </a>
                              <a
                                href="#"
                                class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                              >
                                <i class="feather-message-square icon-white text-grey-900 btn-round-sm font-lg"></i>
                                {post?.commentCount} Comment
                              </a>
                              <a
                                href="#"
                                class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                                onClick={(e) => sharePost(e, post?.encryptId)}
                              >
                                <i class="feather-share-2 text-grey-900 icon-white btn-round-sm font-lg"></i>
                                <span class="d-none-xs">Share</span>
                              </a>
                            </div>
                          </div>
                          <div className="post-comments">
                            <a
                              href="#"
                              className="view-more-comment text-left"
                              onClick={(e) => getComments(e, post?._id)}
                            >
                              View Comments
                            </a>
                            <div className="post-add-comment">
                              <div className="post-add-comment-avature">
                                <img
                                  src={
                                    user?.user?.avatar ||
                                    require("../src/components/imgs/default.png")
                                  }
                                  style={{ width: "37px" }}
                                  alt
                                />
                              </div>
                              <div className="post-add-comment-text-area">
                                <input
                                  type="text"
                                  placeholder="Write your comment..."
                                  onChange={(e) => setComment(e.target.value)}
                                />
                                <div className="icons">
                                  <span className="feather-paperclip" />
                                  <span className="feather-smile" />
                                  <span
                                    className="feather-image"
                                    onClick={(e) => commentPost(e, post?._id)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Relooped posts
                        <div className="post pix-post-radius">
                          <div className="your_looped">
                            <i class="feather-repeat"></i>
                            <span>{post?.user_id?.name} Re-looped</span>
                          </div>
                          <div className="post-heading">
                            <div className="post-avature pix-post-avature-profile">
                              <img
                                src={
                                  post?.user_id?.avatar ||
                                  require("../src/components/imgs/default.png")
                                }
                                alt
                              />
                            </div>
                            <div className="post-title pix-post-name-title text-left">
                              <h4>{post?.user_id?.name}</h4>
                              <i class="feather-globe "></i>{" "}
                              <time>{moment(post?.created_at).fromNow()}</time>
                            </div>
                            <div className="post-btn-action">
                              <span
                                class="ms-auto mr-151"
                                id="dropdownMenu4"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i class="feather-more-horizontal text-grey-900 btn-round-md bg-greylight font-xss"></i>

                                <div
                                  className="mt-0 p-2 pix-dropdown"
                                  pix-dropdown="pos: bottom-right;mode:hover "
                                >
                                  <ul className="pix-nav pix-dropdown-nav text-left">
                                    <li>
                                      <div class="card-body p-0 d-flex">
                                        <i class="feather-bookmark text-grey-500 me-3 font-lg"></i>
                                        <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                          Save Link{" "}
                                          <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                            Add this to your saved items
                                          </span>
                                        </h4>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="card-body p-0 d-flex mt-2">
                                        <i class="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                                        <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                          Hide Post{" "}
                                          <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                            Save to your saved items
                                          </span>
                                        </h4>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="card-body p-0 d-flex mt-2">
                                        <i class="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                                        <h4 class="fw-600 text-grey-900 font-xssss mt-0 me-4">
                                          Hide all from Group{" "}
                                          <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                            Save to your saved items
                                          </span>
                                        </h4>
                                      </div>
                                    </li>
                                    <li>
                                      <div
                                        class="card-body p-0 d-flex mt-2"
                                        onClick={() =>
                                          alert("Unfollowed Succesfully")
                                        }
                                      >
                                        {post?.user_id?.follow === 1 && (
                                          <>
                                            <i class="feather-lock text-grey-500 me-3 font-lg"></i>
                                            <h4 class="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-4">
                                              Unfollow
                                              <span class="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                                                Unfollow this account
                                              </span>
                                            </h4>
                                          </>
                                        )}
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="post-relooped">
                            <div className="post-heading">
                              <div className="post-avature pix-post-avature-profile">
                                <img
                                  src={
                                    post?.reloopPostId?.user_id?.avatar ||
                                    require("../src/components/imgs/default.png")
                                  }
                                  alt
                                />
                              </div>
                              <div className="post-title pix-post-name-title text-left">
                                <h4>{post?.reloopPostId?.user_id?.name}</h4>
                                <i class="feather-globe "></i>{" "}
                                <time>
                                  {moment(
                                    post?.reloopPostId?.created_at
                                  ).fromNow()}
                                </time>
                              </div>
                            </div>

                            <div className="pix-feed-content">
                              <p>
                                <a href="#">{post?.reloopPostId?.body}</a>
                              </p>
                            </div>
                            <div className="pix-feed-category">
                              {/*<a href="#">Sports,</a>  <a href="#">Cricketer,</a>  <a href="#">Finesse</a>*/}
                            </div>
                            <div className="post-description">
                              <div className="fullsizeimg">
                                {/* video */}
                                {post?.reloopPostId?.post_type === 1 && (
                                  <video
                                    src={post?.reloopPostId?.url}
                                    controls="controls"
                                  />
                                )}

                                {/* Audio */}
                                {post?.reloopPostId?.post_type === 2 && (
                                  <div
                                    style={{
                                      height: "100px",
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    <ReactAudioPlayer
                                      src={post?.reloopPostId?.url}
                                      autoPlay
                                      controls
                                    />
                                  </div>
                                )}

                                {/* image */}
                                {post?.reloopPostId?.post_type === 3 && (
                                  <img
                                    src={post?.reloopPostId?.url}
                                    alt="post"
                                  />
                                )}

                                {/* text */}
                                {post?.reloopPostId?.post_type === 4 && (
                                  <div
                                    style={{
                                      height: "100%",
                                      width: "100%",
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    {post?.reloopPostId?.text}
                                  </div>
                                )}
                              </div>
                            </div>
                            {/* Post Counts */}
                            <div className="post-counts">
                              <div class="flex items-center space-x-3">
                                <div class="flex items-center">
                                  {post?.isLiked === 1 && post?.likeCount > 2 && (
                                    <>
                                      <img
                                        src={
                                          user?.user?.avatar ||
                                          require("../src/components/imgs/default.png")
                                        }
                                        alt=""
                                        class="w-6 h-6 rounded-full border-2 border-white border-gray-900"
                                      />
                                      <img
                                        src={require("./components/imgs/s8.png")}
                                        alt=""
                                        class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2"
                                      />
                                      <img
                                        src={require("./components/imgs/s5.png")}
                                        alt=""
                                        class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2"
                                      />
                                    </>
                                  )}
                                  {post?.isLiked === 0 && post?.likeCount > 2 && (
                                    <>
                                      <img
                                        src={require("../src/components/imgs/default.png")}
                                        alt=""
                                        class="w-6 h-6 rounded-full border-2 border-white border-gray-900"
                                      />
                                      <img
                                        src={require("./components/imgs/s8.png")}
                                        alt=""
                                        class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2"
                                      />
                                      <img
                                        src={require("./components/imgs/s5.png")}
                                        alt=""
                                        class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2"
                                      />
                                    </>
                                  )}
                                  {post?.isLiked === 1 &&
                                    post?.likeCount === 1 && (
                                      <>
                                        <img
                                          src={
                                            user?.user?.avatar ||
                                            require("../src/components/imgs/default.png")
                                          }
                                          alt=""
                                          class="w-6 h-6 rounded-full border-2 border-white border-gray-900"
                                        />
                                      </>
                                    )}
                                  {post?.isLiked === 0 &&
                                    post?.likeCount === 1 && (
                                      <>
                                        <img
                                          src={require("./components/imgs/s5.png")}
                                          alt=""
                                          class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2"
                                        />
                                      </>
                                    )}
                                  {post?.isLiked === 1 &&
                                    post?.likeCount === 2 && (
                                      <>
                                        <img
                                          src={
                                            user?.user?.avatar ||
                                            require("../src/components/imgs/default.png")
                                          }
                                          alt=""
                                          class="w-6 h-6 rounded-full border-2 border-white border-gray-900"
                                        />
                                        <img
                                          src={require("./components/imgs/s5.png")}
                                          alt=""
                                          class="w-6 h-6 rounded-full border-2 border-white border-gray-900 -ml-2"
                                        />
                                      </>
                                    )}
                                </div>
                                <div class="text-gray-100 like_list">
                                  {post?.isLiked === 1 && post?.likeCount > 2 && (
                                    <>
                                      Liked by <strong> You </strong> and{" "}
                                      <strong>
                                        {" "}
                                        {post?.likeCount - 1} Others{" "}
                                      </strong>
                                    </>
                                  )}
                                  {post?.isLiked === 0 && post?.likeCount > 1 && (
                                    <>
                                      Liked by{" "}
                                      <strong>
                                        {" "}
                                        {post?.likeCount} Others{" "}
                                      </strong>
                                    </>
                                  )}
                                  {post?.isLiked === 1 &&
                                    post?.likeCount === 1 && (
                                      <>
                                        Liked by <strong> You </strong>
                                      </>
                                    )}
                                  {post?.isLiked === 0 &&
                                    post?.likeCount === 1 && (
                                      <>
                                        Liked by{" "}
                                        <strong>
                                          {" "}
                                          {post?.likeCount} other{" "}
                                        </strong>
                                      </>
                                    )}
                                  {post?.isLiked === 1 &&
                                    post?.likeCount === 2 && (
                                      <>
                                        Liked by <strong>You</strong> and{" "}
                                        <strong>
                                          {" "}
                                          {post?.likeCount} other{" "}
                                        </strong>
                                      </>
                                    )}
                                </div>
                                <a href="#" className="ft-right ms-auto ">
                                  {post?.commentCount} Comments
                                </a>
                              </div>
                            </div>
                            <div className="pix-post-bt">
                              <div class="card-body d-flex p-0 mt-1">
                                <a
                                  href="#"
                                  class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr"
                                >
                                  {/*<i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss "></i>*/}
                                  {post?.isLiked === 0 ? (
                                    <i
                                      onClick={(e) => likePost(e, post?._id)}
                                      style={{ marginRight: "8px" }}
                                    //class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss "
                                    >
                                      <img
                                        src={unLike}
                                        width={17}
                                        style={{ paddingBottom: "5px" }}
                                      />
                                    </i>
                                  ) : (
                                    <i
                                      onClick={(e) => unLikePost(e, post?._id)}
                                      style={{ marginRight: "8px" }}
                                    //class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss "
                                    >
                                      <img
                                        src={Like}
                                        width={17}
                                        style={{ paddingBottom: "5px" }}
                                      />
                                    </i>
                                  )}
                                  {post?.likeCount} like
                                </a>
                                <a
                                  href="#"
                                  class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr"
                                >
                                  <i class="feather-repeat icon-white text-grey-900 btn-round-sm font-lg"></i>
                                  {post?.commentCount} comment
                                </a>
                                <a
                                  href="#"
                                  class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr"
                                >
                                  <i class="feather-message-square icon-white text-grey-900 btn-round-sm font-lg"></i>
                                  76
                                </a>
                                <a
                                  href="#"
                                  class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                                >
                                  <i class="feather-share-2 text-grey-900 icon-white btn-round-sm font-lg"></i>
                                  <span class="d-none-xs">Share</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  );
                })}
              </>
            ) : (
              <>
                {loader.map(() => (
                  <div className="post pix-post-radius">
                    <div className="post-heading">
                      <Skeleton variant="circle" width={45} height={45} />
                      <div className="post-title pix-post-name-title text-left">
                        <h4>
                          <Skeleton
                            animation="wave"
                            height={10}
                            style={{ width: "100px" }}
                          />
                        </h4>
                        <i class=""></i>{" "}
                        <time>
                          <Skeleton
                            animation="wave"
                            height={10}
                            style={{ width: "160px" }}
                          />
                        </time>
                      </div>
                    </div>
                    <Skeleton
                      animation="wave"
                      height={280}
                      style={{ width: "100%", transform: "scale(1, 0.9)" }}
                    />
                    <div className="post-counts">
                      <div class="flex items-center space-x-3">
                        <div class="flex items-center">
                          <Skeleton variant="circle" height={25} width={25} />
                        </div>
                        <div class="text-gray-100 like_list">
                          <Skeleton
                            animation="wave"
                            height={10}
                            style={{ width: "160px" }}
                          />
                        </div>
                        <a href="#" className="ft-right ms-auto ">
                          <Skeleton
                            animation="wave"
                            height={10}
                            style={{ width: "40px" }}
                          />
                        </a>
                      </div>
                    </div>
                    <div className="pix-post-bt">
                      <div class="card-body d-flex p-0 mt-1">
                        <a
                          href="#"
                          class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss pix-post-bt-pr"
                        >
                          <i class=""></i>
                          <Skeleton
                            animation="wave"
                            height={20}
                            style={{ width: "40px" }}
                          />
                        </a>
                        <a
                          href="#"
                          class="d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i class=""></i>
                          <Skeleton
                            animation="wave"
                            height={20}
                            style={{ width: "40px" }}
                          />
                        </a>
                        <a
                          href="#"
                          class="ms-auto d-flex align-items-center fw-600 text-grey-900 text-dark lh-26 font-xssss"
                        >
                          <i class=""></i>
                          <span class="d-none-xs">
                            <Skeleton
                              animation="wave"
                              height={20}
                              style={{ width: "40px" }}
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
            <SuggestionsFriends {...suggest} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;

// For video
var videos = document.getElementsByTagName("video"),
  fraction = 0.5;
function checkScroll() {
  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];

    var x = video.offsetLeft,
      y = video.offsetTop,
      w = video.offsetWidth,
      h = video.offsetHeight,
      r = x + w, //right
      b = y + h, //bottom
      visibleX,
      visibleY,
      visible;

    visibleX = Math.max(
      0,
      Math.min(
        w,
        window.pageXOffset + window.innerWidth - x,
        r - window.pageXOffset
      )
    );
    visibleY = Math.max(
      0,
      Math.min(
        h,
        window.pageYOffset + window.innerHeight - y,
        b - window.pageYOffset
      )
    );

    visible = (visibleX * visibleY) / (w * h);

    if (visible > fraction) {
      video.play();
    } else {
      video.pause();
    }
  }
}
window.addEventListener("scroll", checkScroll, false);
window.addEventListener("resize", checkScroll, false);
