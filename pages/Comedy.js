import React, { Component } from 'react';
import Search from '../components/Search/Search_Box';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import HeaderComedy from '../components/Header/HeaderComedy';
import Tab_Menu_Comedy from '../components/Tabs/Tab_Menu_Comedy';
import MainComedy from '../views/MainComedy';
import SideBarLeft from '../components/SideBar/SideBarLeft';
import fetchData from '../api/api'
import {
  storeMainComedy
} from '../store/store'
import createStore from "../store/store"
import { Provider } from 'react-redux'


export default class Comedy extends Component {
  render() {
    var store = createStore(this.props.data)
    return (
      <Provider store={store}>
        <div>
          <div id="wrap" className="light main-wrap clearfix">
            <SideBarLeft/>
            <Header/>
            <HeaderComedy/>
            <div id="site-content">
              <div id="site-content-inner">
                <main id="main">
                  <div className="master-container-fluid">
                    <div className="pt-4 pt-lg-5"></div>
                    <Tab_Menu_Comedy/>
                    <div className="tabs-content overflow-h">
                      <MainComedy/>
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

Comedy.getInitialProps = async function () {
  var store = createStore()

  const mainComedy = fetchData.__get_Main_Comedy()

  await Promise.all([
    mainComedy
  ])
  .then((result) => {
    store.dispatch(storeMainComedy(result[0]))
  })
  .catch((err) => {
    console.log(err)
  })

  return { data: store.getState() }
}