<template>
  <div class="hello">
    <el-container>
      <el-aside width="100px">
        <el-menu :default-active="$route.path" router=true>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/demo1">测试1</el-menu-item>
          <el-menu-item index="/demo2">测试2</el-menu-item>
          <el-menu-item index="/user/zhangsan/123">用户</el-menu-item>
        </el-menu>
      </el-aside>
    <el-main>
        <el-header>
         <h1>{{ msg }}</h1>
        </el-header>
        <RouterView />
    </el-main>
    </el-container>
    <el-footer>
      版权所有,请勿转载
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
