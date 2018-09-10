import React, { Component } from 'react'

export default class Item_8 extends Component {
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
                <section>
                    <div class="d-flex">
                        <div class="title-box">
                            <h6 class="sub-title inactive-color">Popular</h6>
                            <h2 class="title h3-md">Ngày mới, xem gì đây ?</h2>
                        </div>
                        <div class="button-right ml-auto ml-auto d-flex align-items-end">
                            <a href="#" class="inactive-color mr-4 mr-md-0 mb-4">See all<span
                                class="adonis-icon pl-1 icon-arrow icon-1x"><svg xmlns="http://www.w3.org/2000/svg"
                                    version="1.1">
                                    <use xlinkHref="#icon-see-all-arrow-right" /></svg></span>
                            </a>
                        </div>
                    </div>
                    <div class="adonis-carousel" data-auto-width="yes" data-loop="no"
                        data-dots="yes" data-responsive-width="0:260px">
                        <div class="gutter-30">
                            <div class="owl-carousel owl-theme-adonis">
                                {data.map((prop, key) => (
                                <div key={key} class="item">
                                    <div class="music-img-box">
                                        <div class="img-box box-rounded-sm">
                                            <img style={{height:200}} class="retina" src={prop.imageMain}
                                                data-2x="assets/images/new-releases/new-releases-1@2x.jpg"
                                                alt="" />
                                            <div class="hover-state">
                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                    <span class="pointer play-btn-dark round-btn"><i
                                                        class="play-icon"></i></span>
                                                </div>
                                                <div class="absolute-top-right pr-e-20 pt-e-20">
                                                    <span class="pointer dropdown-menu-toggle"><span
                                                        class="adonis-icon icon-4x"><svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            version="1.1">
                                                            <use xlinkHref="#icon-horizontal-dots"></use>
                                                        </svg></span></span>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 class="title"><a href="#">{prop.title}</a></h6>
                                        <p class="sub-title category"><a href="#">Adonis
                                    Music Pop</a></p>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class="pt-e-20 pt-e-lg-40"></div>
                </section>
            )
        }

    }
}
