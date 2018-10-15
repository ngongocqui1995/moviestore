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
  storeCarouselTop, storeCommonMovies_1, storeCommonMovies_2, storeCommonMovies_3, storeCommonMovies_4, storeCommonMovies_5,
  storeCommonMovies_6, storeFeatureMainHome, storeNewDay_1, storeNewDay_2, storeNewDay_3, storeNewDay_4, storeNewDay_5,
  storeNewDay_6, storeNewDay_7, storeNewDay_8, storeNewDay_9, storeNewDay_10
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
                      <MainHome
                        NewUpdate={this.props.data_4}
                        TopWeek={this.props.data_1}
                        Trends={this.props.data_13}
                      />
                      <MainCenima
                        NewUpdate_Cenima={this.props.data_3}
                        Recommend_Cenima={[this.props.data_9, this.props.data_10, this.props.data_11, this.props.data_9,
                        this.props.data_10, this.props.data_11, this.props.data_9, this.props.data_10, this.props.data_11, this.props.data_9]}
                        TopViews_Cenima={this.props.data_4} />
                      <MainRomance data={this.props.data_1} />
                      <MainAnime NewUpdate_Anime={this.props.data_4}
                        Recommend_Anime={[this.props.data_4, this.props.data_5, this.props.data_4, this.props.data_5, this.props.data_4, this.props.data_5]}
                        TopViews_Anime={this.props.data_3} />
                      <MainComedy />
                      <MainNews data={this.props.data_1} />
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

  const carouselTop = fetchData.__get_Data_Carousel_Top()
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

  await Promise.all([
    carouselTop, commonMovies_1, commonMovies_2, commonMovies_3, commonMovies_4, commonMovies_5, commonMovies_6, 
    featureMainHome, newDay_1, newDay_2, newDay_3, newDay_4, newDay_5, newDay_6, newDay_7, newDay_8, newDay_9,
    newDay_10
  ])
  .then((result) => {
    store.dispatch(storeCarouselTop(result[0]))
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
  })
  .catch((err) => {
    console.log(err)
  })

  return { 
      data: store.getState(),
      data_2: [],
      data_3: [],
      data_4: [],
      data_5: [],
      data_6: [],
      data_8: [],
      data_9: [],
      data_10: [],
      data_11: [],
      data_12: [],
      data_13: [],
      data_14: [],
  }
}