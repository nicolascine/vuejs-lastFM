<template lang="pug">
    .col-md-8
      h1 lastVueFM
      select(v-model="selectedCountry")
        option(v-for="country in countries" v-bind:value="country.value") {{ country.name }}
      loader(v-show="loading")
      artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>
import Artist from './Artist.vue'
import Loader from './Loader.vue'
import getArtists from '../../api'

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

</style>