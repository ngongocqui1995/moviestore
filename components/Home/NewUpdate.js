import React, { Component } from 'react'
import { url } from '../../variables/general'
import { connect } from 'react-redux'

class NewUpdate extends Component {
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
            return <div className="text-center">Loading fail ...</div>
        }
        else
        {
            return (
                <section>
                    <div className="title-box">
                        <h6 className="sub-title inactive-color">New Update</h6>
                        <h2 className="title h3-md">Mới cập nhật (Liên tục 24/7)</h2>
                    </div>
                    <div className="adonis-carousel"  data-animation-item=".item" data-dots="yes" data-scrollbar="yes" data-loop="no" data-auto-width="yes" data-responsive-width="0:100%|400:50%|730:33.33%|1100:25%|1460:20%">
                        <div className="gutter-30">
                            <div className="owl-carousel owl-theme-adonis">
                                {
                                    !data || data.length === 0 ? "" : data.map((prop, key) => (
                                        <div key={key} className="item">
                                            <div className="music-img-box">
                                                <div className="img-box box-rounded-md">
                                                    <img style={{ height: 218 }} className="retina" src={url + prop.imageMain  || ""} alt="" />
                                                    <div className="hover-state">
                                                        <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                            <span className="pointer play-btn-dark round-btn"><i className="play-icon"></i></span>
                                                        </div>
                                                        <div className="absolute-bottom-right pr-e-20 pb-e-20">
                                                            <span className="mr-2"><span className="adonis-icon text-light pointer icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span></span>
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
                </section>
            )
        }
    }
}


function mapStateToProps(state) {
    return {
        data: state.newUpdate_Main_Home
    };
}

export default connect(mapStateToProps) (NewUpdate)