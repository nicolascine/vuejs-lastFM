<template lang="pug">
  li
    h2: a(:href="artist.url" target="_blank") {{ artist.name }}
    img(:src="artist.image[2]['#text']")
</template>

<script>
export default {
    name: 'artist',
    props: ['artist']
}
</script>

<style lang="stylus" scoped>
    li
        display inline-block
        margin 10px
    a
        color #ff7f38
        text-decoration none
</style>