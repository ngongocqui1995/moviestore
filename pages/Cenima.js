import React, { Component } from 'react';
import Search from '../components/Search/Search_Box';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Tab_Menu_Cenima from '../components/Tabs/Tab_Menu_Cenima';
import MainCenima from '../views/MainCenima';
import SideBarLeft from '../components/SideBar/SideBarLeft';
import fetchData from '../api/api'
import {
  storeCarouselCenima, storeNewUpdateCenima, storeRecommendCenima_1, storeRecommendCenima_2, storeRecommendCenima_3, 
  storeRecommendCenima_4, storeRecommendCenima_5, storeRecommendCenima_6, storeRecommendCenima_7, storeRecommendCenima_8, 
  storeRecommendCenima_9, storeRecommendCenima_10, storeTopViewsCenima
} from '../store/store'
import createStore from "../store/store"
import { Provider } from 'react-redux'


export default class Cenima extends Component {
  render() {
    var store = createStore(this.props.data)
    return (
      <Provider store={store}>
        <div>
          <div id="wrap" className="light main-wrap clearfix">
            <SideBarLeft/>
            <Header/>
            <div id="site-content">
              <div id="site-content-inner">
                <main id="main">
                  <div className="master-container-fluid">
                    <div className="pt-4 pt-lg-5"></div>
                    <Tab_Menu_Cenima/>
                    <div className="tabs-content overflow-h">
                      <MainCenima/>
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

Cenima.getInitialProps = async function () {
  var store = createStore()

  const carouselCenima = fetchData.__get_Data_Carousel_Cenima()
  const newUpdateCenima = fetchData.__get_New_Update_Cenima()
  const topViewsCenima = fetchData.__get_Top_Views_Cenima()
  const recommendCenima_1 = fetchData.__get_Recommend_Cenima_1()
  const recommendCenima_2 = fetchData.__get_Recommend_Cenima_2()
  const recommendCenima_3 = fetchData.__get_Recommend_Cenima_3()
  const recommendCenima_4 = fetchData.__get_Recommend_Cenima_4()
  const recommendCenima_5 = fetchData.__get_Recommend_Cenima_5()
  const recommendCenima_6 = fetchData.__get_Recommend_Cenima_6()
  const recommendCenima_7 = fetchData.__get_Recommend_Cenima_7()
  const recommendCenima_8 = fetchData.__get_Recommend_Cenima_8()
  const recommendCenima_9 = fetchData.__get_Recommend_Cenima_9()
  const recommendCenima_10 = fetchData.__get_Recommend_Cenima_10()

  await Promise.all([
    carouselCenima, newUpdateCenima, topViewsCenima, recommendCenima_1, recommendCenima_2, recommendCenima_3, 
    recommendCenima_4, recommendCenima_5, recommendCenima_6, recommendCenima_7, recommendCenima_8, recommendCenima_9, 
    recommendCenima_10
  ])
  .then((result) => {
    store.dispatch(storeCarouselCenima(result[0]))
    store.dispatch(storeNewUpdateCenima(result[1]))
    store.dispatch(storeTopViewsCenima(result[2]))
    store.dispatch(storeRecommendCenima_1(result[3]))
    store.dispatch(storeRecommendCenima_2(result[4]))
    store.dispatch(storeRecommendCenima_3(result[5]))
    store.dispatch(storeRecommendCenima_4(result[6]))
    store.dispatch(storeRecommendCenima_5(result[7]))
    store.dispatch(storeRecommendCenima_6(result[8]))
    store.dispatch(storeRecommendCenima_7(result[9]))
    store.dispatch(storeRecommendCenima_8(result[10]))
    store.dispatch(storeRecommendCenima_9(result[11]))
    store.dispatch(storeRecommendCenima_10(result[12]))
  })
  .catch((err) => {
    console.log(err)
  })

  return { data: store.getState() }
}