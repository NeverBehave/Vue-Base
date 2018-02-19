<template>
  <div id="app">
    <headers></headers>
    <div class="mdu i-container">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    <footers></footers>
    <top-button></top-button>
  </div>
</template>

<script>
import Headers from './components/Headers'
import TopButton from './components/TopButton'
import Footers from './components/Footers'
import Drawer from './components/Drawer'

export default {
  name: 'App',
  components: {
    Headers,
    Footers,
    TopButton,
  },
  methods: {
    goBack: function () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    goForth: function () {
      this.$router.go(1)
    }
  }
}
</script>

<style>
</style>
