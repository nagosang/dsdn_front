<template>
  <div class="recommend">
    <!-- 分区1 -->
    <el-row type="flex" class="row" justify="space-between">
      <el-col :span="6">
        <h1 style="color: white;">分区1</h1>
      </el-col>
      <el-col :span="3">
        <el-button round class="btn" @click="goToArea(1)">进入分区</el-button>
      </el-col>
    </el-row>
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

    <!-- 分区2 -->
    <el-row type="flex" class="row" justify="space-between">
      <el-col :span="6">
        <h1 style="color: white;">分区2</h1>
      </el-col>
      <el-col :span="3">
        <el-button round class="btn" @click="goToArea(2)">进入分区</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-badge :value="praise4" class="item" v-if="blogId4!=''">
          <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ title4 }}</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="readBlog(blogId4)">阅读全文</el-button>
            </div>
            <div>
              <span>{{ content4 }}</span>
            </div>
          </el-card>
        </el-badge>
      </el-col>

      <el-col :span="8">
        <el-badge :value="praise5" class="item" v-if="blogId5!=''">
          <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ title5 }}</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="readBlog(blogId5)">阅读全文</el-button>
            </div>
            <div>
              <span>{{ content5 }}</span>
          </div>
          </el-card>
        </el-badge>
      </el-col>

      <el-col :span="8">
        <el-badge :value="praise6" class="item" v-if="blogId6!=''">
          <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ title6 }}</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="readBlog(blogId6)">阅读全文</el-button>
            </div>
            <div>
                <span>{{ content6 }}</span>
            </div>
          </el-card>
        </el-badge>
      </el-col>
    </el-row>

    <!-- 分区3 -->
    <el-row type="flex" class="row" justify="space-between">
      <el-col :span="6">
        <h1 style="color: white;">分区3</h1>
      </el-col>
      <el-col :span="3">
        <el-button round class="btn" @click="goToArea(3)">进入分区</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-badge :value="praise7" class="item" v-if="blogId7!=''">
          <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ title7 }}</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="readBlog(blogId7)">阅读全文</el-button>
            </div>
            <div>
              <span>{{ content7 }}</span>
            </div>
          </el-card>
        </el-badge>
      </el-col>

      <el-col :span="8">
        <el-badge :value="praise8" class="item" v-if="blogId8!=''">
          <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ title8 }}</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="readBlog(blogId8)">阅读全文</el-button>
            </div>
            <div>
              <span>{{ content8 }}</span>
          </div>
          </el-card>
        </el-badge>
      </el-col>

      <el-col :span="8">
        <el-badge :value="praise9" class="item" v-if="blogId9!=''">
          <el-card shadow="hover" class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ title9 }}</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="readBlog(blogId9)">阅读全文</el-button>
            </div>
            <div>
                <span>{{ content9 }}</span>
            </div>
          </el-card>
        </el-badge>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { getMost3ByType } from '@/api/blog'
export default {
  name: 'recommend',
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
      blogId4:'',
      title4: '',
      content4: '',
      praise4: 0,
      blogId5:'',
      title5: '',
      content5: '',
      praise5: 0,
      blogId6:'',
      title6: '',
      content6: '',
      praise6: 0,
      blogId7:'',
      title7: '',
      content7: '',
      praise7: 0,
      blogId8:'',
      title8: '',
      content8: '',
      praise8: 0,
      blogId9:'',
      title9: '',
      content9: '',
      praise9: 0
    }
  },

  created(){
    getMost3ByType(1).then(res => {
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

    getMost3ByType(2).then(res => {
      if(res.status == 200){
        if(res.data.length>=1) {
          this.blogId4 = res.data[0].blogId
          this.title4 = res.data[0].title
          this.content4 = res.data[0].content
          this.praise4 = res.data[0].praiseCount
        }
        
        if(res.data.length>=2) {
          this.blogId5 = res.data[1].blogId
          this.title5 = res.data[1].title
          this.content5 = res.data[1].content
          this.praise5 = res.data[1].praiseCount
        }

        if(res.data.length>=3) {
          this.blogId6 = res.data[2].blogId
          this.title6 = res.data[2].title
          this.content6 = res.data[2].content
          this.praise6 = res.data[2].praiseCount
        }
      }
    })

    getMost3ByType(3).then(res => {
      if(res.data.length>=1){
        if(res.data[0].blogId) {
          this.blogId7 = res.data[0].blogId
          this.title7 = res.data[0].title
          this.content7 = res.data[0].content
          this.praise7 = res.data[0].praiseCount
        }
        
        if(res.data.length>=2) {
          this.blogId8 = res.data[1].blogId
          this.title8 = res.data[1].title
          this.content8 = res.data[1].content
          this.praise8 = res.data[1].praiseCount
        }

        if(res.data.length>=3) {
          this.blogId9 = res.data[2].blogId
          this.title9 = res.data[2].title
          this.content9 = res.data[2].content
          this.praise9 = res.data[2].praiseCount
        }
      }
    })
  },

  methods: {
    goToArea(area){
      this.$emit('go_to_area', area)
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

</style>