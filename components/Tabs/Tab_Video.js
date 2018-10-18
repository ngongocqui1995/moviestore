import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { url } from '../../variables/general'

let permission = "?authen=exp=1540052097~acl=/R4BehICXpk0/*~hmac=5c8eb39f518e85d5bb061d4f6b5b6886"

class Tab_Video extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 0,
            data: this.props.data,
            videos: [],
            linkVideo: "",
            imagePoster: ""
        };
        this.toggle = this.toggle.bind(this)
        this.onClickWatchMovie = this.onClickWatchMovie.bind(this)
    }

    onClickWatchMovie(prop){
        if(prop.linkVideo !== undefined){            
            this.playVideo(prop.linkVideo + permission)
            this.setState({linkVideo: prop.linkVideo + permission})
        }
    }

    playVideo(linkVideo){
        let video = videojs('my-video')
        video.src([{src: linkVideo, type: 'video/mp4'}])
        video.load()
        video.play()
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab })
        }
    }

    getLinkVideo(videos){
        let linkVideo = ""
        if(videos.length > 0){
            let episodes = videos[0].episodes
            if(episodes.length > 0){
                linkVideo = episodes[0].linkVideo+permission
            }
        }
        return linkVideo
    }

    componentDidMount(){
        let data = this.state.data
        if(data.length > 0){
            let videos = data[0].videos.reverse()
            let linkVideo = this.getLinkVideo(videos)
            let imagePoster = data[0].coverImage

            this.playVideo(linkVideo)

            this.setState({ 
                videos: videos, 
                imagePoster: imagePoster, 
                linkVideo: linkVideo 
            })
        }
    }

    render() {
        let { videos, data, activeTab, linkVideo, imagePoster } = this.state
        if(!data || data.length === 0){
            return <div className="text-center">Loading fail ...</div>
        }else{
            return (
                <div>
                    <div style={{height: 275}}> 
                        <video id="my-video" className="video-js vjs-big-play-centered" controls style={{width: "100%", height: "100%"}}
                        poster={url + imagePoster || ""}>
                            <source src={linkVideo}></source>
                        </video>
                    </div>
                    <Nav tabs style={{cursor: "pointer"}}>
                        {
                            !videos || videos.length === 0 ? "" : videos.map((prop, key) => (
                                <NavItem key={key}>
                                    <NavLink
                                        className={classnames({ active: activeTab === key })}
                                        onClick={() => { this.toggle(key); }}
                                        style={{backgroundColor: activeTab === key ? "#b08cf9" : "#ffffff", margin: 2}}
                                    >
                                        <h4>{prop.title}</h4>
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <ul className="adonis-album-list pt-e-30">
                            <li>
                                <div className="item-number h6 inactive-color">#</div>
                                <div className="item-title h6 inactive-color">Phim</div>
                                <div className="item-duration h6 inactive-color">Thời Gian</div>
                            </li>
                        </ul>
                        {
                            !videos || videos.length === 0 ? "" : videos.map((prop, key) => (
                                <TabPane key={key} tabId={key} style={{cursor: "pointer"}}>
                                        <ul className="adonis-album-list pb-5" style={{overflow: "auto", height: 500}}>
                                            <li></li>
                                            {
                                                prop.episodes && prop.episodes.length > 0 ? prop.episodes.map((prop, key) => (
                                                    <li key={key} className="item hover-bg-item" onClick={() => { this.onClickWatchMovie(prop); }}>
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
                                </TabPane>
                            ))
                        }
                    </TabContent>
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

export default connect(mapStateToProps) (Tab_Video);
