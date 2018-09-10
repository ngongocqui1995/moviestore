import React, { Component } from 'react'

export default class Item_4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ""
        }
    }

    componentDidMount() {
        this.setState({ data: this.props.data_4 })
    }

    render() {
        const { data } = this.state
        console.log(data)
        return (
            <div class="owl-carousel owl-theme-adonis">
                <div class="item">
                    {data === "" ? "" : data.map((prop, key) => (
                        <div key={key} class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                            <div class="img-box img-box-sm box-rounded-sm">
                                <img src={prop.imageMain} alt="" />
                            </div>
                            <div class="des">
                                <h6 class="title fs-2">
                                    <a href="#">{prop.title}</a>
                                </h6>
                                <p class="sub-title">
                                    <a href="#">Rachel Platten</a>
                                </p>
                            </div>
                            <div class="hover-state d-flex justify-content-between align-items-center">
                                <span class="pointer play-btn-dark box-rounded-sm">
                                    <i class="play-icon"></i>
                                </span>
                                <div class="d-flex align-items-center">
                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">

                                        </svg>
                                    </span>
                                    <span class="pointer dropdown-menu-toggle">
                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="item">
                    {data === "" ? "" : data.map((prop, key) => (
                        <div key={key} class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                            <div class="img-box img-box-sm box-rounded-sm">
                                <img src={prop.imageMain} alt="" />
                            </div>
                            <div class="des">
                                <h6 class="title fs-2">
                                    <a href="#">{prop.title}</a>
                                </h6>
                                <p class="sub-title">
                                    <a href="#">Rachel Platten</a>
                                </p>
                            </div>
                            <div class="hover-state d-flex justify-content-between align-items-center">
                                <span class="pointer play-btn-dark box-rounded-sm">
                                    <i class="play-icon"></i>
                                </span>
                                <div class="d-flex align-items-center">
                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">

                                        </svg>
                                    </span>
                                    <span class="pointer dropdown-menu-toggle">
                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="item">
                    {data === "" ? "" : data.map((prop, key) => (
                        <div key={key} class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                            <div class="img-box img-box-sm box-rounded-sm">
                                <img src={prop.imageMain} alt="" />
                            </div>
                            <div class="des">
                                <h6 class="title fs-2">
                                    <a href="#">{prop.title}</a>
                                </h6>
                                <p class="sub-title">
                                    <a href="#">Rachel Platten</a>
                                </p>
                            </div>
                            <div class="hover-state d-flex justify-content-between align-items-center">
                                <span class="pointer play-btn-dark box-rounded-sm">
                                    <i class="play-icon"></i>
                                </span>
                                <div class="d-flex align-items-center">
                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">

                                        </svg>
                                    </span>
                                    <span class="pointer dropdown-menu-toggle">
                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="item">
                    {data === "" ? "" : data.map((prop, key) => (
                        <div key={key} class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                            <div class="img-box img-box-sm box-rounded-sm">
                                <img src={prop.imageMain} alt="" />
                            </div>
                            <div class="des">
                                <h6 class="title fs-2">
                                    <a href="#">{prop.title}</a>
                                </h6>
                                <p class="sub-title">
                                    <a href="#">Rachel Platten</a>
                                </p>
                            </div>
                            <div class="hover-state d-flex justify-content-between align-items-center">
                                <span class="pointer play-btn-dark box-rounded-sm">
                                    <i class="play-icon"></i>
                                </span>
                                <div class="d-flex align-items-center">
                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">

                                        </svg>
                                    </span>
                                    <span class="pointer dropdown-menu-toggle">
                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="item">
                    {data === "" ? "" : data.map((prop, key) => (
                        <div key={key} class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                            <div class="img-box img-box-sm box-rounded-sm">
                                <img src={prop.imageMain} alt="" />
                            </div>
                            <div class="des">
                                <h6 class="title fs-2">
                                    <a href="#">{prop.title}</a>
                                </h6>
                                <p class="sub-title">
                                    <a href="#">Rachel Platten</a>
                                </p>
                            </div>
                            <div class="hover-state d-flex justify-content-between align-items-center">
                                <span class="pointer play-btn-dark box-rounded-sm">
                                    <i class="play-icon"></i>
                                </span>
                                <div class="d-flex align-items-center">
                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">

                                        </svg>
                                    </span>
                                    <span class="pointer dropdown-menu-toggle">
                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        )
    }
}
