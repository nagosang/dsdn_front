<template>
  <div id="app">
    <div id="nav">
      <el-row class="nav_bar">
        <el-col :span="2">
          <H2 id="hsdn">HSDN</H2>
        </el-col>

        <el-col :span="14">
          <el-menu
          default-active="/"
          class="el-menu-demo"
          mode="horizontal"
          router
          background-color="rgba(31, 46, 63, 1)"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/blog">博文</el-menu-item>
            <el-menu-item index="/download">下载</el-menu-item>
          </el-menu>
        </el-col>

        <el-col :span="8">
          <el-row>
            <el-col :span="12">
              <el-input placeholder="请输入内容" v-model="input">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>

            <el-col :span="12">
              <div v-if="haveLogin()">
                <el-button icon="el-icon-bell" circle></el-button>
                <el-button icon="el-icon-edit" circle></el-button>
              </div>
              <div v-else>
                <el-button type="success">登录</el-button>
                <el-button type="warning">注册</el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
    }
  },

  methods:{
    haveLogin() {
      return false;
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 00px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav_bar{
  text-align: center;
  background-color: rgba(31, 46, 63, 1);
  color: white;
  padding: auto;
  margin: auto;
}
</style>
