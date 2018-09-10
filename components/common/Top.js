import React, { Component } from 'react'

export default class Top extends Component {
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
            return <div class="text-center">Loading ...</div>
        }
        else {
            return (
                <div class="tabs-content">
                    <div class="browse-content-overview inactive-hide active mb-4">
                        <div id="album-listener" class="album-listener">
                            <div class="album-listerer-overlay listener-banner-1" id="album-listerer-overlay"></div>
                            <div class="container-fluid">
                                <div class="d-flex justify-content-center music-img-box mb-3">
                                    <div class="album-listener-lg d-flex align-items-center">
                                        <div class="text-center">
                                            <p class="mb-2">
                                                <a class="btn btn-60-60 btn-primary adonisbounceIn absolute-center adonis-album-button round-btn ml-auto mr-auto" data-album-id="1" role="button" tabindex="0">
                                                    <span class="adonis-icon icon-play icon-2x"><svg id="icon-brand-play" viewBox="0 0 27 32" width="100%" height="100%">
                                                        <path d="M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"></path>
                                                    </svg></span>
                                                    <span class="adonis-icon icon-pause icon-2x"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 29 32"><path d="M19.2 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"></path><path d="M1.6 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"></path></svg></span>
                                                </a>
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-8 offset-lg-2">
                                        <div class="adonis-carousel nav-middle pt-lg-5 adonis-animate pl-3 pr-3" data-animation-item=".owl-item.active" data-animation="slideRight" data-loop="no" data-auto-width="no" data-dots="no" data-items="4" data-nav="yes" data-items-responsive="0:1|500:2|768:3|1200:4">
                                            <div class="gutter-30">
                                                <div class="owl-carousel owl-theme-adonis">
                                                    {data.map((prop, key) => (
                                                        <div key={key} class="item">
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-sm h-d-md-shadow">
                                                                    <img style={{ height: 160 }} class="retina" src={prop.imageMain} data-2x="assets/images/new-releases/new-releases-10@2x.jpg" alt="" />
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                            <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h5 class="title font-weight-bold"><a href="#">{prop.title}</a></h5>
                                                                <p class="sub-title category"><a href="#">David Jame</a></p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div class="data-prev d-none">
                                                <span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="24" viewBox="0 0 24 24"><path d="M10.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-6 6c-0.4 0.4-0.4 1 0 1.4l6 6c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z" /></svg></span>
                                            </div>
                                            <div class="data-next d-none">
                                                <span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="24" viewBox="0 0 24 24"><path d="M15.7 11.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.4-0.4 0.4-1 0-1.4z" /></svg></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
        }

    }
}
