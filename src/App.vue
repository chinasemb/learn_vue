<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-bind:to="{ name: 'about' }">About</router-link>
    </div>
    <transition-group :name='routerTransition' key='group'>
      <router-view key='default' />
      <router-view key='email' name='email'/>
      <router-view key='tel' name='tel'/>
    </transition-group>
  </div>
</template>

<script>
  export default {
    data () {
    return {
      routerTransition: ''
    }
  },
  watch: {
    '$route' (to) {
      to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
    }
  }
  }
</script>

<style lang="less">
.router-enter {
  // 页面即将要显示，还没显示
  opacity: 0;
}
.router-enter-active {
  // 从没有到有的效果
  transition: opacity 1s ease;
}
.router-enter-to {
  // 组件完全显示之后的状态
  opacity: 1;
}
.router-leave {
  // 页面即将要离开，还没离开
  opacity: 1;
}
.router-leave-active {
  // 从有到没有的效果
  transition: opacity 1s ease;
}
.router-leave-to {
  // 组件完全离开之后的状态
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
