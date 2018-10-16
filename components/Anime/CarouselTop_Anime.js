import React, { Component } from 'react'
import { url } from '../../variables/general'
import { connect } from 'react-redux'

class CarouselTop_Anime extends Component {
  render() {
    const { data } = this.props
    return (
        <section>
            <div className="adonis-carousel js-effect adonis-animate" data-animation="slideUp" data-animation-item=".item" data-dots="yes" data-auto-width="yes" data-responsive-width="0:100%|600:50%|900:33.33%">
                <div className="gutter-30">
                    <div className="owl-carousel owl-theme-adonis">
                        {
                            !data || data.length === 0 ? "" : data.map((prop, key) => (
                                <div key={key} className="item">
                                    <div className="img-box-text-over lg box-rounded-lg">
                                        <a href="#">
                                            <img className="resize1" style={{ height: 380 }} src={url + prop.imageMain || ""} alt="" />
                                            <div className="absolute-info">
                                                <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                    <span className="adonis-highlight-dark">{prop.title}</span>
                                                    <span className="adonis-highlight-dark">{`Tập ${prop.episodes || ""}`}</span>
                                                </div>
                                            </div>
                                        </a>
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

function mapStateToProps(state) {
    return {
        data: state.carousel_Anime
    };
}

export default connect(mapStateToProps) (CarouselTop_Anime);