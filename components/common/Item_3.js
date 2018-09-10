import React, { Component } from 'react'

export default class Item_3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: ""
        }
    }

    componentDidMount()
    {
        this.setState({data: this.props.data_3})
    }

  render() {
    const { data } = this.state
    
    return (
        <div className="gutter-30">
            <div className="owl-carousel owl-theme-adonis">
                {data === "" ? "" : data.map((prop, key) => (
                <div key={key} className="item">
                    <div className="img-box-text-over lg box-rounded-lg">
                        <img src={prop.imageMain} style={{height:150}} data-2x="assets/images/radios/radios-1@2x.jpg" alt=""/>
                        <div className="absolute-info d-flex flex-column justify-content-between">
                            <div className="pt-3 pt-lg-4 pl-3 pl-lg-4 h5 text-light">{prop.title}</div>
                            <div>
                                <h4 className="fs-7 m-0 text-light text-center">
                                    <span className="font-weight-bold">Adonis</span>
                                    <br/>
                                    <em>
                                        <span className="font-weight-light">Radio Today</span>
                                    </em>
                                </h4>
                            </div>
                            <div className="pb-3 pb-lg-4 pr-3 pr-lg-4 ml-auto">
                                <a href="#" className="color-white">View all
                                    <span className="adonis-icon pl-1 icon-arrow icon-1x">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">

                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
  }
}
