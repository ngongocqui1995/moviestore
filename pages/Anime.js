import React, { Component } from 'react';
import Search from '../components/Search/Search_Box';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HeaderAnime from '../components/Header/HeaderAnime';
import Tab_Menu_Anime from '../components/Tabs/Tab_Menu_Anime';
import MainAnime from '../views/MainAnime';
import SideBarLeft from '../components/SideBar/SideBarLeft';
import fetchData from '../api/api'
import {
  storeNewUpdateAnime, storeRecommendAnime_1, storeRecommendAnime_2, storeRecommendAnime_3, storeRecommendAnime_4,
  storeRecommendAnime_5, storeRecommendAnime_6, storeTopViewsAnime, storeCarouselAnime
} from '../store/store'
import createStore from "../store/store"
import { Provider } from 'react-redux'


export default class Anime extends Component {
  render() {
    var store = createStore(this.props.data)
    return (
      <Provider store={store}>
        <div>
          <div id="wrap" className="light main-wrap clearfix">
            <SideBarLeft/>
            <Header/>
            <HeaderAnime/>
            <div id="site-content">
              <div id="site-content-inner">
                <main id="main">
                  <div className="master-container-fluid">
                    <div className="pt-4 pt-lg-5"></div>
                    <Tab_Menu_Anime/>
                    <div className="tabs-content overflow-h">
                      <MainAnime/>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <Footer />
          </div>
          <Search />
        </div>
      </Provider>
    )
  }
}

Anime.getInitialProps = async function () {
  var store = createStore()

  const newUpdateAnime = fetchData.__get_New_Update_Anime()
  const carouselAnime = fetchData.__get_Data_Carousel_Anime()
  const recommendAnime_1 = fetchData.__get_Recommend_Anime_1()
  const recommendAnime_2 = fetchData.__get_Recommend_Anime_2()
  const recommendAnime_3 = fetchData.__get_Recommend_Anime_3()
  const recommendAnime_4 = fetchData.__get_Recommend_Anime_4()
  const recommendAnime_5 = fetchData.__get_Recommend_Anime_5()
  const recommendAnime_6 = fetchData.__get_Recommend_Anime_6()
  const topViewsAnime = fetchData.__get_Top_Views_Anime()

  await Promise.all([
    newUpdateAnime, recommendAnime_1, recommendAnime_2, recommendAnime_3, recommendAnime_4, recommendAnime_5, 
    recommendAnime_6, topViewsAnime, carouselAnime
  ])
  .then((result) => {
    store.dispatch(storeNewUpdateAnime(result[0]))
    store.dispatch(storeRecommendAnime_1(result[1]))
    store.dispatch(storeRecommendAnime_2(result[2]))
    store.dispatch(storeRecommendAnime_3(result[3]))
    store.dispatch(storeRecommendAnime_4(result[4]))
    store.dispatch(storeRecommendAnime_5(result[5]))
    store.dispatch(storeRecommendAnime_6(result[6]))
    store.dispatch(storeTopViewsAnime(result[7]))
    store.dispatch(storeCarouselAnime(result[8]))
  })
  .catch((err) => {
    console.log(err)
  })

  return { data: store.getState() }
}