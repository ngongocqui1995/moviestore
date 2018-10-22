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
                            <div className="owl-carousel owl-theme-adonis" style={{cursor: "grab"}}>
                                {
                                    !data || data.length === 0 ? "" : data.map((prop, key) => (
                                        <div key={key} className="item">
                                            <div  className="music-img-box">
                                                <div className="img-box">
                                                    <img style={{height:300}}className="retina box-rounded-lg" src={ url + prop.imageMain || ""} alt="" />
                                                    <div className="hover-state">
                                                        <div className="absolute-bottom-left pl-e-30 pb-e-30">
                                                            <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                        </div>
                                                        <div className="absolute-top-right pr-e-30 pt-e-30">
                                                            <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title || ""}</a></h6>
                                                <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                            </div>
                                        </div>
                                    ))
                                }
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