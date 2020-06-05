<template>
  <div class="readBlog">
    <el-row :gutter="20">
      <el-col :span="6" v-if="isSelf == false">
        <el-card class="box-card">
          <el-row>
            <el-avatar class="head" size="large" :src="circleUrl"></el-avatar>
          </el-row>
          <span>{{ authorName }}</span><br>
          <span>关注：{{ followers }} | 粉丝：{{ noticers }}</span>
          <el-row>
            <el-button icon="el-icon-plus" type="success" v-if="isFollowed == false" @click="follow" round>关注</el-button>
            <div v-else>
              <el-button icon="el-icon-check" type="info" round @click="cancelFollow">取消关注</el-button>
              <el-button type="primary" @click="toSendMessage" round>发送私信</el-button>
            </div>
          </el-row>
        </el-card>
      </el-col>

      <el-col :span="blogSpan">
        <el-card class="blog-box-card">
          <el-row>
            <h3>
              {{ title }}
              <el-button icon="el-icon-star-off" round v-if="isPraise==false" @click="Praise">{{ praise }}</el-button>
              <el-button icon="el-icon-star-on" round v-else @click="cancelPraise">已点赞{{ praise }}</el-button>
            </h3>
          </el-row>
        </el-card>
        <el-divider></el-divider>
        <mavon-editor
        :value="blogContent"
        :subfield = "false"
        :defaultOpen = "'preview'"
        :toolbarsFlag = "false"
        :editable="false"
        :scrollStyle="true"
        :ishljs = "true"
        ></mavon-editor>
      </el-col>
    </el-row>
    <el-divider>博客评论</el-divider>

    <el-card class="box-card-comment">
      <div slot="header">
        <el-row :gutter="20">
          <el-col :span="21">
            <el-input v-model="newComment" placeholder="请输入内容" ></el-input>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" @click="upComment" plain>提交评论</el-button>
          </el-col>
        </el-row>
      </div>
      <div v-for="(item,i) in comment" :key="i" class="comment">
        {{ item.userId + ':   ' + item.content }}
        <el-divider></el-divider>
      </div>
    </el-card>
  </div>
</template>

<script>
import { queryOneBlog, countPraise, insertPraise, deletePraise, selectCommentByBlogId, insertComment } from '@/api/blog'
import { selectFollowers, selectNoticers, insertFollow } from '@/api/user'
import { getToken } from '@/utils/token'
export default {
  data(){
    return{
      isSelf: false,
      blogSpan: 18,
      followers: 0,
      noticers: 0,
      isFollowed: false,

      blogId:'',
      title: '',
      blogContent: '',
      authorId: '',
      authorName: '',

      isPraise: false,
      praise: 0,
      comment: [],
      newComment: '',

      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },

  created(){
    this.blogId = this.$route.params.id
    queryOneBlog(this.$route.params.id).then(res => {
      if(res.status == 200){
        this.title = res.data.title
        this.blogContent = res.data.content
        this.authorId = res.data.userId
        this.authorName = res.data.userName
        if(getToken() != undefined && getToken() == res.data.userId ){
          this.isSelf = true
          this.blogSpan = 24
        }
        selectFollowers(this.authorId).then(res => {
          if(res.status == 200){
            this.followers = res.data.length
          }
        })
        selectNoticers(this.authorId).then(res => {
          if(res.status == 200){
            this.noticers = res.data.length
            var noticer = res.data
            if(noticer.indexOf(getToken())!=-1){
              this.isFollowed = true
            }
          }
        })
        countPraise(this.$route.params.id).then(res => {
          if(res.status == 200){
            this.praise = res.data
          }
        })
      }
    })

    selectCommentByBlogId(this.blogId).then(res => {
      if(res.status == 200) {
        this.comment = res.data
      }
    })


  },

  methods:{
    hasPraise(){
      if(getToken() != undefined) {
      }
    },

    Praise() {
      if(getToken() != undefined) {
        insertPraise(this.blogId, getToken()).then(res => {
          if(res.status == 200){
            this.praise = this.praise + 1
            this.isPraise = true
          }
        })
      }
      else{
        this.$message({
          message: '请先登录',
          type: 'error'
        })
      }
    },

    cancelPraise(){
      deletePraise(this.blogId, getToken()).then(res => {
        if(res.status == 200){
          this.praise = this.praise - 1
          this. isPraise = false
        }
      })
    },

    upComment(){
      if(getToken() != undefined) {
        if(this.newComment == ''){
          this.$message({
            message: '评论不能为空',
            type: 'error'
          })
        }
        else {
          var data = new FormData()
          data.append('userId',getToken())
          data.append('blogId',this.blogId)
          data.append('content',this.newComment)
          insertComment(data).then(res => {
            if(res.status == 200){
              this.$message({
                message: '发表成功',
                type: 'success'
              })
              selectCommentByBlogId(this.blogId).then(res => {
                if(res.status == 200) {
                  this.comment = res.data
                }
              })
            }
          })
        }
      }
      else{
        this.$message({
          message: '请先登录',
          type: 'error'
        })
      }
    },

    follow(){
      var data = new FormData()
      data.append('noticer',getToken());
      data.append('follower',this.authorId)
      insertFollow(data).then(res => {
        if(res.status == 200) {
          this.$message({
            message: '关注成功',
            type: 'success'
          })
          this.isFollowed = true
          this.noticers +=1
        }
      })
    },

    cancelFollow(){

    },

    toSendMessage(){
      this.$router.push({ name: 'Message', params:{ userId: this.authorId } })
    }
  }
}
</script>

<style>
  .box-card {
    text-align: center;
  }
  
  .box-card-comment{
    margin: 0 auto;
    width: 100%;
  }
</style>