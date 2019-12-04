<template>
  <el-container class="wrapper">
    <el-header>
      <div class='title'>XXXSDK下载中心</div>
      <el-menu default-active="sdk" class="el-menu-demo" mode="horizontal"
       @select="handleSelect" background-color="#fff" router="true"
       text-color="#303133" active-text-color="#0d70ff">
        <el-menu-item index="sdk">sdk下载</el-menu-item>
        <el-menu-item index="changelog">修改日志</el-menu-item>
      </el-menu>
    </el-header>
    <el-container class="contentWrapper">
        <router-view></router-view>
    </el-container>
  </el-container>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
};
</script>
<style>
body {
  background-color: #f5f5f5;
  margin: 0;
  height: 100vh;
}
</style>
<style scoped>
.wrapper {
  height: 100%;
}
.el-header {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
}

.el-header .title {
  flex: 3;
}

.el-menu-demo {
  /* display: flex; */
  flex: 7;
}

.contentWrapper {
  margin: 20px 50px;
  height: 100%;
}


.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
ul {
  margin: 0;
  padding: 0;
}
ul > li {
  list-style: none;
}


h2{
  margin: 29px 0 20px;
    font-size: 20px;
    line-height: 1.5;
}
ol{
  margin-bottom: 24px;
    padding-left: 24px;
}
ol > li {
  list-style-type: decimal;
  position: relative;
    margin: 10px 0;
    color: #666;
    font-size: 14px;
    line-height: 24px;
}
</style>
