import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API } from './api';
import { getTrendingPost, getPostByCategories } from './actions/feeds';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import DiscoverFeed from './DiscoverFeed';
import DiscoverByCategory from './DiscoverByCategory';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
   formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
   },
   selectEmpty: {
      marginTop: theme.spacing(2),
   },
}));


const Discover = (props) => {
   const dispatch = useDispatch();
   const profile = JSON.parse(localStorage.getItem('profile'));
   let token = profile?.token;
   const user = props.userInfo
   const trend = props.trend;
   const suggest = props.suggest;
   const feeds = useSelector((state) => state?.trendingPosts?.trendingPost);
   const [category, setCategory] = useState('Trending');
   const [loop, setLoop] = useState(2);
   console.log(category);
   const classes = useStyles();

   useEffect(() => {
      dispatch(getTrendingPost());
   }, [])

   const TrendingPost = () => {
      setCategory('Trending');
      dispatch(getTrendingPost())
   }

   const setCateg = (String) => {
      setCategory(String);
      dispatch(getPostByCategories(String, loop));
   }


   const handleChange = (e) => {
      setLoop(e.target.value);
      dispatch(getPostByCategories(String, e.target.value));
   }



   return (
      <div>
         <div className="pix-bg">
            <Header {...user} />
            <LeftSidebar userInfo={user} suggest={suggest} trend={trend} />
            <div className="pix_main_explore col-md-9 col-lg-9">
               <div className=" pix-explore">
                  <h2>Explore</h2>
               </div>
               <div className=" pix-explore">
                  <h4 style={{ paddingLeft: '24px' }}>Categories</h4>
               </div>


               <div className=" pt-0 pb-2">
                  <div className="pix-position-relative pix-slider" pix-slider="finite: true">
                     <div className="pix-slider-container pb-3 pix-categories ">
                        <ul className="status-list pix-slider-items">

                           <li>
                              <a onClick={() => TrendingPost()}
                                 className={category === 'Trending' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       src={require("./components/imgs/category/trending.svg")}
                                       class={category === 'Trending' && "categories-bg"} alt />
                                 </div>
                                 <h4>Trending</h4>
                              </a>
                           </li>

                           <li>
                              <a className={category === 'Love' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img onClick={() => setCateg(String = "Love")}
                                       className={category === 'Love' && 'categories-bg'}
                                       src={require("./components/imgs/category/Love.svg")} alt />
                                 </div>
                                 <h4>Love</h4>
                              </a>
                           </li>
                           <li>
                              <a className={category === 'Economic' && "categories-active"}>
                                 <div className="pix-categories-list">
                                    <img
                                       className={category === 'Economic' && 'categories-bg'}
                                       onClick={() => setCateg(String = "Economic")}
                                       src={require("./components/imgs/category/Economic.svg")} alt />
                                 </div>
                                 <h4>Economic</h4>
                              </a>
                           </li>
                           <li >
                              <a className={category === 'Education' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img onClick={() => setCateg(String = "Education")}
                                       className={category === 'Education' && 'categories-bg'}
                                       src={require("./components/imgs/category/Education.svg")} alt />
                                 </div>
                                 <h4>Education</h4>
                              </a>
                           </li>
                           <li>
                              <a className={category === 'Fashion' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img onClick={() => setCateg(String = "Fashion")}
                                       className={category === 'Fashion' && 'categories-bg'}
                                       src={require("./components/imgs/category/Fashion.svg")} alt />
                                 </div>
                                 <h4>Fashion</h4>
                              </a>
                           </li>
                           <li>
                              <a className={category === 'Food' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Food")}
                                       className={category === 'Food' && 'categories-bg'}
                                       src={require("./components/imgs/category/Food.svg")} alt />
                                 </div>
                                 <h4>Food</h4>
                              </a>
                           </li>
                           <li>
                              <a href="#" className={category === 'Gaming' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Gaming")}
                                       className={category === 'Gaming' && 'categories-bg'}
                                       src={require("./components/imgs/category/Gaming.svg")} alt />
                                 </div>
                                 <h4>Gaming</h4>
                              </a>
                           </li>
                           <li>
                              <a href="#" className={category === 'Animals' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Animals")}
                                       className={category === 'Animals' && 'categories-bg'}
                                       src={require("./components/imgs/category/Animals.svg")} alt />
                                 </div>
                                 <h4>Animals</h4>
                              </a>
                           </li>
                           <li>
                              <a href="#" className={category === 'News' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "News")}
                                       className={category === 'News' && 'categories-bg'}
                                       src={require("./components/imgs/category/ArtsCrafts.svg")} alt />
                                 </div>
                                 <h4>News</h4>
                              </a>
                           </li>
                           <li>
                              <a href="#" className={category === 'Cars' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Cars")}
                                       className={category === 'Cars' && 'categories-bg'}
                                       src={require("./components/imgs/category/cars.svg")} alt />
                                 </div>
                                 <h4>Cars</h4>
                              </a>
                           </li>

                           <li>
                              <a href="#" className={category === 'Challenges' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Challenges")}
                                       className={category === 'Challenges' && 'categories-bg'}
                                       src={require("./components/imgs/category/Challenges.svg")} alt />
                                 </div>
                                 <h4>Challenges</h4>
                              </a>
                           </li>
                           <li>
                              <a href="#" className={category === 'Comedy' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Comedy")}
                                       className={category === 'Comedy' && 'categories-bg'}
                                       src={require("./components/imgs/category/Comedy.svg")} alt />
                                 </div>
                                 <h4>Comedy</h4>
                              </a>
                           </li>
                           <li>
                              <a href="#" className={category === 'Commentary' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Commentary")}
                                       className={category === 'Commentary' && 'categories-bg'}
                                       src={require("./components/imgs/category/Commentary.svg")} alt />
                                 </div>
                                 <h4>Commentary</h4>
                              </a>
                           </li>
                           <li>
                              <a href="#" className={category === 'Cooking' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Cooking")}
                                       className={category === 'Cooking' && 'categories-bg'}
                                       src={require("./components/imgs/category/Cooking.svg")} alt />
                                 </div>
                                 <h4>Cooking</h4>
                              </a>
                           </li>

                           <li>
                              <a href="#" className={category === 'Dance' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Dance")}
                                       className={category === 'Dance' && 'categories-bg'}
                                       src={require("./components/imgs/category/Dance.svg")} alt />
                                 </div>
                                 <h4>Dance</h4>
                              </a>
                           </li>
                           <li>
                              <a href="#" className={category === 'Design' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Design")}
                                       className={category === 'Design' && 'categories-bg'}
                                       src={require("./components/imgs/category/Design.svg")} alt />
                                 </div>
                                 <h4>Design</h4>
                              </a>
                           </li>
                           <li>
                              <a href="#" className={category === 'Devotion' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Devotion")}
                                       className={category === 'Devotion' && 'categories-bg'}
                                       src={require("./components/imgs/category/Devotion.svg")} alt />
                                 </div>
                                 <h4>Devotion</h4>
                              </a>
                           </li>
                           <li>
                              <a href="#" className={category === 'Music' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Music")}
                                       className={category === 'Music' && 'categories-bg'}
                                       src={require("./components/imgs/category/Handcraft.svg")} alt />
                                 </div>
                                 <h4>Music</h4>
                              </a>
                           </li>
                           <li>
                              <a href="#" className={category === 'Health and Fitness' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Health and Fitness")}
                                       className={category === 'Health and Fitness' && 'categories-bg'}
                                       src={require("./components/imgs/category/HealthFitness.svg")} alt />
                                 </div>
                                 <h4>Health & Fitness</h4>
                              </a>
                           </li>
                           <li>
                              <a href="#" className={category === 'Learning' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Learning")}
                                       className={category === 'Learning' && 'categories-bg'}
                                       src={require("./components/imgs/category/Learning.svg")} alt />
                                 </div>
                                 <h4>Learning</h4>
                              </a>
                           </li>
                           <li>
                              <a href="#" className={category === 'Lifestyle' && "categories-active"}>
                                 <div className="pix-categories-list" >
                                    <img
                                       onClick={() => setCateg(String = "Lifestyle")}
                                       className={category === 'Lifestyle' && 'categories-bg'}
                                       src={require("./components/imgs/category/Lifestyle.svg")} alt />
                                 </div>
                                 <h4>Lifestyle</h4>
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


               <div className="explore_select_head">

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                     <h4>{category}</h4>
                     {category !== 'Trending' &&
                        <FormControl className={classes.formControl} style={{ marginTop: '15px' }}>
                           <Select
                              native
                              onChange={(e) => handleChange(e)}
                              value={loop}
                              inputProps={{
                                 name: 'age',
                                 id: 'outlined-age-native-simple',
                              }}
                           >
                              <option value={1}>Trending Loops</option>
                              <option value={2}>Recent loops</option>
                           </Select>
                        </FormControl>
                     }
                  </div>

               </div>

               {category === 'Trending' ?
                  <DiscoverFeed user={user} suggest={suggest} feeds={feeds} />
                  :
                  <DiscoverByCategory category={category} loop={loop} user={user} suggest={suggest} feeds={feeds} />
               }



            </div>

         </div>
      </div>
   );
}
export default Discover;

