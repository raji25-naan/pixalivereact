import React, { useState, useEffect } from 'react';
import { API } from '../../api/index';
import { useParams } from 'react-router';
import Header from '../../Header';
import { Skeleton } from '@material-ui/lab';
import Swal from 'sweetalert2';

const ViewFollowers = (props) => {
  const profile = JSON.parse(localStorage.getItem('profile'));
  let token = profile?.token;
  const { id } = useParams();
  const [person, setPerson] = useState();
  const [following, setFollowing] = useState([]);
  const loader = [1, 2, 3, , 4, 5, 6];
  console.log(following);

  useEffect(() => {
    getInfo();
    getFollowing();
  }, [])



  const getInfo = async () => {
    const { data } = await API.get(
      `/userInfo?user_id=${id}`, { headers: { "token": `Bearer ${token}` } }
    )
    setPerson(data?.user);
    console.log(data?.user);
  }

  const getFollowing = async () => {
    const { data } = await API.get(
      `/get_followers?id=${id}`, { headers: { "token": `Bearer ${token}` } }
    )
    setFollowing(data?.result);
  }

  const follow = async () => {
    let following_id = { following_id: id, type: '1' }
    const { data } = await API.post(
      `/createFollowNew`, following_id, { headers: { "token": `Bearer ${token}` } }
    )
    getInfo();

  }

  const unFollow = async () => {
    Swal.fire({
      title: 'Do you want to unfollow?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then(async (result) => {
      if (result.isConfirmed) {
        let following_id = { following_id: id, type: '0' }
        const { data } = await API.post(
          `/createFollowNew`, following_id, { headers: { "token": `Bearer ${token}` } }
        )
        getInfo();
      }
    })
  }



  return (
    <div>
      <div className="pix-bg">
        <Header {...props} />

        <div class="pix-container profile_main_content">
          <div class="container pro-container m-auto">

            <div class="row">
              <div class="col-lg-12">
                <div class="card pro_card_top border-0 p-0 bg-white shadow-xss rounded-xxl">
                  <div class="card-body h250 p-0 rounded-xxl overflow-hidden m-3"></div>
                  <div class="card-body p-0 position-relative-pro">
                    {person?.name ?
                      <figure class="avatar_profile z-index-1">
                        <img
                          src={person?.avatar || require("../../../src/components/imgs/default.png")}
                          alt="image" class="rounded-circle"
                        />
                      </figure>
                      :
                      <Skeleton animation="wave" variant="circle" style={{ left: '14px', margin: '0 0 1rem' }} width={100} height={100} />
                    }
                    {person?.name ?
                      <h4 class="pro_h4">
                        {person?.name}<span>{'@' + person?.username}</span>
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
                      {person?.follow === 1 ?
                        <a onClick={() => unFollow()}
                          class="pro_btn"
                        >
                          Following
                        </a>
                        :
                        <a onClick={() => follow()} class="pro_btn">Follow</a>
                      }

                      <a href="#" class="pro_mess"><i class="feather-mail font-md"></i></a>


                    </div>
                  </div>

                  <div class="card-body d-block  pro_card shadow-none mb-0 p-0 border-top-xs">
                    <ul class="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4 mt-0">
                      <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href={`/ViewProfile/${person?._id}`}>All Loop</a></li>
                      <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href={`/ViewAbout/${person?._id}`}>About</a></li>
                      <li class="active list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active" href={`/ViewFollowers/${person?._id}`}>Followers</a></li>
                      <li class="list-inline-item me-5"><a class="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block" href={`/ViewFollowing/${person?._id}`}>Following</a></li>
                      <div class="pro_edit_menu">
                      </div>
                    </ul>
                  </div>
                </div>
              </div>



              <div class="col-xl-12 col-xxl-12 col-lg-12">
                <div class="section-small profile_friends">
                  <div class="pro_friend_title">
                    <h3>Followers {following?.length}</h3>
                  </div>

                  <div class="row  ml-101 ">
                    {following?.[0]?.name ?
                      <>
                        {following
                          .map((people) => {
                            return (
                              <div class="col-2">
                                <a href={`/ViewProfile/${people?._id}`}>
                                  <div class="user-data animate-this">
                                    <div class="user-data-media">
                                      <img src={people?.avatar || require("../../../src/components/imgs/default.png")} alt="image" />
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
export default ViewFollowers;