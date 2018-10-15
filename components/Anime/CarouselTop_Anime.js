import React, { Component } from 'react'
import { url } from '../../variables/general'

export default class CarouselTop_Anime extends Component {
  render() {
    return (
        <section>
        <div className="adonis-carousel js-effect adonis-animate" data-animation="slideUp" data-animation-item=".item" data-dots="yes" data-auto-width="yes" data-responsive-width="0:100%|600:50%|900:33.33%">
            <div className="gutter-30">
                <div className="owl-carousel owl-theme-adonis">
                    <div className="item">
                        <div className="img-box-text-over lg box-rounded-lg">
                            <img src="/static/assets/images/radios/radios-6.jpg" data-2x="assets/images/radios/radios-6@2x.jpg" alt="" />
                            <div className="absolute-info d-flex flex-column justify-content-between">
                                <div className="pt-3 pt-lg-4 pl-3 pl-lg-4 h5 text-light">POPULAR ALBUM OF WEEK</div>
                                <div>
                                    <h4 className="fs-7 m-0 text-light text-center"><span className="font-weight-bold">Popular</span><br />
                                        <em><span className="font-weight-light">Album of Week</span> </em></h4>
                                </div>
                                <div className="pb-3 pb-lg-4 pr-3 pr-lg-4 ml-auto"><a href="#" className="color-white">View all<span className="adonis-icon pl-1 icon-arrow icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-see-all-arrow-right" /></svg></span></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-box-text-over lg box-rounded-lg">
                            <img src="/static/assets/images/radios/radios-7.jpg" data-2x="assets/images/radios/radios-7@2x.jpg" alt="" />
                            <div className="absolute-info d-flex flex-column justify-content-between">
                                <div className="pt-3 pt-lg-4 pl-3 pl-lg-4 h5 text-light">TOP SONG THIS WEEK</div>
                                <div>
                                    <h4 className="fs-7 m-0 text-center text-light"><span className="text-light font-weight-bold">Adonis</span><br />
                                        <em><span className="font-weight-light">Top Song This Week</span> </em></h4>
                                </div>
                                <div className="pb-3 pb-lg-4 pr-3 pr-lg-4 ml-auto"><a href="#" className="color-white">View all<span className="adonis-icon pl-1 icon-arrow icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-see-all-arrow-right" /></svg></span></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="img-box-text-over lg box-rounded-lg">
                            <img src="/static/assets/images/radios/radios-8.jpg" data-2x="assets/images/radios/radios-8@2x.jpg" alt="" />

                            <div className="absolute-info d-flex flex-column justify-content-between">
                                <div className="pt-3 pt-lg-4 pl-3 pl-lg-4 h5 text-light">TOP ARTIST</div>
                                <div>
                                    <h4 className="fs-7 m-0 text-dark text-center"><span className="text-light font-weight-bold">Adonis</span><br />
                                        <em><span className="font-weight-light text-light">Top Artist</span> </em></h4>
                                </div>
                                <div className="pb-3 pb-lg-4 pr-3 pr-lg-4 ml-auto"><a href="#" className="color-white">View all<span className="adonis-icon pl-1 icon-arrow icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-see-all-arrow-right" /></svg></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-e-20 pt-e-lg-40"></div>
    </section>
    )
  }
}
