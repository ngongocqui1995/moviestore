import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
        <html lang="en">
        
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content=""/>
            <meta name="author" content=""/>
            <title>Adonis Demo-01 | Home</title>
            <link rel="shortcut icon" href="favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="assets/icon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="assets/icon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="assets/icon/favicon-16x16.png"/>
            <link rel="manifest" href="assets/icon/site.webmanifest"/>
            <meta name="theme-color" content="#ffffff"/>
        
            <link href="assets/vendors/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700" rel="stylesheet"/>
            <link href="assets/vendors/owl/css/owl.carousel.min.css" rel="stylesheet"/>
            <link href="assets/vendors/perfect-scrollbar/css/perfect-scrollbar.css" rel="stylesheet"/>
            <link href="assets/css/adonis.css" rel="stylesheet"/>
        </head>
        
        <body>
        
            <div id="wrap" class="light main-wrap clearfix">
                <div id="primary-menu-offcanvas" class="off-canvas off-canvas-left d-flex flex-column">
                    <div class="m-3">
                        <a class="close-offcanvas-main-menu" href="#" data-target="#primary-menu-offcanvas">
                            <span class="adonis-icon icon-5x">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24">
                                    <path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"></path>
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div class="side-nav-container d-flex flex-column align-items-center ml-auto mr-auto position-relative">
                        <ul class="side-nav adonis-animate" data-animation="menuTwo" id="site-side-nav" data-level="1" data-animation-item="> li > a">
                            <li class="nav-item">
                                <a class="nav-link active" href="home.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="radio.html">Radio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="library.html">Library</a>
                            </li>
                            <li class="nav-item has-dropdown">
                                <a class="nav-link" href="#" data-level="2">Shop
                                    <span class="adonis-icon icon-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="10">
                                            
                                        </svg>
                                    </span>
                                </a>
                                <ul class="sub-level">
                                    <li>
                                        <a href="#" class="go-back" data-level="1">Back</a>
                                    </li>
                                    <li class="">
                                        <a href="store.html">Main Shop</a>
                                    </li>
                                    <li class="">
                                        <a href="genres-shop.html">Shop Genre</a>
                                    </li>
                                    <li class="">
                                        <a href="single-shop-item.html">Single Shop Item</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item has-dropdown">
                                <a class="nav-link" href="#" data-level="2">Browse
                                    <span class="adonis-icon icon-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="10">
                                            
                                        </svg>
                                    </span>
                                </a>
                                <ul class="sub-level">
                                    <li>
                                        <a href="#" class="go-back" data-level="1">Back</a>
                                    </li>
                                    <li class="">
                                        <a href="new-releases.html">New Releases</a>
                                    </li>
                                    <li class="">
                                        <a href="all-album.html">All Albums</a>
                                    </li>
                                    <li class="">
                                        <a href="featured-playlists.html">Featured Playlists</a>
                                    </li>
                                    <li class="">
                                        <a href="single-album.html">Single Album</a>
                                    </li>
                                    <li class="">
                                        <a href="single-playlist.html">Single Playlist</a>
                                    </li>
                                    <li class="">
                                        <a href="single-artist.html">Single Artist</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item has-dropdown">
                                <a class="nav-link" href="#" data-level="2">Genres
                                    <span class="adonis-icon icon-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="10">
                                            
                                        </svg>
                                    </span>
                                </a>
                                <ul class="sub-level">
                                    <li>
                                        <a href="#" class="go-back" data-level="1">Back</a>
                                    </li>
                                    <li class="">
                                        <a href="genre-classical.html">Classical</a>
                                    </li>
                                    <li class="">
                                        <a href="genre-classical.html">Pop</a>
                                    </li>
                                    <li class="">
                                        <a href="genre-classical.html">Under Ground</a>
                                    </li>
                                    <li class="">
                                        <a href="genre-classical.html">Metal</a>
                                    </li>
                                    <li class="">
                                        <a href="genre-classical.html">Rock</a>
                                    </li>
                                    <li class="">
                                        <a href="genre-classical.html">Jazz</a>
                                    </li>
                                    <li class="">
                                        <a href="genre-classical.html">Country</a>
                                    </li>
                                    <li class="">
                                        <a href="genre-classical.html">World</a>
                                    </li>
                                    <li class="">
                                        <a href="genre-classical.html">All genres</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item has-dropdown">
                                <a class="nav-link" href="#" data-level="2">Charts
                                    <span class="adonis-highlight-active fs-1">hot</span>
                                    <span class="adonis-icon icon-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="10">
                                            
                                        </svg>
                                    </span>
                                </a>
                                <ul class="sub-level">
                                    <li>
                                        <a href="#" class="go-back" data-level="1">Back</a>
                                    </li>
                                    <li class="">
                                        <a href="top-album.html">Top Albums</a>
                                    </li>
                                    <li class="">
                                        <a href="top-artists.html">Top Artists</a>
                                    </li>
                                    <li class="">
                                        <a href="weekly-top-ten.html">Weekly Top 10</a>
                                    </li>
                                    <li class="">
                                        <a href="weekly-top-ten.html">USA Top 10</a>
                                    </li>
                                    <li class="">
                                        <a href="hot-songs.html">Hot Songs</a>
                                    </li>
                                    <li class="">
                                        <a href="hot-videos.html">Hot Videos</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item has-dropdown">
                                <a class="nav-link" href="#" data-level="2">More
                                    <span class="adonis-icon icon-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="10">
                                            
                                        </svg>
                                    </span>
                                </a>
                                <ul class="sub-level">
                                    <li>
                                        <a href="#" class="go-back" data-level="1">Back</a>
                                    </li>
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Help &amp; Support</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms and Privacy</a>
                                    </li>
                                    <li>
                                        <a href="#">Artist Originals</a>
                                    </li>
                                    <li>
                                        <a href="#">News</a>
                                    </li>
                                    <li>
                                        <a href="#">Advertise</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="p-3">
                        <div class="social-icons">
                            <ul class="list-inline horizon-list fs-3">
                                <li>
                                    <a href="#">
                                        <span class="adonis-icon icon-1x">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 32 32">
                                                <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="adonis-icon icon-1x">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 32 32">
                                                <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="adonis-icon icon-1x">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 32 32">
                                                <path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.119-16-16-16zM23.363 23.119c-0.319 0.481-0.881 0.637-1.363 0.319-3.762-2.319-8.481-2.8-14.081-1.519-0.563 0.163-1.037-0.238-1.2-0.719-0.162-0.563 0.237-1.038 0.719-1.2 6.081-1.363 11.363-0.8 15.519 1.762 0.563 0.238 0.644 0.875 0.406 1.356zM25.281 18.719c-0.4 0.563-1.119 0.8-1.681 0.4-4.319-2.637-10.881-3.438-15.919-1.837-0.638 0.163-1.362-0.163-1.519-0.8-0.162-0.637 0.162-1.363 0.8-1.519 5.838-1.762 13.037-0.881 18 2.163 0.475 0.238 0.719 1.038 0.319 1.594zM25.438 14.238c-5.119-3.037-13.681-3.363-18.563-1.838-0.8 0.238-1.6-0.238-1.838-0.963-0.237-0.8 0.237-1.6 0.963-1.838 5.681-1.681 15.038-1.363 20.962 2.162 0.719 0.4 0.962 1.363 0.563 2.081-0.406 0.556-1.363 0.794-2.087 0.394z"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="adonis-icon icon-3x">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 39 32">
                                                <path d="M22.856 0h-6.856c-8.837 0-16 7.163-16 16s7.163 16 16 16v0h6.856c8.837 0 16-7.163 16-16s-7.163-16-16-16v0zM22.816 30.4h-6.776c-7.953 0-14.4-6.447-14.4-14.4v0 0c0-7.953 6.447-14.4 14.4-14.4v0h6.776c7.953 0 14.4 6.447 14.4 14.4v0 0c0 7.953-6.447 14.4-14.4 14.4v0zM26.64 16.496s0-0.064 0-0.096v-0.040l-0.104-0.112-0.12-0.112-9.728-5.6c-0.113-0.064-0.247-0.102-0.391-0.102-0.223 0-0.424 0.091-0.569 0.238l-0 0-0.072 0.088s-0.048 0.040-0.064 0.072 0 0 0 0.048c-0.068 0.112-0.109 0.247-0.112 0.391v11.129c0 0.442 0.358 0.8 0.8 0.8v0 0c0.166-0.006 0.318-0.062 0.442-0.154l-0.002 0.002 9.68-5.6 0.12-0.112c0.038-0.036 0.072-0.075 0.102-0.118l0.002-0.002s0 0 0 0 0-0.064 0-0.096c0.019-0.043 0.035-0.094 0.047-0.146l0.001-0.006c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c-0.006-0.062-0.017-0.119-0.034-0.174l0.002 0.006zM17.040 21.008v-8.416l7.264 4.208z"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="adonis-icon icon-1x">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 32 32">
                                                <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
                                                <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
                                                <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="copyright"> Copyright &copy; 2018 IconikTech. All rights reserved.</div>
                    </div>
                </div>
                <header id="site-header" class="site-header mb-1">
                    <div class="master-container-fluid header-inner">
                        <div class="row">
                            <div class="col-auto col-md-5 col-xl-5 d-flex align-items-center">
                                <div class="d-block d-lg-none">
                                    <a href="#" class="navbar-toggler toggle-off-canvas-main-menu" data-target="#primary-menu-offcanvas">
                                        <span class="navbar-toggler-icon"></span>
                                        <span class="navbar-toggler-icon"></span>
                                        <span class="navbar-toggler-icon"></span>
                                    </a>
                                </div>
                                <nav class="navbar navbar-expand-lg d-none d-md-block">
                                    <div class="collapse navbar-collapse">
                                        <ul class="navbar-nav mr-auto">
                                            <li class="nav-item dropdown active" data-hover="dropdown">
                                                <a class="menu-item dropdown-toggle" href="home.html" aria-expanded="false">Home</a>
                                                <div class="dropdown-menu dropdown-mega-menu dropdown-bg">
                                                    <span class="triangle adonis-icon icon-sm">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1851 1024">
                                                            <path d="M1834.153 925.301l-820.434-892.402c-23.746-19.978-54.664-32.116-88.418-32.116s-64.672 12.138-88.628 32.288l0.21-0.172c-47.293 47.293-773.141 836.884-822.49 894.458s4.112 100.755 86.361 100.755h1644.98c76.080 0 133.655-53.462 88.418-102.811z"></path>
                                                        </svg>
                                                    </span>
                                                    <div class="col">
                                                        <h5>BROWSE</h5>
                                                        <ul class="list-unstyled mb-4">
                                                            <li class="menu-item">
                                                                <a href="new-releases.html">New Releases</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="all-album.html">All Albums</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="featured-playlists.html">Featured Playlists</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="single-album.html">Single Album</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="single-playlist.html">Single Playlist</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="single-artist.html">Single Artist</a>
                                                            </li>
                                                        </ul>
                                                        <h5>SHOP</h5>
                                                        <ul class="list-unstyled mb-4">
                                                            <li class="menu-item">
                                                                <a href="store.html">Main Store</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="genres-shop.html">Shop Genre</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="single-shop-item.html">Single Shop Item</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col">
                                                        <h5>GENRES</h5>
                                                        <ul class="list-unstyled">
                                                            <li class="menu-item">
                                                                <a href="genre-classical.html">Classical</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="genre-classical.html">Pop</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="genre-classical.html">Under Ground</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="genre-classical.html">Metal</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="genre-classical.html">Rock</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="genre-classical.html">Jazz</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="genre-classical.html">Country</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="genre-classical.html">World</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="genre-classical.html">All genres</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col">
                                                        <h5>CHARTS</h5>
                                                        <ul class="list-unstyled">
                                                            <li class="menu-item">
                                                                <a href="top-album.html">Top Albums</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="top-artists.html">Top Artists</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="weekly-top-ten.html">Weekly Top 10</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="weekly-top-ten.html">USA Top 10</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="hot-songs.html">Hot Songs</a>
                                                            </li>
                                                            <li class="menu-item">
                                                                <a href="hot-videos.html">Hot Videos</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="bg-col"></div>
                                                </div>
                                            </li>
                                            <li class="menu-item">
                                                <a class="nav-link" href="radio.html">Radio</a>
                                            </li>
                                            <li class="menu-item">
                                                <a class="nav-link" href="store.html">Store</a>
                                            </li>
                                            <li class="menu-item">
                                                <a class="nav-link" href="library.html">Library</a>
                                            </li>
                                            <li class="menu-item">
                                                <a class="nav-link" href="#" data-toggle="dropdown">
                                                    <span class="adonis-icon icon-4x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                        </svg>
                                                    </span>
                                                </a>
                                                <div class="dropdown-menu dropdown-md">
                                                    <span class="triangle adonis-icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="10" viewBox="0 0 1851 1024">
                                                            <path d="M1834.153 925.301l-820.434-892.402c-23.746-19.978-54.664-32.116-88.418-32.116s-64.672 12.138-88.628 32.288l0.21-0.172c-47.293 47.293-773.141 836.884-822.49 894.458s4.112 100.755 86.361 100.755h1644.98c76.080 0 133.655-53.462 88.418-102.811z"></path>
                                                        </svg>
                                                    </span>
                                                    <ul class="list-unstyled">
                                                        <li class="menu-item">
                                                            <a href="#">About us</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="#">Help &amp; Support</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="#">Contact</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="#">Terms and Privacy</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="#">Artist Originals</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="#">Store</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="#">Blog &amp; News</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="#">Advertise</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div class="col-auto col-md-2 col-xl-2 d-flex align-items-center justify-content-center p-0">
                                <div class="brand">
                                    <a class="brand d-flex align-items-center" href="home.html">
                                        <span class="adonis-icon mr-md-2 color-dark mr-1 icon-5x">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32">
                                                <defs>
                                                    <linearGradient id="Gradient" x1="0" y1="0" x2="100%" y2="0">
                                                        <stop offset="0%" stop-color="#b08cf9" />
                                                        <stop offset="100%" stop-color="#91a5f4" />
                                                    </linearGradient>
                                                </defs>
                                                <path fill="url(#Gradient)" d="M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"></path>
                                            </svg>
                                        </span>
                                        <strong class="p-1 fs-6 fs-lg-8">Anime</strong>
                                    </a>
                                </div>
                            </div>
                            <div class="col-auto col-xl-5 d-flex justify-content-end justify-content-lg-end align-items-center navbar-secondary ml-auto">
                                <div>
                                    <a id="btn-search-4" class="nav-link" href="#">
                                        <span class="adonis-icon icon-3x">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 30 32">
                                                <path d="M30.046 29.806l-7.127-7.287c2.109-2.395 3.397-5.558 3.397-9.021 0-3.721-1.486-7.094-3.896-9.56l0.003 0.003c-2.361-2.432-5.661-3.942-9.313-3.942s-6.953 1.51-9.31 3.939l-0.003 0.003c-2.388 2.462-3.86 5.824-3.86 9.53s1.472 7.068 3.863 9.533l-0.003-0.003c2.35 2.441 5.645 3.958 9.295 3.958 2.992 0 5.747-1.020 7.935-2.73l-0.028 0.021 7.207 7.383c0.232 0.225 0.548 0.364 0.896 0.368h0.001c0.344-0.001 0.656-0.142 0.881-0.368l0-0c0.252-0.237 0.409-0.573 0.409-0.945 0-0.34-0.131-0.65-0.345-0.881l0.001 0.001zM20.709 21.189c-1.906 1.978-4.577 3.206-7.536 3.206s-5.63-1.228-7.532-3.203l-0.003-0.003c-1.932-1.992-3.123-4.713-3.123-7.712s1.191-5.719 3.126-7.715l-0.003 0.003c1.906-1.978 4.577-3.206 7.536-3.206s5.63 1.228 7.532 3.203l0.003 0.003c1.932 1.992 3.123 4.713 3.123 7.712s-1.191 5.719-3.126 7.715l0.003-0.003z"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                                <div class="nav-item d-none d-md-block">
                                    <a class="nav-link notification-toggle has-notification" href="#" id="dropdownUsernotifications" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        <span class="adonis-icon notification icon-4x">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 29 32">
                                                <path d="M19.286 25.607c-0.395 0-0.714 0.32-0.714 0.714v0 0c0 2.367-1.919 4.286-4.286 4.286s-4.286-1.919-4.286-4.286v0 0c0-0.395-0.32-0.714-0.714-0.714s-0.714 0.32-0.714 0.714v0 0c0 3.156 2.558 5.714 5.714 5.714s5.714-2.558 5.714-5.714v0 0c0-0.395-0.32-0.714-0.714-0.714v0zM27.857 23.464h-2.857v-9.179c0-5.917-4.797-10.714-10.714-10.714s-10.714 4.797-10.714 10.714v0 9.214h-2.857c-0.395 0-0.714 0.32-0.714 0.714s0.32 0.714 0.714 0.714v0h27.143c0.395 0 0.714-0.32 0.714-0.714s-0.32-0.714-0.714-0.714v0zM23.571 23.464h-18.571v-9.221c0.024-5.11 4.172-9.243 9.286-9.243 0 0 0 0 0 0v0c5.128 0 9.286 4.157 9.286 9.286v0zM14.286 2.857c0.789 0 1.429-0.64 1.429-1.429v0c0-0.789-0.64-1.429-1.429-1.429s-1.429 0.64-1.429 1.429v0c0 0.789 0.64 1.429 1.429 1.429v0z"></path>
                                            </svg>
                                        </span>
                                        
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right p-4 notifications clearfix" role="menu">
                                        <h5>Notification</h5>
                                        <div class="media notification">
                                            <div class="user-thumb mr-3 rounded-thumb">
                                                <img src="assets/images/browse/browse-overview-6.jpg" alt=""/>
                                            </div>
                                            <div class="notification-desc">
                                                <p>New Album from
                                                    <a href="#" class="active-color">Brenda Lee</a>
                                                </p>
                                                <p>
                                                    <a href="#">Catch Me Outside</a>
                                                </p>
                                                <em class="inactive-color">2 Hours ago</em>
                                                <span class="adonis-icon close-notification icon-1x">
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="12" viewBox="0 0 24 24">
                                                        <path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="media notification">
                                            <div class="user-thumb mr-3 rounded-thumb">
                                                <img src="assets/images/playlists/playlist-15.jpg" alt=""/>
                                            </div>
                                            <div class="notification-desc">
                                                <p>New Album from
                                                    <a href="#" class="active-color">Adm Smith</a>
                                                </p>
                                                <p>
                                                    <a href="#">Catch Me Outside</a>
                                                </p>
                                                <em class="inactive-color">3 Hours ago</em>
                                                <span class="adonis-icon close-notification icon-1x">
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="12" viewBox="0 0 24 24">
                                                        <path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="media notification">
                                            <div class="user-thumb mr-3 rounded-thumb">
                                                <img src="assets/images/browse/browse-overview-5.jpg" alt=""/>
                                            </div>
                                            <div class="notification-desc">
                                                <p>New Album from
                                                    <a href="#" class="active-color">Brenda Lee</a>
                                                </p>
                                                <p>
                                                    <a href="#">Catch Me Outside</a>
                                                </p>
                                                <em class="inactive-color">5 Hours ago</em>
                                                <span class="adonis-icon close-notification icon-1x">
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="12" viewBox="0 0 24 24">
                                                        <path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="nav-item position-relative">
                                    <a class="nav-link dropdown-toggle w-nowrap pr-0" href="#" id="dropdownUserSettings" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        <div class="flex-row d-inline-flex">
                                            <div class="user">
                                                <img class="rounded-circle" src="assets/images/user-thumb-1.jpg" alt=""/>
                                            </div>
                                            <span class="ml-2 mt-2 fs-1 d-none d-lg-block">Jont Henrry</span>
                                        </div>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right user-settings-dropdown clearfix" aria-labelledby="dropdownUserSettings">
                                        <div class="settings-top">
                                            <div class="user-cover-image">
                                                <img src="assets/images/user/cover.jpg" alt=""/>
                                            </div>
                                            <div class="user-profile-image rounded-circle">
                                                <img src="assets/images/browse/browse-overview-6.jpg" alt=""/>
                                            </div>
                                        </div>
                                        <div class="settings-bottom">
                                            <h5 class="user-name text-center">Jont hennry</h5>
                                            <ul class="user-settings-menu list-unstyled">
                                                <li>
                                                    <a href="#" class="inactive-color">
                                                        <span class="adonis-icon notification mr-3 icon-3x">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                                <path d="M10 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6zM24.002 14h-1.107l-6.222 12.633 2.327-11.633-3-3-3 3 2.327 11.633-6.222-12.633h-1.107c-3.998 0-3.998 2.687-3.998 6v10h24v-10c0-3.313 0-6-3.998-6z"></path>
                                                            </svg>
                                                        </span>Your Profile</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="inactive-color">
                                                        <span class="adonis-icon mr-3 icon-3x">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                                <path d="M30 19l-9 9-3-3-2 2 5 5 11-11z"></path>
                                                                <path d="M14 24h10v-3.598c-2.101-1.225-4.885-2.066-8-2.321v-1.649c2.203-1.242 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h14v-2z"></path>
                                                            </svg>
                                                        </span>Following</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="inactive-color">
                                                        <span class="adonis-icon mr-3 icon-2x">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                                <path d="M0 0h8v8h-8zM12 2h20v4h-20zM0 12h8v8h-8zM12 14h20v4h-20zM0 24h8v8h-8zM12 26h20v4h-20z"></path>
                                                            </svg>
                                                        </span> Wish list</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="inactive-color">
                                                        <span class="adonis-icon mr-3 icon-4x">
                                                            <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
                                                                />
                                                                <path d="M0 0h24v24H0z" fill="none" />
                                                            </svg>
                                                        </span>Purchased</a>
                                                </li>
                                                <li>
                                                    <a href="#" class="inactive-color">
                                                        <span class="adonis-icon mr-3 icon-2x">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 32 32">
                                                                <path d="M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z"></path>
                                                            </svg>
                                                        </span>Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="site-content">
                    <div id="site-content-inner">
                        <main id="main">
                            <div class="pt-4 pt-lg-5"></div>
                            <div class="master-container-fluid">
                                <div class="mb-e-30 mb-e-lg-50">
                                    <div class="mt-auto mb-3">
                                        <div class="tabs tab-style-1 scroll-x">
                                            <ul class="nav nav-border js-parent adonis-tabbed-nav moving-border">
                                                <li class="menu-item active">
                                                    <a class="nav-link adonis-ajax-load loaded active m-item m-item-block" href="#" data-target="#browse-overview">
                                                        <span class="adonis-icon pr-3 icon-3x">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15">
                                                                <defs></defs>
                                                                <g data-name="Layer 2">
                                                                    <g id="overviews_icon" data-name="overviews icon" class="cls-1">
                                                                        <g id="overviews_icon-2" data-name="overviews icon">
                                                                            <path class="cls-2" d="M16,1.4A1.43,1.43,0,0,0,14.55,0l-8,.7a1.43,1.43,0,0,0-1.45,1.4v7h0v2.78h0a2,2,0,0,1,0,.38,2.14,2.14,0,0,1-2.19,2.09,2.1,2.1,0,1,1,0-4.19,2.25,2.25,0,0,1,.72.13v-.13h0a.34.34,0,0,0,0-.69h0a.33.33,0,0,0-.18.06,2.75,2.75,0,0,0-.54-.06A2.85,2.85,0,0,0,0,12.22,2.85,2.85,0,0,0,2.91,15a2.85,2.85,0,0,0,2.91-2.78s0,0,0-.06h0V2.09a.71.71,0,0,1,.73-.7l8-.7a.71.71,0,0,1,.73.7v7h0v2.78h0a2,2,0,0,1,0,.36,2.19,2.19,0,1,1-2.19-2.08,2.27,2.27,0,0,1,.72.12V9.44h0a.36.36,0,0,0,.36-.36h0a.36.36,0,0,0-.36-.36h0a.35.35,0,0,0-.18.06,2.72,2.72,0,0,0-.52-.06A2.8,2.8,0,1,0,16,11.52h0Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <span>Overview</span>
                                                    </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a class="nav-link adonis-ajax-load m-item m-item-block" href="#" data-target="#browse-news" data-content="http://iconiktech.com/adonis/demo-02/parts/browse/news.html">
                                                        <span class="adonis-icon pr-3 icon-4x">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.005 455.005">
                                                                <g>
                                                                    <path d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343 c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428 c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423 c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615 c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595 l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72 C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196 c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956 c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004 C455.004,277.119,451.78,270.719,446.158,267.615z"></path>
                                                                    <path d="M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126 c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126 C350.916,232.303,352.298,232.676,353.664,232.676z"></path>
                                                                    <path d="M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82 c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905 C320.941,252.21,322.318,252.58,323.68,252.58z"></path>
                                                                    <path d="M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062 c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z"></path>
                                                                    <path d="M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219 c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37 c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464 c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351 c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z"></path>
                                                                    <path d="M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409 c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132 C266.219,292.387,268.669,291.131,270.089,288.846z"></path>
                                                                    <path d="M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132 c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455 C60.338,188.266,55.714,189.346,53.527,192.864z"></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <span>News</span>
                                                    </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a class="nav-link adonis-ajax-load m-item m-item-block" href="#" data-target="#browse-new-music" data-content="parts/browse/new-music.html">
                                                        <span class="adonis-icon pr-3 icon-1x">
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 12.29 16.21">
                                                                <defs>
                                                                    <style>{`
                                                                        .cls-1 {
                                                                            isolation: isolate
                                                                        }
        
                                                                        .cls-2 {
                                                                            fill-rule: evenodd
                                                                        }
                                                                    `}
                                                                    </style>
                                                                </defs>
                                                                <g data-name="Layer 2">
                                                                    <g id="new_music_icon" data-name="new music icon" class="cls-1">
                                                                        <g id="new_music_icon-2" data-name="new music icon">
                                                                            <path class="cls-2" d="M6.37,16.21l.12,0H6.37ZM6.58.08h0L6.37,0V0h0a.4.4,0,0,0-.4.4V10.5a3.4,3.4,0,1,0,.81,2.91.39.39,0,0,0,.07-.21V1.12a7.6,7.6,0,0,1,3.26,2.74.39.39,0,0,0-.17,0,.4.4,0,1,0,.55.15l0,0,.63-.31A8.51,8.51,0,0,0,6.58.08ZM3.37,15.36a2.56,2.56,0,1,1,2.56-2.56A2.56,2.56,0,0,1,3.37,15.36ZM11.31,4.14V7c0,.23.08.46.09.7h.89A8.41,8.41,0,0,0,11.31,4.14Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <span>New Music</span>
                                                    </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a class="nav-link adonis-ajax-load m-item m-item-block" href="#" data-target="#browse-playlists" data-content="parts/browse/playlists.html">
                                                        <span class="adonis-icon pr-3 icon-3x">
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17.98 17.17">
                                                                <defs>
                                                                    <style>{`
                                                                        .cls-1 {
                                                                            isolation: isolate
                                                                        }
        
                                                                        .cls-2 {
                                                                            fill-rule: evenodd
                                                                        }
                                                                    `}
                                                                    </style>
                                                                </defs>
                                                                <g data-name="Layer 2">
                                                                    <g id="playlist_icon" data-name="playlist icon" class="cls-1">
                                                                        <g id="playlist_icon-2" data-name="playlist icon">
                                                                            <path class="cls-2" d="M.42.93A.44.44,0,0,0,0,1.38a.44.44,0,0,0,.42.45.44.44,0,0,0,.42-.45A.44.44,0,0,0,.42.93Zm0,5.41a.45.45,0,0,0,0,.91.45.45,0,0,0,0-.91Zm1.31.91H9.39a.45.45,0,0,0,.45-.45h0a.45.45,0,0,0-.45-.45H1.73a.45.45,0,0,0-.45.45h0A.45.45,0,0,0,1.73,7.24Zm0-5.41H9.39a.45.45,0,0,0,.45-.45h0A.45.45,0,0,0,9.39.93H1.73a.45.45,0,0,0-.45.45h0A.45.45,0,0,0,1.73,1.84ZM18,8.13h0Zm-.9-3.54,0,0h0A8.74,8.74,0,0,0,12.25.1.42.42,0,0,0,12.09,0L12,0V0h0a.43.43,0,0,0-.43.43v10.7A3.35,3.35,0,0,0,9,9.93a3.53,3.53,0,0,0-3.44,3.61A3.53,3.53,0,0,0,9,17.15a3.48,3.48,0,0,0,3.37-2.93.42.42,0,0,0,.06-.21V1.16A7.89,7.89,0,0,1,16.31,5h0a.44.44,0,0,0,0,.08.42.42,0,0,0,.59.16A.46.46,0,0,0,17.09,4.6ZM9,16.24a2.64,2.64,0,0,1-2.56-2.7A2.64,2.64,0,0,1,9,10.84a2.64,2.64,0,0,1,2.56,2.7A2.64,2.64,0,0,1,9,16.24Zm-4.73-4.5H1.73a.45.45,0,0,0-.45.45h0a.45.45,0,0,0,.45.45H4.27a.45.45,0,0,0,.45-.45h0A.45.45,0,0,0,4.27,11.74ZM12,17.17l.06,0H12ZM.42,11.74a.45.45,0,0,0,0,.91.45.45,0,0,0,0-.91Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <span>Playlists</span>
                                                    </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a class="nav-link adonis-ajax-load m-item m-item-block" href="#" data-target="#browse-charts" data-content="parts/browse/charts.html">
                                                        <span class="adonis-icon pr-3 icon-3x">
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16">
                                                                <defs>
                                                                    <style>{`
                                                                        .cls-1 {
                                                                            isolation: isolate
                                                                        }
        
                                                                        .cls-2 {
                                                                            fill-rule: evenodd
                                                                        }
                                                                    `}
                                                                    </style>
                                                                </defs>
                                                                <g data-name="Layer 2">
                                                                    <g id="Stats_2" class="cls-1">
                                                                        <g id="Stats_2-2" data-name="Stats_2">
                                                                            <path class="cls-2" d="M15.67,0a.33.33,0,0,0-.33.33V1.94L12.89,3.22a1.85,1.85,0,1,0-2.5,2.67L9.57,7.72a1.84,1.84,0,0,0-.44-.06A1.86,1.86,0,0,0,7.27,9.52a1.84,1.84,0,0,0,.06.44l-1.83.81a1.86,1.86,0,1,0-2.61,2.55l-1,2H.33a.33.33,0,0,0,0,.65H14.77A1.23,1.23,0,0,0,16,14.77V.33A.33.33,0,0,0,15.67,0ZM10.22,4.35a1.2,1.2,0,0,1,2.27-.56h0a1.19,1.19,0,0,1,.14.55,1.21,1.21,0,1,1-2.41,0Zm-1.09,4A1.2,1.2,0,1,1,7.93,9.52,1.21,1.21,0,0,1,9.13,8.32Zm-6.37,3.5a1.22,1.22,0,1,1,.69,1.09h0A1.2,1.2,0,0,1,2.76,11.82Zm12.59,3a.57.57,0,0,1-.57.57H2.65l.82-1.74a1.83,1.83,0,0,0,.48.07,1.86,1.86,0,0,0,1.86-1.86,1.84,1.84,0,0,0-.06-.44l1.83-.81A1.86,1.86,0,1,0,10.17,8L11,6.15a1.84,1.84,0,0,0,.44.06,1.86,1.86,0,0,0,1.86-1.86,1.83,1.83,0,0,0-.09-.55l2.15-1.12Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <span>Charts</span>
                                                    </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a class="nav-link adonis-ajax-load m-item m-item-block" href="#" data-target="#browse-genres" data-content="parts/browse/genres.html">
                                                        <span class="adonis-icon pr-3 icon-3x">
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 17.01">
                                                                <defs>
                                                                    <style>{`
                                                                        .cls-1 {
                                                                            isolation: isolate
                                                                        }
        
                                                                        .cls-2 {
                                                                            fill-rule: evenodd
                                                                        }
                                                                    `}
                                                                    </style>
                                                                </defs>
                                                                <g data-name="Layer 2">
                                                                    <g id="icon_genres" data-name="icon genres" class="cls-1">
                                                                        <g id="icon_genres-2" data-name="icon genres">
                                                                            <path class="cls-2" d="M17,8.5a.39.39,0,0,0-.17-.32l-1.55-1,1.55-1a.39.39,0,0,0,0-.64L8.71.07a.38.38,0,0,0-.43,0L.17,5.48a.39.39,0,0,0,0,.64l1.55,1-1.55,1a.39.39,0,0,0,0,.64l1.55,1-1.55,1a.39.39,0,0,0,0,.64l8.11,5.41a.39.39,0,0,0,.43,0l8.11-5.41a.39.39,0,0,0,0-.64l-1.55-1,1.55-1A.39.39,0,0,0,17,8.5ZM1.08,5.8,8.5.85,15.92,5.8,8.5,10.74,2.63,6.83h0Zm14.83,5.41L8.5,16.16,1.08,11.21l1.33-.89,5.87,3.92a.39.39,0,0,0,.43,0l5.87-3.92ZM8.5,13.45,2.63,9.53h0l-1.54-1,1.33-.89,5.87,3.92a.39.39,0,0,0,.43,0l5.87-3.92,1.33.89Z"></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <span>Genres</span>
                                                    </a>
                                                </li>
                                                <li class="menu-item">
                                                    <a class="nav-link adonis-ajax-load m-item m-item-block" href="#" data-target="#browse-videos" data-content="parts/browse/videos.html">
                                                        <span class="adonis-icon pr-3 icon-3x">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 32">
                                                                <path d="M22.856 0h-6.856c-8.837 0-16 7.163-16 16s7.163 16 16 16v0h6.856c8.837 0 16-7.163 16-16s-7.163-16-16-16v0zM22.816 30.4h-6.776c-7.953 0-14.4-6.447-14.4-14.4v0 0c0-7.953 6.447-14.4 14.4-14.4v0h6.776c7.953 0 14.4 6.447 14.4 14.4v0 0c0 7.953-6.447 14.4-14.4 14.4v0zM26.64 16.496s0-0.064 0-0.096v-0.040l-0.104-0.112-0.12-0.112-9.728-5.6c-0.113-0.064-0.247-0.102-0.391-0.102-0.223 0-0.424 0.091-0.569 0.238l-0 0-0.072 0.088s-0.048 0.040-0.064 0.072 0 0 0 0.048c-0.068 0.112-0.109 0.247-0.112 0.391v11.129c0 0.442 0.358 0.8 0.8 0.8v0 0c0.166-0.006 0.318-0.062 0.442-0.154l-0.002 0.002 9.68-5.6 0.12-0.112c0.038-0.036 0.072-0.075 0.102-0.118l0.002-0.002s0 0 0 0 0-0.064 0-0.096c0.019-0.043 0.035-0.094 0.047-0.146l0.001-0.006c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c-0.006-0.062-0.017-0.119-0.034-0.174l0.002 0.006zM17.040 21.008v-8.416l7.264 4.208z"></path>
                                                            </svg>
                                                        </span>
                                                        <span>Videos</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <hr class="border-hr"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="master-container-fluid">
                                <div class="tabs-content overflow-h">
                                    <div id="browse-overview" class="inactive-hide active">
                                        <div class="adonis-carousel music-img-box-cont-lg adonis-animate" data-animation="cardDealer" data-animation-item=".owl-item.active"
                                            data-auto-height="yes" data-scrollbar="yes" data-auto-width="yes" data-loop="no" data-dots="yes"
                                            data-responsive-width="0:100%|600:50%|1200:40%">
                                            <div class="gutter-30 gutter-xl-40">
                                                <div class="owl-carousel owl-theme-adonis">
                                                    <div class="item">
                                                        <div class="music-img-box">
                                                            <div class="img-box box-rounded-lg img-box-lg">
                                                                <img class="retina" src="assets/images/browse/browse-overview-1.jpg" data-2x="assets/images/playlists/browse-overview-1@2x.jpg"
                                                                    alt=""/>
                                                                <div class="hover-state">
                                                                    <div class="absolute-top-right pr-e-percent-5 pt-e-percent-5">
                                                                        <span class="pointer dropdown-menu-toggle">
                                                                            <span class="adonis-icon icon-4x">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                
                                                                                </svg>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    <div class="absolute-center">
                                                                        <span class="pointer play-btn-dark  round-btn">
                                                                            <i class="play-icon"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="desc">
                                                                <p class="active-color-2 caps mb-1">New Album</p>
                                                                <h2 class="title h3-md">
                                                                    <a href="#">The Ones That Like Me</a>
                                                                </h2>
                                                                <h5 class="sub-title">
                                                                    <a href="#">Danielle Bradbery</a>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="music-img-box mb-e-40">
                                                            <div class="img-box box-rounded-lg img-box-lg">
                                                                <img class="retina" src="assets/images/browse/browse-overview-08.jpg" data-2x="assets/images/playlists/browse-overview-3@2x.jpg"
                                                                    alt=""/>
                                                                <div class="hover-state">
                                                                    <div class="absolute-top-right pr-e-percent-5 pt-e-percent-5">
                                                                        <span class="pointer dropdown-menu-toggle">
                                                                            <span class="adonis-icon icon-4x">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                
                                                                                </svg>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    <div class="absolute-center">
                                                                        <span class="pointer play-btn-dark  round-btn">
                                                                            <i class="play-icon"></i>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="desc">
                                                                <p class="active-color-2 caps mb-2">Featured artist</p>
                                                                <h4 class="title h3-md">
                                                                    <a href="#">Taylor lachini</a>
                                                                </h4>
                                                                <h5 class="sub-title">
                                                                    <a href="#">Danielle Bradbery</a>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div class="row gutter-xl-40">
                                                            <div class="col-6">
                                                                <div class="music-img-box">
                                                                    <div class="img-box box-rounded-lg img-box-lg">
                                                                        <img class="retina" src="assets/images/browse/browse-overview-18.jpg" data-2x="assets/images/playlists/browse-overview-18@2x.jpg"
                                                                            alt=""/>
                                                                        <div class="hover-state">
                                                                            <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="adonis-icon icon-4x">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        
                                                                                        </svg>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div class="absolute-center">
                                                                                <span class="pointer play-btn-dark  round-btn">
                                                                                    <i class="play-icon"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="desc">
                                                                        <p class="active-color-2 caps mb-2">New album</p>
                                                                        <h4 class="title">
                                                                            <a href="#">WHAT Makes Your Country </a>
                                                                        </h4>
                                                                        <h5 class="sub-title">
                                                                            <a href="#">Danielle Bradbery</a>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="music-img-box">
                                                                    <div class="img-box box-rounded-lg img-box-lg">
                                                                        <img class="retina" src="assets/images/browse/browse-overview-6.jpg" data-2x="assets/images/playlists/browse-overview-6@2x.jpg"
                                                                            alt=""/>
                                                                        <div class="hover-state">
                                                                            <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="adonis-icon icon-4x">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        
                                                                                        </svg>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div class="absolute-center">
                                                                                <span class="pointer play-btn-dark  round-btn">
                                                                                    <i class="play-icon"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="desc">
                                                                        <p class="active-color-2 caps mb-2">Adonis Music Pop</p>
                                                                        <h4 class="title">
                                                                            <a href="#">This One's for You</a>
                                                                        </h4>
                                                                        <h5 class="sub-title">
                                                                            <a href="#">Danielle Bradbery</a>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="row gutter-xl-40">
                                                            <div class="col-6">
                                                                <div class="music-img-box mb-e-40">
                                                                    <div class="img-box box-rounded-lg img-box-lg">
                                                                        <img class="retina" src="assets/images/browse/browse-overview-09.jpg" data-2x="assets/images/playlists/browse-overview-09@2x.jpg"
                                                                            alt=""/>
                                                                        <div class="hover-state">
                                                                            <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="adonis-icon icon-4x">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        
                                                                                        </svg>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div class="absolute-center">
                                                                                <span class="pointer play-btn-dark  round-btn">
                                                                                    <i class="play-icon"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="desc">
                                                                        <p class="active-color-2 caps mb-2">New album</p>
                                                                        <h4 class="title">
                                                                            <a href="#">WHAT Makes Your Country </a>
                                                                        </h4>
                                                                        <h5 class="sub-title">
                                                                            <a href="#">Danielle Bradbery</a>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="music-img-box mb-e-40">
                                                                    <div class="img-box box-rounded-lg img-box-lg">
                                                                        <img class="retina" src="assets/images/browse/browse-overview-5.jpg" data-2x="assets/images/playlists/browse-overview-5@2x.jpg"
                                                                            alt=""/>
                                                                        <div class="hover-state">
                                                                            <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="adonis-icon icon-4x">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        
                                                                                        </svg>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div class="absolute-center">
                                                                                <span class="pointer play-btn-dark  round-btn">
                                                                                    <i class="play-icon"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="desc">
                                                                        <p class="active-color-2 caps mb-2">New album</p>
                                                                        <h4 class="title">
                                                                            <a href="#">WHAT Makes Your Country </a>
                                                                        </h4>
                                                                        <h5 class="sub-title">
                                                                            <a href="#">Danielle Bradbery</a>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row gutter-xl-40">
                                                            <div class="col-6">
                                                                <div class="music-img-box">
                                                                    <div class="img-box box-rounded-lg img-box-lg">
                                                                        <img class="retina" src="assets/images/browse/browse-overview-19.jpg" data-2x="assets/images/playlists/browse-overview-19@2x.jpg"
                                                                            alt=""/>
                                                                        <div class="hover-state">
                                                                            <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="adonis-icon icon-4x">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        
                                                                                        </svg>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div class="absolute-center">
                                                                                <span class="pointer play-btn-dark  round-btn">
                                                                                    <i class="play-icon"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="desc">
                                                                        <p class="active-color-2 caps mb-2">New album</p>
                                                                        <h4 class="title">
                                                                            <a href="#">WHAT Makes Your Country </a>
                                                                        </h4>
                                                                        <h5 class="sub-title">
                                                                            <a href="#">Danielle Bradbery</a>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="music-img-box">
                                                                    <div class="img-box box-rounded-lg img-box-lg">
                                                                        <img class="retina" src="assets/images/browse/browse-overview-20.jpg" data-2x="assets/images/playlists/browse-overview-20@2x.jpg"
                                                                            alt=""/>
                                                                        <div class="hover-state">
                                                                            <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="adonis-icon icon-4x">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        
                                                                                        </svg>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div class="absolute-center">
                                                                                <span class="pointer play-btn-dark  round-btn">
                                                                                    <i class="play-icon"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="desc">
                                                                        <p class="active-color-2 caps mb-2">New album</p>
                                                                        <h4 class="title">
                                                                            <a href="#">WHAT Makes Your Country </a>
                                                                        </h4>
                                                                        <h5 class="sub-title">
                                                                            <a href="#">Danielle Bradbery</a>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item">
                                                        <div class="row gutter-xl-40">
                                                            <div class="col-6">
                                                                <div class="music-img-box mb-e-40">
                                                                    <div class="img-box box-rounded-lg img-box-lg">
                                                                        <img class="retina" src="assets/images/browse/browse-overview-18.jpg" data-2x="assets/images/playlists/browse-overview-18@2x.jpg"
                                                                            alt=""/>
                                                                        <div class="hover-state">
                                                                            <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="adonis-icon icon-4x">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        
                                                                                        </svg>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div class="absolute-center">
                                                                                <span class="pointer play-btn-dark  round-btn">
                                                                                    <i class="play-icon"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="desc">
                                                                        <p class="active-color-2 caps mb-2">New album</p>
                                                                        <h4 class="title">
                                                                            <a href="#">WHAT Makes Your Country </a>
                                                                        </h4>
                                                                        <h5 class="sub-title">
                                                                            <a href="#">Danielle Bradbery</a>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="music-img-box mb-e-40">
                                                                    <div class="img-box box-rounded-lg img-box-lg">
                                                                        <img class="retina" src="assets/images/browse/browse-overview-6.jpg" data-2x="assets/images/playlists/browse-overview-6@2x.jpg"
                                                                            alt=""/>
                                                                        <div class="hover-state">
                                                                            <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="adonis-icon icon-4x">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        
                                                                                        </svg>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div class="absolute-center">
                                                                                <span class="pointer play-btn-dark  round-btn">
                                                                                    <i class="play-icon"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="desc">
                                                                        <p class="active-color-2 caps mb-2">Adonis Music Pop</p>
                                                                        <h4 class="title">
                                                                            <a href="#">This One's for You</a>
                                                                        </h4>
                                                                        <h5 class="sub-title">
                                                                            <a href="#">Danielle Bradbery</a>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row gutter-xl-40">
                                                            <div class="col-6">
                                                                <div class="music-img-box">
                                                                    <div class="img-box box-rounded-lg img-box-lg">
                                                                        <img class="retina" src="assets/images/browse/browse-overview-4.jpg" data-2x="assets/images/playlists/browse-overview-3@2x.jpg"
                                                                            alt=""/>
                                                                        <div class="hover-state">
                                                                            <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="adonis-icon icon-4x">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        
                                                                                        </svg>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div class="absolute-center">
                                                                                <span class="pointer play-btn-dark  round-btn">
                                                                                    <i class="play-icon"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="desc">
                                                                        <p class="active-color-2 caps mb-2">Adonis Music Pop</p>
                                                                        <h4 class="title">
                                                                            <a href="#">This One's for You</a>
                                                                        </h4>
                                                                        <h5 class="sub-title">
                                                                            <a href="#">Danielle Bradbery</a>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-6">
                                                                <div class="music-img-box">
                                                                    <div class="img-box box-rounded-lg img-box-lg">
                                                                        <img class="retina" src="assets/images/browse/browse-overview-6.jpg" data-2x="assets/images/playlists/browse-overview-6@2x.jpg"
                                                                            alt=""/>
                                                                        <div class="hover-state">
                                                                            <div class="absolute-top-right pr-e-percent-10 pt-e-percent-10">
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="adonis-icon icon-4x">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                        
                                                                                        </svg>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                            <div class="absolute-center">
                                                                                <span class="pointer play-btn-dark  round-btn">
                                                                                    <i class="play-icon"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="desc">
                                                                        <p class="active-color-2 caps mb-2">Adonis Music Pop</p>
                                                                        <h4 class="title">
                                                                            <a href="#">This One's for You</a>
                                                                        </h4>
                                                                        <h5 class="sub-title">
                                                                            <a href="#">Danielle Bradbery</a>
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pb-1 mb-3 pb-xl-4 mb-xl-4"></div>
                                        <hr/>
                                        <div class="pb-1 mb-3 pb-xl-5 mb-xl-1"></div>
                                        <section>
                                            <div class="d-flex">
                                                <div class="title-box">
                                                    <h6 class="sub-title inactive-color">Featured</h6>
                                                    <h2 class="title h3-md">Playlists</h2>
                                                </div>
                                                <div class="button-right ml-auto ml-auto d-flex align-items-end">
                                                    <a href="#" class="mb-4">See all
                                                        <span class="adonis-icon pl-1 icon-arrow icon-1x">
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="adonis-carousel music-img-box-cont-sm viewport-animate" data-animation="slideUp" data-animation-item=".item"
                                                data-dots="yes" data-auto-width="yes" data-responsive-width="0:50%|400:33.33%|600:25%|800:20%|1000:16.667%|1200:14.285%|1400:12.5%|1600:10%">
                                                <div class="gutter-30">
                                                    <div class="owl-carousel owl-theme-adonis">
                                                        <div class="item">
                                                            <div class="music-img-box mb-e-30 mb-e-md-40">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-1.jpg" data-2x="assets/images/playlists/playlist-1@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-11.jpg" data-2x="assets/images/playlists/playlist-11@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box mb-e-30 mb-e-md-40">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-2.jpg" data-2x="assets/images/playlists/playlist-2@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-12.jpg" data-2x="assets/images/playlists/playlist-12@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box mb-e-30 mb-e-md-40">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-3.jpg" data-2x="assets/images/playlists/playlist-3@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-13.jpg" data-2x="assets/images/playlists/playlist-13@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box mb-e-30 mb-e-md-40">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-4.jpg" data-2x="assets/images/playlists/playlist-4@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-14.jpg" data-2x="assets/images/playlists/playlist-14@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box mb-e-30 mb-e-md-40">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-5.jpg" data-2x="assets/images/playlists/playlist-5@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-15.jpg" data-2x="assets/images/playlists/playlist-15@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box mb-e-30 mb-e-md-40">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-6.jpg" data-2x="assets/images/playlists/playlist-6@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-16.jpg" data-2x="assets/images/playlists/playlist-16@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box mb-e-30 mb-e-md-40">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-7.jpg" data-2x="assets/images/playlists/playlist-7@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-17.jpg" data-2x="assets/images/playlists/playlist-17@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box mb-e-30 mb-e-md-40">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-8.jpg" data-2x="assets/images/playlists/playlist-8@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-18.jpg" data-2x="assets/images/playlists/playlist-18@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box mb-e-30 mb-e-md-40">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-9.jpg" data-2x="assets/images/playlists/playlist-9@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-19.jpg" data-2x="assets/images/playlists/playlist-19@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box mb-e-30 mb-e-md-40">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-10.jpg" data-2x="assets/images/playlists/playlist-10@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-20.jpg" data-2x="assets/images/playlists/playlist-20@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box mb-e-30 mb-e-md-40">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-1.jpg" data-2x="assets/images/playlists/playlist-1@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md img-box-md">
                                                                    <img class="retina" src="assets/images/playlists/playlist-2.jpg" data-2x="assets/images/playlists/playlist-1@2x.jpg" alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pt-e-20 pt-e-lg-40"></div>
                                        </section>
                                        <section class="viewport-animate" data-animation="slideUp" data-animation-item=".col-md-4">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="img-box-text-over lg box-rounded-lg mb-4">
                                                        <img src="assets/images/this-week/popular-album-week.jpg" data-2x="assets/images/this-week/popular-album-week@2x.jpg" alt=""/>
                                                        <div class="hover-state show">
                                                            <div class="absolute-top-left pl-e-percent-10 pt-e-percent-8">
                                                                <h6 class="text-light">POPULAR ALBUM THIS WEEK</h6>
                                                            </div>
                                                            <div class="absolute-bottom-right pr-e-percent-8 pb-e-percent-8">
                                                                <a href="#" class="text-light">
                                                                    <i class="icon-arrow-right2"></i> View all
                                                                    <span class="adonis-icon pl-1 icon-arrow icon-1x">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="img-box-text-over lg  box-rounded-lg mb-4">
                                                        <img src="assets/images/this-week/new-songs-week.jpg" data-2x="assets/images/this-week/new-songs-week@2x.jpg" alt=""/>
                                                        <div class="hover-state show">
                                                            <div class="absolute-top-left pl-e-percent-10 pt-e-percent-8">
                                                                <h6 class="text-light">NEW SONG THIS WEEK</h6>
                                                            </div>
                                                            <div class="absolute-bottom-right pr-e-percent-8 pb-e-percent-8">
                                                                <a href="#" class="text-light">
                                                                    <i class="icon-arrow-right2"></i> View all
                                                                    <span class="adonis-icon pl-1 icon-arrow icon-1x">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="img-box-text-over lg box-rounded-lg mb-4">
                                                        <img src="assets/images/this-week/popular-artists-week.jpg" data-2x="assets/images/this-week/popular-artists-week@2x.jpg"
                                                            alt=""/>
                                                        <div class="hover-state show">
                                                            <div class="absolute-top-left pl-e-percent-10 pt-e-percent-8">
                                                                <h6 class="text-light">TOP ARTISTS</h6>
                                                            </div>
                                                            <div class="absolute-bottom-right pr-e-percent-8 pb-e-percent-8">
                                                                <a href="#" class="text-light">
                                                                    <i class="icon-arrow-right2"></i> View all
                                                                    <span class="adonis-icon pl-1 icon-arrow icon-1x">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    
                                                                        </svg>
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pb-xl-5 pb-4"></div>
                                        </section>
                                        <section>
                                            <div class="row">
                                                <div class="col-xxl-7 col-lg-8">
                                                    <div class="d-flex flex-row">
                                                        <div class="title-box">
                                                            <h6 class="sub-title inactive-color">Hot Track</h6>
                                                            <h2 class="title h3-md">Hot Songs</h2>
                                                        </div>
                                                        <div class="button-right ml-auto ml-auto mt-auto mb-4 d-flex">
                                                            <a href="#">See all
                                                                <span class="adonis-icon pl-1 icon-arrow icon-1x">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                    </svg>
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div class="adonis-carousel music-img-box-cont-sm viewport-animate" data-animation="slideUp" data-animation-item=".item"
                                                        data-auto-width="yes" data-loop="no" data-dots="yes" data-responsive-width="0:100%|600:50%|900:33.33%|1200:25%">
                                                        <div class="gutter-30">
                                                            <div class="owl-carousel owl-theme-adonis">
                                                                <div class="item">
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-1.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">The Separation</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-2.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Country girl shake it for me</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Bing Crosby</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-3.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Stirring of a fool</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-4.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Nothings into Somethings</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-5.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Let You Down</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="item">
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-6.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Nothings into Somethings</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Sam Hunt</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-7.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">O Come, All Ye Faithful</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Kesha</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-8.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Fetty Wap Ft Monty</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-9.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Do You Hear What I Hear</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Band Aid</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-10.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Look What You Made Me Do</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="item">
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-11.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Carol of the Bells</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-12.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Carol of the Bells</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-13.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">You're A Mean One, Mr. Grinch</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Darius Rucker</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-14.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Joy To The World</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Pentatonix</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-15.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Something Just Like This</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Demi Lovato</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="item">
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-1.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">The Separation</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-2.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Country girl shake it for me</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Bing Crosby</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-3.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Stirring of a fool</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-4.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Nothings into Somethings</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-5.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Let You Down</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="item">
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-1.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">The Separation</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-2.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Country girl shake it for me</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Bing Crosby</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-3.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Stirring of a fool</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-4.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Nothings into Somethings</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                                            <img src="assets/images/hot-song/hot-5.jpg" alt=""/>
                                                                        </div>
                                                                        <div class="des">
                                                                            <h6 class="title fs-2">
                                                                                <a href="#">Let You Down</a>
                                                                            </h6>
                                                                            <p class="sub-title">
                                                                                <a href="#">Rachel Platten</a>
                                                                            </p>
                                                                        </div>
                                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                                            <span class="pointer play-btn-dark box-rounded-sm">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                            <div class="d-flex align-items-center">
                                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="pointer dropdown-menu-toggle">
                                                                                    <span class="icon-dot-nav-horizontal text-light"></span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="pt-e-20 pt-e-lg-40"></div>
                                                </div>
                                                <div class="col-xxl-5 col-lg-4">
                                                    <div class="title pb-e-15">
                                                        <h6 class="title inactive-color">Video Today</h6>
                                                        <h2 class="title h3-md">Watch Now</h2>
                                                    </div>
                                                    <div class="music-img-box">
                                                        <div class="img-box box-rounded-md">
                                                            <img src="assets/images/watch-now/watch-now.jpg" alt=""/>
                                                        </div>
                                                        <div class="hover-state show">
                                                            <div class="absolute-top pl-e-15 pr-e-15 pt-e-15 pl-e-md-30 pr-e-md-30 pt-e-md-30">
                                                                <h6 class="album-name text-light">Album: Life Changes</h6>
                                                            </div>
                                                            <div class="absolute-bottom pl-e-15 pr-e-15 pb-e-md-15  pl-e-md-30 pr-e-30 pb-e-md-30 d-flex">
                                                                <div class="">
                                                                    <a href="#">
                                                                        <h5 class="album-title text-light">The Ones That Like Me</h5>
                                                                    </a>
                                                                    <a href="#">
                                                                        <h6 class="artist-name text-light">David Jame</h6>
                                                                    </a>
                                                                </div>
                                                                <div class="ml-auto">
                                                                    <span class="pointer play-btn-dark play-btn-dark round-btn">
                                                                        <i class="play-icon"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="pt-e-30 pt-e-lg-40"></div>
                                                </div>
                                            </div>
                                        </section>
                                        <section>
                                            <div class="d-flex">
                                                <div class="title-box">
                                                    <h6 class="sub-title inactive-color">New</h6>
                                                    <h2 class="title h3-md">Releases</h2>
                                                </div>
                                                <div class="button-right ml-auto ml-auto d-flex align-items-end">
                                                    <a href="#" class="mb-4">See all
                                                        <span class="adonis-icon pl-1 icon-arrow icon-1x">
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="adonis-carousel viewport-animate" data-animation="slideUp" data-animation-item=".owl-item.active" data-dots="yes"
                                                data-auto-width="yes" data-responsive-width="0:100%|300:50%|560:33%|820:25%|980:20%|1240:16.66%">
                                                <div class="gutter-30">
                                                    <div class="owl-carousel owl-theme-adonis">
                                                        <div class="item">
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md">
                                                                    <img class="retina" src="assets/images/new-releases/new-releases-1.jpg" data-2x="assets/images/new-releases/new-releases-1@2x.jpg"
                                                                        alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md">
                                                                    <img class="retina" src="assets/images/new-releases/new-releases-2.jpg" data-2x="assets/images/new-releases/new-releases-2@2x.jpg"
                                                                        alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md">
                                                                    <img class="retina" src="assets/images/new-releases/new-releases-3.jpg" data-2x="assets/images/new-releases/new-releases-3@2x.jpg"
                                                                        alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md">
                                                                    <img class="retina" src="assets/images/new-releases/new-releases-4.jpg" data-2x="assets/images/new-releases/new-releases-4@2x.jpg"
                                                                        alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md">
                                                                    <img class="retina" src="assets/images/new-releases/new-releases-5.jpg" data-2x="assets/images/new-releases/new-releases-5@2x.jpg"
                                                                        alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md">
                                                                    <img class="retina" src="assets/images/new-releases/new-releases-6.jpg" data-2x="assets/images/new-releases/new-releases-6@2x.jpg"
                                                                        alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md">
                                                                    <img class="retina" src="assets/images/new-releases/new-releases-7.jpg" data-2x="assets/images/new-releases/new-releases-7@2x.jpg"
                                                                        alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md">
                                                                    <img class="retina" src="assets/images/new-releases/new-releases-8.jpg" data-2x="assets/images/new-releases/new-releases-8@2x.jpg"
                                                                        alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
        
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md">
                                                                    <img class="retina" src="assets/images/new-releases/new-releases-9.jpg" data-2x="assets/images/new-releases/new-releases-9@2x.jpg"
                                                                        alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md">
                                                                    <img class="retina" src="assets/images/new-releases/new-releases-10.jpg" data-2x="assets/images/new-releases/new-releases-10@2x.jpg"
                                                                        alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="music-img-box">
                                                                <div class="img-box box-rounded-md">
                                                                    <img class="retina" src="assets/images/new-releases/new-releases-11.jpg" data-2x="assets/images/new-releases/new-releases-11@2x.jpg"
                                                                        alt=""/>
                                                                    <div class="hover-state">
                                                                        <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                            <span class="pointer play-btn-dark round-btn">
                                                                                <i class="play-icon"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                            <span class="pointer dropdown-menu-toggle">
                                                                                <span class="adonis-icon icon-4x">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                                                                    </svg>
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <h6 class="title">
                                                                    <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                </h6>
                                                                <p class="sub-title category">
                                                                    <a href="#">Adonis Music Pop</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pt-e-20 pt-e-lg-40"></div>
                                        </section>
                                        <section>
                                            <div class="adonis-carousel viewport-animate" data-animation="slideUp" data-animation-item=".owl-item.active" data-dots="yes"
                                                data-auto-width="yes" data-responsive-width="0:100%|500:50%|730:33.33%|1100:25%|1460:20%">
                                                <div class="gutter-30">
                                                    <div class="owl-carousel owl-theme-adonis">
                                                        <div class="item">
                                                            <div class="img-box-text-over lg box-rounded-lg">
                                                                <img src="assets/images/radios/radios-1.jpg" data-2x="assets/images/radios/radios-1@2x.jpg" alt=""/>
                                                                <div class="absolute-info d-flex flex-column justify-content-between">
                                                                    <div class="pt-3 pt-lg-4 pl-3 pl-lg-4 h5 text-light">FEATURED RADIO</div>
                                                                    <div>
                                                                        <h4 class="fs-7 m-0 text-light text-center">
                                                                            <span class="font-weight-bold">Adonis</span>
                                                                            <br/>
                                                                            <em>
                                                                                <span class="font-weight-light">Radio Today</span>
                                                                            </em>
                                                                        </h4>
                                                                    </div>
                                                                    <div class="pb-3 pb-lg-4 pr-3 pr-lg-4 ml-auto">
                                                                        <a href="#" class="color-white">View all
                                                                            <span class="adonis-icon pl-1 icon-arrow icon-1x">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            
                                                                                </svg>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="img-box-text-over lg box-rounded-lg">
                                                                <img src="assets/images/radios/radios-2.jpg" data-2x="assets/images/radios/radios-2@2x.jpg" alt=""/>
        
                                                                <div class="absolute-info d-flex flex-column justify-content-between">
                                                                    <div class="pt-3 pt-lg-4 pl-3 pl-lg-4 h6 text-light">FEATURED RADIO</div>
                                                                    <div>
                                                                        <h4 class="fs-7 m-0 text-center text-light">
                                                                            <span class=" color-active font-weight-bold">Adonis</span>
                                                                            <br/>
                                                                            <em>
                                                                                <span class="font-weight-light">Discover</span>
                                                                            </em>
                                                                        </h4>
                                                                    </div>
                                                                    <div class="pb-3 pb-lg-4 pr-3 pr-lg-4 ml-auto">
                                                                        <a href="#" class="color-white">View all
                                                                            <span class="adonis-icon pl-1 icon-arrow icon-1x">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            
                                                                                </svg>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="img-box-text-over lg box-rounded-lg">
                                                                <img src="assets/images/radios/radios-3.jpg" data-2x="assets/images/radios/radios-3@2x.jpg" alt=""/>
        
                                                                <div class="absolute-info d-flex flex-column justify-content-between">
                                                                    <div class="pt-3 pt-lg-4 pl-3 pl-lg-4 h6 text-light">FEATURED RADIO</div>
                                                                    <div>
                                                                        <h4 class="fs-7 m-0 text-dark text-center">
                                                                            <span class="font-weight-bold">Adonis</span>
                                                                            <br/>
                                                                            <em>
                                                                                <span class="font-weight-light">Top Song from Genre</span>
                                                                            </em>
                                                                        </h4>
                                                                    </div>
                                                                    <div class="pb-3 pb-lg-4 pr-3 pr-lg-4 ml-auto">
                                                                        <a href="#" class="color-white">View all
                                                                            <span class="adonis-icon pl-1 icon-arrow icon-1x">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            
                                                                                </svg>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="img-box-text-over lg box-rounded-lg">
                                                                <img src="assets/images/radios/radios-1.jpg" data-2x="assets/images/radios/radios-4@2x.jpg" alt=""/>
        
                                                                <div class="absolute-info d-flex flex-column justify-content-between">
                                                                    <div class="pt-3 pt-lg-4 pl-3 pl-lg-4 h6 text-light">FEATURED RADIO</div>
                                                                    <div>
                                                                        <h4 class="fs-7 m-0 text-light text-center">
                                                                            <span class="font-weight-bold color-pink">Adonis</span>
                                                                            <br/>
                                                                            <em>
                                                                                <span class="font-weight-light">Original Playlists</span>
                                                                            </em>
                                                                        </h4>
                                                                    </div>
                                                                    <div class="pb-3 pb-lg-4 pr-3 pr-lg-4 ml-auto">
                                                                        <a href="#" class="color-white">View all
                                                                            <span class="adonis-icon pl-1 icon-arrow icon-1x">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            
                                                                                </svg>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="img-box-text-over lg box-rounded-lg">
                                                                <img src="assets/images/radios/radios-5.jpg" data-2x="assets/images/radios/radios-5@2x.jpg" alt=""/>
                                                                <div class="absolute-info d-flex flex-column justify-content-between">
                                                                    <div class="pt-3 pt-lg-4 pl-3 pl-lg-4 h6 text-light">FEATURED RADIO</div>
                                                                    <div>
                                                                        <h4 class="fs-7 m-0 text-light text-center">
                                                                            <span class="font-weight-bold color-active">Adonis</span>
                                                                            <br/>
                                                                            <em>
                                                                                <span class="font-weight-light">A wide range of voices</span>
                                                                            </em>
                                                                        </h4>
                                                                    </div>
                                                                    <div class="pb-3 pb-lg-4 pr-3 pr-lg-4 ml-auto">
                                                                        <a href="#" class="color-white">View all
                                                                            <span class="adonis-icon pl-1 icon-arrow icon-1x">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            
                                                                                </svg>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item">
                                                            <div class="img-box-text-over lg box-rounded-lg">
                                                                <img src="assets/images/radios/radios-5.jpg" data-2x="assets/images/radios/radios-5@2x.jpg" alt=""/>
                                                                <div class="absolute-info d-flex flex-column justify-content-between">
                                                                    <div class="pt-3 pt-lg-4 pl-3 pl-lg-4 h6 text-light">FEATURED RADIO</div>
                                                                    <div>
                                                                        <h4 class="fs-7 m-0 text-light text-center">
                                                                            <span class="font-weight-bold color-active">Adonis</span>
                                                                            <br/>
                                                                            <em>
                                                                                <span class="font-weight-light">A wide range of voices</span>
                                                                            </em>
                                                                        </h4>
                                                                    </div>
                                                                    <div class="pb-3 pb-lg-4 pr-3 pr-lg-4 ml-auto">
                                                                        <a href="#" class="color-white">View all
                                                                            <span class="adonis-icon pl-1 icon-arrow icon-1x">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            
                                                                                </svg>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div class="pt-e-20 pt-e-lg-40"></div>
                                        <section class="adonis-carousel viewport-animate" data-animation="slideUp" data-animation-item=".owl-item.active" data-dots="yes"
                                            data-auto-width="yes" data-responsive-width="0:100%|500:50%|730:33.33%|1100:25%|1460:20%">
        
                                            <div class="browse-videos">
                                                <section>
                                                    <div class="title-box">
                                                        <h6 class="sub-title inactive-color">Loaded via ajax</h6>
                                                        <h2 class="title h3-md">Videos</h2>
                                                    </div>
                                                    <div class="adonis-carousel adonis-animate" data-animation="slideUp" data-animation-item=".item" data-dots="yes" data-scrollbar="yes"
                                                        data-loop="no" data-auto-width="yes" data-responsive-width="0:100%|400:50%|730:33.33%|1100:25%|1460:20%">
                                                        <div class="gutter-30">
                                                            <div class="owl-carousel owl-theme-adonis">
                                                                <div class="item">
                                                                    <div class="music-img-box">
                                                                        <div class="img-box box-rounded-md">
                                                                            <img class="retina" src="assets/images/videos/videos-1.jpg" data-2x="assets/images/videos/videos-1@2x.jpg" alt=""/>
                                                                            <div class="hover-state">
                                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                                    <span class="pointer play-btn-dark round-btn">
                                                                                        <i class="play-icon"></i>
                                                                                    </span>
                                                                                </div>
                                                                                <div class="absolute-bottom-right pr-e-20 pb-e-20">
                                                                                    <span class="mr-2">
                                                                                        <span class="adonis-icon text-light pointer icon-2x">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                                                                
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span class="pointer dropdown-menu-toggle">
                                                                                        <span class="adonis-icon icon-4x">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                            
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h6 class="title">
                                                                            <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                        </h6>
                                                                        <p class="sub-title category">
                                                                            <a href="#">Adonis Music Pop</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="item">
                                                                    <div class="music-img-box">
                                                                        <div class="img-box box-rounded-md">
                                                                            <img class="retina" src="assets/images/videos/videos-3.jpg" data-2x="assets/images/videos/videos-3@2x.jpg" alt=""/>
                                                                            <div class="hover-state">
                                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                                    <span class="pointer play-btn-dark round-btn">
                                                                                        <i class="play-icon"></i>
                                                                                    </span>
                                                                                </div>
                                                                                <div class="absolute-bottom-right pr-e-20 pb-e-20">
                                                                                    <span class="mr-2">
                                                                                        <span class="adonis-icon text-light pointer icon-2x">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                                                                
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span class="pointer dropdown-menu-toggle">
                                                                                        <span class="adonis-icon icon-4x">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                            
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h6 class="title">
                                                                            <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                        </h6>
                                                                        <p class="sub-title category">
                                                                            <a href="#">Adonis Music Pop</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="item">
                                                                    <div class="music-img-box">
                                                                        <div class="img-box box-rounded-md">
                                                                            <img class="retina" src="assets/images/videos/videos-2.jpg" data-2x="assets/images/videos/videos-2@2x.jpg" alt=""/>
                                                                            <div class="hover-state">
                                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                                    <span class="pointer play-btn-dark round-btn">
                                                                                        <i class="play-icon"></i>
                                                                                    </span>
                                                                                </div>
                                                                                <div class="absolute-bottom-right pr-e-20 pb-e-20">
                                                                                    <span class="mr-2">
                                                                                        <span class="adonis-icon text-light pointer icon-2x">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                                                                
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span class="pointer dropdown-menu-toggle">
                                                                                        <span class="adonis-icon icon-4x">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                            
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h6 class="title">
                                                                            <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                        </h6>
                                                                        <p class="sub-title category">
                                                                            <a href="#">Adonis Music Pop</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="item">
                                                                    <div class="music-img-box">
                                                                        <div class="img-box box-rounded-md">
                                                                            <img class="retina" src="assets/images/videos/videos-4.jpg" data-2x="assets/images/videos/videos-4@2x.jpg" alt=""/>
                                                                            <div class="hover-state">
                                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                                    <span class="pointer play-btn-dark round-btn">
                                                                                        <i class="play-icon"></i>
                                                                                    </span>
                                                                                </div>
                                                                                <div class="absolute-bottom-right pr-e-20 pb-e-20">
                                                                                    <span class="mr-2">
                                                                                        <span class="adonis-icon text-light pointer icon-2x">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                                                                
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span class="pointer dropdown-menu-toggle">
                                                                                        <span class="adonis-icon icon-4x">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                            
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h6 class="title">
                                                                            <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                        </h6>
                                                                        <p class="sub-title category">
                                                                            <a href="#">Adonis Music Pop</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="item">
                                                                    <div class="music-img-box">
                                                                        <div class="img-box box-rounded-md">
                                                                            <img class="retina" src="assets/images/videos/videos-5.jpg" data-2x="assets/images/videos/videos-5@2x.jpg" alt=""/>
                                                                            <div class="hover-state">
                                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                                    <span class="pointer play-btn-dark round-btn">
                                                                                        <i class="play-icon"></i>
                                                                                    </span>
                                                                                </div>
                                                                                <div class="absolute-bottom-right pr-e-20 pb-e-20">
                                                                                    <span class="mr-2">
                                                                                        <span class="adonis-icon text-light pointer icon-2x">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                                                                
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span class="pointer dropdown-menu-toggle">
                                                                                        <span class="adonis-icon icon-4x">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                            
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h6 class="title">
                                                                            <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                        </h6>
                                                                        <p class="sub-title category">
                                                                            <a href="#">Adonis Music Pop</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="item">
                                                                    <div class="music-img-box">
                                                                        <div class="img-box box-rounded-md">
                                                                            <img class="retina" src="assets/images/videos/videos-6.jpg" data-2x="assets/images/videos/videos-6@2x.jpg" alt=""/>
                                                                            <div class="hover-state">
                                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                                    <span class="pointer play-btn-dark round-btn">
                                                                                        <i class="play-icon"></i>
                                                                                    </span>
                                                                                </div>
                                                                                <div class="absolute-bottom-right pr-e-20 pb-e-20">
                                                                                    <span class="mr-2">
                                                                                        <span class="adonis-icon text-light pointer icon-2x">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                                                                
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span class="pointer dropdown-menu-toggle">
                                                                                        <span class="adonis-icon icon-4x">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                            
                                                                                            </svg>
                                                                                        </span>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <h6 class="title">
                                                                            <a href="#">Vestibulum nibh lorem ipsum</a>
                                                                        </h6>
                                                                        <p class="sub-title category">
                                                                            <a href="#">Adonis Music Pop</a>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
        
                                        </section>
                                    </div>
                                    <div id="browse-new-music" class="inactive-hide"></div>
                                    <div id="browse-news" class="inactive-hide"></div>
                                    <div id="browse-playlists" class="inactive-hide"></div>
                                    <div id="browse-charts" class="inactive-hide"></div>
                                    <div id="browse-genres" class="inactive-hide"></div>
                                    <div id="browse-videos" class="inactive-hide"></div>
                                    <div class="tab-preloader preloader">
                                        <div class="preloader-overlay"></div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    
                </div>
                
                <footer class="site-footer" id="site-footer">
                    <div class="master-container-fluid">
                        <div class="p-2"></div>
                        <hr/>
                    </div>
                    <div class="master-container-fluid">
                        <div class="pt-e-40"></div>
                        <div class="row">
                            <div class="col-lg-4 col-xl-3 order-2 order-lg-1">
                                <div class="footer-widget-1">
                                    <div class="footer-logo mb-2">
                                        <a class="brand d-flex align-items-center" href="home.html">
                                            <span class="adonis-icon mr-md-2 mr-1 icon-5x">
                                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32">
                                                    <path d="M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"></path>
                                                </svg>
                                            </span>
                                            <strong class="p-1 fs-8">Adonis</strong>
                                        </a>
                                    </div>
                                    <div class="widget">
                                        <h5 class="widget-title">Adonis Music, Radio Online Network</h5>
                                        <div class="social-icons pb-3">
                                            <ul class="list-inline horizon-list fs-3">
                                                <li>
                                                    <a href="#">
                                                        <span class="adonis-icon icon-1x">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 32 32">
                                                                <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="adonis-icon icon-1x">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 32 32">
                                                                <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="adonis-icon icon-1x">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 32 32">
                                                                <path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.119-16-16-16zM23.363 23.119c-0.319 0.481-0.881 0.637-1.363 0.319-3.762-2.319-8.481-2.8-14.081-1.519-0.563 0.163-1.037-0.238-1.2-0.719-0.162-0.563 0.237-1.038 0.719-1.2 6.081-1.363 11.363-0.8 15.519 1.762 0.563 0.238 0.644 0.875 0.406 1.356zM25.281 18.719c-0.4 0.563-1.119 0.8-1.681 0.4-4.319-2.637-10.881-3.438-15.919-1.837-0.638 0.163-1.362-0.163-1.519-0.8-0.162-0.637 0.162-1.363 0.8-1.519 5.838-1.762 13.037-0.881 18 2.163 0.475 0.238 0.719 1.038 0.319 1.594zM25.438 14.238c-5.119-3.037-13.681-3.363-18.563-1.838-0.8 0.238-1.6-0.238-1.838-0.963-0.237-0.8 0.237-1.6 0.963-1.838 5.681-1.681 15.038-1.363 20.962 2.162 0.719 0.4 0.962 1.363 0.563 2.081-0.406 0.556-1.363 0.794-2.087 0.394z"></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="adonis-icon icon-3x">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 39 32">
                                                                <path d="M22.856 0h-6.856c-8.837 0-16 7.163-16 16s7.163 16 16 16v0h6.856c8.837 0 16-7.163 16-16s-7.163-16-16-16v0zM22.816 30.4h-6.776c-7.953 0-14.4-6.447-14.4-14.4v0 0c0-7.953 6.447-14.4 14.4-14.4v0h6.776c7.953 0 14.4 6.447 14.4 14.4v0 0c0 7.953-6.447 14.4-14.4 14.4v0zM26.64 16.496s0-0.064 0-0.096v-0.040l-0.104-0.112-0.12-0.112-9.728-5.6c-0.113-0.064-0.247-0.102-0.391-0.102-0.223 0-0.424 0.091-0.569 0.238l-0 0-0.072 0.088s-0.048 0.040-0.064 0.072 0 0 0 0.048c-0.068 0.112-0.109 0.247-0.112 0.391v11.129c0 0.442 0.358 0.8 0.8 0.8v0 0c0.166-0.006 0.318-0.062 0.442-0.154l-0.002 0.002 9.68-5.6 0.12-0.112c0.038-0.036 0.072-0.075 0.102-0.118l0.002-0.002s0 0 0 0 0-0.064 0-0.096c0.019-0.043 0.035-0.094 0.047-0.146l0.001-0.006c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c-0.006-0.062-0.017-0.119-0.034-0.174l0.002 0.006zM17.040 21.008v-8.416l7.264 4.208z"></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="adonis-icon icon-1x">
                                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 32 32">
                                                                <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
                                                                <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
                                                                <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p class="copyright"> Copyright &copy; 2018 IconikTech. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8 col-xl-9 pl-e-lg-70 order-1">
                                <div class="row">
        
                                    <div class="col-md-6 col-xl-2">
                                        <div class="footer-about">
                                            <div class="widget">
                                                <h5 class="widget-title">Adonis Music</h5>
                                                <ul class="list-inline vertical-list">
                                                    <li>
                                                        <a href="#">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Help &amp; Support</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Contact</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Terms &amp; Privacy</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Store</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">News &amp; Blog</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Advertise</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xl-2">
                                        <div class="footer-manage widget">
                                            <h5 class="widget-title">Manage</h5>
                                            <ul class="list-inline vertical-list">
                                                <li>
                                                    <a href="#">Account</a>
                                                </li>
                                                <li>
                                                    <a href="#">My wisht list</a>
                                                </li>
                                                <li>
                                                    <a href="#">My playlist</a>
                                                </li>
                                                <li>
                                                    <a href="#">Artist Followinge</a>
                                                </li>
                                                <li>
                                                    <a href="#">Purchased</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xl-4">
                                        <div class="widget">
                                            <h5 class="widget-title">Recent Albums</h5>
                                            <div class="footer-album-list music-img-box-cont-sm">
                                                <div class="img-box-horizontal music-img-box img-box-horizontal-style-2">
                                                    <div class="img-box img-box-sm box-rounded-sm">
                                                        <img src="assets/images/hot-song/hot-11.jpg" alt=""/>
                                                    </div>
                                                    <div class="des">
                                                        <h6 class="title">
                                                            <a href="#">Do You Hear What I Hear</a>
                                                        </h6>
                                                        <p class="sub-title">
                                                            <a href="#">Band Aid</a>
                                                        </p>
                                                    </div>
                                                    <div class="hover-state d-flex justify-content-between align-items-center">
                                                        <span class="pointer play-btn-dark box-rounded-sm">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                        <div class="d-flex align-items-center">
                                                            <span class="adonis-icon color-active pointer mr-2 icon-2x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                                    
                                                                </svg>
                                                            </span>
                                                            <span class="pointer dropdown-menu-toggle">
                                                                <span class="icon-dot-nav-horizontal color-active"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="img-box-horizontal music-img-box img-box-horizontal-style-2">
                                                    <div class="img-box img-box-sm box-rounded-sm">
                                                        <img src="assets/images/hot-song/hot-9.jpg" alt=""/>
                                                    </div>
                                                    <div class="des">
                                                        <h6 class="title">
                                                            <a href="#">O Come, All Ye Faithful</a>
                                                        </h6>
                                                        <p class="sub-title">
                                                            <a href="#">Kesha</a>
                                                        </p>
                                                    </div>
                                                    <div class="hover-state d-flex justify-content-between align-items-center">
                                                        <span class="pointer play-btn-dark box-rounded-sm">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                        <div class="d-flex align-items-center">
                                                            <span class="adonis-icon color-active pointer mr-2 icon-2x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                                    
                                                                </svg>
                                                            </span>
                                                            <span class="pointer dropdown-menu-toggle">
                                                                <span class="icon-dot-nav-horizontal color-active"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="img-box-horizontal music-img-box img-box-horizontal-style-2">
                                                    <div class="img-box img-box-sm box-rounded-sm">
                                                        <img src="assets/images/hot-song/hot-8.jpg" alt=""/>
                                                    </div>
                                                    <div class="des">
                                                        <h6 class="title">
                                                            <a href="#">Nothings into Somethings</a>
                                                        </h6>
                                                        <p class="sub-title">
                                                            <a href="#">Sam Hunt</a>
                                                        </p>
                                                    </div>
                                                    <div class="hover-state d-flex justify-content-between align-items-center">
                                                        <span class="pointer play-btn-dark box-rounded-sm">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                        <div class="d-flex align-items-center">
                                                            <span class="adonis-icon color-active pointer mr-2 icon-2x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                                    
                                                                </svg>
                                                            </span>
                                                            <span class="pointer dropdown-menu-toggle">
                                                                <span class="icon-dot-nav-horizontal color-active"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-xl-4">
                                        <div class="widget">
                                            <h5 class="widget-title">Go Moblie</h5>
                                            <div class="mobile-apps">
                                                <ul class="list-inline d-inline-flex mb-4">
                                                    <li class="mr-2">
                                                        <img src="assets/images/brand-logo/apple-logo.png" alt=""/>
                                                    </li>
                                                    <li>
                                                        <img src="assets/images/brand-logo/google-apps.png" alt=""/>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="widget">
                                            <label class="pr-4">Language</label>
                                            <img src="assets/images/brand-logo/lang-flag.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pb-e-30"></div>
                </footer>
        
                <div class="off-canvas-overlay"></div>
                <div class="preloader site-preloader">
                    <div class="preloader-overlay"></div>
                    <div class="position-absolute center-center">
                        <span class="shadow"></span>
                        <div class="icons">
                            <span class="animate-loading">
                                <span class="adonis-icon icon-5x">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        
                                    </svg>
                                </span>
                            </span>
                            <span class="adonis-icon icon-5x">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
        
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="adonis-svg-library">
                    <symbol id="icon-horizontal-dots" viewBox="0 0 32 32">
                        <path d="M5.681 12.808c-1.763 0-3.192 1.429-3.192 3.192s1.429 3.192 3.192 3.192c1.763 0 3.192-1.429 3.192-3.192v0c0-1.763-1.429-3.192-3.192-3.192v0zM16.322 12.808c-1.763 0-3.192 1.429-3.192 3.192s1.429 3.192 3.192 3.192c1.763 0 3.192-1.429 3.192-3.192v0c0-1.763-1.429-3.192-3.192-3.192v0zM26.963 12.808c-1.763 0-3.192 1.429-3.192 3.192s1.429 3.192 3.192 3.192c1.763 0 3.192-1.429 3.192-3.192v0c0-1.763-1.429-3.192-3.192-3.192v0z"></path>
                    </symbol>
                    <symbol id="arrow-right" viewBox="0 0 42 42">
                        <polygon points="42,20 22,20 22,0 20,0 20,20 0,20 0,22 20,22 20,42 22,42 22,22 42,22 " />
                    </symbol>
                    <symbol id="arrow-left" viewBox="0 0 24 24">
                        <path d="M10.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-6 6c-0.4 0.4-0.4 1 0 1.4l6 6c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
                        />
                    </symbol>
                    <symbol id="icon-see-all-arrow-right" viewBox="0 0 24 24">
                        <path d="M20.9 12.4c0.1-0.2 0.1-0.5 0-0.8-0.1-0.1-0.1-0.2-0.2-0.3l-6-6c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l4.3 4.3h-13.6c-0.6 0-1 0.4-1 1s0.4 1 1 1h13.6l-4.3 4.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3l6-6c0.1-0.1 0.2-0.2 0.2-0.3z"></path>
                    </symbol>
                    <symbol id="icon-heart-blank" viewBox="0 0 37 32">
                        <path d="M27.379 0c-3.478 0.417-6.509 2.067-8.695 4.492l-0.011 0.012c-2.204-2.428-5.231-4.075-8.638-4.498l-0.068-0.007c-6.232 0-9.966 3.641-9.966 9.756 0.377 3.717 2.096 6.973 4.658 9.327l0.011 0.010 13.001 12.534c0.225 0.231 0.539 0.374 0.886 0.374 0.009 0 0.017-0 0.026-0l-0.001 0c0.004 0 0.010 0 0.015 0 0.35 0 0.667-0.143 0.895-0.373l0-0 13.187-12.511c0-0.187 4.668-4.365 4.668-9.36 0-6.115-3.734-9.756-9.966-9.756zM30.763 17.179l-12.090 11.647-12.114-11.67c-2.066-1.882-3.481-4.446-3.89-7.334l-0.008-0.065c0-5.859 3.968-7.002 7.306-7.002s6.605 3.361 7.679 4.668c0.253 0.283 0.619 0.46 1.027 0.46s0.774-0.177 1.026-0.458l0.001-0.001c1.074-1.284 4.668-4.668 7.679-4.668s7.282 1.237 7.282 7.002c0 3.805-3.851 7.352-3.898 7.422z"></path>
                    </symbol>
                    <symbol id="icon-close-notification" viewBox="0 0 24 24">
                        <path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"></path>
                    </symbol>
                    <symbol id="icon-brand-play-gradient" viewBox="0 0 27 32">
                        <defs>
                            <linearGradient x1="0" y1="0" x2="100%" y2="0">
                                <stop offset="0%" stop-color="#b08cf9"></stop>
                                <stop offset="100%" stop-color="#91a5f4"></stop>
                            </linearGradient>
                        </defs>
                        <path fill="url(#Gradient)" d="M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"></path>
                    </symbol>
                    <symbol id="icon-brand-play" viewBox="0 0 27 32">
                        <path d="M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"></path>
                    </symbol>
                    <symbol id="icon-users" viewBox="0 0 32 32">
                        <path d="M14.496 22c4.136 0 7.504-4.096 7.504-9.128s-3.368-9.12-7.504-9.12c-2.195 0.041-4.134 1.105-5.363 2.735l-0.013 0.017c-1.323 1.704-2.121 3.874-2.121 6.23 0 0.060 0 0.12 0.002 0.179l-0-0.009c0 5 3.4 9.096 7.496 9.096zM14.496 5.752c3.040 0 5.504 3.2 5.504 7.12s-2.464 7.128-5.504 7.128-5.496-3.2-5.496-7.128 2.464-7.12 5.496-7.12zM20.8 21c-0.552 0-1 0.448-1 1s0.448 1 1 1v0c3.422 0.005 6.195 2.778 6.2 6.2v0c0 0.442-0.358 0.8-0.8 0.8v0h-23.4c-0.442 0-0.8-0.358-0.8-0.8v0c0.005-3.422 2.778-6.195 6.2-6.2h0c0.552 0 1-0.448 1-1s-0.448-1-1-1v0c-4.527 0.005-8.195 3.673-8.2 8.2v0c0 1.546 1.254 2.8 2.8 2.8v0h23.4c1.546 0 2.8-1.254 2.8-2.8v0c-0.005-4.527-3.673-8.195-8.2-8.2h-0zM15.2 2.64c0.647-0.4 1.432-0.637 2.271-0.64h0.001c3.032 0 5.496 3.2 5.496 7.128 0.001 0.047 0.001 0.102 0.001 0.158 0 0.678-0.073 1.339-0.213 1.975l0.011-0.061c-0.017 0.068-0.026 0.146-0.026 0.227 0 0.471 0.325 0.865 0.763 0.972l0.007 0.001c0.035 0.004 0.075 0.006 0.116 0.006s0.081-0.002 0.121-0.006l-0.005 0c0.477-0.006 0.873-0.344 0.967-0.793l0.001-0.007c0.183-0.749 0.288-1.61 0.288-2.494 0-0.006 0-0.012-0-0.019v0.001c0-4.992-3.4-9.088-7.496-9.088-1.215 0.004-2.35 0.345-3.316 0.936l0.028-0.016c-0.37 0.152-0.626 0.51-0.626 0.927 0 0.552 0.448 1 1 1 0.23 0 0.443-0.078 0.612-0.209l-0.002 0.002zM24 17.040c-0.552 0-1 0.448-1 1s0.448 1 1 1v0c3.326 0.053 6.002 2.761 6.002 6.095 0 0.059-0.001 0.118-0.003 0.177l0-0.009c-0.001 0.119-0.027 0.232-0.074 0.333l0.002-0.005c-0.052 0.118-0.083 0.256-0.083 0.401 0 0.407 0.241 0.758 0.589 0.917l0.006 0.003c0.114 0.056 0.249 0.088 0.391 0.088 0.006 0 0.012-0 0.018-0h-0.001c0.414-0.011 0.764-0.27 0.91-0.633l0.002-0.007c0.152-0.333 0.24-0.723 0.24-1.133 0-0.004 0-0.008-0-0.012v0.001c0.001-0.048 0.002-0.104 0.002-0.161 0-4.438-3.571-8.042-7.997-8.095l-0.005-0z"></path>
                    </symbol>
                    <symbol id="icon-songs-3" viewBox="0 0 32 32">
                        <path d="M31.286 0.469c-0.363-0.305-0.818-0.469-1.285-0.469-0.115 0-0.232 0.010-0.348 0.031l-17.002 3c-0.956 0.168-1.652 0.998-1.652 1.969v17.17c-1.015-0.736-2.332-1.17-3.794-1.17-0.85 0-1.7 0.141-2.529 0.416-1.898 0.633-3.42 1.902-4.176 3.484-0.584 1.223-0.659 2.553-0.214 3.746 0.761 2.038 2.923 3.354 5.508 3.354 0.85 0 1.7-0.139 2.528-0.416 1.897-0.631 3.419-1.9 4.175-3.48 0.325-0.682 0.477-1.396 0.483-2.104h0.018v-16c0.115 0 0.232-0.010 0.348-0.029l16.655-2.939v12.138c-1.016-0.736-2.332-1.17-3.795-1.17-0.85 0-1.701 0.141-2.529 0.416-1.898 0.633-3.42 1.902-4.174 3.484-0.584 1.223-0.66 2.553-0.215 3.746 0.762 2.038 2.922 3.354 5.508 3.354 0.85 0 1.701-0.139 2.529-0.416 1.896-0.631 3.418-1.9 4.174-3.48 0.326-0.682 0.477-1.396 0.484-2.104h0.018v-21c0-0.59-0.262-1.152-0.715-1.531zM7.688 29.688c-2.396 0.799-4.873 0.018-5.529-1.74-0.658-1.76 0.751-3.834 3.146-4.633 2.396-0.799 4.873-0.020 5.529 1.74 0.659 1.759-0.75 3.834-3.146 4.633zM26.653 26.688c-2.398 0.799-4.875 0.018-5.531-1.74-0.658-1.76 0.752-3.834 3.146-4.633 2.398-0.799 4.875-0.020 5.531 1.74 0.659 1.759-0.749 3.834-3.146 4.633zM29.96 5l-17.002 3v-3l17.002-3v3z"></path>
                    </symbol>
                    <symbol id="icon-plus" viewBox="0 0 24 24">
                        <path d="M19 11h-6v-6c0-0.6-0.4-1-1-1s-1 0.4-1 1v6h-6c-0.6 0-1 0.4-1 1s0.4 1 1 1h6v6c0 0.6 0.4 1 1 1s1-0.4 1-1v-6h6c0.6 0 1-0.4 1-1s-0.4-1-1-1z"></path>
                    </symbol>
                    <symbol id="icon-bag" viewBox="0 0 26 32">
                        <path d="M23.77 8.909c-0.027-0.493-0.422-0.886-0.913-0.909l-0.002-0h-4.57v-2.003c0-3.302-2.458-5.997-5.485-5.997s-5.485 2.694-5.485 5.997v2.003h-4.57c-0.494 0.023-0.889 0.416-0.915 0.906l-0 0.002-1.83 22.003c-0.003 0.030-0.005 0.066-0.005 0.102 0 0.251 0.089 0.482 0.237 0.662l-0.001-0.002c0.164 0.198 0.41 0.324 0.684 0.326h23.77c0.273-0.004 0.516-0.13 0.677-0.325l0.001-0.002c0.15-0.179 0.241-0.413 0.241-0.667 0-0.033-0.002-0.066-0.005-0.099l0 0.004zM9.146 5.997c-0.002-0.049-0.004-0.107-0.004-0.164 0-2.057 1.617-3.736 3.649-3.835l0.009-0c2.041 0.1 3.658 1.779 3.658 3.836 0 0.058-0.001 0.115-0.004 0.172l0-0.008v2.003h-7.309zM1.92 29.997l1.664-20h3.738v2.278c-0.558 0.369-0.922 0.994-0.922 1.704 0 0.009 0 0.017 0 0.026v-0.001c-0.001 0.024-0.002 0.051-0.002 0.079 0 1.029 0.81 1.87 1.828 1.918l0.004 0c1.019-0.052 1.826-0.89 1.826-1.918 0-0.028-0.001-0.056-0.002-0.083l0 0.004c0-0.011 0-0.023 0-0.036 0-0.703-0.358-1.323-0.902-1.687l-0.007-0.005v-2.278h7.309v2.278c-0.551 0.369-0.909 0.988-0.909 1.692 0 0.013 0 0.025 0 0.038l-0-0.002c-0.001 0.024-0.002 0.051-0.002 0.079 0 1.027 0.807 1.866 1.821 1.918l0.005 0c1.022-0.048 1.832-0.889 1.832-1.918 0-0.028-0.001-0.055-0.002-0.083l0 0.004c0-0.008 0-0.019 0-0.029 0-0.707-0.361-1.33-0.908-1.695l-0.007-0.005v-2.278h3.738l1.658 20z"></path>
                    </symbol>
                </svg>
        
            </div>
            
            <div id="search-box-4">
                <button id="btn-search-close" class="btn btn-blank btn--search-close" aria-label="Close search form">
                    <span class="adonis-icon color-active">
                        <svg id="icon-cross" viewBox="0 0 24 24" width="5vmin">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                        </svg>
                    </span>
                </button>
                <div class="search-inner search-inner-up d-flex align-items-center">
                    <div class="master-container-fluid d-flex align-items-center">
                        <form class="search-form">
                            <input class="search-input" name="search" type="search" placeholder="Start typing..." autocomplete="off" spellcheck="false"/>
                        </form>
                    </div>
                </div>
                <div class="search-inner search-inner-down dark-theme">
                    <div class="master-container-fluid pt-3 pt-md-4 d-flex flex-column">
                        <div class="navbar-expand mb-2 mb-md-4 scroll-x">
                            <ul class="nav moving-border flex-nowrap" role="tablist">
                                <li class="menu-item active">
                                    <a class="nav-link active m-item fs-7 pr-3 pl-0" id="search-tab-songs" data-toggle="tab" href="#search-content-songs" role="tab"
                                        aria-controls="search-content-songs" aria-selected="true">Songs</a>
                                </li>
                                <li class="menu-item">
                                    <a class="nav-link m-item fs-7 pr-3 pl-3" id="search-tab-albums" data-toggle="tab" href="#search-content-albums" role="tab"
                                        aria-controls="search-content-albums" aria-selected="true">Albums</a>
                                </li>
                                <li class="menu-item">
                                    <a class="nav-link m-item fs-7 pr-3 pl-3" id="search-tab-playlists" data-toggle="tab" href="#search-content-playlists" role="tab"
                                        aria-controls="search-content-playlists" aria-selected="true">Playlists</a>
                                </li>
                                <li class="menu-item">
                                    <a class="nav-link m-item fs-7 pr-3 pl-3" id="search-tab-artists" data-toggle="tab" href="#search-content-artists" role="tab"
                                        aria-controls="search-content-artists" aria-selected="true">Artists</a>
                                </li>
                            </ul>
                            <hr class="border-hr"/>
                        </div>
                        <div class="tab-content scroll-y">
                            <div class="tab-pane fade show active" id="search-content-songs" role="tabpanel" aria-labelledby="search-tab-songs">
                                <div class="row auto-cols-row" data-item-width="330" data-item-max-width="630">
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-2.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Country girl shake it for me</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Bing Crosby</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-1.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">The Separation</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-3.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Stirring of a fool</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-4.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Nothings into Somethings</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-5.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Let You Down</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-6.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Nothings into Somethings</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Sam Hunt</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-7.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">O Come, All Ye Faithful</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Kesha</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-8.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Fetty Wap Ft Monty</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-8.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Fetty Wap Ft Monty</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-9.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Do You Hear What I Hear</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Band Aid</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-10.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Look What You Made Me Do</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-11.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Carol of the Bells</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-12.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Carol of the Bells</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-13.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">You're A Mean One, Mr. Grinch</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Darius Rucker</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-14.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Joy To The World</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Pentatonix</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-15.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Something Just Like This</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Demi Lovato</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-1.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">The Separation</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-3.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Stirring of a fool</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-2.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Country girl shake it for me</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Bing Crosby</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-4.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Nothings into Somethings</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-5.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Let You Down</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-1.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">The Separation</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-2.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Country girl shake it for me</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Bing Crosby</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-4.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Nothings into Somethings</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-5.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Let You Down</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="img-box-horizontal music-img-box h-g-bg">
                                            <div class="img-box img-box-sm box-rounded-sm">
                                                <img src="assets/images/hot-song/hot-4.jpg" alt=""/>
                                            </div>
                                            <div class="des">
                                                <h6 class="title">
                                                    <a href="#">Nothings into Somethings</a>
                                                </h6>
                                                <p class="sub-title">
                                                    <a href="#">Rachel Platten</a>
                                                </p>
                                            </div>
                                            <div class="hover-state d-flex justify-content-between align-items-center">
                                                <span class="pointer play-btn-dark box-rounded-sm">
                                                    <i class="play-icon"></i>
                                                </span>
                                                <div class="d-flex align-items-center">
                                                    <span class="adonis-icon text-light pointer mr-2 icon-2x">
                                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                                            
                                                        </svg>
                                                    </span>
                                                    <span class="pointer dropdown-menu-toggle">
                                                        <span class="icon-dot-nav-horizontal text-light"></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="search-content-albums" role="tabpanel" aria-labelledby="search-tab-albums">
                                <div class="row auto-cols-row" data-item-width="150" data-item-max-width="200">
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-44.jpg" data-2x="assets/images/new-releases/new-releases-44@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-43.jpg" data-2x="assets/images/new-releases/new-releases-43@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-42.jpg" data-2x="assets/images/new-releases/new-releases-42@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-41.jpg" data-2x="assets/images/new-releases/new-releases-41@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-40.jpg" data-2x="assets/images/new-releases/new-releases-40@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-39.jpg" data-2x="assets/images/new-releases/new-releases-39@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-38.jpg" data-2x="assets/images/new-releases/new-releases-38@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-37.jpg" data-2x="assets/images/new-releases/new-releases-37@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-36.jpg" data-2x="assets/images/new-releases/new-releases-36@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-35.jpg" data-2x="assets/images/new-releases/new-releases-35@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-34.jpg" data-2x="assets/images/new-releases/new-releases-34@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-33.jpg" data-2x="assets/images/new-releases/new-releases-33@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-32.jpg" data-2x="assets/images/new-releases/new-releases-32@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-31.jpg" data-2x="assets/images/new-releases/new-releases-31@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-30.jpg" data-2x="assets/images/new-releases/new-releases-30@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-29.jpg" data-2x="assets/images/new-releases/new-releases-29@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-28.jpg" data-2x="assets/images/new-releases/new-releases-28@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-27.jpg" data-2x="assets/images/new-releases/new-releases-27@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-26.jpg" data-2x="assets/images/new-releases/new-releases-26@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-25.jpg" data-2x="assets/images/new-releases/new-releases-25@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-24.jpg" data-2x="assets/images/new-releases/new-releases-24@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-23.jpg" data-2x="assets/images/new-releases/new-releases-23@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-22.jpg" data-2x="assets/images/new-releases/new-releases-22@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-21.jpg" data-2x="assets/images/new-releases/new-releases-21@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-20.jpg" data-2x="assets/images/new-releases/new-releases-20@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-19.jpg" data-2x="assets/images/new-releases/new-releases-19@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-18.jpg" data-2x="assets/images/new-releases/new-releases-18@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="music-img-box mb-e-30 mb-e-lg-40">
                                            <div class="img-box box-rounded-sm">
                                                <img class="retina" src="assets/images/new-releases/new-releases-17.jpg" data-2x="assets/images/new-releases/new-releases-17@2x.jpg"
                                                    alt=""/>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn">
                                                            <i class="play-icon"></i>
                                                        </span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle">
                                                            <span class="adonis-icon icon-4x">
                                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title">
                                                <a href="#">Roll n Peace Remix</a>
                                            </h6>
                                            <p class="sub-title category">
                                                <a href="#">Imagine</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="search-content-artists" role="tabpanel" aria-labelledby="search-tab-artists">
                            </div>
                            <div class="tab-pane fade" id="search-content-playlists" role="tabpanel" aria-labelledby="search-tab-playlists">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <script src="assets/vendors/jquery/jquery.min.js"></script>
            <script src="assets/vendors/bootstrap/js/popper.min.js"></script>
            <script src="assets/vendors/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/vendors/imagesloaded/imagesloaded.pkgd.min.js"></script>
            <script src="assets/vendors/jplayer/jquery.jplayer.min.js"></script>
            <script src="assets/vendors/jplayer/jplayer.playlist.js"></script>
            <script src="assets/vendors/owl/js/owl.carousel.min.js"></script>
            <script src="assets/vendors/anime/anime.min.js"></script>
            <script src="assets/vendors/perfect-scrollbar/js/perfect-scrollbar.min.js"></script>
            <script src="assets/vendors/masonry/masonry.pkgd.min.js"></script>
            <script src="assets/vendors/history/jquery.history.js"></script>
            <script src="assets/js/bootstrap-hover-menu.js"></script>
            <script src="assets/js/dropdown-menu.js"></script>
            
            <script src="assets/js/bootstrap-hover-menu.js"></script>
            <script src="assets/js/player.js"></script>
            <script src="assets/js/viewport.js"></script>
            <script src="assets/js/effects.js"></script>
            <script src="assets/js/dropdown-menu.js"></script>
            <script src="assets/js/app.js"></script>
        
        </body>
        
        </html>
    )
  }
}