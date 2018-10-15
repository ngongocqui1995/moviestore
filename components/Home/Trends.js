import React, { Component } from 'react'
import { url } from '../../variables/general'
import { connect } from 'react-redux'

class Trends extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidUpdate(){
        $(".adonis-carousel").each(function () {
            adonisObj.carousel($(this));
          });
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
                        <h4 className="title h3">Xu hướng</h4>
                    </div>
                    <div className="adonis-carousel auto-fit-columns" data-animation-item=".music-img-box" data-item-width="460" data-item-max-width="480" data-auto-fit-items=".item" data-dots="yes" data-auto-width="yes">
                        <div className="gutter-30">
                            <div className="owl-carousel owl-theme-adonis">
                                <div className="item">
                                    {!data[0] || data[0].length === 0 ? "" :
                                        <div  className="music-img-box">
                                            <div className="img-box">
                                                <img style={{height:300}}className="retina box-rounded-lg" src={ url + data[0].imageMain || ""} data-2x="assets/images/radios/radio-browse-01@2x.jpg" alt="" />
                                                <div className="absolute-info">
                                                    <div className="absolute-center">
                                                        <h4 className="fs-10 m-0 text-light text-center"><span className="font-weight-bold">Chichi</span></h4>
                                                        <h4 className="fs-10 m-0 text-light text-center"><em><span className="font-weight-light">Daily Radio</span></em></h4>
                                                    </div>
                                                </div>
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-30 pb-e-30">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-30 pt-e-30">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[0].title || ""}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
    
                                <div className="item">
                                    {!data[1] || data[1].length === 0 ? "" :
                                        <div  className="music-img-box">
                                            <div className="img-box">
                                                <img style={{height:300}}className="retina box-rounded-lg" src={ url + data[1].imageMain || ""} data-2x="assets/images/radios/radio-browse-01@2x.jpg" alt="" />
                                                <div className="absolute-info">
                                                    <div className="absolute-center">
                                                        <h4 className="fs-10 m-0 text-light text-center"><span className="font-weight-bold">Chichi</span></h4>
                                                        <h4 className="fs-10 m-0 text-light text-center"><em><span className="font-weight-light">Daily Radio</span></em></h4>
                                                    </div>
                                                </div>
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-30 pb-e-30">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-30 pt-e-30">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[1].title || ""}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
    
                                <div className="item">
                                    {!data[2] || data[2].length === 0 ? "" :
                                        <div  className="music-img-box">
                                            <div className="img-box">
                                                <img style={{height:300}} className="retina box-rounded-lg" src={ url + data[2].imageMain || ""} data-2x="assets/images/radios/radio-browse-01@2x.jpg" alt="" />
                                                <div className="absolute-info">
                                                    <div className="absolute-center">
                                                        <h4 className="fs-10 m-0 text-light text-center"><span className="font-weight-bold">Chichi</span></h4>
                                                        <h4 className="fs-10 m-0 text-light text-center"><em><span className="font-weight-light">Daily Radio</span></em></h4>
                                                    </div>
                                                </div>
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-30 pb-e-30">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-30 pt-e-30">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[2].title || ""}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div className="item">
                                    {!data[3] || data[3].length === 0 ? "" :
                                        <div  className="music-img-box">
                                            <div className="img-box">
                                                <img style={{height:300}}className="retina box-rounded-lg" src={ url + data[3].imageMain || ""} data-2x="assets/images/radios/radio-browse-01@2x.jpg" alt="" />
                                                <div className="absolute-info">
                                                    <div className="absolute-center">
                                                        <h4 className="fs-10 m-0 text-light text-center"><span className="font-weight-bold">Chichi</span></h4>
                                                        <h4 className="fs-10 m-0 text-light text-center"><em><span className="font-weight-light">Daily Radio</span></em></h4>
                                                    </div>
                                                </div>
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-30 pb-e-30">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-30 pt-e-30">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[3].title || ""}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div className="item">
                                    {!data[4] || data[4].length === 0 ? "" :
                                        <div  className="music-img-box">
                                            <div className="img-box">
                                                <img style={{height:300}}className="retina box-rounded-lg" src={ url + data[4].imageMain || ""} data-2x="assets/images/radios/radio-browse-01@2x.jpg" alt="" />
                                                <div className="absolute-info">
                                                    <div className="absolute-center">
                                                        <h4 className="fs-10 m-0 text-light text-center"><span className="font-weight-bold">Chichi</span></h4>
                                                        <h4 className="fs-10 m-0 text-light text-center"><em><span className="font-weight-light">Daily Radio</span></em></h4>
                                                    </div>
                                                </div>
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-30 pb-e-30">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-30 pt-e-30">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[4].title || ""}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-e-15 pb-e-lg-40"></div>
                </section>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        data: state.trends_Main_Home
    };
}

export default connect(mapStateToProps) (Trends)