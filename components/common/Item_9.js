import React, { Component } from 'react'

export default class Item_9 extends Component {
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
                <div class="widget">
                    <div class="d-flex justify-content-between inactive-colored-links mb-3">
                        <h4>Top tuần này, Có gì ?</h4>
                        <a href="#" class="inactive-color">View all</a>
                    </div>
                    {data.map((prop, key) => (
                    <div key={key} class="img-box-horizontal music-img-box img-box-horizontal-style-2">
                        <div class="img-box img-box-sm box-rounded-sm">
                            <img style={{height:50}} src={prop.imageMain} alt="" />
                        </div>
                        <div class="des">
                            <h6 class="title"><a href="#">{prop.title}</a></h6>
                            <p class="sub-title"><a href="#">Rachel Platten</a></p>
                        </div>
                        <div class="hover-state d-flex justify-content-between align-items-center">
                            <span class="pointer play-btn-dark box-rounded-sm"><i class="play-icon"></i></span>
                            <div class="d-flex align-items-center">
                                <span class="adonis-icon color-active pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg"
                                    version="1.1">
                                    <use xlinkHref="#icon-heart-blank"></use>
                                </svg></span>
                                <span class="pointer dropdown-menu-toggle"><span class="icon-dot-nav-horizontal color-active"></span></span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            )
        }
    }
}
