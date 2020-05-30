<template>
  <div class="blog">
    <h1>全区推荐</h1>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-badge :value="praise1" class="item" v-if="blogId1!=''">
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
        <el-badge :value="praise2" class="item" v-if="blogId2!=''">
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
        <el-badge :value="praise3" class="item" v-if="blogId3!=''">
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

    <component :is="component" @go_to_area="enterArea" @go_back="areaBack" v-bind:message="msg"></component>
  </div>
</template>

<script>
import { getMost3, getMost3ByType } from '@/api/blog'
import recommend from '@/views/Blog/recommend'
import Area from '@/views/Blog/area'

export default {
  data(){
    return{
      blogId1:'',
      title1: '',
      content1: '',
      praise1: 0,
      blogId2:'',
      title2: '',
      content2: '',
      praise2: 0,
      blogId3:'',
      title3: '',
      content3: '',
      praise3: 0,

      component: 'recommend',
      
      msg: 0
    }
  },

  components: {
    recommend,
    Area
  },

  created(){
    getMost3().then(res => {
      if(res.status == 200){
        if(res.data.length>=1) {
          this.blogId1 = res.data[0].blogId
          this.title1 = res.data[0].title
          this.content1 = res.data[0].content
          this.praise1 = res.data[0].praiseCount
        }
        
        if(res.data.length>=2) {
          this.blogId2 = res.data[1].blogId
          this.title2 = res.data[1].title
          this.content2 = res.data[1].content
          this.praise2 = res.data[1].praiseCount
        }

        if(res.data.length>=3) {
          this.blogId3 = res.data[2].blogId
          this.title3 = res.data[2].title
          this.content3 = res.data[2].content
          this.praise3 = res.data[2].praiseCount
        }
      }
    })
  },

  methods:{
    enterArea(area) {
      this.msg = area
      this.component = 'Area'
    },

    areaBack() {
      this.component = recommend
    },

    readBlog(blogId){
      this.$router.push({
        path: '/readBlog/'+blogId
      })
    }
  }
}
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

  .row{
    position:relative;
  }

  .btn{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
</style>