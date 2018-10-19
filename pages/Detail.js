import React, { Component } from 'react'
import SideBarLeft from '../components/SideBar/SideBarLeft';
import Header from '../components/Header/Header';
import fetchData from '../api/api'
import MainDetail from '../views/MainDetail'
import {
  storeMovieInformation, storeRelatedMovie
} from '../store/store'
import createStore from "../store/store"
import { Provider } from 'react-redux'

export default class Detail extends Component {
    render() {
        var store = createStore(this.props.data)
        return (
            <Provider store={store}>
                <div id="wrap" className="light main-wrap clearfix">
                    <SideBarLeft/>
                    <Header/>
                    <div id="site-content">
                        <div id="site-content-inner">
                            <div className="album-wrap">
                                <MainDetail/>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

Detail.getInitialProps = async function (context) {
    var store = createStore()
    let metaKey = context.query.metaKey

    const movieInformation = fetchData.__get_Movie_Information(metaKey)
    const relatedMovie = fetchData.__get_Data_RelatedMovie()

    await Promise.all([movieInformation, relatedMovie])
    .then((result) => {
        store.dispatch(storeMovieInformation(result[0]))
        store.dispatch(storeRelatedMovie(result[1]))
    })
    .catch((err) => {
        console.log(err)
    })

    return { data: store.getState() }
}