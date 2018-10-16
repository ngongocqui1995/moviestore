import React, { Component } from 'react'
import SideBarLeft from '../components/SideBar/SideBarLeft';
import Header from '../components/Header/Header';
import fetchData from '../api/api'
import {
  storeCarouselMainHome, storeCommonMovies_1, storeCommonMovies_2, storeCommonMovies_3, storeCommonMovies_4, storeCommonMovies_5,
  storeCommonMovies_6, storeFeatureMainHome, storeNewDay_1, storeNewDay_2, storeNewDay_3, storeNewDay_4, storeNewDay_5,
  storeNewDay_6, storeNewDay_7, storeNewDay_8, storeNewDay_9, storeNewDay_10, storeNewUpdateMainHome, storeTopWeek_1, storeTopWeek_2,
  storeTopWeek_3, storeTopWeek_4, storeTopWeek_5, storeTopWeek_6, storeTrendsMainHome
} from '../store/store'
import createStore from "../store/store"

export default class Detail extends Component {
    render() {
        return (
            <div id="wrap" className="light main-wrap clearfix">
                <SideBarLeft/>
                <Header/>
                <div id="site-content">
                    <div id="site-content-inner">
                        <div className="album-wrap">
                            <div className="container">
                                <div className="img-box-text-over lg box-rounded-lg">
                                    <img className="resize1" src={"/assets/images/single/single-2.jpg"} style={{width: "100%", height: 300, marginBottom: 20}} alt="" />
                                </div>
                                <div className="row">
                                    <div className="col-md-3 flex-column-sidebar-md text-center text-md-left">
                                        <div className="album-image">
                                            <div className="music-img-box d-inline-block">
                                                <div className="img-box">
                                                    <img className="retina box-rounded-md" src="/assets/images/single/single-2.jpg" data-2x="/assets/images/single/single-2@2x.jpg" alt="" />
                                                </div>
                                                <div className="absolute-info">
                                                    <a className="btn btn-60-60 btn-primary absolute-center adonis-album-button round-btn text-light" data-album-id="1" role="button" tabindex="0">
                                                        <span className="adonis-icon icon-play icon-2x"><svg id="icon-brand-play" viewBox="0 0 27 32" width="100%" height="100%">
                                                            <path d="M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"></path>
                                                        </svg></span>
                                                        <span className="adonis-icon icon-pause icon-2x"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 29 32"><path d="M19.2 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"></path><path d="M1.6 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"></path></svg></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pb-4 d-inline-block album-likes">
                                            <span className="adonis-icon pr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                            <span className="pr-2">1256</span>
                                            <span className="adonis-icon pr-2 icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg></span>
                                            <span>125K</span>
                                        </div>
                                        <div className="about">
                                            <h4>About this album</h4>
                                            <p>className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                                Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet
                                    Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. </p>
                                        </div>
                                        <div className="pt-e-20 pt-e-lg-40"></div>
                                    </div>
                                    <div className="col-md-9 flex-column-content-md pl-e-xl-40">
                                        <div className="album-top-box text-center text-md-left">
                                            <h6 className="inactive-color">ALBUM</h6>
                                            <h1 className="album-title">The Ones That Like Me</h1>
                                            <p className="mb-2">By: <a href="#">Danielle Bradberry</a>  classNameical</p>
                                            <div className="separator mb-4 mt-4">
                                                <span className="separator-md"></span>
                                            </div>
                                            <p className="mb-2">14 Songs - 30 minutes</p>
                                            <p className="mb-2">Released on November 12, 2017</p>
                                        </div>

                                        <ul className="adonis-album-list pb-5 pt-e-30">
                                            <li>
                                                <div className="item-number h6 inactive-color">#</div>
                                                <div className="item-title h6 inactive-color">Song</div>
                                                <div className="item-genre h6 inactive-color">Genre</div>
                                                <div className="item-duration h6 inactive-color">Time</div>
                                                <div className="item-tools">
                                                    <span className="adonis-icon h6 inactive-color icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                </div>
                                            </li>
                                            <li className="item hover-bg-item">
                                                <div className="item-number">
                                                    <span className="hover-hide">01</span>
                                                    <span className="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div className="item-title">Begining To See The Light</div>
                                                <div className="item-genre"><span className="hover-hide hover-lg-show">classNameical</span></div>
                                                <div className="item-duration"><span className="hover-hide">14:13</span></div>
                                                <div className="item-tools">
                                                    <span className="hover-hide">1245</span>
                                                    <div className="hover-show d-flex flex-nowrap hover-tools">
                                                        <span className="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span className="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span className="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div className="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li className="item hover-bg-item">
                                                <div className="item-number">
                                                    <span className="hover-hide">02</span>
                                                    <span className="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div className="item-title">Ugly Christmas Sweater</div>
                                                <div className="item-genre"><span className="hover-hide hover-lg-show">classNameical</span></div>
                                                <div className="item-duration"><span className="hover-hide">10:14</span></div>
                                                <div className="item-tools">
                                                    <span className="hover-hide">1010</span>
                                                    <div className="hover-show d-flex flex-nowrap hover-tools">
                                                        <span className="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span className="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span className="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div className="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li className="item hover-bg-item">
                                                <div className="item-number">
                                                    <span className="hover-hide">03</span>
                                                    <span className="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div className="item-title">Feliz Navidad</div>
                                                <div className="item-genre"><span className="hover-hide hover-lg-show">classNameical</span></div>
                                                <div className="item-duration"><span className="hover-hide">11:08</span></div>
                                                <div className="item-tools">
                                                    <span className="hover-hide">1110</span>
                                                    <div className="hover-show d-flex flex-nowrap hover-tools">
                                                        <span className="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span className="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span className="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div className="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li className="item hover-bg-item">
                                                <div className="item-number">
                                                    <span className="hover-hide">04</span>
                                                    <span className="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div className="item-title">What are You Doing New Year&#39;s Eve?</div>
                                                <div className="item-genre"><span className="hover-hide hover-lg-show">classNameical</span></div>
                                                <div className="item-duration"><span className="hover-hide">14:13</span></div>
                                                <div className="item-tools">
                                                    <span className="hover-hide">1245</span>
                                                    <div className="hover-show d-flex flex-nowrap hover-tools">
                                                        <span className="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span className="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span className="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div className="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li className="item hover-bg-item">
                                                <div className="item-number">
                                                    <span className="hover-hide">05</span>
                                                    <span className="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div className="item-title">Mashmallow World</div>
                                                <div className="item-genre"><span className="hover-hide hover-lg-show">classNameical</span></div>
                                                <div className="item-duration"><span className="hover-hide">12:14</span></div>
                                                <div className="item-tools">
                                                    <span className="hover-hide">1245</span>
                                                    <div className="hover-show d-flex flex-nowrap hover-tools">
                                                        <span className="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span className="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span className="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div className="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li className="item hover-bg-item">
                                                <div className="item-number">
                                                    <span className="hover-hide">06</span>
                                                    <span className="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div className="item-title">Hard Candy Christmas</div>
                                                <div className="item-genre"><span className="hover-hide hover-lg-show">classNameical</span></div>
                                                <div className="item-duration"><span className="hover-hide">13:15</span></div>
                                                <div className="item-tools">
                                                    <span className="hover-hide">1325</span>
                                                    <div className="hover-show d-flex flex-nowrap hover-tools">
                                                        <span className="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span className="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span className="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div className="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li className="item hover-bg-item">
                                                <div className="item-number">
                                                    <span className="hover-hide">07</span>
                                                    <span className="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div className="item-title">Baby, It&#39;s Cold Outside</div>
                                                <div className="item-genre"><span className="hover-hide hover-lg-show">classNameical</span></div>
                                                <div className="item-duration"><span className="hover-hide">16:16</span></div>
                                                <div className="item-tools">
                                                    <span className="hover-hide">1980</span>
                                                    <div className="hover-show d-flex flex-nowrap hover-tools">
                                                        <span className="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span className="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span className="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div className="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li className="item hover-bg-item">
                                                <div className="item-number">
                                                    <span className="hover-hide">08</span>
                                                    <span className="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div className="item-title">The Man With The Bag</div>
                                                <div className="item-genre"><span className="hover-hide hover-lg-show">classNameical</span></div>
                                                <div className="item-duration"><span className="hover-hide">18:14</span></div>
                                                <div className="item-tools">
                                                    <span className="hover-hide">1745</span>
                                                    <div className="hover-show d-flex flex-nowrap hover-tools">
                                                        <span className="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span className="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span className="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div className="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li className="item hover-bg-item">
                                                <div className="item-number">
                                                    <span className="hover-hide">09</span>
                                                    <span className="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div className="item-title">What I&#39;m Thankful for</div>
                                                <div className="item-genre"><span className="hover-hide hover-lg-show">classNameical</span></div>
                                                <div className="item-duration"><span className="hover-hide">19:26</span></div>
                                                <div className="item-tools">
                                                    <span className="hover-hide">1428</span>
                                                    <div className="hover-show d-flex flex-nowrap hover-tools">
                                                        <span className="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span className="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span className="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div className="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li className="item hover-bg-item">
                                                <div className="item-number">
                                                    <span className="hover-hide">10</span>
                                                    <span className="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div className="item-title">What I&#39;ve Done - One More Light Live</div>
                                                <div className="item-genre"><span className="hover-hide hover-lg-show">classNameical</span></div>
                                                <div className="item-duration"><span className="hover-hide">14:13</span></div>
                                                <div className="item-tools">
                                                    <span className="hover-hide">1563</span>
                                                    <div className="hover-show d-flex flex-nowrap hover-tools">
                                                        <span className="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span className="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span className="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div className="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li className="item hover-bg-item">
                                                <div className="item-number">
                                                    <span className="hover-hide">11</span>
                                                    <span className="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div className="item-title">Talking to Myself - One More Light Live</div>
                                                <div className="item-genre"><span className="hover-hide hover-lg-show">classNameical</span></div>
                                                <div className="item-duration"><span className="hover-hide">17:16</span></div>
                                                <div className="item-tools">
                                                    <span className="hover-hide">1536</span>
                                                    <div className="hover-show d-flex flex-nowrap hover-tools">
                                                        <span className="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span className="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span className="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div className="hover-bg gradient-adonis"></div>
                                            </li>
                                        </ul>
                                        <p className="mb-2">Released on November 12, 2017</p>
                                        <p className="mb-2">&copy; 2018 Adonis Inc.</p>
                                    </div>
                                </div>
                                <div className="more-items">
                                    <div className="pt-e-20 pt-e-lg-40"></div>
                                    <div className="title-box">
                                        <h2 className="title h3-md">More By Danielle Bradbery</h2>
                                    </div>
                                    <div className="adonis-carousel auto-fit-columns" data-auto-width="no" data-item-parent=".owl-carousel" data-auto-fit-items=".item" data-dots="yes" data-items-responsive="0:1|400:2|600:3|900:4|1200:5">
                                        <div className="gutter-30">
                                            <div className="owl-carousel owl-theme-adonis">
                                                <div className="item hover-bg-item">
                                                    <div className="music-img-box">
                                                        <div className="img-box box-rounded-sm">
                                                            <img className="retina" src="/assets/images/new-releases/new-releases-1.jpg" data-2x="/assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                            <div className="hover-state">
                                                                <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                                </div>
                                                                <div className="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div className="item hover-bg-item">
                                                    <div className="music-img-box">
                                                        <div className="img-box box-rounded-sm">
                                                            <img className="retina" src="/assets/images/new-releases/new-releases-2.jpg" data-2x="/assets/images/new-releases/new-releases-2@2x.jpg" alt="" />
                                                            <div className="hover-state">
                                                                <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                                </div>
                                                                <div className="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div className="item hover-bg-item">
                                                    <div className="music-img-box">
                                                        <div className="img-box box-rounded-sm">
                                                            <img className="retina" src="/assets/images/new-releases/new-releases-3.jpg" data-2x="/assets/images/new-releases/new-releases-3@2x.jpg" alt="" />
                                                            <div className="hover-state">
                                                                <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                                </div>
                                                                <div className="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div className="item hover-bg-item">
                                                    <div className="music-img-box">
                                                        <div className="img-box box-rounded-sm">
                                                            <img className="retina" src="/assets/images/new-releases/new-releases-4.jpg" data-2x="/assets/images/new-releases/new-releases-4@2x.jpg" alt="" />
                                                            <div className="hover-state">
                                                                <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                                </div>
                                                                <div className="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div className="item hover-bg-item">
                                                    <div className="music-img-box">
                                                        <div className="img-box box-rounded-sm">
                                                            <img className="retina" src="/assets/images/new-releases/new-releases-5.jpg" data-2x="/assets/images/new-releases/new-releases-5@2x.jpg" alt="" />
                                                            <div className="hover-state">
                                                                <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                                </div>
                                                                <div className="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div className="item hover-bg-item">
                                                    <div className="music-img-box">
                                                        <div className="img-box box-rounded-sm">
                                                            <img className="retina" src="/assets/images/new-releases/new-releases-6.jpg" data-2x="/assets/images/new-releases/new-releases-6@2x.jpg" alt="" />
                                                            <div className="hover-state">
                                                                <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                                </div>
                                                                <div className="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div className="item hover-bg-item">
                                                    <div className="music-img-box">
                                                        <div className="img-box box-rounded-sm">
                                                            <img className="retina" src="/assets/images/new-releases/new-releases-7.jpg" data-2x="/assets/images/new-releases/new-releases-7@2x.jpg" alt="" />
                                                            <div className="hover-state">
                                                                <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                                </div>
                                                                <div className="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div className="item hover-bg-item">
                                                    <div className="music-img-box">
                                                        <div className="img-box box-rounded-sm">
                                                            <img className="retina" src="/assets/images/new-releases/new-releases-8.jpg" data-2x="/assets/images/new-releases/new-releases-8@2x.jpg" alt="" />
                                                            <div className="hover-state">
                                                                <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                                </div>
                                                                <div className="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div className="item hover-bg-item">
                                                    <div className="music-img-box">
                                                        <div className="img-box box-rounded-sm">
                                                            <img className="retina" src="/assets/images/new-releases/new-releases-9.jpg" data-2x="/assets/images/new-releases/new-releases-9@2x.jpg" alt="" />
                                                            <div className="hover-state">
                                                                <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                                </div>
                                                                <div className="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-e-5 pt-e-lg-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Detail.getInitialProps = async function (context) {
    var store = createStore()
    let metaKey = context.query.metaKey

    return { data: store.getState() }
}