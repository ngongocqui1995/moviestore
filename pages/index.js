import React, { Component } from 'react';
import Search from '../components/Search/Search_Box';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Tab_Menu from '../components/Tabs/Tab_Menu';
import MainHome from '../views/MainHome';
import MainCenima from '../views/MainCenima';
import MainRomance from '../views/MainRomance';
import MainAnime from '../views/MainAnime';
import MainComedy from '../views/MainComedy';
import MainNews from '../views/MainNews';
import SideBarLeft from '../components/SideBar/SideBarLeft';
import SvgCustom from '../components/SVG/SvgCustom';
import fetchData from '../api/api'
import {
  storeCarouselMainHome, storeCommonMovies_1, storeCommonMovies_2, storeCommonMovies_3, storeCommonMovies_4, storeCommonMovies_5,
  storeCommonMovies_6, storeFeatureMainHome, storeNewDay_1, storeNewDay_2, storeNewDay_3, storeNewDay_4, storeNewDay_5,
  storeNewDay_6, storeNewDay_7, storeNewDay_8, storeNewDay_9, storeNewDay_10, storeNewUpdateMainHome, storeTopWeek_1, storeTopWeek_2,
  storeTopWeek_3, storeTopWeek_4, storeTopWeek_5, storeTopWeek_6, storeTrendsMainHome, storeCarouselCenima, storeNewUpdateCenima,
  storeRecommendCenima_1, storeRecommendCenima_2, storeRecommendCenima_3, storeRecommendCenima_4, storeRecommendCenima_5, storeRecommendCenima_6,
  storeRecommendCenima_7, storeRecommendCenima_8, storeRecommendCenima_9, storeRecommendCenima_10, storeMainNews_1, storeMainNews_2, 
  storeMainNews_3, storeMainNews_4, storeTopViewsCenima, storeMainRomance_1, storeMainRomance_2, storeMainRomance_3, storeMainRomance_4, 
  storeMainRomance_5, storeMainComedy, storeNewUpdateAnime, storeRecommendAnime_1, storeRecommendAnime_2, storeRecommendAnime_3, storeRecommendAnime_4,
  storeRecommendAnime_5, storeRecommendAnime_6
} from '../store/store'
import createStore from "../store/store"
import { Provider } from 'react-redux'


export default class Index extends Component {
  render() {
    var store = createStore(this.props.data)
    return (
      <Provider store={store}>
        <div>
          <div id="wrap" className="light main-wrap clearfix">
            <SideBarLeft />
            <Header />
            <div id="site-content">
              <div id="site-content-inner">
                <main id="main">
                  <div className="master-container-fluid">

                    <div className="pt-4 pt-lg-5"></div>
                    <Tab_Menu />
                    <div className="tabs-content overflow-h">
                      <MainHome />
                      <MainCenima />
                      <MainRomance/>
                      <MainAnime
                        TopViews_Anime={this.props.data_3} />
                      <MainComedy/>
                      <MainNews/>
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

Index.getInitialProps = async function () {
  var store = createStore()

  const carouselMainHome = fetchData.__get_Data_Carousel_Main_Home()
  const commonMovies_1 = fetchData.__get_Common_Movies_1()
  const commonMovies_2 = fetchData.__get_Common_Movies_2()
  const commonMovies_3 = fetchData.__get_Common_Movies_3()
  const commonMovies_4 = fetchData.__get_Common_Movies_4()
  const commonMovies_5 = fetchData.__get_Common_Movies_5()
  const commonMovies_6 = fetchData.__get_Common_Movies_6()
  const featureMainHome = fetchData.__get_Feature_Main_Home()
  const newDay_1 = fetchData.__get_New_Day_1()
  const newDay_2 = fetchData.__get_New_Day_2()
  const newDay_3 = fetchData.__get_New_Day_3()
  const newDay_4 = fetchData.__get_New_Day_4()
  const newDay_5 = fetchData.__get_New_Day_5()
  const newDay_6 = fetchData.__get_New_Day_6()
  const newDay_7 = fetchData.__get_New_Day_7()
  const newDay_8 = fetchData.__get_New_Day_8()
  const newDay_9 = fetchData.__get_New_Day_9()
  const newDay_10 = fetchData.__get_New_Day_10()
  const newUpdateMainHome = fetchData.__get_New_Update_Main_Home()
  const topWeek_1 = fetchData.__get_Top_Week_1()
  const topWeek_2 = fetchData.__get_Top_Week_2()
  const topWeek_3 = fetchData.__get_Top_Week_3()
  const topWeek_4 = fetchData.__get_Top_Week_4()
  const topWeek_5 = fetchData.__get_Top_Week_5()
  const topWeek_6 = fetchData.__get_Top_Week_6()
  const trendsMainHome = fetchData.__get_Trends_Main_Home()
  const carouselCenima = fetchData.__get_Data_Carousel_Cenima()
  const newUpdateCenima = fetchData.__get_New_Update_Cenima()
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
  const mainNews_1 = fetchData.__get_Main_News_1()
  const mainNews_2 = fetchData.__get_Main_News_2()
  const mainNews_3 = fetchData.__get_Main_News_3()
  const mainNews_4 = fetchData.__get_Main_News_4()
  const topViewsCenima = fetchData.__get_Top_Views_Cenima()
  const mainRomance_1 = fetchData.__get_Main_Romance_1()
  const mainRomance_2 = fetchData.__get_Main_Romance_2()
  const mainRomance_3 = fetchData.__get_Main_Romance_3()
  const mainRomance_4 = fetchData.__get_Main_Romance_4()
  const mainRomance_5 = fetchData.__get_Main_Romance_5()
  const mainComedy = fetchData.__get_Main_Comedy()
  const newUpdateAnime = fetchData.__get_New_Update_Anime()
  const recommendAnime_1 = fetchData.__get_Recommend_Anime_1()
  const recommendAnime_2 = fetchData.__get_Recommend_Anime_2()
  const recommendAnime_3 = fetchData.__get_Recommend_Anime_3()
  const recommendAnime_4 = fetchData.__get_Recommend_Anime_4()
  const recommendAnime_5 = fetchData.__get_Recommend_Anime_5()
  const recommendAnime_6 = fetchData.__get_Recommend_Anime_6()

  await Promise.all([
    carouselMainHome, commonMovies_1, commonMovies_2, commonMovies_3, commonMovies_4, commonMovies_5, commonMovies_6, 
    featureMainHome, newDay_1, newDay_2, newDay_3, newDay_4, newDay_5, newDay_6, newDay_7, newDay_8, newDay_9,
    newDay_10, newUpdateMainHome, topWeek_1, topWeek_2, topWeek_3, topWeek_4, topWeek_5, topWeek_6, trendsMainHome, carouselCenima,
    newUpdateCenima, recommendCenima_1, recommendCenima_2, recommendCenima_3, recommendCenima_4, recommendCenima_5, recommendCenima_6,
    recommendCenima_7, recommendCenima_8, recommendCenima_9, recommendCenima_10, mainNews_1, mainNews_2, mainNews_3, mainNews_4, 
    topViewsCenima, mainRomance_1, mainRomance_2, mainRomance_3, mainRomance_4, mainRomance_5, mainComedy, newUpdateAnime,
    recommendAnime_1, recommendAnime_2, recommendAnime_3, recommendAnime_4, recommendAnime_5, recommendAnime_6,
  ])
  .then((result) => {
    store.dispatch(storeCarouselMainHome(result[0]))
    store.dispatch(storeCommonMovies_1(result[1]))
    store.dispatch(storeCommonMovies_2(result[2]))
    store.dispatch(storeCommonMovies_3(result[3]))
    store.dispatch(storeCommonMovies_4(result[4]))
    store.dispatch(storeCommonMovies_5(result[5]))
    store.dispatch(storeCommonMovies_6(result[6]))
    store.dispatch(storeFeatureMainHome(result[7]))
    store.dispatch(storeNewDay_1(result[8]))
    store.dispatch(storeNewDay_2(result[9]))
    store.dispatch(storeNewDay_3(result[10]))
    store.dispatch(storeNewDay_4(result[11]))
    store.dispatch(storeNewDay_5(result[12]))
    store.dispatch(storeNewDay_6(result[13]))
    store.dispatch(storeNewDay_7(result[14]))
    store.dispatch(storeNewDay_8(result[15]))
    store.dispatch(storeNewDay_9(result[16]))
    store.dispatch(storeNewDay_10(result[17]))
    store.dispatch(storeNewUpdateMainHome(result[18]))
    store.dispatch(storeTopWeek_1(result[19]))
    store.dispatch(storeTopWeek_2(result[20]))
    store.dispatch(storeTopWeek_3(result[21]))
    store.dispatch(storeTopWeek_4(result[22]))
    store.dispatch(storeTopWeek_5(result[23]))
    store.dispatch(storeTopWeek_6(result[24]))
    store.dispatch(storeTrendsMainHome(result[25]))
    store.dispatch(storeCarouselCenima(result[26]))
    store.dispatch(storeNewUpdateCenima(result[27]))
    store.dispatch(storeRecommendCenima_1(result[28]))
    store.dispatch(storeRecommendCenima_2(result[29]))
    store.dispatch(storeRecommendCenima_3(result[30]))
    store.dispatch(storeRecommendCenima_4(result[31]))
    store.dispatch(storeRecommendCenima_5(result[32]))
    store.dispatch(storeRecommendCenima_6(result[33]))
    store.dispatch(storeRecommendCenima_7(result[34]))
    store.dispatch(storeRecommendCenima_8(result[35]))
    store.dispatch(storeRecommendCenima_9(result[36]))
    store.dispatch(storeRecommendCenima_10(result[37]))
    store.dispatch(storeMainNews_1(result[38]))
    store.dispatch(storeMainNews_2(result[39]))
    store.dispatch(storeMainNews_3(result[40]))
    store.dispatch(storeMainNews_4(result[41]))
    store.dispatch(storeTopViewsCenima(result[42]))
    store.dispatch(storeMainRomance_1(result[43]))
    store.dispatch(storeMainRomance_2(result[44]))
    store.dispatch(storeMainRomance_3(result[45]))
    store.dispatch(storeMainRomance_4(result[46]))
    store.dispatch(storeMainRomance_5(result[47]))
    store.dispatch(storeMainComedy(result[48]))
    store.dispatch(storeNewUpdateAnime(result[49]))
    store.dispatch(storeRecommendAnime_1(result[50]))
    store.dispatch(storeRecommendAnime_2(result[51]))
    store.dispatch(storeRecommendAnime_3(result[52]))
    store.dispatch(storeRecommendAnime_4(result[53]))
    store.dispatch(storeRecommendAnime_5(result[54]))
    store.dispatch(storeRecommendAnime_6(result[55]))
  })
  .catch((err) => {
    console.log(err)
  })

  return { data: store.getState() }
}