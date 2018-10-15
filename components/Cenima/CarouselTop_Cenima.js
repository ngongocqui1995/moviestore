import React, { Component } from 'react'
import { url } from '../../variables/general'
import { connect } from 'react-redux'


class CarouselTop_Cenima extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false
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
                <div className="adonis-carousel mb-3" data-auto-width="yes" data-loop="yes" data-center="yes" data-dots="yes" data-responsive-width="0:70%|600:580px">
                    <div className="gutter-30">
                        <div className="owl-carousel owl-theme-adonis">
                            <div className="item">
                                <div className="img-box-text-over lg box-rounded-lg">
                                    <a href="#">
                                        <img className="resize1" style={{ height: 350 }} src={data.length === 0 ? "" : url + data[0].imageMain} data-2x="assets/images/store/store-featured-01@2x.jpg" alt="" />
                                        <div className="absolute-info">
                                            <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                <span className="adonis-highlight-dark">Featured</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="radio">
                                    <div className="img-box-text-over lg box-rounded-lg">
                                        <a href="#">
                                            <img className="resize1" style={{ height: 350 }} src={data.length === 0 ? "" : url + data[1].imageMain} data-2x="assets/images/store/store-featured-02@2x.jpg" alt="" />
                                            <div className="absolute-info">
                                                <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                    <span className="adonis-highlight-dark">Featured</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img-box-text-over lg box-rounded-lg">
                                    <a href="#">
                                        <img className="resize1" style={{ height: 350 }} src={data.length === 0 ? "" : url + data[2].imageMain} data-2x="assets/images/store/store-featured-03@2x.jpg" alt="" />
                                        <div className="absolute-info">
                                            <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                <span className="adonis-highlight-dark">Featured</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="radio">
                                    <div className="img-box-text-over lg box-rounded-lg">
                                        <a href="#">
                                            <img className="resize1" style={{ height: 350 }} src={data.length === 0 ? "" : url + data[3].imageMain} data-2x="assets/images/store/store-featured-04@2x.jpg" alt="" />
                                            <div className="absolute-info">
                                                <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                    <span className="adonis-highlight-dark">Featured</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        data: state.carouselTop
    };
}

export default connect(mapStateToProps) (CarouselTop_Cenima);