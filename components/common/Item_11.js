import React, { Component } from 'react'

export default class Item_11 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ""
        }
    }

    componentDidMount() {
        this.setState({ data: this.props.data })
    }
    render() {
        const { data } = this.state
        if (data === "") {
            return <div class="text-center">Loading...</div>
        }
        else {
            return (
                <div>
                    <div class="d-flex flex-row">
                        <div class="title-box">
                            <h6 class="title inactive-color">Featured</h6>
                            <h2 class="title h3-md">Xem Nhiều Nhất Ngày </h2>
                        </div>
                        <div class="button-right ml-auto ml-auto d-flex align-items-end mb-4">
                            <a href="#" class="inactive-color mr-4 mr-lg-0">See all <span class="adonis-icon pl-1 icon-arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24">
                                <path d="M20.9 12.4c0.1-0.2 0.1-0.5 0-0.8-0.1-0.1-0.1-0.2-0.2-0.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l4.3 4.3h-13.6c-0.6 0-1 0.4-1 1s0.4 1 1 1h13.6l-4.3 4.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.1-0.1 0.2-0.2 0.2-0.3z"></path>
                            </svg></span></a>
                        </div>
                    </div>
                    <div class="adonis-carousel mr-3 mr-md-0" data-auto-width="no" data-loop="no" data-dots="yes" data-items="1" data-responsive-width="0:100%" >
                        <div class="gutter-30">
                            <div class="owl-carousel owl-theme-adonis">

                                <div class="item">
                                    {data.map((prop, key) => (
                                        <ul key={key} class="list-unstyled p-0">
                                            <li class="music-img-box mb-3">
                                                <div class="row align-items-center">
                                                    <div class="col-7 media align-items-center">
                                                        <div class="img-box position-relative box-rounded-sm mr-3 mb-0">
                                                            <img style = {{width:50,height:50}} src={prop.imageMain} alt="" />
                                                            <div class="hover-state">
                                                                <span class="pointer play-btn-dark full-w-h"><i class="play-icon"></i></span>
                                                            </div>
                                                        </div>
                                                        <h6 class="title align-middle mb-0 z-index-100 fs-2"><a href="#">{prop.title}</a></h6>
                                                    </div>
                                                    <div class="col-2 text-center"><span class="hover-hide">43 Songs</span></div>
                                                    <div class="col-3 text-right"><span class="hover-hide">2h:34:18</span></div>
                                                </div>
                                                <div class="hover-state d-flex align-items-center justify-content-end ">
                                                    <span class="adonis-icon pointer mr-2 color-active"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 37 32"> <path d="M27.379 0c-3.478 0.417-6.509 2.067-8.695 4.492l-0.011 0.012c-2.204-2.428-5.231-4.075-8.638-4.498l-0.068-0.007c-6.232 0-9.966 3.641-9.966 9.756 0.377 3.717 2.096 6.973 4.658 9.327l0.011 0.010 13.001 12.534c0.225 0.231 0.539 0.374 0.886 0.374 0.009 0 0.017-0 0.026-0l-0.001 0c0.004 0 0.010 0 0.015 0 0.35 0 0.667-0.143 0.895-0.373l0-0 13.187-12.511c0-0.187 4.668-4.365 4.668-9.36 0-6.115-3.734-9.756-9.966-9.756zM30.763 17.179l-12.090 11.647-12.114-11.67c-2.066-1.882-3.481-4.446-3.89-7.334l-0.008-0.065c0-5.859 3.968-7.002 7.306-7.002s6.605 3.361 7.679 4.668c0.253 0.283 0.619 0.46 1.027 0.46s0.774-0.177 1.026-0.458l0.001-0.001c1.074-1.284 4.668-4.668 7.679-4.668s7.282 1.237 7.282 7.002c0 3.805-3.851 7.352-3.898 7.422z"></path> </svg></span>
                                                    <span class="pointer dropdown-menu-toggle color-active mr-2"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                </div>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                                <div class="item">
                                    {data.map((prop, key) => (
                                        <ul key={key} class="list-unstyled p-0">
                                            <li class="music-img-box mb-3">
                                                <div class="row align-items-center">
                                                    <div class="col-7 media align-items-center">
                                                        <div class="img-box position-relative box-rounded-sm mr-3 mb-0">
                                                            <img style = {{width:50,height:50}} src={prop.imageMain} alt="" />
                                                            <div class="hover-state">
                                                                <span class="pointer play-btn-dark full-w-h"><i class="play-icon"></i></span>
                                                            </div>
                                                        </div>
                                                        <h6 class="title align-middle mb-0 z-index-100 fs-2"><a href="#">{prop.title}</a></h6>
                                                    </div>
                                                    <div class="col-2 text-center"><span class="hover-hide">43 Songs</span></div>
                                                    <div class="col-3 text-right"><span class="hover-hide">2h:34:18</span></div>
                                                </div>
                                                <div class="hover-state d-flex align-items-center justify-content-end ">
                                                    <span class="adonis-icon pointer mr-2 color-active"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 37 32"> <path d="M27.379 0c-3.478 0.417-6.509 2.067-8.695 4.492l-0.011 0.012c-2.204-2.428-5.231-4.075-8.638-4.498l-0.068-0.007c-6.232 0-9.966 3.641-9.966 9.756 0.377 3.717 2.096 6.973 4.658 9.327l0.011 0.010 13.001 12.534c0.225 0.231 0.539 0.374 0.886 0.374 0.009 0 0.017-0 0.026-0l-0.001 0c0.004 0 0.010 0 0.015 0 0.35 0 0.667-0.143 0.895-0.373l0-0 13.187-12.511c0-0.187 4.668-4.365 4.668-9.36 0-6.115-3.734-9.756-9.966-9.756zM30.763 17.179l-12.090 11.647-12.114-11.67c-2.066-1.882-3.481-4.446-3.89-7.334l-0.008-0.065c0-5.859 3.968-7.002 7.306-7.002s6.605 3.361 7.679 4.668c0.253 0.283 0.619 0.46 1.027 0.46s0.774-0.177 1.026-0.458l0.001-0.001c1.074-1.284 4.668-4.668 7.679-4.668s7.282 1.237 7.282 7.002c0 3.805-3.851 7.352-3.898 7.422z"></path> </svg></span>
                                                    <span class="pointer dropdown-menu-toggle color-active mr-2"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                </div>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                                <div class="item">
                                    {data.map((prop, key) => (
                                        <ul key={key} class="list-unstyled p-0">
                                            <li class="music-img-box mb-3">
                                                <div class="row align-items-center">
                                                    <div class="col-7 media align-items-center">
                                                        <div class="img-box position-relative box-rounded-sm mr-3 mb-0">
                                                            <img style = {{width:50,height:50}} src={prop.imageMain} alt="" />
                                                            <div class="hover-state">
                                                                <span class="pointer play-btn-dark full-w-h"><i class="play-icon"></i></span>
                                                            </div>
                                                        </div>
                                                        <h6 class="title align-middle mb-0 z-index-100 fs-2"><a href="#">{prop.title}</a></h6>
                                                    </div>
                                                    <div class="col-2 text-center"><span class="hover-hide">43 Songs</span></div>
                                                    <div class="col-3 text-right"><span class="hover-hide">2h:34:18</span></div>
                                                </div>
                                                <div class="hover-state d-flex align-items-center justify-content-end ">
                                                    <span class="adonis-icon pointer mr-2 color-active"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 37 32"> <path d="M27.379 0c-3.478 0.417-6.509 2.067-8.695 4.492l-0.011 0.012c-2.204-2.428-5.231-4.075-8.638-4.498l-0.068-0.007c-6.232 0-9.966 3.641-9.966 9.756 0.377 3.717 2.096 6.973 4.658 9.327l0.011 0.010 13.001 12.534c0.225 0.231 0.539 0.374 0.886 0.374 0.009 0 0.017-0 0.026-0l-0.001 0c0.004 0 0.010 0 0.015 0 0.35 0 0.667-0.143 0.895-0.373l0-0 13.187-12.511c0-0.187 4.668-4.365 4.668-9.36 0-6.115-3.734-9.756-9.966-9.756zM30.763 17.179l-12.090 11.647-12.114-11.67c-2.066-1.882-3.481-4.446-3.89-7.334l-0.008-0.065c0-5.859 3.968-7.002 7.306-7.002s6.605 3.361 7.679 4.668c0.253 0.283 0.619 0.46 1.027 0.46s0.774-0.177 1.026-0.458l0.001-0.001c1.074-1.284 4.668-4.668 7.679-4.668s7.282 1.237 7.282 7.002c0 3.805-3.851 7.352-3.898 7.422z"></path> </svg></span>
                                                    <span class="pointer dropdown-menu-toggle color-active mr-2"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                </div>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
