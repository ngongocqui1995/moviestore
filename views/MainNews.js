import React, { Component } from 'react'
import fetchData from '../api/api'
import { url } from '../variables/general'

export default class MainNews extends Component {

    constructor(datas) {
        super(datas)
        this.state = {
            data: [],
            isLoading: false
        }
    }
    componentDidUpdate() {
        adonisObj.masonry('.adonis-masonry');
    }

    // async componentDidMount() {
    //     const result = await fetchData._getData_1()
    //     this.setState({ data: result, isLoading: true })
    //     console.log(result)
    // }

    render() {
        const { data } = this.props
        if (!data || data.length === 0) {
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
                            {!data || data.length === 0 ? "" : data.map((prop, key) => (
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
                            ))}
                        </div>
                    </section>
                </main>
                </div>
            )
        }

    }
}
