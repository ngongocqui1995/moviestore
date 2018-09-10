import React, { Component } from 'react'

export default class Item_2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: ""
        }
    }

    componentDidMount()
    {
        this.setState({data: this.props.data_2})
    }

  render() {
    const { data } = this.state
    return (
        <div className="browse-videos">
        <section>
            <div className="title-box">
                <h6 className="sub-title inactive-color">Loaded via ajax</h6>
                <h2 className="title h3-md">TiVi Shows</h2>
            </div>
            <div className="adonis-carousel adonis-animate" data-animation="slideUp" data-animation-item=".item" data-dots="yes" data-scrollbar="yes"
                data-loop="no" data-auto-width="yes" data-responsive-width="0:100%|400:50%|730:33.33%|1100:25%|1460:20%">
                <div className="gutter-30">
                    <div className="owl-carousel owl-theme-adonis">
                        { data === "" ? "" : data.map((prop, key) => (
                        <div key={key} className="item">
                            <div className="music-img-box">
                                <div className="img-box box-rounded-md">
                                    <img className="retina" style={{height:200}} src={prop.imageMain} data-2x="assets/images/videos/videos-1@2x.jpg" alt=""/>
                                    <div className="hover-state">
                                        <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                            <span className="pointer play-btn-dark round-btn">
                                                <i className="play-icon"></i>
                                            </span>
                                        </div>
                                        <div className="absolute-bottom-right pr-e-20 pb-e-20">
                                            <span className="mr-2">
                                                <span className="adonis-icon text-light pointer icon-2x">
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                        
                                                    </svg>
                                                </span>
                                            </span>
                                            <span className="pointer dropdown-menu-toggle">
                                                <span className="adonis-icon icon-4x">
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    
                                                    </svg>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="title">
                                    <a href="#">{prop.title}</a>
                                </h6>
                                <p className="sub-title category">
                                    <a href="#">Adonis Music Pop</a>
                                </p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
  }
}
