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
  }
}
</script>
<style lang="less" scoped>

</style>
