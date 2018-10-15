import React, { Component } from 'react'
import { url } from '../variables/general'
import { connect } from 'react-redux'

class MainNews extends Component {

    constructor(datas) {
        super(datas)
        this.state = {
            data_1: [],
            data_2: [],
            data_3: [],
            data_4: [],
            isLoading: false
        }
    }
    componentDidUpdate() {
        adonisObj.masonry('.adonis-masonry');
    }

    render() {
        const { data_1, data_2, data_3, data_4 } = this.props
        if (!data_1 || data_1.length === 0 || !data_2 || data_2.length === 0 || !data_3 || data_3.length === 0 || !data_4 || data_4.length === 0) {
            return <div className="text-center">Loading ...</div>
        }
        else {
            return (
                <div id="news" className="inactive-hide" ><main id="main">
                    <div className="title-box text-center mb-5">
                        <h6 className="sub-title inactive-color">Tin Tức/Phim điện ảnh</h6>
                        <h2 className="title">Lãng mạn, ngọt ngào phải chăng là đã yêu ?</h2>
                    </div>
                    <section>
                        <div className="adonis-news-articles adonis-masonry row adonis-effect adonis-animate" data-animation="fadeInSkew" data-column-width=".masonry-item" data-animation-item=".masonry-item" data-animation="slideUp" data-column-width=".masonry-item">
                            {
                                !data_1 || data_1.length === 0 ? "" : data_1.map((prop, key) => (
                                    <div key={key} className="col-sm-6 col-md-4 col-lg-3 masonry-item mb-4">
                                        <article className="news-box">
                                            <div className="box-rounded-sm img-box">
                                                <img src={url + prop.imageMain || ""} alt="" />
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodesCurrent || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p> Oct 6th, 2017 by <a href="#"><em>Jon Snow</em></a></p>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            }
                            {
                                !data_2 || data_2.length === 0 ? "" : data_2.map((prop, key) => (
                                    <div key={key} className="col-sm-6 col-md-4 col-lg-3 masonry-item mb-4">
                                        <article className="news-box">
                                            <div className="box-rounded-sm img-box">
                                                <img src={url + prop.imageMain || ""} alt="" />
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodesCurrent || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p> Oct 6th, 2017 by <a href="#"><em>Jon Snow</em></a></p>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            }
                            {
                                !data_3 || data_3.length === 0 ? "" : data_3.map((prop, key) => (
                                    <div key={key} className="col-sm-6 col-md-4 col-lg-3 masonry-item mb-4">
                                        <article className="news-box">
                                            <div className="box-rounded-sm img-box">
                                                <img src={url + prop.imageMain || ""} alt="" />
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodesCurrent || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p> Oct 6th, 2017 by <a href="#"><em>Jon Snow</em></a></p>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            }
                            {
                                !data_4 || data_4.length === 0 ? "" : data_4.map((prop, key) => (
                                    <div key={key} className="col-sm-6 col-md-4 col-lg-3 masonry-item mb-4">
                                        <article className="news-box">
                                            <div className="box-rounded-sm img-box">
                                                <img src={url + prop.imageMain || ""} alt="" />
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodesCurrent || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p> Oct 6th, 2017 by <a href="#"><em>Jon Snow</em></a></p>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </main>
                </div>
            )
        }

    }
}

function mapStateToProps(state) {
    return {
        data_1: state.mainNews_1,
        data_2: state.mainNews_2,
        data_3: state.mainNews_3,
        data_4: state.mainNews_4
    };
}

export default connect(mapStateToProps) (MainNews)