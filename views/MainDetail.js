import React, { Component } from 'react'
import MovieInformation from '../components/Detail/MovieInformation';
import RelatedMovie from '../components/Detail/RelatedMovie';

export default class MainDetail extends Component {
  render() {
    return (
        <div className="container">
            <MovieInformation/>
            <RelatedMovie/>
        </div>
    )
  }
}
