import React, { Component } from 'react';
import Search from '../components/Search/Search_Box';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HeaderHome from '../components/Header/HeaderHome';
import Tab_Menu_Home from '../components/Tabs/Tab_Menu_Home';
import MainHome from '../views/MainHome';
import SideBarLeft from '../components/SideBar/SideBarLeft';
import fetchData from '../api/api'
import {
  storeCarouselMainHome, storeCommonMovies_1, storeCommonMovies_2, storeCommonMovies_3, storeCommonMovies_4, storeCommonMovies_5,
  storeCommonMovies_6, storeFeatureMainHome, storeNewDay_1, storeNewDay_2, storeNewDay_3, storeNewDay_4, storeNewDay_5,
  storeNewDay_6, storeNewDay_7, storeNewDay_8, storeNewDay_9, storeNewDay_10, storeNewUpdateMainHome, storeTopWeek_1, storeTopWeek_2,
  storeTopWeek_3, storeTopWeek_4, storeTopWeek_5, storeTopWeek_6, storeTrendsMainHome
} from '../store/store'
import createStore from "../store/store"
import { Provider } from 'react-redux'


export default class Home extends Component {
  render() {
    var store = createStore(this.props.data)
    return (
      <Provider store={store}>
        <div>
          <div id="wrap" className="light main-wrap clearfix">
            <SideBarLeft/>
            <Header/>
            <HeaderHome/>
            <div id="site-content">
              <div id="site-content-inner">
                <main id="main">
                  <div className="master-container-fluid">
                    <div className="pt-4 pt-lg-5"></div>
                    <Tab_Menu_Home/>
                    <div className="tabs-content overflow-h">
                      <MainHome/>
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

Home.getInitialProps = async function () {
  var store = createStore()

  const carouselMainHome = fetchData.__get_Data_Carousel_Main_Home()
  const featureMainHome = fetchData.__get_Feature_Main_Home()
  const newUpdateMainHome = fetchData.__get_New_Update_Main_Home()
  const trendsMainHome = fetchData.__get_Trends_Main_Home()
  const commonMovies_1 = fetchData.__get_Common_Movies_1()
  const commonMovies_2 = fetchData.__get_Common_Movies_2()
  const commonMovies_3 = fetchData.__get_Common_Movies_3()
  const commonMovies_4 = fetchData.__get_Common_Movies_4()
  const commonMovies_5 = fetchData.__get_Common_Movies_5()
  const commonMovies_6 = fetchData.__get_Common_Movies_6()
  const topWeek_1 = fetchData.__get_Top_Week_1()
  const topWeek_2 = fetchData.__get_Top_Week_2()
  const topWeek_3 = fetchData.__get_Top_Week_3()
  const topWeek_4 = fetchData.__get_Top_Week_4()
  const topWeek_5 = fetchData.__get_Top_Week_5()
  const topWeek_6 = fetchData.__get_Top_Week_6()
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
    carouselMainHome, featureMainHome, newUpdateMainHome, trendsMainHome, commonMovies_1, commonMovies_2, 
    commonMovies_3, commonMovies_4, commonMovies_5, commonMovies_6, topWeek_1, topWeek_2, topWeek_3, topWeek_4, 
    topWeek_5, topWeek_6, newDay_1, newDay_2, newDay_3, newDay_4, newDay_5, newDay_6, newDay_7, newDay_8, 
    newDay_9, newDay_10
  ])
  .then((result) => {
    store.dispatch(storeCarouselMainHome(result[0]))
    store.dispatch(storeFeatureMainHome(result[1]))
    store.dispatch(storeNewUpdateMainHome(result[2]))
    store.dispatch(storeTrendsMainHome(result[3]))
    store.dispatch(storeCommonMovies_1(result[4]))
    store.dispatch(storeCommonMovies_2(result[5]))
    store.dispatch(storeCommonMovies_3(result[6]))
    store.dispatch(storeCommonMovies_4(result[7]))
    store.dispatch(storeCommonMovies_5(result[8]))
    store.dispatch(storeCommonMovies_6(result[9]))
    store.dispatch(storeTopWeek_1(result[10]))
    store.dispatch(storeTopWeek_2(result[11]))
    store.dispatch(storeTopWeek_3(result[12]))
    store.dispatch(storeTopWeek_4(result[13]))
    store.dispatch(storeTopWeek_5(result[14]))
    store.dispatch(storeTopWeek_6(result[15]))
    store.dispatch(storeNewDay_1(result[16]))
    store.dispatch(storeNewDay_2(result[17]))
    store.dispatch(storeNewDay_3(result[18]))
    store.dispatch(storeNewDay_4(result[19]))
    store.dispatch(storeNewDay_5(result[20]))
    store.dispatch(storeNewDay_6(result[21]))
    store.dispatch(storeNewDay_7(result[22]))
    store.dispatch(storeNewDay_8(result[23]))
    store.dispatch(storeNewDay_9(result[24]))
    store.dispatch(storeNewDay_10(result[25]))
  })
  .catch((err) => {
    console.log(err)
  })

  return { data: store.getState() }
}