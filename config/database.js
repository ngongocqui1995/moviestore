function __get_Projection(title, episodes, coverImage, key, contentImages,
categories, fansub, countries, startMusicName, finishMusicName, videos, 
_id, part,episodesCurrent, content, releaseYear, otherTitle, view, rank, group, 
indexGroup, producer, imageMain, followers, filmActor, filmDirector, keyClass,
page, status, author, linkTrailer, createdAt, updatedAt, __v){

    let projection = {}

    if(Number(videos) === 1){
        projection = {
            "videos.episodes.img": 1,
            "videos.episodes.key": 1,
            "videos.episodes.numberEpisodes": 1,
            "videos.episodes.timeASet": 1,
            "videos.episodes.title": 1,
            "videos.episodes.url": 1,
        }
    }

    if(Number(title) === 1){
        projection.title = 1
    }

    if(Number(episodes) === 1){
        projection.episodes = 1
    }

    if(Number(coverImage) === 1){
        projection.coverImage = 1
    }

    if(Number(key) === 1){
        projection.key = 1
    }

    if(Number(contentImages) === 1){
        projection.contentImages = 1
    }

    if(Number(categories) === 1){
        projection.categories = 1
    }

    if(Number(fansub) === 1){
        projection.fansub = 1
    }

    if(Number(countries) === 1){
        projection.countries = 1
    }

    if(Number(startMusicName) === 1){
        projection.startMusicName = 1
    }

    if(Number(finishMusicName) === 1){
        projection.finishMusicName = 1
    }

    if(Number(_id) === 0){
        projection._id = 0
    }

    if(Number(part) === 1){
        projection.part = 1
    }

    if(Number(episodesCurrent) === 1){
        projection.episodesCurrent = 1
    }

    if(Number(content) === 1){
        projection.content = 1
    }

    if(Number(releaseYear) === 1){
        projection.releaseYear = 1
    }

    if(Number(otherTitle) === 1){
        projection.otherTitle = 1
    }

    if(Number(view) === 1){
        projection.view = 1
    }

    if(Number(rank) === 1){
        projection.rank = 1
    }

    if(Number(group) === 1){
        projection.group = 1
    }

    if(Number(indexGroup) === 1){
        projection.indexGroup = 1
    }

    if(Number(producer) === 1){
        projection.producer = 1
    }

    if(Number(imageMain) === 1){
        projection.imageMain = 1
    }

    if(Number(followers) === 1){
        projection.followers = 1
    }

    if(Number(filmActor) === 1){
        projection.filmActor = 1
    }

    if(Number(filmDirector) === 1){
        projection.filmDirector = 1
    }

    if(Number(keyClass) === 1){
        projection.keyClass = 1
    }

    if(Number(page) === 1){
        projection.page = 1
    }

    if(Number(status) === 1){
        projection.status = 1
    }

    if(Number(author) === 1){
        projection.author = 1
    }

    if(Number(linkTrailer) === 1){
        projection.linkTrailer = 1
    }

    if(Number(createdAt) === 1){
        projection.createdAt = 1
    }

    if(Number(updatedAt) === 1){
        projection.updatedAt = 1
    }

    if(Number(__v) === 1){
        projection.__v = 1
    }

    return projection
}

export {
    __get_Projection
}