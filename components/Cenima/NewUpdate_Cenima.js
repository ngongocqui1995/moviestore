import React, { Component } from 'react'
import { url } from '../../variables/general'
import { connect } from 'react-redux'

class NewUpdate_Cenima extends Component {
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
                                {
                                    !data || data.length === 0 ? "" : data.map((prop, key) => (
                                        <div key={key} className="item">
                                            <div className="music-img-box">
                                                <div className="img-box box-rounded-md">
                                                    <img style={{ height: 218 }} className="retina" src={url + prop.imageMain  || ""} data-2x="assets/images/videos/videos-1@2x.jpg" alt="" />
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
                                                <h6 className="title"><a href="#">{data[0].title}</a></h6>
                                                <p className="sub-title category"><a href="#">Adonis Music Pop</a></p>
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
        data: state.newUpdate_Cenima
    };
}

export default connect(mapStateToProps) (NewUpdate_Cenima);