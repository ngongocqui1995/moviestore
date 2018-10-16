import React, { Component } from 'react'
import { url } from '../../variables/general'
import { connect } from 'react-redux'


class TopWeek extends Component {
    constructor(props) {
        super(props)
        if(this.props.data_1.length > 0) var infomartionVideo = this.props.data_1[0]
        this.state = {
            data_1: this.props.data_1,
            data_2: this.props.data_2,
            data_3: this.props.data_3,
            data_4: this.props.data_4,
            data_5: this.props.data_5,
            data_6: this.props.data_6,
            infomartionVideo: [infomartionVideo],
            infomartionVideoDefault: []
        }
        this.setInfomartionVideo = this.setInfomartionVideo.bind(this)
        this.setInfomartionVideoDefault = this.setInfomartionVideoDefault.bind(this)
        this.getInfomartionOneVideoInData = this.getInfomartionOneVideoInData.bind(this)
    }

    setInfomartionVideo(event){
        let indexData = Number(event.currentTarget.id)
        let indexArray = Number(event.currentTarget.dataset.id)
        
        let value = this.getInfomartionOneVideoInData(indexData, indexArray)

        this.setState({infomartionVideo: [value]})
    }

    setInfomartionVideoDefault(event){
        let indexData = Number(event.currentTarget.id)
        let indexArray = Number(event.currentTarget.dataset.id)
        
        let value = this.getInfomartionOneVideoInData(indexData, indexArray)

        this.setState({infomartionVideoDefault: [value]})
    }

    getInfomartionOneVideoInData(indexData, indexArray){
        if(indexData === 1){
            return this.state.data_1[indexArray]
        }
        if(indexData === 2){
            return this.state.data_2[indexArray]
        }
        if(indexData === 3){
            return this.state.data_3[indexArray]
        }
        if(indexData === 4){
            return this.state.data_4[indexArray]
        }
        if(indexData === 5){
            return this.state.data_5[indexArray]
        }
        if(indexData === 6){
            return this.state.data_6[indexArray]
        }
        if(indexData === 7){
            return this.state.data_7[indexArray]
        }
        if(indexData === 8){
            return this.state.data_8[indexArray]
        }
        if(indexData === 9){
            return this.state.data_9[indexArray]
        }
        if(indexData === 10){
            return this.state.data_10[indexArray]
        }
    }

    render() {
        const { data_1, data_2, data_3, data_4, data_5, data_6, infomartionVideo, infomartionVideoDefault } = this.state

        if (!data_1 || data_1.length === 0 || !data_2 || data_2.length === 0 || !data_3 || data_3.length === 0 || 
            !data_4 || data_4.length === 0 || !data_5 || data_5.length === 0 || !data_6 || data_6.length === 0) {
            return <div className="text-center">Loading fail...</div>
        }else {
            return (
                <section>
                    <div className="row">
                        <div className="col-xxl-7 col-lg-8">
                            <div className="d-flex flex-row">
                                <div className="title-box">
                                    <h2 className="title h3-md">Top tuần có gì hot ?</h2>
                                </div>
                                <div className="button-right ml-auto ml-auto mt-auto mb-4 d-flex">
                                    <a href="#">Xem thêm<span className="adonis-icon pl-1 icon-arrow icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-see-all-arrow-right" /></svg></span></a>
                                </div>
                            </div>
                            <div className="adonis-carousel music-img-box-cont-sm " data-animation-item=".item" data-auto-width="yes" data-loop="no" data-dots="yes" data-responsive-width="0:100%|600:50%|900:33.33%|1200:25%">
                                <div className="gutter-30">
                                    <div className="owl-carousel owl-theme-adonis" style={{cursor: "grab"}}>
                                        <div className="item">
                                            {
                                                !data_1 || data_1.length === 0 ? "" : data_1.map((prop, key) => (
                                                    <div key={key} id="1" data-id={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow" onMouseEnter={this.setInfomartionVideo} onClick={this.setInfomartionVideoDefault}>
                                                        <div className="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain  || ""} alt="" />
                                                        </div>
                                                        <div className="des">
                                                            <h6 className="title fs-2"><a href={`/detail/${prop.key}`}>{prop.title || ""}</a></h6>
                                                            <p className="sub-title"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                        </div>
                                                        <div data-id={key} className="hover-state d-flex justify-content-between align-items-center">
                                                            <span className="pointer play-btn-dark box-rounded-sm"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            <div className="d-flex align-items-center">
                                                                <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                                <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="item">
                                            {
                                                !data_2 || data_2.length === 0 ? "" : data_2.map((prop, key) =>  (
                                                    <div key={key} id="2" data-id={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow" onMouseEnter={this.setInfomartionVideo} onClick={this.setInfomartionVideoDefault}>
                                                        <div className="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain  || ""} alt="" />
                                                        </div>
                                                        <div className="des">
                                                            <h6 className="title fs-2"><a href={`/detail/${prop.key}`}>{prop.title || ""}</a></h6>
                                                            <p className="sub-title"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                        </div>
                                                        <div className="hover-state d-flex justify-content-between align-items-center">
                                                            <span className="pointer play-btn-dark box-rounded-sm"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            <div className="d-flex align-items-center">
                                                                <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                                <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="item">
                                            {
                                                !data_3 || data_3.length === 0 ? "" : data_3.map((prop, key) => (
                                                    <div key={key} id="3" data-id={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow" onMouseEnter={this.setInfomartionVideo} onClick={this.setInfomartionVideoDefault}>
                                                        <div className="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain  || ""} alt="" />
                                                        </div>
                                                        <div className="des">
                                                            <h6 className="title fs-2"><a href={`/detail/${prop.key}`}>{prop.title || ""}</a></h6>
                                                            <p className="sub-title"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                        </div>
                                                        <div className="hover-state d-flex justify-content-between align-items-center">
                                                            <span className="pointer play-btn-dark box-rounded-sm"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            <div className="d-flex align-items-center">
                                                                <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                                <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="item">
                                            {
                                                !data_4 || data_4.length === 0 ? "" : data_4.map((prop, key) => (
                                                    <div key={key} id="4" data-id={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow" onMouseEnter={this.setInfomartionVideo} onClick={this.setInfomartionVideoDefault}>
                                                        <div className="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain  || ""} alt="" />
                                                        </div>
                                                        <div className="des">
                                                            <h6 className="title fs-2"><a href={`/detail/${prop.key}`}>{prop.title || ""}</a></h6>
                                                            <p className="sub-title"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                        </div>
                                                        <div className="hover-state d-flex justify-content-between align-items-center">
                                                            <span className="pointer play-btn-dark box-rounded-sm"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            <div className="d-flex align-items-center">
                                                                <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                                <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="item">
                                            {
                                                !data_5 || data_5.length === 0 ? "" : data_5.map((prop, key) => (
                                                    <div key={key} id="5" data-id={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow" onMouseEnter={this.setInfomartionVideo} onClick={this.setInfomartionVideoDefault}>
                                                        <div className="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain  || ""} alt="" />
                                                        </div>
                                                        <div className="des">
                                                            <h6 className="title fs-2"><a href={`/detail/${prop.key}`}>{prop.title || ""}</a></h6>
                                                            <p className="sub-title"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                        </div>
                                                        <div className="hover-state d-flex justify-content-between align-items-center">
                                                            <span className="pointer play-btn-dark box-rounded-sm"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            <div className="d-flex align-items-center">
                                                                <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                                <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="item">
                                            {
                                                !data_6 || data_6.length === 0 ? "" : data_6.map((prop, key) => (
                                                    <div key={key} id="6" data-id={key} className="img-box-horizontal music-img-box h-g-bg h-d-shadow" onMouseEnter={this.setInfomartionVideo} onClick={this.setInfomartionVideoDefault}>
                                                        <div className="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain  || ""} alt="" />
                                                        </div>
                                                        <div className="des">
                                                            <h6 className="title fs-2"><a href={`/detail/${prop.key}`}>{prop.title || ""}</a></h6>
                                                            <p className="sub-title"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                                        </div>
                                                        <div className="hover-state d-flex justify-content-between align-items-center">
                                                            <span className="pointer play-btn-dark box-rounded-sm"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                            <div className="d-flex align-items-center">
                                                                <span className="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                                <span className="pointer dropdown-menu-toggle"><span className="icon-dot-nav-horizontal text-light"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-e-20 pt-e-lg-40"></div>
                        </div>
                        <div className="col-xxl-5 col-lg-4">
                            <div className="title pb-e-15">
                                <h2 className="title h3-md">Xem Ngay</h2>
                            </div>
                            {
                                infomartionVideoDefault.length > 0 ? infomartionVideoDefault.map((prop, key) => (
                                    <div key={key} className="music-img-box">
                                        <div className="img-box box-rounded-md">
                                            <img src={url + prop.imageMain  || ""} style={{ height: 316 }} alt=""/>
                                        </div>
                                        <div className="hover-state show">
                                            <div className="absolute-bottom pl-e-15 pr-e-15 pb-e-md-15  pl-e-md-30 pr-e-30 pb-e-md-30 d-flex">
                                                <div className="">
                                                    <a href={`/detail/${prop.key}`}><h5 className="album-title text-light">{prop.title || ""}</h5></a>
                                                    <a href={`/detail/${prop.key}`}><h6 className="artist-name text-light">{`Tập ${prop.episodes || ""}`}</h6></a>
                                                </div>
                                                <div className="ml-auto">
                                                    <span className="pointer play-btn-dark play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) : 
                                infomartionVideo.map((prop, key) => (
                                    <div key={key} className="music-img-box">
                                        <div className="img-box box-rounded-md">
                                            <img src={url + prop.imageMain  || ""} style={{ height: 316 }} alt=""/>
                                        </div>
                                        <div className="hover-state show">
                                            <div className="absolute-bottom pl-e-15 pr-e-15 pb-e-md-15  pl-e-md-30 pr-e-30 pb-e-md-30 d-flex">
                                                <div className="">
                                                    <a href={`/detail/${prop.key}`}><h5 className="album-title text-light">{prop.title || ""}</h5></a>
                                                    <a href={`/detail/${prop.key}`}><h6 className="artist-name text-light">{`Tập ${prop.episodes || ""}`}</h6></a>
                                                </div>
                                                <div className="ml-auto">
                                                    <span className="pointer play-btn-dark play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="pt-e-30 pt-e-lg-40"></div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}



function mapStateToProps(state) {
    return {
        data_1: state.topWeek_1,
        data_2: state.topWeek_2,
        data_3: state.topWeek_3,
        data_4: state.topWeek_4,
        data_5: state.topWeek_5,
        data_6: state.topWeek_6,
    };
}

export default connect(mapStateToProps) (TopWeek)