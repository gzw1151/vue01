<template>
  <div class="detailBox">
    <h5>新闻详情页</h5>
    <p>取参数'query:'：{{ this.$route.query }}</p>
    <p>取参数params:：{{ this.$route.params }}</p>
    <!-- <p>取参数：{{ this.$route.params.newId }}</p> -->
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  methods: {},
  components: {},
  mounted() {
    console.log(this);
    console.log(this.$route.query.name);

    // axios('http://127.0.0.1:5500?name='+this.$route.query.name)
  },
};
</script>

<style scoped lang="less">
.detailBox {
  color: rgb(243, 146, 18);
}
</style>
