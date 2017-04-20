<template lang="pug">
  #app
    img(src='./assets/logo.png')
    h1 lastVueFM
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.value") {{ country.name }}
    loader(v-show="loading")
    ul
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>
import Artist from './components/Artist.vue'
import Loader from './components/Loader.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [
        { name: 'Argentina', value: 'argentina' },
        { name: 'Chile', value: 'chile' },
        { name: 'Colombia', value: 'colombia' }
      ],
      selectedCountry: 'argentina',
      loading: true
    }
  },
  components: {
    Artist,
    Loader
  },
  methods: {
    refreshArtists(){
      const _this = this
      _this.loading = true
      _this.artists = []
      getArtists(this.selectedCountry)
        .then(function(artists) {
          _this.artists = artists
          _this.loading = false
        })
    }
  },
  mounted: function() {
    this.refreshArtists()
  },
  watch: {
    selectedCountry: function() {
      this.refreshArtists()
    }
  }
}
</script>

<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin-top 60px

</style>
