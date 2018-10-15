import React, { Component } from 'react'
import { url } from '../../variables/general'

export default class NewUpdate_Cenima extends Component {
    constructor(datas) {
        super(datas)
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
                    <div className="title-box">
                        <h4 className="title h3">Mới cập nhật</h4>
                    </div>
                    <div className="adonis-carousel viewport-animate" data-animation="slideUp" data-animation-item=".item" data-dots="yes" data-items="7" data-items-responsive="0:1|300:2|900:4|1200:5|1600:7">
                        <div className="gutter-30">
                            <div className="owl-carousel owl-theme-adonis">
                                <div  className="item">
                                    {!data[0] ? "" :
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img style={{height:200}} className="retina" src={url + data[0].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[0].title || ""}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  className="item">
                                    {!data[1] ? "" :
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img style={{height:200}} className="retina" src={url + data[1].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[1].title || ""}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  className="item">
                                    {!data[2] ? "" :
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img style={{height:200}} className="retina" src={url + data[2].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[2].title || ""}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  className="item">
                                    {!data[3] ? "" :
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img style={{height:200}} className="retina" src={url + data[3].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[3].title || ""}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  className="item">
                                    {!data[4] ? "" :
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img style={{height:200}} className="retina" src={url + data[4].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[4].title || ""}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  className="item">
                                    {!data[5] ? "" :
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img style={{height:200}} className="retina" src={url + data[5].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[5].title || ""}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  className="item">
                                    {!data[6] ? "" :
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img style={{height:200}} className="retina" src={url + data[6].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[6].title || ""}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  className="item">
                                    {!data[7] ? "" :
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img style={{height:200}} className="retina" src={url + data[7].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[7].title || ""}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
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
