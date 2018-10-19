import React, { Component } from 'react'
import { connect } from 'react-redux'
import { url } from '../../variables/general'
import Tab_Video from '../Tabs/Tab_Video';

class MovieInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            categories: [],
            countries: [],
            fansub: [],
            isLoading: false,
            title: "",
            content: "",
            view: 0,
            coverImage: "",
            imageMain: "",
            releaseYear: ""
        }
    }

    componentDidMount(){
        let data = this.state.data
        if(data.length > 0){
            let categories = data[0].categories
            let countries = data[0].countries
            let fansub = data[0].fansub
            let coverImage = data[0].coverImage
            let content = data[0].content
            let view = Number(data[0].view)
            let title = data[0].title
            let imageMain = data[0].imageMain
            let releaseYear = data[0].releaseYear
            this.setState({
                categories: categories,
                countries: countries,
                fansub: fansub,
                view: view,
                content: content,
                title: title,
                coverImage: coverImage,
                imageMain: imageMain,
                releaseYear: releaseYear
            })
        }
    }

  render() {
    let { data, categories, countries, fansub, title, coverImage, content, view, imageMain, releaseYear } = this.state
    if(!data || data.length === 0){
        return <div className="text-center">Loading fail ...</div>
    }else{
        return (
            <div className="movie-detail">
                <div>
                    <div className="img-box-text-over lg box-rounded-lg">
                        <img className="resize1" src={url + coverImage || ""} style={{width: "100%", height: 300, marginBottom: 20}} alt="" />
                    </div>
                    <div className="row">
                        <div className="col-md-3 flex-column-sidebar-md text-center text-md-left">
                            <div className="album-image">
                                <div className="music-img-box d-inline-block">
                                    <div className="img-box">
                                        <img className="retina box-rounded-md" src={url + imageMain || ""} alt="" />
                                    </div>
                                    <div className="absolute-info">
                                        <span className="adonis-icon icon-play icon-2x">
                                            <svg id="icon-brand-play" viewBox="0 0 27 32" width="100%" height="100%">
                                                <path d="M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4 d-inline-block album-likes">
                                <span className="adonis-icon pr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                <span className="pr-2">Lượt Xem: </span>
                                <span className="adonis-icon pr-2 icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg></span>
                                <span>{view}</span>
                            </div>
                            <div className="detail" style={{marginBottom: 25}}>
                                <h4>Thông Tin</h4>
                                <span><p>{`Tên Phim: ${title}`}</p></span>
                                <span><p>{releaseYear !== "" ? `Năm phát hành ${releaseYear}` : ""}</p></span>
                                <span>
                                    {
                                        categories.length === 0 ? null : 
                                        <p>Thể Loại:
                                            {
                                                categories.length > 0 ? categories.map((prop, key) => (
                                                    <a key={key} style={{marginLeft: 10}} href="#">{prop.title}</a>
                                                ))
                                                : null
                                            }
                                        </p>
                                    }
                                </span>
                                <span>
                                    {
                                        countries.length === 0 ? null : 
                                        <p>Quốc Gia:
                                            {
                                                countries.length > 0 ? countries.map((prop, key) => (
                                                    <a key={key} style={{marginLeft: 10}}>{prop.title}</a>
                                                ))
                                                : null
                                            }
                                        </p>
                                    }
                                </span>
                                <span>
                                    {
                                        fansub.length === 0 ? null : 
                                        <p>Nhóm dịch:
                                            {
                                                fansub.length === 0 ? null : fansub.map((prop, key) => (
                                                    <a key={key} style={{marginLeft: 10}}>{prop.title}</a>
                                                ))
                                            }
                                        </p>
                                    }
                                </span>
                            </div>
                            <div className="content">
                                <h4>Nội Dung</h4>
                                <p>{content}</p>
                            </div>
                            <div className="pt-e-20 pt-e-lg-40"></div>
                        </div>
                        <div className="col-md-9 flex-column-content-md pl-e-xl-40">

                            <Tab_Video/>

                        </div>
                    </div>
                </div>
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