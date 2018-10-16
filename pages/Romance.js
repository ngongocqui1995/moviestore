import React, { Component } from 'react';
import Search from '../components/Search/Search_Box';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HeaderRomance from '../components/Header/HeaderRomance';
import Tab_Menu_Romance from '../components/Tabs/Tab_Menu_Romance';
import MainRomance from '../views/MainRomance';
import SideBarLeft from '../components/SideBar/SideBarLeft';
import fetchData from '../api/api'
import {
    storeMainRomance_1, storeMainRomance_2, storeMainRomance_3, storeMainRomance_4, storeMainRomance_5, 
    storeMainRomance_6, storeMainRomance_7, storeMainRomance_8, storeMainRomance_9, storeMainRomance_10,
} from '../store/store'
import createStore from "../store/store"
import { Provider } from 'react-redux'


export default class Romance extends Component {
  render() {
    var store = createStore(this.props.data)
    return (
      <Provider store={store}>
        <div>
          <div id="wrap" className="light main-wrap clearfix">
            <SideBarLeft/>
            <Header/>
            <HeaderRomance/>
            <div id="site-content">
              <div id="site-content-inner">
                <main id="main">
                  <div className="master-container-fluid">
                    <div className="pt-4 pt-lg-5"></div>
                    <Tab_Menu_Romance/>
                    <div className="tabs-content overflow-h">
                      <MainRomance/>
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

Romance.getInitialProps = async function () {
  var store = createStore()

  const mainRomance_1 = fetchData.__get_Main_Romance_1()
  const mainRomance_2 = fetchData.__get_Main_Romance_2()
  const mainRomance_3 = fetchData.__get_Main_Romance_3()
  const mainRomance_4 = fetchData.__get_Main_Romance_4()
  const mainRomance_5 = fetchData.__get_Main_Romance_5()
  const mainRomance_6 = fetchData.__get_Main_Romance_6()
  const mainRomance_7 = fetchData.__get_Main_Romance_7()
  const mainRomance_8 = fetchData.__get_Main_Romance_8()
  const mainRomance_9 = fetchData.__get_Main_Romance_9()
  const mainRomance_10 = fetchData.__get_Main_Romance_10()

  await Promise.all([
    mainRomance_1, mainRomance_2, mainRomance_3, mainRomance_4, mainRomance_5, mainRomance_6, mainRomance_7, mainRomance_8,
    mainRomance_9, mainRomance_10
  ])
  .then((result) => {
    store.dispatch(storeMainRomance_1(result[0]))
    store.dispatch(storeMainRomance_2(result[1]))
    store.dispatch(storeMainRomance_3(result[2]))
    store.dispatch(storeMainRomance_4(result[3]))
    store.dispatch(storeMainRomance_5(result[4]))
    store.dispatch(storeMainRomance_6(result[5]))
    store.dispatch(storeMainRomance_7(result[6]))
    store.dispatch(storeMainRomance_8(result[7]))
    store.dispatch(storeMainRomance_9(result[8]))
    store.dispatch(storeMainRomance_10(result[9]))
  })
  .catch((err) => {
    console.log(err)
  })

  return { data: store.getState() }
}