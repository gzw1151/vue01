<template>
  <div>
    <h2>news组件</h2>
    <div class="nav">
      <router-link :to="{ path: '/news/newDetail', query: { name: '老陈' } }"
        >新闻1</router-link
      >
      <router-link :to="{ name: 'Detail', params: { name: '命名路由' } }"
        >新闻2命名路由</router-link
      >

      <router-link to="/news/newDetail/001">新闻1</router-link>
      <router-link to="/news/newDetail/002">新闻2</router-link>
      <router-link to="/news/newDetail/003">新闻3</router-link>
      <router-link to="/news/newDetail/004">新闻4</router-link>
      <router-link to="/news/newDetail/005">新闻5</router-link>
      <router-link :to="`/news/newDetail/${uid}`">新闻6</router-link>
      <router-link to="/news/newDetail/007/071">新闻7</router-link>

      <!-- 编程式路由 -->
      <button @click="goDetail">点击切换路由</button>
    </div>
    <!-- //路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      uid: "006",
    };
  },
  mounted() {
    // this.$router.push({
    //   name: "home",
    // });
  },
  methods: {
    goDetail() {
      this.$router.push("/news/newDetail");

      // 使用编程式路的是,跳转路径通过path配置的是，参数是通过query传递的
      // 接受参数  this.$route.query
      // query 传递的参数 和get 一样 会拼接在url路径后面

      // params 可以命名式路由匹配

      // 同名命名路由来进行传递的时候，query可以传值 params也可以传值

      // this.$router.push({
      //   path: "/news/newDetail",
      //   query: {
      //     name: "老陈",
      //   },
      // });

      // push 跳转到路由 每一步都记录在了history中
      // this.$router.push({
      //   name: "Detail",
      //   params: {
      //     name: "老陈",
      //   },
      // });

      // replace

      // this.$router.replace({
      //   name: "Detail",
      //   query: {
      //     name: "replace",
      //   },
      // });
      // -1 后退一步  后退到上一个组件

      // 1 前进一个组件  必须得有历史记录
      // 如果后退的步长  超过了历史记录记载的步长 则什么操作也不执行
      // this.$router.go(-200);
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.nav {
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    font-weight: 700;
  }

  // .router-link-active {
  //   color: red;
  // }
}
</style>
