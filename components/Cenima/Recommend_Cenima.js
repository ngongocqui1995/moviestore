import React, { Component } from 'react'
import { url } from '../../variables/general'
import { connect } from 'react-redux'

class Recommend_Cenima extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data_1: [],
            data_2: [],
            data_3: [],
            data_4: [],
            data_5: [],
            data_6: [],
            data_7: [],
            data_8: [],
            data_9: [],
            data_10: [],
        }
    }

    render() {
        const { data_1, data_2, data_3, data_4, data_5, data_6, data_7, data_8, data_9, data_10 } = this.props
        if (!data_1 || data_1.length === 0 || !data_2 || data_2.length === 0 || !data_3 || data_3.length === 0 || !data_4 || data_4.length === 0
            || !data_5 || data_5.length === 0 || !data_6 || data_6.length === 0 || !data_7 || data_7.length === 0 || !data_8 || data_8.length === 0
            || !data_9 || data_9.length === 0 || !data_10 || data_10.length === 0) {
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
                            <div className="owl-carousel owl-theme-adonis" style={{cursor: "grab"}}>
                                <div className="item">
                                    {!data_1 || data_1.length === 0 ? "" : data_1.map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>

                                <div className="item">
                                    {!data_2 || data_2.length === 0 ? "" : data_2.map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data_3 || data_3.length === 0 ? "" : data_3.map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data_4 || data_4.length === 0 ? "" : data_4.map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data_5 || data_5.length === 0 ? "" : data_5.map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data_6 || data_6.length === 0 ? "" : data_6.map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data_7 || data_7.length === 0 ? "" : data_7.map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data_8 || data_8.length === 0 ? "" : data_8.map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data_9 || data_9.length === 0 ? "" : data_9.map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="item">
                                    {!data_10 || data_10.length === 0 ? "" : data_10.map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} className="music-img-box mb-e-30 mb-e-md-40">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} className="music-img-box">
                                                    <div className="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} className="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div className="hover-state">
                                                            <div className="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            </div>
                                                            <div className="absolute-top-right pr-e-15 pt-e-15">
                                                                <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                                    <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
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


function mapStateToProps(state) {
    return {
        data_1: state.recommend_Cenima_1,
        data_2: state.recommend_Cenima_2,
        data_3: state.recommend_Cenima_3,
        data_4: state.recommend_Cenima_4,
        data_5: state.recommend_Cenima_5,
        data_6: state.recommend_Cenima_6,
        data_7: state.recommend_Cenima_7,
        data_8: state.recommend_Cenima_8,
        data_9: state.recommend_Cenima_9,
        data_10: state.recommend_Cenima_10,
    };
}

export default connect(mapStateToProps) (Recommend_Cenima);