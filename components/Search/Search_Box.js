import React, { Component } from 'react'

export default class Search_Box extends Component {
    render() {
        return (
            <div id="search-box-4">
                <button id="btn-search-close" className="btn btn-blank btn--search-close" aria-label="Close search form">
                    <span className="adonis-icon color-active"><svg id="icon-cross" viewBox="0 0 24 24" style={{width: "5vmin"}}> <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path> </svg></span>
                </button>
                <div className="search-inner search-inner-up d-flex align-items-center">
                    <div className="master-container-fluid d-flex align-items-center">
                        <form className="search-form">
                            <input className="search-input" name="search" type="search" placeholder="Start typing..." autoComplete="off" spellCheck="false" />
                        </form>
                    </div>
                </div>
                <div className="search-inner search-inner-down dark-theme">
                    <div className="master-container-fluid pt-3 pt-md-4 d-flex flex-column">
                        <div className="navbar-expand mb-2 mb-md-4 scroll-x">
                            <ul className="nav moving-border flex-nowrap" role="tablist">
                                <li className="menu-item active">
                                    <a className="nav-link active m-item fs-7 pr-3 pl-0" id="search-tab-songs" data-toggle="tab" href="#search-content-songs" role="tab" aria-controls="search-content-songs" aria-selected="true">Songs</a>
                                </li>
                                <li className="menu-item">
                                    <a className="nav-link m-item fs-7 pr-3 pl-3" id="search-tab-albums" data-toggle="tab" href="#search-content-albums" role="tab" aria-controls="search-content-albums" aria-selected="true">Albums</a>
                                </li>
                                <li className="menu-item">
                                    <a className="nav-link m-item fs-7 pr-3 pl-3" id="search-tab-playlists" data-toggle="tab" href="#search-content-playlists" role="tab" aria-controls="search-content-playlists" aria-selected="true">Playlists</a>
                                </li>
                                <li className="menu-item">
                                    <a className="nav-link m-item fs-7 pr-3 pl-3" id="search-tab-artists" data-toggle="tab" href="#search-content-artists" role="tab" aria-controls="search-content-artists" aria-selected="true">Artists</a>
                                </li>
                            </ul>
                            <hr className="border-hr" />
                        </div>
                        <div className="tab-content scroll-y">
                            <div className="tab-pane fade show active" id="search-content-songs" role="tabpanel" aria-labelledby="search-tab-songs">
                                <div className="row auto-cols-row" data-item-width="330" data-item-max-width="630">
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-2.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Country girl shake it for me</a></h6>
                                                <p className="sub-title"><a href="#">Bing Crosby</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-1.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">The Separation</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-3.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Stirring of a fool</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-4.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Nothings into Somethings</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-5.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Let You Down</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-6.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Nothings into Somethings</a></h6>
                                                <p className="sub-title"><a href="#">Sam Hunt</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-7.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">O Come, All Ye Faithful</a></h6>
                                                <p className="sub-title"><a href="#">Kesha</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-8.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Fetty Wap Ft Monty</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-8.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Fetty Wap Ft Monty</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-9.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Do You Hear What I Hear</a></h6>
                                                <p className="sub-title"><a href="#">Band Aid</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-10.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Look What You Made Me Do</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-11.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Carol of the Bells</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-12.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Carol of the Bells</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-1.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">You're A Mean One, Mr. Grinch</a></h6>
                                                <p className="sub-title"><a href="#">Darius Rucker</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-14.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Joy To The World</a></h6>
                                                <p className="sub-title"><a href="#">Pentatonix</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-15.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Something Just Like This</a></h6>
                                                <p className="sub-title"><a href="#">Demi Lovato</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-1.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">The Separation</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-3.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Stirring of a fool</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-2.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Country girl shake it for me</a></h6>
                                                <p className="sub-title"><a href="#">Bing Crosby</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-4.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Nothings into Somethings</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-5.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Let You Down</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-1.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">The Separation</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-2.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Country girl shake it for me</a></h6>
                                                <p className="sub-title"><a href="#">Bing Crosby</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-4.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Nothings into Somethings</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-5.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Let You Down</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="img-box-horizontal music-img-box h-g-bg">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img src="/static/assets/images/hot-song/hot-4.jpg" alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">Nothings into Somethings</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="search-content-albums" role="tabpanel" aria-labelledby="search-tab-albums">
                                <div className="row auto-cols-row" data-item-width="150" data-item-max-width="200">
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-44.jpg" data-2x="assets/images/new-releases/new-releases-44@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-43.jpg" data-2x="assets/images/new-releases/new-releases-43@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-42.jpg" data-2x="assets/images/new-releases/new-releases-42@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-41.jpg" data-2x="assets/images/new-releases/new-releases-41@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-40.jpg" data-2x="assets/images/new-releases/new-releases-40@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-39.jpg" data-2x="assets/images/new-releases/new-releases-39@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-38.jpg" data-2x="assets/images/new-releases/new-releases-38@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-37.jpg" data-2x="assets/images/new-releases/new-releases-37@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-36.jpg" data-2x="assets/images/new-releases/new-releases-36@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-35.jpg" data-2x="assets/images/new-releases/new-releases-35@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-34.jpg" data-2x="assets/images/new-releases/new-releases-34@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-33.jpg" data-2x="assets/images/new-releases/new-releases-33@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-32.jpg" data-2x="assets/images/new-releases/new-releases-32@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-31.jpg" data-2x="assets/images/new-releases/new-releases-31@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-30.jpg" data-2x="assets/images/new-releases/new-releases-30@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-29.jpg" data-2x="assets/images/new-releases/new-releases-29@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-28.jpg" data-2x="assets/images/new-releases/new-releases-28@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-27.jpg" data-2x="assets/images/new-releases/new-releases-27@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-26.jpg" data-2x="assets/images/new-releases/new-releases-26@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-25.jpg" data-2x="assets/images/new-releases/new-releases-25@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-24.jpg" data-2x="assets/images/new-releases/new-releases-24@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-23.jpg" data-2x="assets/images/new-releases/new-releases-23@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-22.jpg" data-2x="assets/images/new-releases/new-releases-22@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-21.jpg" data-2x="assets/images/new-releases/new-releases-21@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-20.jpg" data-2x="assets/images/new-releases/new-releases-20@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-19.jpg" data-2x="assets/images/new-releases/new-releases-19@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-18.jpg" data-2x="assets/images/new-releases/new-releases-18@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="music-img-box mb-e-30 mb-e-lg-40">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src="/static/assets/images/new-releases/new-releases-17.jpg" data-2x="assets/images/new-releases/new-releases-17@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">Roll n Peace Remix</a></h6>
                                            <p className="sub-title category"><a href="#">Imagine</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="search-content-artists" role="tabpanel" aria-labelledby="search-tab-artists">
                            </div>
                            <div className="tab-pane fade" id="search-content-playlists" role="tabpanel" aria-labelledby="search-tab-playlists">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
