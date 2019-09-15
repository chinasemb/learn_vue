<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')"><h3>跳转到Parent页面</h3></button>
    <button @click="handleClick('replace')"><h3>替换到Parent页面</h3></button>
    <h1>{{ food }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter(to, from, next) {
    // console.log(to.name)
    // console.log(from.name)
    next(vm=>{
      console.log(vm)
    })
  },
  // beforeRouteLeave(to, from, next) {
  //   const leave = confirm('您确定离开吗？')
  //   if(leave) next()
  //   else next(false)
  // },
  methods: {
    handleClick (type) {
      // this.router就是在Vue 实例中注册的router 实例对象,下面有很多方法.go === back
      if  (type === 'back') this.$router.go(-1)
      else if (type === 'push') {
        const name = 'lison19'
        this.$router.push({
          path: `/argu/${ name }`
          // query: {
          //   alias_name: 'lison'
          // }
        })
      }
      // push 会在路由历史(栈)里,新加入一个路由信息,push 里面是对应页面的路径.
      // '/parent' === { name: parent }
      else if (type === 'replace') this.$router.replace('/parent')
      // replace 不会改变路由历史的 各个路由信息的顺序.比如: 1.2.3.4.5的顺序不会改变
      // 而 push 跳转到会在路由历史里加入一条路由信息: 1.2. 2-1 .3.4,其中2-1是push 进去 的.
    }
  }
}
</script>
