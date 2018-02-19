<template>
  <button @click=a()></button>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  methods: {
    a () {
      this.$api.getSomething('test').then(
        this.$mdui.dialog({
          title: 'title',
          content: 'content',
          buttons: [
            {
              text: '取消'
            },
            {
              text: '确认'
            }
          ]
        })
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
