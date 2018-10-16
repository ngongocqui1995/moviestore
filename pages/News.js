import React, { Component } from 'react';
import Search from '../components/Search/Search_Box';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Tab_Menu_News from '../components/Tabs/Tab_Menu_News';
import MainNews from '../views/MainNews';
import SideBarLeft from '../components/SideBar/SideBarLeft';
import fetchData from '../api/api'
import {
  storeMainNews_1, storeMainNews_2, storeMainNews_3, storeMainNews_4, storeMainNews_5, storeMainNews_6,
  storeMainNews_7, storeMainNews_8, storeMainNews_9, storeMainNews_10
} from '../store/store'
import createStore from "../store/store"
import { Provider } from 'react-redux'


export default class News extends Component {
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
                    <Tab_Menu_News/>
                    <div className="tabs-content overflow-h">
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

News.getInitialProps = async function () {
  var store = createStore()

  const mainNews_1 = fetchData.__get_Main_News_1()
  const mainNews_2 = fetchData.__get_Main_News_2()
  const mainNews_3 = fetchData.__get_Main_News_3()
  const mainNews_4 = fetchData.__get_Main_News_4()
  const mainNews_5 = fetchData.__get_Main_News_5()
  const mainNews_6 = fetchData.__get_Main_News_6()
  const mainNews_7 = fetchData.__get_Main_News_7()
  const mainNews_8 = fetchData.__get_Main_News_8()
  const mainNews_9 = fetchData.__get_Main_News_9()
  const mainNews_10 = fetchData.__get_Main_News_10()

  await Promise.all([
    mainNews_1, mainNews_2, mainNews_3, mainNews_4, mainNews_5, mainNews_6, mainNews_7, mainNews_8, mainNews_9,
    mainNews_10
  ])
  .then((result) => {
    store.dispatch(storeMainNews_1(result[0]))
    store.dispatch(storeMainNews_2(result[1]))
    store.dispatch(storeMainNews_3(result[2]))
    store.dispatch(storeMainNews_4(result[3]))
    store.dispatch(storeMainNews_5(result[4]))
    store.dispatch(storeMainNews_6(result[5]))
    store.dispatch(storeMainNews_7(result[6]))
    store.dispatch(storeMainNews_8(result[7]))
    store.dispatch(storeMainNews_9(result[8]))
    store.dispatch(storeMainNews_10(result[9]))
  })
  .catch((err) => {
    console.log(err)
  })

  return { data: store.getState() }
}