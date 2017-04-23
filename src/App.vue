<template lang="pug">
  .row
    left-sidebar
    main-content
    right-sidebar
</template>

<script>
//Layout components
import LeftSidebar from './components/LeftSidebar.vue'
import MainContent from './components/main/MainContent.vue'
import RightSidebar from './components/RightSidebar.vue'

export default {
  name: 'app',
  components: {
    LeftSidebar,
    MainContent,
    RightSidebar
  }
}
</script>

<style lang="stylus">
</style>
