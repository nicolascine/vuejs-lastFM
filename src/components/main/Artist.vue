<template lang="pug">
    .artist__card(@click="getArtistInfo(artist.name)")
        .img__artist
            img.img-responsive(:src="artist.image[2]['#text']")
        .artist__description
            h3.band__name: a(:href="artist.url" target="_blank") {{ artist.name }}
</template>

<script>
import { getArtistInfo } from '../../api'

export default {
    name: 'artist',
    props: ['artist'],
    methods: {
      getArtistInfo(artist) {
        getArtistInfo(artist)
          .then(function(info) {
            console.log(info)
          })
      }
    }
}
</script>

<style lang="stylus">
    .artist__card 
        display inline-block
        padding-left 15px
        margin-bottom 20px
        position relative
        &:after
            content " "
            display none
            position absolute
            top 35%
            left 50%
            margin 0 auto
            border-style solid
            cursor pointer
            border-width 12.5px 0 12.5px 20px
            border-color transparent transparent transparent rgba(255, 255, 255, 1)
        &:hover
            img
                opacity 0.4
                cursor pointer
            &:after
                display block
    .img__artist
        background-color black
    .artist__description
        text-align left
        padding 10px
    .band__name
        font-size 0.9em
        a
            font-family 'Open Sans', sans-serif
            font-weight 400
            color #222222
            text-decoration none
</style>