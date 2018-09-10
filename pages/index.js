
import _getData from '../api/api'
import Tabs_Home from '../components/tabs/Tab_Home.js';
import Menu from '../components/Menu.js';
import Header from '../components/Header.js';
import Item_1 from '../components/common/Item_1.js';
import Item_2 from '../components/common/Item_2.js';
import Item_3 from '../components/common/Item_3.js';
import Item_4 from '../components/common/Item_4.js';
import Item_5 from '../components/common/Item_5';
import Item_6 from '../components/common/Item_6';
import Item_7 from '../components/common/Item_7';
import Top from '../components/common/Top';
import Item_8 from '../components/common/Item_8';
import Item_9 from '../components/common/Item_9';
import Item_10 from '../components/common/Item_10';
import Item_11 from '../components/common/Item_11';
import Item_12 from '../components/common/Item_12';
const Index = (props) => (
  <div id="wrap" className="light main-wrap clearfix">
    <Menu />
    <Header />
    <div id="site-content">
      <div id="site-content-inner">
        <Top data={props.data_top} />
        

          <main id="main">
            <div className="pt-4 pt-lg-5"></div>
            <div className="master-container-fluid">
            <Tabs_Home />
            </div>
            <div className="master-container-fluid">
              
              <div id="browse-overview" class="inactive-hide active">
              <div class="adonis-carousel mb-3 viewport-animate" data-animation="slideUp" data-animation-item=".owl-carousel owl-theme-adonis" data-auto-width="yes" data-loop="yes" data-center="yes" data-dots="yes" data-responsive-width="0:70%|600:580px">
                <div class="gutter-30">
                  <Item_5 data={props.data_5} />
                </div>
              </div>
                <Item_1 data = {props.data_1}/>
                <hr/>
                <div className="pt-e-20 pt-e-lg-40"></div>
                <section class="viewport-animate" data-animation="slideUp" data-animation-item=".col-md-4">
                  <Item_7 />
                </section>
                <div class="row">
                  <div class="col-md-9 flex-column-content-md">
                    <div class="browse-content-overview inactive-hide active fluid-reverse-r fluid-reverse-md-none viewport-animate" data-animation-item=".owl-item.active" data-animation="slideUp">
                      <Item_8 data={props.data_8} />
                    </div>
                  </div>
                  <div class="col-md-3 flex-column-sidebar-md sidebar viewport-animate" data-animation="slideUp" data-animation-item=".widget">
                    <Item_9 data={props.data_9} />
                  </div>
                </div>

                <section>
                  <div class="d-flex">
                    <div class="title-box">
                      <h6 class="sub-title inactive-color">Featured</h6>
                      <h2 class="title h3-md">Mới Cập Nhật ( Liên Tục 24/7 )</h2>
                    </div>
                    <div class="button-right ml-auto ml-auto d-flex align-items-end">
                      <a href="#" class="mb-4">See all <span class="adonis-icon pl-1 icon-arrow icon-1x"><svg
                        xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <use xlinkHref="#icon-see-all-arrow-right" /></svg></span></a>
                    </div>
                  </div>
                  <div class="adonis-carousel music-img-box-cont-sm viewport-animate" data-animation="slideUp"
                      data-animation-item=".item" data-dots="yes" >
                      <Item_6 data_6={props.data_6} />
                  </div>            
                </section>

                <section>
                  <div class="d-flex">
                    <div class="title-box">
                      <h6 class="sub-title inactive-color">Featured</h6>
                      <h2 class="title h3-md">Đặc Sắc</h2>
                    </div>
                    <div class="button-right ml-auto ml-auto d-flex align-items-end">
                      <a href="#" class="mb-4">See all <span class="adonis-icon pl-1 icon-arrow icon-1x"><svg
                        xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <use xlinkHref="#icon-see-all-arrow-right" /></svg></span></a>
                    </div>
                  </div>
                  <div class="adonis-carousel music-img-box-cont-sm viewport-animate" data-animation="slideUp"
                      data-animation-item=".item" data-dots="yes" data-auto-width="yes" data-responsive-width="0:50%|400:33.33%|600:25%|800:20%|1000:16.667%|1200:14.285%|1400:12.5%|1600:10%">
                      <div class="gutter-30">
                        <Item_10 data={props.data_10}/>
                      </div>      
                  </div>            
                </section>
                <section>
                  <div class="row">
                    <div class="col-lg-6">
                      <Item_11 data={props.data_11}/>
                    </div>
                    <div class="col-lg-6">
                      <Item_12 data={props.data_12}/>
                    </div>
                  </div>
                </section>
                <section class="adonis-carousel viewport-animate" data-animation="slideUp" data-animation-item=".owl-item.active" data-dots="yes"
                  data-auto-width="yes" data-responsive-width="0:100%|500:50%|730:33.33%|1100:25%|1460:20%">
                  <Item_2 data_2={props.data_2} />
                </section>
                <section>
                  <div class="row">
                    <div class="col-xxl-7 col-lg-8">
                      <div class="d-flex flex-row">
                        <div class="title-box">
                          <h6 class="sub-title inactive-color">Hot Track</h6>
                          <h2 class="title h3-md">Tiêu Điểm Tuần</h2>
                        </div>
                        <div class="button-right ml-auto ml-auto mt-auto mb-4 d-flex">
                          <a href="#">See all
                                <span class="adonis-icon pl-1 icon-arrow icon-1x">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">

                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div class="adonis-carousel music-img-box-cont-sm viewport-animate" data-animation="slideUp" data-animation-item=".item"
                        data-auto-width="yes" data-loop="no" data-dots="yes" data-responsive-width="0:100%|600:50%|900:33.33%|1200:25%">
                        <div class="gutter-30">
                          <Item_4 data_4={props.data_4} />
                        </div>
                      </div>
                    </div>
                    <div class="col-xxl-5 col-lg-4">
                      <div class="title pb-e-15">
                        <h6 class="title inactive-color">Video Today</h6>
                        <h2 class="title h3-md">Quảng Cáo</h2>
                      </div>
                      <div class="music-img-box">
                        <div class="img-box box-rounded-md">
                          <img src="/static/assets/images/watch-now/watch-now.jpg" alt="" />
                        </div>
                        <div class="hover-state show">
                          <div class="absolute-top pl-e-15 pr-e-15 pt-e-15 pl-e-md-30 pr-e-md-30 pt-e-md-30">
                            <h6 class="album-name text-light">Album: Life Changes</h6>
                          </div>
                          <div class="absolute-bottom pl-e-15 pr-e-15 pb-e-md-15  pl-e-md-30 pr-e-30 pb-e-md-30 d-flex">
                            <div class="">
                              <a href="#">
                                <h5 class="album-title text-light">The Ones That Like Me</h5>
                              </a>
                              <a href="#">
                                <h6 class="artist-name text-light">David Jame</h6>
                              </a>
                            </div>
                            <div class="ml-auto">
                              <span class="pointer play-btn-dark play-btn-dark round-btn">
                                <i class="play-icon"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="pt-e-30 pt-e-lg-40"></div>
                    </div>
                  </div>
                </section>
                <section>
                  <div class="d-flex">
                    <div class="title-box">
                      <h6 class="sub-title inactive-color">New</h6>
                      <h2 class="title h3-md">Tổng Hợp</h2>
                    </div>
                    <div class="button-right ml-auto ml-auto d-flex align-items-end">
                      <a href="#" class="mb-4">See all
                              <span class="adonis-icon pl-1 icon-arrow icon-1x">
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">

                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div class="adonis-carousel viewport-animate" data-animation="slideUp" data-animation-item=".owl-item.active" data-dots="yes"
                    data-auto-width="yes" data-responsive-width="0:100%|300:50%|560:33%|820:25%|980:20%|1240:16.66%">
                    <Item_3 data_3={props.data_3} />
                  </div>
                </section>
              </div>
              <div id="browse-new-music" class="inactive-hide"></div>
              <div id="browse-news" class="inactive-hide"></div>
              <div id="browse-playlists" class="inactive-hide"></div>
              <div id="browse-charts" class="inactive-hide"></div>
              <div id="browse-genres" class="inactive-hide"></div>
              <div id="browse-videos" class="inactive-hide"></div>
              <div class="tab-preloader preloader">
                <div class="preloader-overlay"></div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="preloader site-preloader">
            <div class="preloader-overlay"></div>
            <div class="position-absolute center-center"><span class="shadow"></span><div class="icons"> <span class="animate-loading"><span
                class="adonis-icon icon-5x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play-gradient"></use></svg></span></span><span
                class="adonis-icon icon-5x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg></span></div>
            </div>
        </div>
  </div>
)

Index.getInitialProps = async function () {
  const data_top = await _getData._getData_Top()
  const data_1 = await _getData._getData_1()
  const data_2 = await _getData._getData_2()
  const data_3 = await _getData._getData_3()
  const data_4 = await _getData._getData_4()
  const data_5 = await _getData._getData_5()
  const data_6 = await _getData._getData_6()
  const data_8 = await _getData._getData_8()
  const data_9 = await _getData._getData_9()
  const data_10 = await _getData._getData_10()
  const data_11 = await _getData._getData_11()
  const data_12 = await _getData._getData_12()
  return {
    data_1: data_1,
    data_2: data_2,
    data_3: data_3,
    data_4: data_4,
    data_5: data_5,
    data_6: data_6,
    data_top: data_top,
    data_8: data_8,
    data_9: data_9,
    data_10: data_10,
    data_11: data_11,
    data_12: data_12
  }
}

export default Index