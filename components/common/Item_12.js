import React, { Component } from 'react'

export default class Item_12 extends Component {
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
                            <h6 class="title inactive-color">New</h6>
                            <h2 class="title h3-md">Hot! Ngôn Tình</h2>
                        </div>
                        <div class="button-right ml-auto ml-auto d-flex align-items-end mb-4 mr-4">
                            <a href="#" class="inactive-color">See all <span class="adonis-icon pl-1 icon-arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" viewBox="0 0 24 24">
                                <path d="M20.9 12.4c0.1-0.2 0.1-0.5 0-0.8-0.1-0.1-0.1-0.2-0.2-0.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l4.3 4.3h-13.6c-0.6 0-1 0.4-1 1s0.4 1 1 1h13.6l-4.3 4.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.1-0.1 0.2-0.2 0.2-0.3z"></path>
                            </svg></span></a>
                        </div>
                    </div>
                    <div class="adonis-carousel" data-auto-width="yes" data-loop="no" data-dots="yes" data-responsive-width="0:175px">
                        <div class="gutter-30">
                            <div class="owl-carousel owl-theme-adonis">
                                <div class="item">
                                    <div class="music-img-box mb-e-30 mb-e-lg-40">
                                        <div class="img-box box-rounded-sm img-box-md">
                                            <img style={{height:145}} class="retina" src={data[0].imageMain} data-2x="assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                            <div class="hover-state">
                                                <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                </div>
                                                <div class="absolute-top-right pr-e-15 pt-e-15">
                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="title"><a href="#">{data[0].title}</a></h6>
                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                    </div>
                                    <div class="music-img-box">
                                        <div class="img-box box-rounded-sm img-box-md">
                                            <img style={{height:150}} class="retina" src={data[1].imageMain} data-2x="assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                            <div class="hover-state">
                                                <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                </div>
                                                <div class="absolute-top-right pr-e-15 pt-e-15">
                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="title"><a href="#">{data[1].title}</a></h6>
                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="music-img-box mb-e-30 mb-e-lg-40">
                                        <div class="img-box box-rounded-sm img-box-md">
                                            <img style={{height:150}} class="retina" src={data[2].imageMain} data-2x="assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                            <div class="hover-state">
                                                <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                </div>
                                                <div class="absolute-top-right pr-e-15 pt-e-15">
                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="title"><a href="#">{data[2].title}</a></h6>
                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                    </div>
                                    <div class="music-img-box">
                                        <div class="img-box box-rounded-sm img-box-md">
                                            <img style={{height:150}} class="retina" src={data[3].imageMain} data-2x="assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                            <div class="hover-state">
                                                <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                </div>
                                                <div class="absolute-top-right pr-e-15 pt-e-15">
                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="title"><a href="#">{data[3].title}</a></h6>
                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="music-img-box mb-e-30 mb-e-lg-40">
                                        <div class="img-box box-rounded-sm img-box-md">
                                            <img style={{height:150}} class="retina" src={data[4].imageMain} data-2x="assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                            <div class="hover-state">
                                                <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                </div>
                                                <div class="absolute-top-right pr-e-15 pt-e-15">
                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="title"><a href="#">{data[4].title}</a></h6>
                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                    </div>
                                    <div class="music-img-box">
                                        <div class="img-box box-rounded-sm img-box-md">
                                            <img style={{height:150}} class="retina" src={data[5].imageMain} data-2x="assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                            <div class="hover-state">
                                                <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                </div>
                                                <div class="absolute-top-right pr-e-15 pt-e-15">
                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="title"><a href="#">{data[5].title}</a></h6>
                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="music-img-box mb-e-30 mb-e-lg-40">
                                        <div class="img-box box-rounded-sm img-box-md">
                                            <img style={{height:150}} class="retina" src={data[6].imageMain} data-2x="assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                            <div class="hover-state">
                                                <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                </div>
                                                <div class="absolute-top-right pr-e-15 pt-e-15">
                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="title"><a href="#">{data[6].title}</a></h6>
                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                    </div>
                                    <div class="music-img-box">
                                        <div class="img-box box-rounded-sm img-box-md">
                                            <img style={{height:150}} class="retina" src={data[7].imageMain} data-2x="assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                            <div class="hover-state">
                                                <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                </div>
                                                <div class="absolute-top-right pr-e-15 pt-e-15">
                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="title"><a href="#">{data[7].title}</a></h6>
                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="music-img-box mb-e-30 mb-e-lg-40">
                                        <div class="img-box box-rounded-sm img-box-md">
                                            <img style={{height:150}} class="retina" src={data[8].imageMain} data-2x="assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                            <div class="hover-state">
                                                <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                </div>
                                                <div class="absolute-top-right pr-e-15 pt-e-15">
                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="title"><a href="#">{data[8].title}</a></h6>
                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                    </div>
                                    <div class="music-img-box">
                                        <div class="img-box box-rounded-sm img-box-md">
                                            <img style={{height:150}} class="retina" src={data[9].imageMain} data-2x="assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                            <div class="hover-state">
                                                <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                </div>
                                                <div class="absolute-top-right pr-e-15 pt-e-15">
                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="title"><a href="#">{data[9].title}</a></h6>
                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
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
