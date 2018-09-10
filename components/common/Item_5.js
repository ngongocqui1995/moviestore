import React, { Component } from 'react'

export default class Item_5 extends Component {
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
        } else {
            return (
                <div class="owl-carousel owl-theme-adonis">
                    {data.map((prop, key) => (
                    <div key={key} class="item">
                        <div class="img-box-text-over lg box-rounded-lg">
                            <a href="#">
                                <img style={{height:350}} src={prop.imageMain} data-2x="assets/images/store/store-featured-01@2x.jpg" alt="" />
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
            )
        }
    }
}
