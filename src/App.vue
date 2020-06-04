<template>
  <div id="app">
    <vue-canvas-nest :config="{color:'255,255,255', count: 200}"></vue-canvas-nest>
    <el-row id="nav">
      <el-row class="nav_bar">
        <el-col :span="2">
          <H2 id="hsdn">HSDN</H2>
        </el-col>

        <el-col :span="14">
          <el-menu
          :default-active="defaultActive"
          class="el-menu-demo"
          mode="horizontal"
          router
          background-color="rgba(31, 46, 63, 1)"
          text-color="#fff"
          active-text-color="#ffd04b">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/blog">博文</el-menu-item>
            <el-menu-item index="/download" v-if="ifLogin">下载</el-menu-item>
            <el-menu-item index="/examine" v-if="isAdmin">审核</el-menu-item>
            <el-menu-item index="/notice" v-if="isAdmin">公告</el-menu-item>
          </el-menu>
        </el-col>

        <el-col :span="8">
          <el-row style="padding:10px 0;">
            <el-col :span="12">
              <el-input placeholder="请输入内容" v-model="input">
                <el-button slot="append" icon="el-icon-search" @click="toSearch"></el-button>
              </el-input>
            </el-col>

            <el-col :span="12" >
              <div v-if="ifLogin">
                <el-button icon="el-icon-bell" circle @click="toMessage()"></el-button>
                <el-button icon="el-icon-edit" circle @click="toWriteBlog()"></el-button>
              </div>
              <div v-else>
                <el-button type="success" @click="dialogVisible = true">登录</el-button>
                <el-button type="warning">注册</el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
    
    <el-row>
      <router-view/>
    </el-row>

    <el-dialog
      title="登录HSDN"
      :visible.sync="dialogVisible"
      width="30%">
      <el-form ref="loginForm" :model="loginForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleLogin()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { Login } from '@/api/login'
import { getToken, setToken, getIdentityToken, setIdentityToken } from '@/utils/token'
import vueCanvasNest from 'vue-canvas-nest'
export default {
  components: { vueCanvasNest },
  data() {
    return {
      isAdmin: false,

      defaultActive: '/',

      input: '',

      ifLogin: false,

      dialogVisible: false,
      loginForm:{
        username:'',
        password:''
      }
    }
  },

  watch:{
    $route(now,before){
      this.defaultActive = now.path
    }
  },

  created(){
    if(getToken() != undefined){
      this.ifLogin = true;
    }
    else{
      // this.ifLogin = true; // 测试用
      this.ifLogin = false; //正式
    }

    if(getIdentityToken() != undefined){
      this.isAdmin = getIdentityToken();
    }

  },

  mounted(){
    document.querySelector('body').setAttribute('style', 'background-color:	#285e8e')
  },

  methods:{
    toWriteBlog() {
      this.defaultActive='/writeBlog'
      this.$router.push({ path: '/writeBlog' })
    },

    toMessage() {
      this.$router.push({ path: '/message' })
    },

    toSearch(){
      if(this.input!=''){
        this.$router.push({
        path: '/search/'+this.input
      })
      }
    },

    handleLogin() {
      var text = '{"userId":"'+this.loginForm.username+'","password":"'+this.loginForm.password+'"}'
      var data = JSON.parse(text)
      console.log(data)
      this.confirmLoading = true;
      Login(data).then(res => {
        console.log(res)
        if(res.status == 200) {
          this.$message({
            message: '登录成功',
            type: 'success'
          });
          this.dialogVisible=false;
          this.ifLogin = true;
          setToken(this.loginForm.username);
          setIdentityToken(res.data.type)
          this.isAdmin = res.data.type;
        }
        else {
          this.$message({
            message:res.msg || '未知错误',
            type: 'error'
          })
        }
      })
      this.confirmLoading =  false
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
  width:100%;
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
  height: 60px;
  background-color: rgba(31, 46, 63, 1);
  color: white;
  padding: auto;
  margin: auto;
}
</style>
