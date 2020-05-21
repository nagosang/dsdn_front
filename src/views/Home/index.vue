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
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>{{ title1 }}</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div>
            <el-image
            style="height: 150px"
            :src="url"
            :fit="fit"></el-image>
            <span>{{ content1 }}</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>{{ title2 }}</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div>
            <el-image
            style="height: 150px"
            :src="url"
            :fit="fit"></el-image>
            <span>{{ content2 }}</span>
        </div>
        </el-card>
      </el-col>

      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>{{ title3 }}</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div>
              <el-image
              style="height: 150px"
              :src="url"
              :fit="fit"></el-image>
              <span>{{ content3 }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Login } from '@/api/login'

export default {
  name: 'Home',
  data(){
    return{
      title1: 'test',
      content1: 'test content',
      title2: 'test',
      content2: 'test content',
      title3: 'test',
      content3: 'test content',
      fit:'cover',
      url:require('@/assets/test.jpg')
    }
  },
  created(){
  },
  methods:{

  }
};
</script>
