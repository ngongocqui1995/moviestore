import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { url } from '../variables/general'


class MainRomance extends Component {

    constructor(datas) {
        super(datas)
        this.state = {
            data_1: [],
            data_2: [],
            data_3: [],
            data_4: [],
            data_5: [],
            data_6: [],
            data_7: [],
            data_8: [],
            data_9: [],
            data_10: [],
            isLoading: false
        }
    }

    componentDidUpdate() {
        adonisObj.masonry('.adonis-masonry');
    }

    render() {
        const { data_1, data_2, data_3, data_4, data_5, data_6, data_7, data_8, data_9, data_10 } = this.props
        if (!data_1 || data_1.length === 0 || !data_2 || data_2.length === 0 || !data_3 || data_3.length === 0 || 
            !data_4 || data_4.length === 0 || !data_5 || data_5.length === 0 || !data_6 || data_6.length === 0 || 
            !data_7 || data_7.length === 0 || !data_8 || data_8.length === 0 || !data_9 || data_9.length === 0 || 
            !data_10 || data_10.length === 0) {
            return <div className="text-center">Loading ...</div>
        }
        else {
            return (
                <div id="romance" className="inactive-hide active" ><main id="main">
                    <div className="title-box text-center mb-5">
                        <h6 className="sub-title inactive-color">Tâm Lý/Tình Cảm</h6>
                        <h2 className="title">Lãng mạn, ngọt ngào phải chăng là đã yêu ?</h2>
                    </div>
                    <section>
                        <div className="adonis-news-articles adonis-masonry row adonis-effect adonis-animate" data-animation="fadeInSkew" data-column-width=".masonry-item" data-animation-item=".masonry-item" data-animation="slideUp" data-column-width=".masonry-item">
                            {
                                !data_1 || data_1.length === 0 ? "" : data_1.map((prop, key) => (
                                    <div key={key} className="col-sm-6 col-md-4 col-lg-3 masonry-item mb-4">
                                        <article className="news-box">
                                            <div className="box-rounded-sm img-box">
                                                <a href={`/detail/${prop.key}`}><img src={url + prop.imageMain || ""} alt="" /></a>
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodes || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p>{`Phát hành ngày ${moment(prop.createdAt).format("DD-MM-YYYY")}`}</p>
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
                                                <a href={`/detail/${prop.key}`}><img src={url + prop.imageMain || ""} alt="" /></a>
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodes || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p>{`Phát hành ngày ${moment(prop.createdAt).format("DD-MM-YYYY")}`}</p>
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
                                                <a href={`/detail/${prop.key}`}><img src={url + prop.imageMain || ""} alt="" /></a>
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodes || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p>{`Phát hành ngày ${moment(prop.createdAt).format("DD-MM-YYYY")}`}</p>
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
                                                <a href={`/detail/${prop.key}`}><img src={url + prop.imageMain || ""} alt="" /></a>
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodes || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p>{`Phát hành ngày ${moment(prop.createdAt).format("DD-MM-YYYY")}`}</p>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            }
                            {
                                !data_5 || data_5.length === 0 ? "" : data_5.map((prop, key) => (
                                    <div key={key} className="col-sm-6 col-md-4 col-lg-3 masonry-item mb-4">
                                        <article className="news-box">
                                            <div className="box-rounded-sm img-box">
                                                <a href={`/detail/${prop.key}`}><img src={url + prop.imageMain || ""} alt="" /></a>
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodes || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p>{`Phát hành ngày ${moment(prop.createdAt).format("DD-MM-YYYY")}`}</p>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            }
                            {
                                !data_6 || data_6.length === 0 ? "" : data_6.map((prop, key) => (
                                    <div key={key} className="col-sm-6 col-md-4 col-lg-3 masonry-item mb-4">
                                        <article className="news-box">
                                            <div className="box-rounded-sm img-box">
                                                <a href={`/detail/${prop.key}`}><img src={url + prop.imageMain || ""} alt="" /></a>
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodes || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p>{`Phát hành ngày ${moment(prop.createdAt).format("DD-MM-YYYY")}`}</p>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            }
                            {
                                !data_7 || data_7.length === 0 ? "" : data_7.map((prop, key) => (
                                    <div key={key} className="col-sm-6 col-md-4 col-lg-3 masonry-item mb-4">
                                        <article className="news-box">
                                            <div className="box-rounded-sm img-box">
                                                <a href={`/detail/${prop.key}`}><img src={url + prop.imageMain || ""} alt="" /></a>
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodes || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p>{`Phát hành ngày ${moment(prop.createdAt).format("DD-MM-YYYY")}`}</p>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            }
                            {
                                !data_8 || data_8.length === 0 ? "" : data_8.map((prop, key) => (
                                    <div key={key} className="col-sm-6 col-md-4 col-lg-3 masonry-item mb-4">
                                        <article className="news-box">
                                            <div className="box-rounded-sm img-box">
                                                <a href={`/detail/${prop.key}`}><img src={url + prop.imageMain || ""} alt="" /></a>
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodes || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p>{`Phát hành ngày ${moment(prop.createdAt).format("DD-MM-YYYY")}`}</p>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            }
                            {
                                !data_9 || data_9.length === 0 ? "" : data_9.map((prop, key) => (
                                    <div key={key} className="col-sm-6 col-md-4 col-lg-3 masonry-item mb-4">
                                        <article className="news-box">
                                            <div className="box-rounded-sm img-box">
                                                <a href={`/detail/${prop.key}`}><img src={url + prop.imageMain || ""} alt="" /></a>
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodes || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p>{`Phát hành ngày ${moment(prop.createdAt).format("DD-MM-YYYY")}`}</p>
                                            </div>
                                        </article>
                                    </div>
                                ))
                            }
                            {
                                !data_10 || data_10.length === 0 ? "" : data_10.map((prop, key) => (
                                    <div key={key} className="col-sm-6 col-md-4 col-lg-3 masonry-item mb-4">
                                        <article className="news-box">
                                            <div className="box-rounded-sm img-box">
                                                <a href={`/detail/${prop.key}`}><img src={url + prop.imageMain || ""} alt="" /></a>
                                            </div>
                                            <div className="info-box">
                                                <p className="mb-2"><a href="#" className="color-active fs-1">Tập {prop.episodes || ""}</a></p>
                                                <h3 className="title"><a href="#">{prop.title || ""}</a> </h3>
                                                <p className="excerpt">{prop.content || ""}</p>
                                                <p>{`Phát hành ngày ${moment(prop.createdAt).format("DD-MM-YYYY")}`}</p>
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
        data_1: state.main_Romance_1,
        data_2: state.main_Romance_2,
        data_3: state.main_Romance_3,
        data_4: state.main_Romance_4,
        data_5: state.main_Romance_5,
        data_6: state.main_Romance_6,
        data_7: state.main_Romance_7,
        data_8: state.main_Romance_8,
        data_9: state.main_Romance_9,
        data_10: state.main_Romance_10,
    };
}

export default connect(mapStateToProps) (MainRomance);
