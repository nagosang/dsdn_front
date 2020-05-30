<template>
  <div class="home">
    <el-row>
      <el-col :span="24" :offset="4">
        <div class="block" style="width: 1000px; text-align: center;">
          <el-carousel height="350px">
          <el-carousel-item v-for="item in 4" :key="item">
            <el-image
              style="height: 350px"
              :src="url"
              :fit="fit"></el-image>
          </el-carousel-item>
          </el-carousel>
        </div>
      </el-col>
    </el-row>
    
    <H1>推荐博文</H1>
    
    <el-row :gutter="20">
      <el-col :span="8">
        <el-badge :value="praise1" class="item">
          <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ title1 }}</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="readBlog(blogId1)">阅读全文</el-button>
            </div>
            <div>
              <span>{{ content1 }}</span>
            </div>
          </el-card>
        </el-badge>
      </el-col>

      <el-col :span="8">
        <el-badge :value="praise2" class="item">
          <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ title2 }}</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="readBlog(blogId2)">阅读全文</el-button>
            </div>
            <div>
              <span>{{ content2 }}</span>
          </div>
          </el-card>
        </el-badge>
      </el-col>

      <el-col :span="8">
        <el-badge :value="praise3" class="item">
          <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ title3 }}</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="readBlog(blogId3)">阅读全文</el-button>
            </div>
            <div>
                <span>{{ content3 }}</span>
            </div>
          </el-card>
        </el-badge>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getMost3 } from '@/api/blog'

export default {
  name: 'Home',
  data(){
    return{
      blogId1: '',
      title1: 'test',
      content1: 'test content',
      praise1: 0,
      blogId2: '',
      title2: 'test',
      content2: 'test content',
      praise2: 0,
      blogId3: '',
      title3: 'test',
      content3: 'test content',
      praise3: 0,
      fit:'cover',
      url:require('@/assets/test.jpg')
    }
  },
  created(){
    getMost3().then(res => {
      if(res.status == 200){
        this.blogId1 = res.data[0].blogId
        this.title1 = res.data[0].title
        this.content1 = res.data[0].content
        this.praise1 = res.data[0].praiseCount
        
        this.blogId2 = res.data[1].blogId
        this.title2 = res.data[1].title
        this.content2 = res.data[1].content
        this.praise2 = res.data[1].praiseCount

        this.blogId3 = res.data[2].blogId
        this.title3 = res.data[2].title
        this.content3 = res.data[2].content
        this.praise3 = res.data[2].praiseCount
      }
    })
  },
  methods:{
    readBlog(blogId){
      this.$router.push({
        path: '/readBlog/'+blogId
      })
    }
  }
};
</script>
<style>
  .box-card {
    height: 200px;
  }

  .item {
    width: 100%;
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
