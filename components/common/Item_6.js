import React, { Component } from 'react'

export default class Item_6 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ""
        }
    }

    componentDidMount() {
        this.setState({ data: this.props.data_6 })
    }
    render() {
        const { data } = this.state
        if (data === "") {
            return <div class="text-center">Loading ...</div>
        }
        else {
            return (
                <div class="tabs-content">
                    <div class="top-slider store-overview inactive-hide active">
                        <div class="adonis-carousel adonis-animate mb-3" data-animation="slideRight"
                            data-animation-item=".item" data-auto-width="no" data-dots="no" data-loop="yes"
                            data-center="yes" data-items-responsive="0:2|1200:4">
                            <div class="gutter-30">
                                <div class="owl-carousel owl-theme-adonis">
                                    {data.map((prop, key) => (
                                    <div key = {key} class="item">
                                        <div class="img-box-text-over lg box-rounded-lg">
                                            <a href="#">
                                                <img src={prop.imageMain} style={{height:200}} data-2x="assets/images/store/store-featured-01@2x.jpg"
                                                    alt="" />
                                                <div class="absolute-info">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="adonis-highlight-dark">{prop.title}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
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
