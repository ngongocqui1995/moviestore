import React, { Component } from 'react'
import { url } from '../../variables/general'
import { connect } from 'react-redux'


class Feature extends Component {
    constructor(datas) {
        super(datas)
        this.state = {
            data: [],
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
                            <h2 className="title h3-md">Đặc sắc</h2>
                        </div>
                        <div className="button-right ml-auto ml-auto d-flex align-items-end">
                            <a href="#" className="mb-4">See all <span className="adonis-icon pl-1 icon-arrow icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-see-all-arrow-right" /></svg></span></a>
                        </div>
                    </div>
                    <div className="adonis-carousel" data-animation-item=".owl-item.active" data-dots="yes" data-auto-width="yes" data-responsive-width="0:100%|300:50%|560:33%|820:25%|980:20%|1240:16.66%">
                        <div className="gutter-30">
                            <div className="owl-carousel owl-theme-adonis">
                                {
                                    !data || data.length === 0 ? "" : data.map((prop, key) => (
                                        <div key={key} className="item">
                                            <div className="music-img-box">
                                                <div className="img-box box-rounded-md">
                                                    <img className="resize2" src={url + prop.imageMain || ""}  alt="" />
                                                    <div className="hover-state">
                                                        <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                            <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                        </div>
                                                        <div className="absolute-top-right pr-e-20 pt-e-20">
                                                            <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 className="title"><a href="#">{prop.title}</a></h6>
                                                <p className="sub-title category"><a href="#">{`Tập ${prop.episodes || ""}`}</a></p>
                                            </div>
                                        </div>
                                    ))
                                }
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
        data: state.feature_Main_Home,
    };
}

export default connect(mapStateToProps) (Feature);