import config from './config'

const { apiKey } = config
const GET_TOP_ARTISTS = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`
const GET_ARTIST_INFO = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=:artist&api_key=${apiKey}&format=json`

function getArtists(country) {
    const url = GET_TOP_ARTISTS.replace(':country', country)
    return fetch(url)
            .then(res => res.json())
            .then(json => json.topartists.artist)
}

function getArtistInfo(artist) {
    const url = GET_ARTIST_INFO.replace(':artist', artist)
    return fetch(url)
            .then(res => res.json())
            .then(json => json.artist)
}

export { getArtists, getArtistInfo }