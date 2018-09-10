import React, { Component } from "react";

export default class Item_10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  render() {
    const { data } = this.state;
    if (data === "") {
      return <div class="text-center">Loading...</div>;
    } else {
      return (
        <div class="owl-carousel owl-theme-adonis">
          <div class="item">
            <div class="music-img-box mb-e-30 mb-e-md-40" style={{width:170}}>
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}
                  class="retina"
                  src={data[0].imageMain}
                  data-2x="../assets/images/playlists/playlist-1@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[0].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
            <div class="music-img-box">
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}
                  class="retina"
                  src={data[1].imageMain}
                  data-2x="../assets/images/playlists/playlist-11@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[1].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
          </div>
          <div class="item">
            <div class="music-img-box mb-e-30 mb-e-md-40" style={{width:170}}>
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}
                  class="retina"
                  src={data[2].imageMain}
                  data-2x="../assets/images/playlists/playlist-1@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[2].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
            <div class="music-img-box">
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}
                  class="retina"
                  src={data[3].imageMain}
                  data-2x="../assets/images/playlists/playlist-11@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[3].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
          </div>
          <div class="item">
            <div class="music-img-box mb-e-30 mb-e-md-40" style={{width:170}}>
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}
                  class="retina"
                  src={data[4].imageMain}
                  data-2x="../assets/images/playlists/playlist-1@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[4].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
            <div class="music-img-box">
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}
                  class="retina"
                  src={data[5].imageMain}
                  data-2x="../assets/images/playlists/playlist-11@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[5].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
          </div>
          <div class="item">
            <div class="music-img-box mb-e-30 mb-e-md-40" style={{width:170}}>
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}
                  class="retina"
                  src={data[6].imageMain}
                  data-2x="../assets/images/playlists/playlist-1@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[6].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
            <div class="music-img-box">
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}
                  class="retina"
                  src={data[7].imageMain}
                  data-2x="../assets/images/playlists/playlist-11@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[7].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
          </div>
          <div class="item">
            <div class="music-img-box mb-e-30 mb-e-md-40" style={{width:170}}>
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}
                  class="retina"
                  src={data[8].imageMain}
                  data-2x="../assets/images/playlists/playlist-1@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[8].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
            <div class="music-img-box">
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}
                  class="retina"
                  src={data[9].imageMain}
                  data-2x="../assets/images/playlists/playlist-11@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[9].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
          </div>
          <div class="item">
            <div class="music-img-box mb-e-30 mb-e-md-40" style={{width:170}}>
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}
                  class="retina"
                  src={data[10].imageMain}
                  data-2x="../assets/images/playlists/playlist-1@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[10].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
            <div class="music-img-box">
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}
                  class="retina"
                  src={data[11].imageMain}
                  data-2x="../assets/images/playlists/playlist-11@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[11].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
          </div>
          <div class="item">
            <div class="music-img-box mb-e-30 mb-e-md-40" style={{width:170}}>
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}
                  class="retina"
                  src={data[12].imageMain}
                  data-2x="../assets/images/playlists/playlist-1@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[12].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
            <div class="music-img-box">
              <div class="img-box box-rounded-md img-box-md" style={{width:170}}>
                <img style={{height:150}}   
                  class="retina"
                  src={data[13].imageMain}
                  data-2x="../assets/images/playlists/playlist-11@2x.jpg"
                  alt=""
                />
                <div class="hover-state">
                  <div class="absolute-bottom-left pl-e-15 pb-e-15">
                    <span class="pointer play-btn-dark round-btn">
                      <i class="play-icon" />
                    </span>
                  </div>
                  <div class="absolute-top-right pr-e-15 pt-e-15">
                    <span class="pointer dropdown-menu-toggle">
                      <span class="adonis-icon icon-4x">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                          <use xlinkHref="#icon-horizontal-dots" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <h6 class="title">
                <a href="#">{data[13].title}</a>
              </h6>
              <p class="sub-title category">
                <a href="#">Adonis Music Pop</a>
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}
