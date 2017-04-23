<template lang="pug">
    .card
        img.card-img-top.img-fluid(:src="artist.image[2]['#text']")
        .card-block
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
    .band__name 
        font-size 0.9em
</style>