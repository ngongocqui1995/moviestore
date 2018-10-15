import React, { Component } from 'react'
import fetchData from '../../api/api'
import { url } from '../../variables/general'

export default class Recommend_Anime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        const { data } = this.props
        if(!data || data.length === 0)
        {
            return <div className="text-center">Loading fail ...</div>
        }
        else
        {
            return (
                <section>
                    <div className="d-flex flex-row">
                        <div className="title-box">
                            <h2 className="title h3-md">Đề xuất cho bạn.</h2>
                        </div>
                    </div>
                    <div className="adonis-carousel music-img-box-cont-sm viewport-animate  auto-fit-columns" data-auto-fit-items=".item" data-item-parent=".owl-carousel" data-item-width="336" data-item-max-width="630" data-animation="slideUp" data-animation-item=".item" data-auto-width="yes" data-loop="no" data-dots="yes">
                        <div className="gutter-30">
                            <div className="owl-carousel owl-theme-adonis">
                                <div className="item">
                                    {!data[0] || data[0].length === 0 ? "" : data[0].map((prop, key) => (
                                        <div key={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img style={{ height: 50 }} src={url + prop.imageMain || ""} alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">{prop.title || ""}</a></h6>
                                                <p className="sub-title"><a href="#">Rachel Platten</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
    
                                <div className="item">
                                    {!data[1] || data[1].length === 0 ? "" : data[1].map((prop, key) => (
                                        <div key={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img style={{ height: 50 }} src={url + prop.imageMain || ""} alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">{prop.title || ""}</a></h6>
                                                <p className="sub-title"><a href="#">Sam Hunt</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="item">
                                    {!data[2] || data[2].length === 0 ? "" : data[2].map((prop, key) => (
                                        <div key={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img style={{ height: 50 }} src={url + prop.imageMain || ""} alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">{prop.title || ""}</a></h6>
                                                <p className="sub-title"><a href="#">Sam Hunt</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="item">
                                    {!data[3] || data[3].length === 0 ? "" : data[3].map((prop, key) => (
                                        <div key={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img style={{ height: 50 }} src={url + prop.imageMain || ""} alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">{prop.title || ""}</a></h6>
                                                <p className="sub-title"><a href="#">Sam Hunt</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="item">
                                    {!data[4] || data[4].length === 0 ? "" : data[4].map((prop, key) => (
                                        <div key={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img style={{ height: 50 }} src={url + prop.imageMain || ""} alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">{prop.title || ""}</a></h6>
                                                <p className="sub-title"><a href="#">Sam Hunt</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="item">
                                    {!data[5] || data[5].length === 0 ? "" : data[5].map((prop, key) => (
                                        <div key={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                            <div className="img-box img-box-sm box-rounded-sm">
                                                <img style={{ height: 50 }} src={url + prop.imageMain || ""} alt="" />
                                            </div>
                                            <div className="des">
                                                <h6 className="title"><a href="#">{prop.title || ""}</a></h6>
                                                <p className="sub-title"><a href="#">Sam Hunt</a></p>
                                            </div>
                                            <div className="hover-state d-flex justify-content-between align-items-center">
                                                <span className="pointer play-btn-dark box-rounded-sm"><i className="play-icon"></i></span>
                                                <div className="d-flex align-items-center">
                                                    <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                    <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
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
