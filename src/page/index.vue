<template>
  <div>
    <h1 class="logo">cnodejs Api Test</h1>
    <ul class="list">
      <li v-for="item in lists" v-text="item.title"></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [1,]
    }
  },
  created () {
    // 组件创建完后获取数据，这个就是VUE生命周期的创建完成周期
    this.get_data()
  },
  methods: {
    get_data: function(params) {
      var that = this;
      if (!params) params = {}
      // 我们这里用全局绑定的 $api 方法来获取数据，方便吧~
      this.$api.get('topics', params, function(r) {
        that.lists = r.data
      })
    }
  }
}
</script>
<style>
   @import "../style/base/__index.css"; /*引入公共样式*/
</style>
