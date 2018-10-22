import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { url } from '../../variables/general'
import axios from 'axios'
import { jwt, jwtOptions } from '../../jsonwebtoken/decodeToken'


class Tab_Video extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 0,
            data: this.props.data,
            videos: [],
            linkVideo: "",
            message: ""
        };
        this.toggle = this.toggle.bind(this)
        this.onClickWatchMovie = this.onClickWatchMovie.bind(this)
    }

    onClickWatchMovie(prop, indexVideo, videosMovie){
        if(prop.url !== undefined){    
            let videos = this.state.videos.length === 0 ? videosMovie : this.state.videos
            let numberEpisodes = Number(prop.numberEpisodes)     

            axios.post(`${url}v1/movie/video`, { url: prop.url })
            .then((res) => res.data)
            .then((result) => {
                let decoded = jwt.verify(result.token, jwtOptions.secretOrKey)

                this.playVideo(decoded.linkVideo)

                this.setState({
                    linkVideo: decoded.linkVideo,
                    message: this.getMessageIndexVideo(videos, indexVideo, numberEpisodes)
                })
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }

    getMessageIndexVideo(videos, indexVideo, numberEpisodes){
        let message = ""
        let video = videos[indexVideo]
        
        message = `Bạn đang xem tập ${numberEpisodes} của ${video.title}`
        return message
    }

    playVideo(linkVideo){
        var player = jwplayer("ah-player")
        player.setup({
            sources: [{file: linkVideo, type: 'video/mp4'}],
            width: "100%",
            aspectratio: "16:6",
            playbackRateControls: [0.75, 1, 1.25, 1.5, 2, 2.5],
            autostart: true,
            volume: 100,
            advertising: {
                client: 'vast',
                admessage: 'Quảng cáo cần xx giây',
                skipoffset: 5,
                skiptext: 'Bỏ qua quảng cáo',
                skipmessage: 'Bấm quảng cáo sau xxs',
                tag: null,
            },
        });
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab })
        }
    }

    getVideoIndex(index, videos){
        let episodes = null
        if(videos.length > 0){
            let video = videos[index]
            if(video.episodes.length > 0){
                episodes = video.episodes[0]
            }
        }
        return episodes
    }

    componentDidMount(){
        let data = this.state.data
        if(data.length > 0){
            let videos = data[0].videos.reverse()
            let episodes = this.getVideoIndex(0, videos)

            if(episodes !== null){
                this.onClickWatchMovie(episodes, 0, videos)
            }

            this.setState({videos: videos})
        }
    }

    render() {
        let { videos, data, activeTab, message } = this.state
        if(!data || data.length === 0){
            return <div className="text-center">Loading fail ...</div>
        }else{
            return (
                <div>
                    <div style={{height: 275}}> 
                        <div id="ah-player"></div>
                    </div>
                    <Nav tabs style={{cursor: "pointer"}}>
                        {
                            !videos || videos.length === 0 ? null : videos.map((prop, key) => (
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
                        <div style={{marginTop: 10}}>{message}</div>
                        <ul className="adonis-album-list pt-e-30">
                            <li>
                                <div className="item-number h6 inactive-color">#</div>
                                <div className="item-title h6 inactive-color">Phim</div>
                                <div className="item-duration h6 inactive-color" style={{width: 70}}>Thời Gian</div>
                            </li>
                        </ul>
                        {
                            !videos || videos.length === 0 ? "" : videos.map((prop, key) => (
                                <TabPane key={key} tabId={key} style={{cursor: "pointer"}}>
                                        <ul className="adonis-album-list pb-5" style={{overflow: "auto", height: 400}}>
                                            <li></li>
                                            {
                                                !prop.episodes && prop.episodes.length ==0 ? null : prop.episodes.map((prop2, key2) => (
                                                    <li key={key2} className="item hover-bg-item" onClick={() => { this.onClickWatchMovie(prop2, key, []); }} style={{backgroundColor: "#363636"}}>
                                                        <div className="item-number">
                                                            <span className="hover-hide">{key2+1}</span>
                                                            
                                                            <span className="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                        </div>
                                                        <div className="item-title">{prop2.title}{prop2.numberEpisodes !== "" ? ` tập ${prop2.numberEpisodes}` : ""}</div>
                                                        <div className="item-duration"><span className="hover-hide hover-lg-show">{prop2.timeASet}</span></div>
                                                        <div className="hover-bg gradient-adonis"></div>
                                                    </li>
                                                )) 
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