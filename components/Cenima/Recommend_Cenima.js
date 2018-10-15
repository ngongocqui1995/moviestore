import React, { Component } from 'react'
import { url } from '../../variables/general'

export default class Recommend_Cenima extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    render() {
        const { data } = this.props
        if (!data || data.length === 0) {
            return <div className="text-center"> Loading fail ...</div>
        }
        else {
            return (
                <section>
                    <div className="d-flex">
                        <div className="title-box">
                            <h6 className="sub-title inactive-color">Today</h6>
                            <h2 className="title h3-md">Có thể bạn thích ?</h2>
                        </div>
                        <div className="button-right ml-auto ml-auto d-flex align-items-end">
                            <a href="#" className="mb-4">Xem thêm<span className="adonis-icon pl-1 icon-arrow icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-see-all-arrow-right" /></svg></span></a>
                        </div>
                    </div>
                    <div className="adonis-carousel music-img-box-cont-sm" data-animation-item=".item" data-dots="yes" data-auto-width="yes" data-responsive-width="0:50%|400:33.33%|600:25%|800:20%|1000:16.667%|1200:14.285%|1400:12.5%|1600:10%">
                        <div className="gutter-30">
                            <div className="owl-carousel owl-theme-adonis">
                                <div className="item">
                                    {!data[0] || data[0].length === 0 ? "" : data[0].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>

                                <div className="item">
                                    {!data[1] || data[1].length === 0 ? "" : data[1].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data[2] || data[2].length === 0 ? "" : data[2].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data[3] || data[3].length === 0 ? "" : data[3].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data[4] || data[4].length === 0 ? "" : data[4].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data[5] || data[5].length === 0 ? "" : data[5].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data[6] || data[6].length === 0 ? "" : data[6].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data[7] || data[7].length === 0 ? "" : data[7].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data[8] || data[8].length === 0 ? "" : data[8].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data[9] || data[9].length === 0 ? "" : data[9].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="pt-e-20 pt-e-lg-40"></div>
                </section>
            )
        }
    }
}
