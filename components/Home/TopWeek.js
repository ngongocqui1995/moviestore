import React, { Component } from 'react'
import { url } from '../../variables/general'
import { connect } from 'react-redux'


class TopWeek extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data_1: [],
            data_2: [],
            data_3: [],
            data_4: [],
            data_5: [],
            data_6: [],
        }
    }

    componentDidUpdate() {
        $(".adonis-carousel").each(function () {
            adonisObj.carousel($(this));
        });
    }

    render() {
        const { data_1, data_2, data_3, data_4, data_5, data_6 } = this.props
        if (!data_1 || data_1.length === 0 || !data_2 || data_2.length === 0 || !data_3 || data_3.length === 0 || 
            !data_4 || data_4.length === 0 || !data_5 || data_5.length === 0 || !data_6 || data_6.length === 0) {
            return <div className="text-center">Loading fail...</div>
        }
        else {
            return (
                <section>
                    <div className="row">
                        <div className="col-xxl-7 col-lg-8">
                            <div className="d-flex flex-row">
                                <div className="title-box">
                                    <h6 className="sub-title inactive-color">Top Week</h6>
                                    <h2 className="title h3-md">Top tuần có gì hot ?</h2>
                                </div>
                                <div className="button-right ml-auto ml-auto mt-auto mb-4 d-flex">
                                    <a href="#">See all <span className="adonis-icon pl-1 icon-arrow icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-see-all-arrow-right" /></svg></span></a>
                                </div>
                            </div>
                            <div className="adonis-carousel music-img-box-cont-sm " data-animation-item=".item" data-auto-width="yes" data-loop="no" data-dots="yes" data-responsive-width="0:100%|600:50%|900:33.33%|1200:25%">
                                <div className="gutter-30">
                                    <div className="owl-carousel owl-theme-adonis">
                                        <div className="item">
                                            {
                                                !data_1 || data_1.length === 0 ? "" : data_1.map((prop, key) => (
                                                    <div key={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                        <div className="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain  || ""} alt="" />
                                                        </div>
                                                        <div className="des">
                                                            <h6 className="title fs-2"><a href="#">{prop.title || ""}</a></h6>
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
                                                ))
                                            }
                                        </div>
                                        <div className="item">
                                            {
                                                !data_2 || data_2.length === 0 ? "" : data_2.map((prop, key) =>  (
                                                    <div key={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                        <div className="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain  || ""} alt="" />
                                                        </div>
                                                        <div className="des">
                                                            <h6 className="title fs-2"><a href="#">{prop.title || ""}</a></h6>
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
                                                ))
                                            }
                                        </div>
                                        <div className="item">
                                            {
                                                !data_3 || data_3.length === 0 ? "" : data_3.map((prop, key) => (
                                                    <div key={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                        <div className="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain  || ""} alt="" />
                                                        </div>
                                                        <div className="des">
                                                            <h6 className="title fs-2"><a href="#">{prop.title || ""}</a></h6>
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
                                                ))
                                            }
                                        </div>
                                        <div className="item">
                                            {
                                                !data_4 || data_4.length === 0 ? "" : data_4.map((prop, key) => (
                                                    <div key={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                        <div className="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain  || ""} alt="" />
                                                        </div>
                                                        <div className="des">
                                                            <h6 className="title fs-2"><a href="#">{prop.title || ""}</a></h6>
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
                                                ))
                                            }
                                        </div>
                                        <div className="item">
                                            {
                                                !data_5 || data_5.length === 0 ? "" : data_5.map((prop, key) => (
                                                    <div key={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                        <div className="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain  || ""} alt="" />
                                                        </div>
                                                        <div className="des">
                                                            <h6 className="title fs-2"><a href="#">{prop.title || ""}</a></h6>
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
                                                ))
                                            }
                                        </div>
                                        <div className="item">
                                            {
                                                !data_6 || data_6.length === 0 ? "" : data_6.map((prop, key) => (
                                                    <div key={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                        <div className="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain  || ""} alt="" />
                                                        </div>
                                                        <div className="des">
                                                            <h6 className="title fs-2"><a href="#">{prop.title || ""}</a></h6>
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
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-e-20 pt-e-lg-40"></div>
                        </div>
                        <div className="col-xxl-5 col-lg-4">
                            <div className="title pb-e-15">
                                <h6 className="title inactive-color">Video Today</h6>
                                <h2 className="title h3-md">Watch Now</h2>
                            </div>
                            <div className="music-img-box">
                                <div className="img-box box-rounded-md">
                                    <img src="/static/assets/images/watch-now/watch-now.jpg" alt="" />
                                </div>
                                <div className="hover-state show">
                                    <div className="absolute-top pl-e-15 pr-e-15 pt-e-15 pl-e-md-30 pr-e-md-30 pt-e-md-30">
                                        <h6 className="album-name text-light">Album:  Life Changes</h6>
                                    </div>
                                    <div className="absolute-bottom pl-e-15 pr-e-15 pb-e-md-15  pl-e-md-30 pr-e-30 pb-e-md-30 d-flex">
                                        <div className="">
                                            <a href="#"><h5 className="album-title text-light">The Ones That Like Me</h5></a>
                                            <a href="#" ><h6 className="artist-name text-light">David Jame</h6></a>
                                        </div>
                                        <div className="ml-auto">
                                            <span className="pointer play-btn-dark play-btn-dark round-btn"><i className="play-icon"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-e-30 pt-e-lg-40"></div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}



function mapStateToProps(state) {
    return {
        data_1: state.topWeek_1,
        data_2: state.topWeek_2,
        data_3: state.topWeek_3,
        data_4: state.topWeek_4,
        data_5: state.topWeek_5,
        data_6: state.topWeek_6,
    };
}

export default connect(mapStateToProps) (TopWeek)