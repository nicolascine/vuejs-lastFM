<template lang="pug">
    .artist__card
        img.img-responsive(:src="artist.image[2]['#text']")
        .artist__description
            h3.band__name: a(:href="artist.url" target="_blank") {{ artist.name }}
</template>

<script>
export default {
    name: 'artist',
    props: ['artist']
}
</script>

<style lang="stylus" scoped>
    a
        color #ff7f38
        text-decoration none
    .artist__card 
        display inline-block
        padding-left 15px
        margin-bottom 20px
    .artist__description
        text-align left
        padding 10px
    .band__name
        font-size 0.9em
</style>