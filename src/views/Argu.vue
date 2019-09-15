<template>
  <div>
    <!-- I am Argu, I am {{ $route.params.name }} -->
    {{ name }}
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'lison'
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
  }
}
</script>
<style lang="less" scoped>

</style>
