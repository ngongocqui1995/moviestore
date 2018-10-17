import React, { Component } from 'react'
import { connect } from 'react-redux'
import { url } from '../../variables/general'
import moment from 'moment'

class MovieInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            categories: [],
            countries: [],
            fansub: [],
            isLoading: false
        }
    }

    componentDidMount(){
        let data = this.state.data
        if(data.length > 0){
            let categories = data[0].categories
            let countries = data[0].countries
            let fansub = data[0].fansub
            this.setState({
                categories: categories,
                countries: countries,
                fansub: fansub
            })
        }
    }

  render() {
    let { data, categories, countries, fansub } = this.state
    console.log(data)
    console.log(categories)
    if(!data || data.length === 0){
        return <div className="text-center">Loading fail ...</div>
    }else{
        return (
            <div className="movie-detail">
                {
                    !data || data.length === 0 ? "" : data.map((prop, key) => (
                        <div key={key}>
                            <div className="img-box-text-over lg box-rounded-lg">
                                <img className="resize1" src={url + prop.coverImage || ""} style={{width: "100%", height: 300, marginBottom: 20}} alt="" />
                            </div>
                            <div className="row">
                                <div className="col-md-3 flex-column-sidebar-md text-center text-md-left">
                                    <div className="album-image">
                                        <div className="music-img-box d-inline-block">
                                            <div className="img-box">
                                                <img className="retina box-rounded-md" src={url + prop.imageMain || ""} alt="" />
                                            </div>
                                            <div className="absolute-info">
                                                <a className="btn btn-60-60 btn-primary absolute-center adonis-album-button round-btn text-light" data-album-id="1" role="button" tabIndex="0">
                                                    <span className="adonis-icon icon-play icon-2x"><svg id="icon-brand-play" viewBox="0 0 27 32" width="100%" height="100%">
                                                        <path d="M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"></path>
                                                    </svg></span>
                                                    <span className="adonis-icon icon-pause icon-2x"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 29 32"><path d="M19.2 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"></path><path d="M1.6 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"></path></svg></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-4 d-inline-block album-likes">
                                        <span className="adonis-icon pr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                        <span className="pr-2">Lượt Xem: </span>
                                        <span className="adonis-icon pr-2 icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg></span>
                                        <span>{prop.view}</span>
                                    </div>
                                    <div className="detail" style={{marginBottom: 25}}>
                                        <h4>Thông Tin</h4>
                                        <p>{`Tên Phim: ${prop.title}`}</p>
                                        <p>{prop.releaseYear !== "" ? `Năm phát hành ${prop.releaseYear}` : ""}</p>
                                        <p>
                                            {
                                                categories.length > 0 ?
                                                <p>Thể Loại: 
                                                    {
                                                        categories.map((prop, key) => (
                                                            <a style={{marginLeft: 10}} href="#" key={key}>{prop.title}</a>
                                                        ))
                                                    }
                                                </p> : 
                                                null
                                            }
                                        </p>
                                        <p>
                                            {
                                                countries.length > 0 ?
                                                <p>Quốc Gia:
                                                    {
                                                        countries.map((prop, key) => (
                                                            <a style={{marginLeft: 10}} key={key}>{prop.title}</a>
                                                        ))
                                                    }
                                                </p> : 
                                                null
                                            }
                                        </p>
                                        <p>
                                            {
                                                fansub.length > 0 ?
                                                <p>Nhóm dịch:
                                                    {
                                                        fansub.map((prop, key) => (
                                                            <a style={{marginLeft: 10}} key={key}>{prop.title}</a>
                                                        ))
                                                    }
                                                </p> : 
                                                null
                                            }
                                        </p>
                                    </div>
                                    <div className="content">
                                        <h4>Nội Dung</h4>
                                        <p>{prop.content}</p>
                                    </div>
                                    <div className="pt-e-20 pt-e-lg-40"></div>
                                </div>
                                <div className="col-md-9 flex-column-content-md pl-e-xl-40">
                                    <div className="album-top-box text-center text-md-left">
                                        <video id="my-video" className="video-js vjs-big-play-centered" autoPlay={true} controls preload={true} style={{width: "100%", height: 264}}
                                        poster="MY_VIDEO_POSTER.jpg" data-setup="{}">
                                            <source src="https://scontent-nrt1-1.xx.fbcdn.net/v/t66.18014-6/10000000_1993990167330982_8710407114440623929_n.mp4?_nc_cat=106&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=scontent-nrt1-1.xx&oh=5a25d9a81c4e8474bd50ec60011d2f30&oe=5C894EFD" type='video/mp4'/>
                                        </video>
                                    </div>

                                    <ul className="adonis-album-list pt-e-30">
                                        <li>
                                            <div className="item-number h6 inactive-color">#</div>
                                            <div className="item-title h6 inactive-color">Phim</div>
                                            <div className="item-duration h6 inactive-color">Thời Gian</div>
                                        </li>
                                    </ul>
                                    <ul className="adonis-album-list pb-5" style={{overflow: "auto", height: 300}}>
                                        <li></li>
                                        {
                                            prop.videos && prop.videos.length > 0 ? prop.videos[0].episodes.map((prop, key) => (
                                                <li key={key} className="item hover-bg-item">
                                                    <div className="item-number">
                                                        <span className="hover-hide">{key+1}</span>
                                                        <span className="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                    </div>
                                                    <div className="item-title">{prop.title}{prop.numberEpisodes !== "" ? ` tập ${prop.numberEpisodes}` : ""}</div>
                                                    <div className="item-duration"><span className="hover-hide hover-lg-show">{prop.timeASet}</span></div>
                                                    <div className="hover-bg gradient-adonis"></div>
                                                </li>
                                            )) : null
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
  }
}


function mapStateToProps(state) {
    return {
        data: state.movieInformation
    };
}

export default connect(mapStateToProps) (MovieInformation);