import React, { Component } from 'react'
import { connect } from 'react-redux'
import { url } from '../../variables/general'


class RelatedMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
        }
    }

    componentDidUpdate(){
        try{
            $(".adonis-carousel").each(function () {
                adonisObj.carousel($(this));
            });
        }catch(err){
            console.log(err)
        }
    }

  render() {
    let { data } = this.state
    if(!data || data.length === 0){
        return <div className="text-center">Loading fail ...</div>
    }else{
        return (
            <div className="more-items">
                <div className="pt-e-20 pt-e-lg-40"></div>
                <div className="title-box">
                    <h2 className="title h3-md">Phim Liên Quan</h2>
                </div>
                <div className="adonis-carousel auto-fit-columns" data-auto-width="no" data-item-parent=".owl-carousel" data-auto-fit-items=".item" data-dots="yes" data-items-responsive="0:1|400:2|600:3|900:4|1200:5">
                    <div className="gutter-30">
                        <div className="owl-carousel owl-theme-adonis">
                            {
                                !data || data.length === 0 ? null : data.map((prop, key) => (
                                    <div key={key} className="item hover-bg-item">
                                        <div className="music-img-box">
                                            <div className="img-box box-rounded-sm">
                                                <img className="retina" src={url + prop.imageMain || ""} data-2x="/assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div className="hover-state">
                                                    <div className="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span className="pointer play-btn-dark round-btn"><a href={`/detail/${prop.key}`}><i className="play-icon"></i></a></span>
                                                    </div>
                                                    <div className="absolute-top-right pr-e-20 pt-e-20">
                                                        <span className="pointer dropdown-menu-toggle"><span className="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title"><a href={`/detail/${prop.key}`}>{prop.title}</a></h6>
                                            <p className="sub-title category"><a href={`/detail/${prop.key}`}>{`Tập ${prop.episodes || ""}`}</a></p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="pt-e-5 pt-e-lg-10"></div>
            </div>
        )
    }
  }
}


function mapStateToProps(state) {
    return {
        data: state.relatedMovie
    };
}

export default connect(mapStateToProps) (RelatedMovie);