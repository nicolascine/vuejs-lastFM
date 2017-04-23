<template lang="pug">
    .col-md-6
      h1 lastVueFM
      select.custom-select(v-model="selectedCountry")
        option(v-for="country in countries" v-bind:value="country.value") {{ country.name }}
      loader(v-show="loading")
      .main__content
        artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>
import Artist from './Artist.vue'
import Loader from './Loader.vue'
import { getArtists } from '../../api'

export default {
  name: 'mainContent',
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
    refreshArtists() {
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
  mounted() {
    this.refreshArtists()
  },
  watch: {
    selectedCountry() {
      this.refreshArtists()
    }
  }
}
</script>

<style lang="stylus">
  .left__sidebar, .right__sidebar
    font-family 'Open Sans', sans-serif
    font-size 13px
  .main__content
    width 100%
</style>