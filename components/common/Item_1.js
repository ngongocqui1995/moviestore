import React, { Component } from 'react'

export default class Item_1 extends Component {
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
        } else {
            return (
                <div class="adonis-carousel music-img-box-cont-lg adonis-animate" data-animation="cardDealer" data-animation-item=".owl-item.active"
                    data-auto-height="yes" data-scrollbar="yes" data-auto-width="yes" data-loop="no" data-dots="yes"
                    data-responsive-width="0:100%|600:50%|1200:40%">
                    <div class="gutter-30 gutter-xl-40">
                        <div class="owl-carousel owl-theme-adonis">
                            <div class="item">
                                {data.map((prop, key) => {
                                    if (key === 2) {
                                        return (
                                            <div key={key} class="music-img-box">
                                                <div class="img-box box-rounded-lg img-box-lg">
                                                    <img class="retina" src={prop.imageMain} data-2x="../assets/images/playlists/browse-overview-1@2x.jpg"
                                                        alt="" />
                                                    <div class="hover-state">
                                                        <div class="absolute-top-right pr-e-percent-5 pt-e-percent-5">
                                                            <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg
                                                                xmlns="http://www.w3.org/2000/svg" version="1.1"><use
                                                                    xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                        </div>
                                                        <div class="absolute-center">
                                                            <span class="pointer play-btn-dark  round-btn"><i class="play-icon"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="desc">
                                                    <p class="active-color-2 caps mb-1">New Album</p>
                                                    <h2 class="title h3-md"><a href="#">{prop.title}</a></h2>
                                                    <h5 class="sub-title"><a href="#">Danielle Bradbery</a></h5>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}

                            </div>
                            <div class="item">
                                {data.map((prop, key) => {
                                    if (key === 1) {
                                        return (
                                            <div key={key} class="music-img-box mb-e-40">
                                                <div class="img-box box-rounded-lg img-box-lg">
                                                    <img style={{height:170}} class="retina" src={prop.imageMain} data-2x="../assets/images/playlists/browse-overview-3@2x.jpg"
                                                        alt="" />
                                                    <div class="hover-state">
                                                        <div class="absolute-top-right pr-e-percent-5 pt-e-percent-5">
                                                            <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg
                                                                xmlns="http://www.w3.org/2000/svg" version="1.1"><use
                                                                    xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                        </div>
                                                        <div class="absolute-center">
                                                            <span class="pointer play-btn-dark  round-btn"><i class="play-icon"></i></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="desc">
                                                    <p class="active-color-2 caps mb-2">Featured artist</p>
                                                    <h4 class="title h3-md"><a href="#">{prop.title}</a></h4>
                                                    <h5 class="sub-title"><a href="#">Danielle Bradbery</a></h5>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}

                                <div class="row gutter-xl-40">
                                    {data.map((prop, key) => {
                                        if (key === 3 || key === 4) {
                                            return (
                                                <div key={key} class="col-6">
                                                    <div class="music-img-box">
                                                        <div class="img-box box-rounded-lg img-box-lg">
                                                            <img style={{height:170}} class="retina" src={prop.imageMain} data-2x="../assets/images/playlists/browse-overview-18@2x.jpg"
                                                                alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                    <span class="pointer dropdown-menu-toggle"><span
                                                                        class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                                <div class="absolute-center">
                                                                    <span class="pointer play-btn-dark  round-btn"><i
                                                                        class="play-icon"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="desc">
                                                            <p class="active-color-2 caps mb-2">New album</p>
                                                            <h4 class="title"><a href="#">{prop.title}</a></h4>
                                                            <h5 class="sub-title"><a href="#">Danielle Bradbery</a></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            <div class="item">
                                <div class="row gutter-xl-40">
                                    {data.map((prop, key) => {
                                        if (key === 5 || key === 6) {
                                            return (
                                                <div class="col-6">
                                                    <div class="music-img-box mb-e-40">
                                                        <div class="img-box box-rounded-lg img-box-lg">
                                                            <img style={{height:170}} class="retina" src={prop.imageMain} data-2x="../assets/images/playlists/browse-overview-09@2x.jpg"
                                                                alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                    <span class="pointer dropdown-menu-toggle"><span
                                                                        class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                                <div class="absolute-center">
                                                                    <span class="pointer play-btn-dark  round-btn"><i
                                                                        class="play-icon"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="desc">
                                                            <p class="active-color-2 caps mb-2">New album</p>
                                                            <h4 class="title"><a href="#">{prop.title}</a></h4>
                                                            <h5 class="sub-title"><a href="#">Danielle Bradbery</a></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}


                                </div>
                                <div class="row gutter-xl-40">
                                    {data.map((prop, key) => {
                                        if (key === 7 || key === 8) {
                                            return (
                                                <div class="col-6">
                                                    <div class="music-img-box">
                                                        <div class="img-box box-rounded-lg img-box-lg">
                                                            <img style={{height:170}} class="retina" src={prop.imageMain} data-2x="../assets/images/playlists/browse-overview-19@2x.jpg"
                                                                alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                    <span class="pointer dropdown-menu-toggle"><span
                                                                        class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                                <div class="absolute-center">
                                                                    <span class="pointer play-btn-dark  round-btn"><i
                                                                        class="play-icon"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="desc">
                                                            <p class="active-color-2 caps mb-2">New album</p>
                                                            <h4 class="title"><a href="#">{prop.title}</a></h4>
                                                            <h5 class="sub-title"><a href="#">Danielle Bradbery</a></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            <div class="item">
                                <div class="row gutter-xl-40">      
                                    {data.map((prop, key) => {
                                        if (key === 9 || key === 10) {
                                            return (
                                                <div class="col-6">
                                                    <div class="music-img-box mb-e-40">
                                                        <div class="img-box box-rounded-lg img-box-lg">
                                                            <img style={{height:170}} class="retina" src={prop.imageMain} data-2x="../assets/images/playlists/browse-overview-19@2x.jpg"
                                                                alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                    <span class="pointer dropdown-menu-toggle"><span
                                                                        class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                                <div class="absolute-center">
                                                                    <span class="pointer play-btn-dark  round-btn"><i
                                                                        class="play-icon"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="desc">
                                                            <p class="active-color-2 caps mb-2">New album</p>
                                                            <h4 class="title"><a href="#">{prop.title}</a></h4>
                                                            <h5 class="sub-title"><a href="#">Danielle Bradbery</a></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}

                                </div>
                                <div class="row gutter-xl-40">
                                    {data.map((prop, key) => {
                                        if (key === 11 || key === 12) {
                                            return (
                                                <div class="col-6">
                                                    <div class="music-img-box mb-e-40">
                                                        <div class="img-box box-rounded-lg img-box-lg">
                                                            <img style={{height:170}} class="retina" src={prop.imageMain} data-2x="../assets/images/playlists/browse-overview-19@2x.jpg"
                                                                alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                    <span class="pointer dropdown-menu-toggle"><span
                                                                        class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg"
                                                                            version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                                <div class="absolute-center">
                                                                    <span class="pointer play-btn-dark  round-btn"><i
                                                                        class="play-icon"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="desc">
                                                            <p class="active-color-2 caps mb-2">New album</p>
                                                            <h4 class="title"><a href="#">{prop.title}</a></h4>
                                                            <h5 class="sub-title"><a href="#">Danielle Bradbery</a></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}
