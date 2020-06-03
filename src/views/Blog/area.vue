<template>
  <div>
    <el-row class="head">
      <el-page-header @back="goBack" :content="title">
      </el-page-header>
    </el-row>

    <el-row>
      <el-card v-for="(item,i) in blogList" :key="i" class="box-card">
        <div slot="header" class="clearfix">
          <span>{{ item.title }}</span>
          <el-button style="float: right; padding: 3px 0" type="text"  @click="readBlog(item.blogId)">阅读全文</el-button>
        </div>
        <div>
          {{ item.content }}
        </div>
      </el-card>
    </el-row>

    <el-row class="page">
      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getList"
      />
    </el-row>

    <el-row class="head">
      <el-page-header @back="goBack" :content="title">
      </el-page-header>
    </el-row>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { pageBlogByType } from '@/api/blog'
export default {
  name: 'Area',
  props: ['message'],

  components: { Pagination },

  data(){
    return{
      title: 'test',
      listQuery: {
        page: 1,
        limit: 10
      },

      blogList:[],

      total: 100,
      list:[1,2,3,4,5,6]
    }
  },

  created(){
    if(this.message == 1){
      this.title = '分区1'
    }
    else if(this.message == 2){
      this.title = '分区2'
    }
    else{
      this.title = '分区3'
    }

    this.getList()
  },

  mounted(){
    document.querySelector('.pagination-container').setAttribute('style', 'background-color:	#285e8e')
    document.querySelector('.el-pagination__total').setAttribute('style', 'color:	white')
    document.querySelector('.el-pagination__jump').setAttribute('style', 'color:	white')
  },

  methods: {
    goBack() {
      this.$emit('go_back')
    },

    getList(){
      var text = '{"page":"'+this.listQuery.page+'","size":"'+this.listQuery.limit+'","type":"' + this.message + '"}'
      var data = JSON.parse(text)
      pageBlogByType(data).then(res => {
        console.log(res)
        if(res.status == 200){
          this.total = res.totalCount
          this.blogList = res.data
        }
        else{
          this.$message({
            message: response.msg || '未知错误',
            type: 'warning'
          });
        }
      })
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
  .head{
    margin: 10px;
    color: white;
  }
  
  .el-page-header__content{
    color: white;
  }
  .page{
    text-align: center;
    margin: 20px;
  }
  .pagination-container{
    background-color: #285e8e;
  }
  .box-card {
    height: 200px;
  }
</style>