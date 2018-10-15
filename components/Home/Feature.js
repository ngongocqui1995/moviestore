import React, { Component } from 'react'
import { url } from '../../variables/general'
import { connect } from 'react-redux'


class Feature extends Component {
    constructor(datas) {
        super(datas)
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
            return <div className="text-center"> Loading fail ...</div>
        } 
        else{
            return (
                <section>
                    <div className="d-flex">
                        <div className="title-box">
                            <h6 className="sub-title inactive-color">Feature</h6>
                            <h2 className="title h3-md">Đặc sắc</h2>
                        </div>
                        <div className="button-right ml-auto ml-auto d-flex align-items-end">
                            <a href="#" className="mb-4">See all <span className="adonis-icon pl-1 icon-arrow icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-see-all-arrow-right" /></svg></span></a>
                        </div>
                    </div>
                    <div className="adonis-carousel" data-animation-item=".owl-item.active" data-dots="yes" data-auto-width="yes" data-responsive-width="0:100%|300:50%|560:33%|820:25%|980:20%|1240:16.66%">
                        <div className="gutter-30">
                            <div className="owl-carousel owl-theme-adonis">
                                <div className="item">
                                    {!data[0] || data[0].length === 0 ? "" : 
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img className="resize2" src={url + data[0].imageMain + "/196/150" || ""}  alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[0].title}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div className="item">
                                    {!data[1] || data[1].length === 0 ? "" : 
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img className="resize2" src={url + data[1].imageMain + "/196/150" || ""}  alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[1].title}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div className="item">
                                    {!data[2] || data[2].length === 0 ? "" : 
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img className="resize2" src={url + data[2].imageMain + "/196/150" || ""}  alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[2].title}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div className="item">
                                    {!data[3] || data[3].length === 0 ? "" : 
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img className="resize2" src={url + data[3].imageMain + "/196/150" || ""}  alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[3].title}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div className="item">
                                    {!data[4] || data[4].length === 0 ? "" : 
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img className="resize2" src={url + data[4].imageMain + "/196/150" || ""}  alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[4].title}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div className="item">
                                    {!data[5] || data[5].length === 0 ? "" : 
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img className="resize2" src={url + data[5].imageMain + "/196/150" || ""}  alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[5].title}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div className="item">
                                    {!data[6] || data[6].length === 0 ? "" : 
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img className="resize2" src={url + data[6].imageMain + "/196/150" || ""}  alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[6].title}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div className="item">
                                    {!data[7] || data[7].length === 0 ? "" : 
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img className="resize2" src={url + data[7].imageMain + "/196/150" || ""}  alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[7].title}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div className="item">
                                    {!data[8] || data[8].length === 0 ? "" : 
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img className="resize2" src={url + data[8].imageMain + "/196/150" || ""}  alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[8].title}</a></h6>
                                            <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div className="item">
                                    {!data[9] || data[9].length === 0 ? "" : 
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-md">
                                                <img className="resize2" src={url + data[9].imageMain + "/196/150" || ""}  alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href="#">{data[9].title}</a></h6>
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


function mapStateToProps(state) {
    return {
        data: state.feature_Main_Home
    };
}

export default connect(mapStateToProps) (Feature);